import React from 'react';
import { Helmet } from 'react-helmet';
import { Download, ShoppingBag } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductLayout } from '../components/ProductLayout';
import { VimeoSquarePlayer } from '../components/VimeoSquarePlayer';
import styles from './glideconvert.module.css';

export default function GlideConvertPage() {
  const actions = (
    <>
      <Button asChild variant="primary">
        <a href="#" onClick={e => e.preventDefault()}>
          <Download size={16} /> Get on itch.io
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href="#" onClick={e => e.preventDefault()}>
          <ShoppingBag size={16} /> Microsoft Store
        </a>
      </Button>
    </>
  );

  return (
    <>
      <Helmet>
        <title>GlideConvert | Glide Video Tools</title>
        <meta name="description" content="Lightning-fast video format conversion. Convert MP4, MOV, AVI, WEBM and more locally. No uploads, no waiting. Available on itch.io and Microsoft Store." />
        <link rel="canonical" href="https://www.glidevideo.com/glideconvert" />
        <meta property="og:title" content="GlideConvert | Glide Video Tools" />
        <meta property="og:description" content="Lightning-fast video format conversion. Convert MP4, MOV, AVI, WEBM and more locally. No uploads, no waiting. Available on itch.io and Microsoft Store." />
        <meta property="og:url" content="https://www.glidevideo.com/glideconvert" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideConvert"
        tagline="Lightning-Fast Video Format Conversion"
        description="Convert videos between formats instantly. Supports MP4, MOV, AVI, WEBM and more. Built for speed and simplicity without compromising on quality."
        mediaContent={<VimeoSquarePlayer videoId="1177449976" />}
        features={[
          "Multi-format support",
          "Batch conversion capabilities",
          "Preserves original quality",
          "Blazing fast processing"
        ]}
        primaryColor="var(--primary)"
        primaryForegroundColor="var(--primary-foreground)"
        actions={actions}
      />
    </>
  );
}