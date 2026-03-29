import React from 'react';
import { Helmet } from 'react-helmet';
import { Download } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductLayout } from '../components/ProductLayout';
import { VimeoSquarePlayer } from '../components/VimeoSquarePlayer';

export default function GlideConvertPage() {
  const actions = (
    <Button asChild variant="primary">
      <a href="https://kajdep.itch.io/glideconvert" target="_blank" rel="noopener noreferrer">
        <Download size={16} /> Get on itch.io
      </a>
    </Button>
  );

  return (
    <>
      <Helmet>
        <title>GlideConvert | Glide Video Tools</title>
        <meta name="description" content="Desktop video conversion with platform-ready MP4 presets for YouTube, TikTok, Instagram, Android, WhatsApp, and more. Batch friendly, drag and drop, and fully local." />
        <link rel="canonical" href="https://www.glidevideo.com/glideconvert" />
        <meta property="og:title" content="GlideConvert | Glide Video Tools" />
        <meta property="og:description" content="Desktop video conversion with platform-ready MP4 presets for YouTube, TikTok, Instagram, Android, WhatsApp, and more. Batch friendly, drag and drop, and fully local." />
        <meta property="og:url" content="https://www.glidevideo.com/glideconvert" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideConvert"
        tagline="Platform-Ready MP4 Conversion"
        description="GlideConvert is a focused desktop converter for fast, clean exports without the overhead of a full editor. Drop in clips, choose a preset for the platform you need, and convert locally with FFmpeg-powered processing."
        mediaContent={<VimeoSquarePlayer videoId="1177449976" />}
        features={[
          "Platform presets for YouTube, TikTok, Instagram, Android, WhatsApp, and more",
          "Batch queue with per-file progress tracking",
          "Drag-and-drop intake with clean output folder control",
          "Local FFmpeg processing with no cloud upload step"
        ]}
        primaryColor="var(--primary)"
        primaryForegroundColor="var(--primary-foreground)"
        actions={actions}
      />
    </>
  );
}
