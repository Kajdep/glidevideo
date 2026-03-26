import React from 'react';
import { Helmet } from 'react-helmet';
import { Download, ShoppingBag } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductLayout } from '../components/ProductLayout';
import { VimeoSquarePlayer } from '../components/VimeoSquarePlayer';
import styles from './glidelooper.module.css';

export default function GlideLooperPage() {
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
        <title>GlideLooper | Glide Video Tools</title>
        <meta name="description" content="Create perfectly seamless video loops from any clip. Ideal for social media, backgrounds, and motion design. Available on itch.io and Microsoft Store." />
        <link rel="canonical" href="https://www.glidevideo.com/glidelooper" />
        <meta property="og:title" content="GlideLooper | Glide Video Tools" />
        <meta property="og:description" content="Create perfectly seamless video loops from any clip. Ideal for social media, backgrounds, and motion design. Available on itch.io and Microsoft Store." />
        <meta property="og:url" content="https://www.glidevideo.com/glidelooper" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>
      <ProductLayout
        name="GlideLooper"
        tagline="Seamless Video Loops, Perfected"
        description="Create perfectly seamless loops from any video clip. Ideal for social media, backgrounds, and motion design projects that require continuous playback."
        mediaContent={<VimeoSquarePlayer videoId="1177452495" />}
        features={[
          "Automatic loop detection",
          "Frame-perfect transitions",
          "Multiple export options",
          "Real-time preview rendering"
        ]}
        primaryColor="var(--secondary)"
        primaryForegroundColor="var(--secondary-foreground)"
        actions={actions}
      />
    </>
  );
}