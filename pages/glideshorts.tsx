import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useSubscribe } from '../helpers/useSubscribe';
import { Helmet } from 'react-helmet';
import { Check, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import styles from './glideshorts.module.css';

const glideShortsMark =
  'https://assets.floot.app/41577a29-e7b2-4272-98bb-7783a7532545/1ef443ff-a054-4910-8fb0-e831628a0915.png';

export default function GlideShortsPage() {
  const [email, setEmail] = useState('');

  const { mutate: subscribe, isPending } = useSubscribe({
    onSuccess: () => {
      toast.success("You're on the list!");
      setEmail('');
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribe({ email, source: 'glideshorts' });
    }
  };

  const features = [
    "Ranked highlight suggestions built from transcript, audio, and scene-change signals",
    "Review-first workflow so you can adjust the moments before exporting",
    "Short-form duration targets such as 15s, 30s, 45s, and 60s",
    "Aspect presets for 9:16, 1:1, and 16:9 with manual reframing",
    "Local export flow for platform-ready shorts and caption-ready clips"
  ];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>GlideShorts | Coming Soon - Glide Video Tools</title>
        <meta name="description" content="Coming soon — GlideShorts is planned as a review-first short-form tool that finds likely highlight moments, lets you refine them, and exports platform-ready clips for Shorts, Reels, and TikTok." />
        <link rel="canonical" href="https://www.glidevideo.com/glideshorts" />
        <meta property="og:title" content="GlideShorts | Coming Soon - Glide Video Tools" />
        <meta property="og:description" content="Coming soon — GlideShorts is planned as a review-first short-form tool that finds likely highlight moments, lets you refine them, and exports platform-ready clips for Shorts, Reels, and TikTok." />
        <meta property="og:url" content="https://www.glidevideo.com/glideshorts" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>

      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.logoWrapper}>
            <div className={styles.glow} />
            <img src={glideShortsMark} alt="GlideShorts logo" className={styles.logoImage} />
          </div>

          <Badge variant="warning" className={styles.badge}>Coming Soon</Badge>
          
          <h1 className={styles.title}>GlideShorts</h1>
          <p className={styles.tagline}>Find the Moments Worth Posting</p>
          
          <p className={styles.description}>
            GlideShorts is planned as a review-first tool for turning long-form video into short-form clips. Analyze a source video, rank likely highlight moments, adjust the picks, then export platform-ready outputs for Shorts, Reels, and TikTok.
          </p>

          <div className={styles.actions}>
            <Button asChild variant="outline">
              <a href="https://kajdep.itch.io/glideshorts" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> Follow on itch.io
              </a>
            </Button>
          </div>
          <p className={styles.supportText}>
            The product brief is intentionally review-first, not a one-click black-box editor.
          </p>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.featuresTitle}>Planned Workflow</h2>
          <ul className={styles.featuresList}>
            {features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>
                <Check size={18} className={styles.checkIcon} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.notifySection}>
          <form className={styles.form} onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email to get notified" 
              className={styles.input} 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Signing up..." : "Notify Me"}
            </Button>
          </form>
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
