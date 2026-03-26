import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useSubscribe } from '../helpers/useSubscribe';
import { Helmet } from 'react-helmet';
import { Scissors, Check, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import styles from './glideprep.module.css';

export default function GlidePrepPage() {
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
      subscribe({ email, source: 'glideprep' });
    }
  };

  const features = [
    "Frame-accurate trimming",
    "Custom crop regions",
    "Aspect ratio presets (16:9, 9:16, 1:1)",
    "Batch preparation"
  ];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>GlidePrep | Coming Soon - Glide Video Tools</title>
        <meta name="description" content="Coming soon — GlidePrep lets you trim, crop, and prepare video clips with frame-accurate precision for any pipeline." />
        <link rel="canonical" href="https://www.glidevideo.com/glideprep" />
        <meta property="og:title" content="GlidePrep | Coming Soon - Glide Video Tools" />
        <meta property="og:description" content="Coming soon — GlidePrep lets you trim, crop, and prepare video clips with frame-accurate precision for any pipeline." />
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

          <Badge variant="success" className={styles.badge}>Coming Soon</Badge>
          
          <h1 className={styles.title}>GlidePrep</h1>
          <p className={styles.tagline}>Trim, Crop & Prepare Your Videos</p>
          
          <p className={styles.description}>
            GlidePrep gives you precision tools for trimming and cropping video clips. Prepare footage for any pipeline — social media, editing suites, or other Glide tools. Fast, intuitive, and entirely local.
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