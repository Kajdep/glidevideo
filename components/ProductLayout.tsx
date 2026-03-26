import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';
import styles from './ProductLayout.module.css';

interface ProductLayoutProps {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  mediaContent?: React.ReactNode;
  features: string[];
  primaryColor?: string;
  primaryForegroundColor?: string;
  actions: React.ReactNode;
}

export function ProductLayout({
  name, 
  tagline, 
  description, 
  image, 
  mediaContent,
  features, 
  primaryColor = 'var(--primary)', 
  primaryForegroundColor = 'var(--primary-foreground)',
  actions
}: ProductLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.backLinkWrapper}>
        <Button variant="ghost" asChild className={styles.backLink}>
          <Link to="/">
            <ArrowLeft size={16} />
            Back to All Tools
          </Link>
        </Button>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <Badge variant="outline" style={{ borderColor: primaryColor, color: primaryColor }}>
              {name}
            </Badge>
          </div>
          <h1 className={styles.title}>{tagline}</h1>
          <p className={styles.description}>{description}</p>
          
          <div 
            className={styles.actions}
            style={{ 
              '--primary': primaryColor, 
              '--primary-foreground': primaryForegroundColor 
            } as React.CSSProperties}
          >
            {actions}
          </div>

          <div className={styles.features}>
            <h3 className={styles.featuresTitle}>Key Features</h3>
            <ul className={styles.featureList}>
              {features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <CheckCircle2 size={18} color={primaryColor} className={styles.featureIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {(image || mediaContent) && (
          <div className={styles.heroImageWrapper}>
            <div className={styles.imageGlow} style={{ backgroundColor: primaryColor }} />
            {mediaContent ? mediaContent : (image && <img src={image} alt={name} className={styles.heroImage} />)}
          </div>
        )}
      </div>
    </div>
  );
}