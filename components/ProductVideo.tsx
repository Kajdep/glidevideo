import React from "react";
import styles from "./ProductVideo.module.css";

interface ProductVideoProps {
  src: string;
  title: string;
  className?: string;
}

export function ProductVideo({ src, title, className }: ProductVideoProps) {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <video
        className={styles.video}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
      />
    </div>
  );
}
