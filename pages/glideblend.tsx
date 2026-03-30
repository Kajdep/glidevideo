import React from 'react';
import { Helmet } from 'react-helmet';
import { Globe, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductLayout } from '../components/ProductLayout';
import { VimeoSquarePlayer } from '../components/VimeoSquarePlayer';

export default function GlideBlendPage() {
  const actions = (
    <>
      <Button asChild variant="primary">
        <a href="https://glideblend.com" target="_blank" rel="noopener noreferrer">
          <Globe size={16} /> Launch Web App
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href="https://kajdep.itch.io/glideblend" target="_blank" rel="noopener noreferrer">
          <Download size={16} /> Get on itch.io
        </a>
      </Button>
    </>
  );

  return (
    <>
      <Helmet>
        <title>GlideBlend | Glide Video Tools</title>
        <meta name="description" content="Merge AI-generated videos seamlessly using perceptual hash matching. All processing happens in your browser. Try the web app or get it on itch.io." />

        <meta property="og:title" content="GlideBlend | Glide Video Tools" />
        <meta property="og:description" content="Merge AI-generated videos seamlessly using perceptual hash matching. All processing happens in your browser. Try the web app or get it on itch.io." />
        <meta property="og:url" content="https://www.glidevideo.com/glideblend" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideBlend"
        tagline="Merge AI Videos Seamlessly"
        description="Intelligently merges two video clips at the most visually similar frames using 64-bit dHash perceptual hashing. All processing happens entirely in your browser via FFmpeg.wasm — no uploads needed."
        mediaContent={<VimeoSquarePlayer videoId="1177456926" />}
        features={[
          "Perceptual hash matching for perfect joins",
          "Client-side FFmpeg processing (secure & fast)",
          "Chaining support to re-use merged outputs",
          "One-click MP4 download"
        ]}
        primaryColor="var(--accent)"
        primaryForegroundColor="var(--accent-foreground)"
        actions={actions}
      />
    </>
  );
}
