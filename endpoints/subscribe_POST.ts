import { schema, OutputType } from "./subscribe_POST.schema";
import superjson from "superjson";
import { db } from "../helpers/db";

export async function handle(request: Request) {
  try {
    const json = superjson.parse(await request.text());
    const result = schema.parse(json);

    await db
      .insertInto("emailSubscribers")
      .values({
        email: result.email,
        source: result.source,
      })
      .onConflict((oc) => oc.columns(["email", "source"]).doNothing())
      .execute();

    return new Response(
      superjson.stringify({
        success: true,
        message: "Successfully subscribed!",
      } satisfies OutputType)
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(superjson.stringify({ error: message }), { status: 400 });
  }
}