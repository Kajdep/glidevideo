import React from "react";
import { Helmet } from "react-helmet";
import { ProductLayout } from "../components/ProductLayout";
import { ProductStoreActions } from "../components/ProductStoreActions";
import { ProductVideo } from "../components/ProductVideo";
import glideCapsVideo from "../glidecaps website viedeo.mp4";

export default function GlideCapsPage() {
  return (
    <>
      <Helmet>
        <title>GlideCaps | Glide Video Tools</title>
        <meta
          name="description"
          content="Local-first captions for creators who need a fast subtitle pass. Generate a draft, review timings and line breaks, then export sidecar captions or burned-in deliverables without leaving your desktop."
        />
        <link rel="canonical" href="https://www.glidevideo.com/glidecaps" />
        <meta property="og:title" content="GlideCaps | Glide Video Tools" />
        <meta
          property="og:description"
          content="Local-first captions for creators who need a fast subtitle pass. Generate a draft, review timings and line breaks, then export sidecar captions or burned-in deliverables without leaving your desktop."
        />
        <meta property="og:url" content="https://www.glidevideo.com/glidecaps" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideCaps"
        tagline="Editable Captions Without the Full NLE"
        description="GlideCaps is built for the fast caption pass between rough edit and delivery. Generate a draft from dialogue, adjust timings and line breaks manually, then export the caption format or burned-in version that fits the platform."
        mediaContent={
          <ProductVideo src={glideCapsVideo} title="GlideCaps product demo" />
        }
        features={[
          "Generate an editable caption draft from spoken dialogue",
          "Review timings, line breaks, and wording before you export",
          "Export sidecar captions such as SRT or VTT for delivery and upload flows",
          "Create readable burned-in captions for Shorts, Reels, tutorials, and demos",
          "Keep the full caption workflow local instead of uploading source footage to a cloud editor",
        ]}
        primaryColor="var(--primary)"
        primaryForegroundColor="var(--primary-foreground)"
        actions={
          <ProductStoreActions
            productId="glidecaps"
            microsoftStoreUrl="https://apps.microsoft.com/detail/9PF67XMTBB7P"
            itchUrl="https://kajdep.itch.io/glidecaps"
          />
        }
      />
    </>
  );
}
