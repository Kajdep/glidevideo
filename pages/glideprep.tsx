import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Scissors, Check, ArrowLeft, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import styles from './glideprep.module.css';

export default function GlidePrepPage() {
  const features = [
    "Auto-detect black frames and frozen edges at the head and tail of a clip",
    "Layer manual trim-in and trim-out adjustments on top of the suggested cleanup",
    "Reframe for 9:16, 1:1, 16:9, or 4:5 delivery",
    "Preview Smart Crop, Blur Fill, and Matte Fit framing modes before export",
    "Move, scale, and rotate the source frame visually, then export locally"
  ];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>GlidePrep | Glide Video Tools</title>
        <meta name="description" content="Clean clips before the rest of your workflow. GlidePrep detects black or frozen edges, lets you trim precisely, reframe for social and widescreen formats, and export locally." />
        <link rel="canonical" href="https://www.glidevideo.com/glideprep" />
        <meta property="og:title" content="GlidePrep | Glide Video Tools" />
        <meta property="og:description" content="Clean clips before the rest of your workflow. GlidePrep detects black or frozen edges, lets you trim precisely, reframe for social and widescreen formats, and export locally." />
        <meta property="og:url" content="https://www.glidevideo.com/glideprep" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>

      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.iconWrapper}>
            <div className={styles.glow} />
            <Scissors size={64} className={styles.icon} />
          </div>

          <Badge variant="success" className={styles.badge}>Desktop App</Badge>
          
          <h1 className={styles.title}>GlidePrep</h1>
          <p className={styles.tagline}>Clean Clips Before They Hit the Rest of Your Pipeline</p>
          
          <p className={styles.description}>
            GlidePrep cleans raw footage before you convert it, post it, or feed it into another editor. Detect dead edges, fine-tune the trim, choose the output framing, and preview the result before exporting locally.
          </p>

          <div className={styles.actions}>
            <Button asChild>
              <a href="https://kajdep.itch.io/glideprep" target="_blank" rel="noopener noreferrer">
                <Download size={16} /> Get on itch.io
              </a>
            </Button>
          </div>
          <p className={styles.supportText}>
            Built as a Windows desktop utility for cleanup, reframing, and final prep work.
          </p>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.featuresTitle}>What It Does</h2>
          <ul className={styles.featuresList}>
            {features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>
                <Check size={18} className={styles.checkIcon} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <Button variant="ghost" asChild>
            <Link to="/" className={styles.backLink}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
