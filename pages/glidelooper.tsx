import React from "react";
import { Helmet } from "react-helmet";
import { ProductLayout } from "../components/ProductLayout";
import { ProductStoreActions } from "../components/ProductStoreActions";
import { VimeoSquarePlayer } from "../components/VimeoSquarePlayer";

export default function GlideLooperPage() {
  return (
    <>
      <Helmet>
        <title>GlideLooper | Glide Video Tools</title>
        <meta
          name="description"
          content="Preview-first loop builder for desktop. Pick the seam visually, choose an FFmpeg xfade transition, extend the result to a target length, and save seamless loops locally."
        />
        <link rel="canonical" href="https://www.glidevideo.com/glidelooper" />
        <meta property="og:title" content="GlideLooper | Glide Video Tools" />
        <meta
          property="og:description"
          content="Preview-first loop builder for desktop. Pick the seam visually, choose an FFmpeg xfade transition, extend the result to a target length, and save seamless loops locally."
        />
        <meta
          property="og:url"
          content="https://www.glidevideo.com/glidelooper"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideLooper"
        tagline="Preview-First Seamless Loop Building"
        description="GlideLooper turns one forward-moving clip into a longer seamless loop. Choose the seam from a live frame preview, dial in the transition style and duration, then render and review the loop before you save it."
        mediaContent={<VimeoSquarePlayer videoId="1177452495" />}
        features={[
          "Visual seam picker with live frame preview",
          "Built-in FFmpeg xfade transition styles",
          "Adjustable transition duration and target loop length",
          "Render inside the app, then save only when the seam looks right",
        ]}
        primaryColor="var(--secondary)"
        primaryForegroundColor="var(--secondary-foreground)"
        actions={
          <ProductStoreActions
            productId="glidelooper"
            microsoftStoreUrl="https://apps.microsoft.com/detail/9NB6W2SWLFHJ"
            itchUrl="https://kajdep.itch.io/glidelooper"
          />
        }
      />
    </>
  );
}
