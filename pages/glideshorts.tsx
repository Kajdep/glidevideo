import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useSubscribe } from '../helpers/useSubscribe';
import { Helmet } from 'react-helmet';
import { Smartphone, Check, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import styles from './glideshorts.module.css';

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
    "AI scene detection",
    "Auto-reframing for vertical",
    "Caption generation",
    "Multi-platform export presets"
  ];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>GlideShorts | Coming Soon - Glide Video Tools</title>
        <meta name="description" content="Coming soon — GlideShorts automatically transforms long-form video into engaging short-form content for TikTok, YouTube Shorts, and Instagram Reels." />
        <link rel="canonical" href="https://www.glidevideo.com/glideshorts" />
        <meta property="og:title" content="GlideShorts | Coming Soon - Glide Video Tools" />
        <meta property="og:description" content="Coming soon — GlideShorts automatically transforms long-form video into engaging short-form content for TikTok, YouTube Shorts, and Instagram Reels." />
        <meta property="og:url" content="https://www.glidevideo.com/glideshorts" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>

      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.iconWrapper}>
            <div className={styles.glow} />
            <Smartphone size={64} className={styles.icon} />
          </div>

          <Badge variant="warning" className={styles.badge}>Coming Soon</Badge>
          
          <h1 className={styles.title}>GlideShorts</h1>
          <p className={styles.tagline}>Turn Long Videos Into Scroll-Stopping Shorts</p>
          
          <p className={styles.description}>
            GlideShorts automatically analyzes your long-form video and extracts the most engaging moments as perfectly-framed short-form clips. Ready for TikTok, YouTube Shorts, and Instagram Reels.
          </p>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.featuresTitle}>Planned Features</h2>
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