import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useSubscribe } from '../helpers/useSubscribe';
import { Helmet } from 'react-helmet';
import { FileVideo, Repeat, Blend, Cpu, ArrowRight, Scissors, Smartphone, Captions, ExternalLink, ChevronDown, Feather, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Badge } from '../components/Badge';
import styles from './_index.module.css';

export default function IndexPage() {
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
      subscribe({ email, source: 'glidestudio' });
    }
  };

  return (
    <>
      <div className={styles.backgroundLayer} />
      <div className={styles.overlayLayer} />
      
      <div className={styles.container}>
        <Helmet>
          <title>Glide Video Tools | The Video Toolkit That Moves With You</title>
          <meta name="description" content="Professional video tools that run on your computer. Convert, loop, blend, caption, and prepare videos locally — fast, secure, and private. No cloud uploads needed." />
          <link rel="canonical" href="https://www.glidevideo.com/" />
          <meta property="og:title" content="Glide Video Tools | The Video Toolkit That Moves With You" />
          <meta property="og:description" content="Professional video tools that run on your computer. Convert, loop, blend, caption, and prepare videos locally — fast, secure, and private. No cloud uploads needed." />
          <meta property="og:url" content="https://www.glidevideo.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Glide Video Tools" />
        </Helmet>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Video Tools That Run On Your Computer</h1>
            <p className={styles.heroSubtitle}>
              Focused utilities for cleaning footage, converting formats, building loops, creating captions, and packaging short-form video without sending your media to a cloud editor.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className={styles.mainCta}>
                <a href="#tools">Explore the Suite</a>
              </Button>
              <div className={styles.storeLinks}>
                <Button asChild variant="ghost" size="sm" className={styles.glassPill}>
                  <a href="https://kajdep.itch.io/" target="_blank" rel="noopener noreferrer">
                    Browse on itch.io <ExternalLink size={14} />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className={styles.glassPill}>
                  <a href="https://glideblend.com" target="_blank" rel="noopener noreferrer">
                    Open GlideBlend Web App <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <a href="#tools" className={styles.scrollIndicator} aria-label="Scroll down">
            <ChevronDown size={32} />
          </a>
        </section>

        <section id="tools" className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Suite</h2>
            <p className={styles.sectionSubtitle}>Focused tools. Local-first workflow.</p>
          </div>
          
          <div className={styles.toolsGrid}>
            {/* GlideConvert Card */}
            <Link 
              to="/glideconvert" 
              className={styles.toolCard}
              style={{ '--card-glow': 'var(--primary)', '--tool-color': 'var(--primary)' } as React.CSSProperties}
            >
              <div className={styles.toolIconWrapper} style={{ color: 'var(--tool-color)' }}>
                <FileVideo size={32} />
              </div>
              <h3 className={styles.toolName}>GlideConvert</h3>
              <p className={styles.toolDescription}>Convert video locally with platform-ready MP4 presets for YouTube, TikTok, Instagram, Android, WhatsApp, and more.</p>
              <div className={styles.toolFooter}>
                <span className={styles.learnMore}>Learn More <ArrowRight size={14} /></span>
                <div className={styles.platforms}>
                  <Badge variant="outline" className={styles.glassBadge}>itch.io</Badge>
                  <Badge variant="outline" className={styles.glassBadge}>Desktop App</Badge>
                </div>
              </div>
            </Link>

            {/* GlideLooper Card */}
            <Link 
              to="/glidelooper" 
              className={styles.toolCard}
              style={{ '--card-glow': 'var(--secondary)', '--tool-color': 'var(--secondary)' } as React.CSSProperties}
            >
              <div className={styles.toolIconWrapper} style={{ color: 'var(--tool-color)' }}>
                <Repeat size={32} />
              </div>
              <h3 className={styles.toolName}>GlideLooper</h3>
              <p className={styles.toolDescription}>Pick a seam visually, choose an FFmpeg xfade transition, and build longer seamless loops from one clip.</p>
              <div className={styles.toolFooter}>
                <span className={styles.learnMore}>Learn More <ArrowRight size={14} /></span>
                <div className={styles.platforms}>
                  <Badge variant="outline" className={styles.glassBadge}>itch.io</Badge>
                  <Badge variant="outline" className={styles.glassBadge}>Desktop App</Badge>
                </div>
              </div>
            </Link>

            {/* GlideBlend Card */}
            <Link 
              to="/glideblend" 
              className={styles.toolCard}
              style={{ '--card-glow': 'var(--accent)', '--tool-color': 'var(--accent)' } as React.CSSProperties}
            >
              <div className={styles.toolIconWrapper} style={{ color: 'var(--tool-color)' }}>
                <Blend size={32} />
              </div>
              <h3 className={styles.toolName}>GlideBlend</h3>
              <p className={styles.toolDescription}>Stitch clips at their best visual match with perceptual hashing and browser-based FFmpeg processing.</p>
              <div className={styles.toolFooter}>
                <span className={styles.learnMore}>Learn More <ArrowRight size={14} /></span>
                <div className={styles.platforms}>
                  <Badge variant="outline" className={styles.glassBadge}>Web App</Badge>
                  <Badge variant="outline" className={styles.glassBadge}>itch.io</Badge>
                </div>
              </div>
            </Link>

            {/* GlidePrep Card */}
            <Link
              to="/glideprep"
              className={styles.toolCard}
              style={{ '--card-glow': 'var(--success)', '--tool-color': 'var(--success)' } as React.CSSProperties}
            >
              <div className={styles.toolIconWrapper} style={{ color: 'var(--tool-color)' }}>
                <Scissors size={32} />
              </div>
              <h3 className={styles.toolName}>GlidePrep</h3>
              <p className={styles.toolDescription}>Clean clips by trimming dead edges and reframing them for vertical, square, portrait, or widescreen delivery.</p>
              <div className={styles.toolFooter}>
                <span className={styles.learnMore}>Learn More <ArrowRight size={14} /></span>
                <div className={styles.platforms}>
                  <Badge variant="outline" className={styles.glassBadge}>itch.io</Badge>
                  <Badge variant="outline" className={styles.glassBadge}>Desktop App</Badge>
                </div>
              </div>
            </Link>

            {/* GlideShorts Card */}
            <Link
              to="/glideshorts"
              className={`${styles.toolCard} ${styles.comingSoonCard}`}
              style={{ '--card-glow': 'var(--warning)', '--tool-color': 'var(--warning)' } as React.CSSProperties}
            >
              <div className={styles.toolHeaderRow}>
                <div className={styles.toolIconWrapper} style={{ color: 'var(--tool-color)' }}>
                  <Smartphone size={32} />
                </div>
                <Badge variant="outline" className={`${styles.glassBadge} ${styles.comingSoonBadge}`}>Coming Soon</Badge>
              </div>
              <h3 className={styles.toolName}>GlideShorts</h3>
              <p className={styles.toolDescription}>Find likely highlights, review them, and turn long-form video into platform-ready short clips.</p>
              <div className={styles.toolFooter}>
                <span className={styles.learnMore}>Learn More <ArrowRight size={14} /></span>
                <div className={styles.platforms}>
                  <Badge variant="outline" className={styles.glassBadge}>Coming Soon</Badge>
                </div>
              </div>
            </Link>

            {/* GlideCaps Card */}
            <Link
              to="/glidecaps"
              className={`${styles.toolCard} ${styles.comingSoonCard}`}
              style={{ '--card-glow': 'var(--primary)', '--tool-color': 'var(--primary)' } as React.CSSProperties}
            >
              <div className={styles.toolHeaderRow}>
                <div className={styles.toolIconWrapper} style={{ color: 'var(--tool-color)' }}>
                  <Captions size={32} />
                </div>
                <Badge variant="outline" className={`${styles.glassBadge} ${styles.comingSoonBadge}`}>Coming Soon</Badge>
              </div>
              <h3 className={styles.toolName}>GlideCaps</h3>
              <p className={styles.toolDescription}>Generate, edit, and export captions locally for tutorials, client deliverables, and short-form clips.</p>
              <div className={styles.toolFooter}>
                <span className={styles.learnMore}>Learn More <ArrowRight size={14} /></span>
                <div className={styles.platforms}>
                  <Badge variant="outline" className={styles.glassBadge}>Coming Soon</Badge>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className={styles.teaserSection}>
          <div className={styles.teaserContent}>
            <Badge className={styles.pulsingBadge}>Coming Soon</Badge>
            <h2 className={styles.teaserTitle}>GlideStudio</h2>
            <p className={styles.teaserDescription}>
              The ultimate browser-based video suite. All Glide tools, unified in one powerful workspace. Subscribe to get notified.
            </p>
            <form className={styles.teaserForm} onSubmit={handleSubscribe}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.teaserInput} 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isPending}
              />
              <Button type="submit" className={styles.teaserSubmit} disabled={isPending}>
                {isPending ? "Signing up..." : "Notify Me"}
              </Button>
            </form>
          </div>
          <div className={styles.teaserImageWrapper}>
            <div className={styles.teaserGlow} />
            <img 
              src="https://assets.floot.app/41577a29-e7b2-4272-98bb-7783a7532545/46294648-a122-4a69-a3bf-78c12309de0e.png" 
              alt="GlideStudio Teaser" 
              className={styles.teaserImage} 
            />
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Glide?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Cpu className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Client-Side Processing</h3>
              <p className={styles.featureText}>Everything happens securely in your browser or local app. No uploads required.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Feather className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Lightweight Apps</h3>
              <p className={styles.featureText}>Small, focused tools that do one thing well. No bloated software or unnecessary features.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <ShieldCheck className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Focus on Speed and Security</h3>
              <p className={styles.featureText}>Your files never leave your machine. Fast local processing keeps your content private and secure.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
