import React from "react";
import styles from "./ProductVisual.module.css";

interface ProductVisualProps {
  color: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  imageUrl?: string;
  imageAlt?: string;
}

export function ProductVisual({
  color,
  icon: Icon,
  imageUrl,
  imageAlt,
}: ProductVisualProps) {
  return (
    <div
      className={styles.frame}
      style={{ "--visual-color": color } as React.CSSProperties}
    >
      <div className={styles.glow} />
      <div className={styles.panel}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt || "Product mark"}
            className={styles.mark}
          />
        ) : Icon ? (
          <Icon className={styles.icon} />
        ) : null}
      </div>
    </div>
  );
}
