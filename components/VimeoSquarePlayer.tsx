import React from 'react';
import styles from './VimeoSquarePlayer.module.css';

interface VimeoSquarePlayerProps {
  videoId: string;
  className?: string;
}

export function VimeoSquarePlayer({ videoId, className }: VimeoSquarePlayerProps) {
  const src = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&controls=0&loop=1&background=1&title=0&byline=0&portrait=0`;

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <iframe
        src={src}
        className={styles.iframe}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
}