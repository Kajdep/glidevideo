import React from "react";
import { Helmet } from "react-helmet";
import { ProductLayout } from "../components/ProductLayout";
import { ProductStoreActions } from "../components/ProductStoreActions";
import { ProductVideo } from "../components/ProductVideo";
import glideAudioVideo from "../glideaudio website video.mp4";

export default function GlideAudioPage() {
  return (
    <>
      <Helmet>
        <title>GlideAudio | Glide Video Tools</title>
        <meta
          name="description"
          content="Fast local audio exports from video footage. GlideAudio pulls the track you need, trims it cleanly, and exports delivery-ready audio formats without routing the job through a full editor."
        />
        <link rel="canonical" href="https://www.glidevideo.com/glideaudio" />
        <meta property="og:title" content="GlideAudio | Glide Video Tools" />
        <meta
          property="og:description"
          content="Fast local audio exports from video footage. GlideAudio pulls the track you need, trims it cleanly, and exports delivery-ready audio formats without routing the job through a full editor."
        />
        <meta
          property="og:url"
          content="https://www.glidevideo.com/glideaudio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideAudio"
        tagline="Pull, Trim, and Export Audio From Video"
        description="GlideAudio handles the quick audio jobs that do not need a full DAW. Extract a track from footage, trim to the section you want, and export a clean audio file for podcasts, transcripts, approvals, or platform delivery."
        mediaContent={
          <ProductVideo
            src={glideAudioVideo}
            title="GlideAudio product demo"
          />
        }
        features={[
          "Extract audio directly from video clips without a separate editor pass",
          "Trim in and out points before you export the final file",
          "Create delivery-ready MP3, WAV, or M4A exports locally",
          "Use it for dialogue pulls, approval cuts, transcripts, or audio-only uploads",
          "Keep the audio workflow fast, private, and on your machine",
        ]}
        primaryColor="var(--info)"
        primaryForegroundColor="var(--info-foreground)"
        actions={
          <ProductStoreActions
            productId="glideaudio"
            itchUrl="https://kajdep.itch.io/glideaudio"
          />
        }
      />
    </>
  );
}
