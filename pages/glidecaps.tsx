import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useSubscribe } from '../helpers/useSubscribe';
import { Helmet } from 'react-helmet';
import { Captions, Check, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import styles from './glidecaps.module.css';

export default function GlideCapsPage() {
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
      subscribe({ email, source: 'glidecaps' });
    }
  };

  const features = [
    'Generate an editable caption draft from spoken dialogue',
    'Review timings, line breaks, and wording before you export',
    'Export sidecar captions such as SRT or VTT for delivery and upload flows',
    'Create readable burned-in captions for Shorts, Reels, tutorials, and demos',
    'Keep the full caption workflow local instead of uploading source footage to a cloud editor',
  ];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>GlideCaps | Coming Soon - Glide Video Tools</title>
        <meta name="description" content="Coming soon — GlideCaps is planned as a local-first captioning tool for generating, editing, styling, and exporting subtitles without moving your source footage into a cloud editor." />

        <meta property="og:title" content="GlideCaps | Coming Soon - Glide Video Tools" />
        <meta property="og:description" content="Coming soon — GlideCaps is planned as a local-first captioning tool for generating, editing, styling, and exporting subtitles without moving your source footage into a cloud editor." />
        <meta property="og:url" content="https://www.glidevideo.com/glidecaps" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glide Video Tools" />
      </Helmet>

      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.iconWrapper}>
            <div className={styles.glow} />
            <Captions size={64} className={styles.icon} />
          </div>

          <Badge variant="warning" className={styles.badge}>Coming Soon</Badge>

          <h1 className={styles.title}>GlideCaps</h1>
          <p className={styles.tagline}>Local-First Captions Without the Full NLE</p>

          <p className={styles.description}>
            GlideCaps is planned as a focused captioning tool for creators who want accurate subtitles without dragging footage through a full editor. Build a draft, review the timings, adjust the text, and export the caption format that fits the platform.
          </p>

          <div className={styles.actions}>
            <Button asChild variant="outline">
              <a href="#notify">Join the waitlist</a>
            </Button>
          </div>
          <p className={styles.supportText}>
            The goal is a fast caption pass for tutorials, social clips, and client deliverables that still keeps the review step in your hands.
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

        <div id="notify" className={styles.notifySection}>
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
              {isPending ? 'Signing up...' : 'Notify Me'}
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
