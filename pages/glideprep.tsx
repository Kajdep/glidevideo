import React from "react";
import { Helmet } from "react-helmet";
import { ProductLayout } from "../components/ProductLayout";
import { ProductStoreActions } from "../components/ProductStoreActions";
import { ProductVideo } from "../components/ProductVideo";
import glidePrepVideo from "../glidepre website video.mp4";

export default function GlidePrepPage() {
  return (
    <>
      <Helmet>
        <title>GlidePrep | Glide Video Tools</title>
        <meta
          name="description"
          content="Clean clips before the rest of your workflow. GlidePrep detects black or frozen edges, lets you trim precisely, reframe for social and widescreen formats, and export locally."
        />
        <link rel="canonical" href="https://www.glidevideo.com/glideprep" />
        <meta property="og:title" content="GlidePrep | Glide Video Tools" />
        <meta
          property="og:description"
          content="Clean clips before the rest of your workflow. GlidePrep detects black or frozen edges, lets you trim precisely, reframe for social and widescreen formats, and export locally."
        />
        <meta
          property="og:url"
          content="https://www.glidevideo.com/glideprep"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlidePrep"
        tagline="Cleanup, Trim, and Reframe Before Export"
        description="GlidePrep handles the preflight pass that usually gets buried inside a larger editor. Detect black or frozen edges, lock the trim manually, set the output aspect ratio, and export a cleaner clip before the rest of your workflow starts."
        mediaContent={
          <ProductVideo src={glidePrepVideo} title="GlidePrep product demo" />
        }
        features={[
          "Auto-detect black frames and frozen edges at the head and tail of a clip",
          "Layer manual trim-in and trim-out adjustments on top of the suggested cleanup",
          "Reframe for 9:16, 1:1, 16:9, or 4:5 delivery",
          "Preview Smart Crop, Blur Fill, and Matte Fit framing modes before export",
          "Move, scale, and rotate the source frame visually, then export locally",
        ]}
        primaryColor="var(--success)"
        primaryForegroundColor="var(--success-foreground)"
        actions={
          <ProductStoreActions
            productId="glideprep"
            microsoftStoreUrl="https://apps.microsoft.com/detail/9PPNKX2M9WCP"
            itchUrl="https://kajdep.itch.io/glideprep"
          />
        }
      />
    </>
  );
}
