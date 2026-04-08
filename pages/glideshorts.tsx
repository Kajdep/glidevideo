import React from "react";
import { Helmet } from "react-helmet";
import { ProductLayout } from "../components/ProductLayout";
import { ProductStoreActions } from "../components/ProductStoreActions";
import { ProductVideo } from "../components/ProductVideo";
import glideShortsVideo from "../glideshorts website video.mp4";

export default function GlideShortsPage() {
  return (
    <>
      <Helmet>
        <title>GlideShorts | Glide Video Tools</title>
        <meta
          name="description"
          content="Review-first short-form editing for clips worth posting. GlideShorts finds likely highlights, lets you tune the picks, reframes for vertical or square delivery, and exports locally."
        />
        <link rel="canonical" href="https://www.glidevideo.com/glideshorts" />
        <meta
          property="og:title"
          content="GlideShorts | Glide Video Tools"
        />
        <meta
          property="og:description"
          content="Review-first short-form editing for clips worth posting. GlideShorts finds likely highlights, lets you tune the picks, reframes for vertical or square delivery, and exports locally."
        />
        <meta
          property="og:url"
          content="https://www.glidevideo.com/glideshorts"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideShorts"
        tagline="Review-First Short Clips From Long-Form Video"
        description="GlideShorts surfaces likely highlight moments, then keeps the review pass in front of you. Refine the picks, lock the framing, tune the duration target, and export vertical or square shorts without shipping footage to a cloud editor."
        mediaContent={
          <ProductVideo
            src={glideShortsVideo}
            title="GlideShorts product demo"
          />
        }
        features={[
          "Ranked highlight suggestions built from transcript, audio, and scene-change signals",
          "Review-first workflow so you can adjust the moments before exporting",
          "Short-form duration targets such as 15s, 30s, 45s, and 60s",
          "Aspect presets for 9:16, 1:1, and 16:9 with manual reframing",
          "Local export flow for platform-ready shorts and caption-ready clips",
        ]}
        primaryColor="var(--warning)"
        primaryForegroundColor="var(--warning-foreground)"
        actions={
          <ProductStoreActions
            productId="glideshorts"
            microsoftStoreUrl="https://apps.microsoft.com/detail/9PCWC9GXQK0L"
            itchUrl="https://kajdep.itch.io/glideshorts"
          />
        }
      />
    </>
  );
}
