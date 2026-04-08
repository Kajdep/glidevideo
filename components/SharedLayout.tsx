import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileVideo,
  Repeat,
  Blend,
  Scissors,
  Smartphone,
  Captions,
  Volume2,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';
import styles from './SharedLayout.module.css';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: LayoutDashboard },
    { path: '/glideconvert', label: 'GlideConvert', icon: FileVideo },
    { path: '/glidelooper', label: 'GlideLooper', icon: Repeat },
    { path: '/glideblend', label: 'GlideBlend', icon: Blend },
    { path: '/glideprep', label: 'GlidePrep', icon: Scissors },
    { path: '/glideshorts', label: 'GlideShorts', icon: Smartphone },
    { path: '/glidecaps', label: 'GlideCaps', icon: Captions },
    { path: '/glideaudio', label: 'GlideAudio', icon: Volume2 },
  ];

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logoLink}>
            <img 
              src="https://assets.floot.app/41577a29-e7b2-4272-98bb-7783a7532545/1ef443ff-a054-4910-8fb0-e831628a0915.png" 
              alt="Glide Video Tools" 
              className={styles.logo} 
            />
          </Link>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
            <a
              href="https://shop.glidevideo.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.navLink} ${styles.shopLink}`}
            >
              <ShoppingBag size={16} />
              <span>Shop</span>
              <ExternalLink size={14} />
            </a>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img 
              src="https://assets.floot.app/41577a29-e7b2-4272-98bb-7783a7532545/1ef443ff-a054-4910-8fb0-e831628a0915.png" 
              alt="Glide" 
              className={styles.footerLogo} 
            />
            <p className={styles.footerText}>Precision video tools for creators.</p>
          </div>
          <div className={styles.footerLinks}>
            <Link to="/glideconvert">GlideConvert</Link>
            <Link to="/glidelooper">GlideLooper</Link>
            <Link to="/glideblend">GlideBlend</Link>
            <Link to="/glideprep">GlidePrep</Link>
            <Link to="/glideshorts">GlideShorts</Link>
            <Link to="/glidecaps">GlideCaps</Link>
            <Link to="/glideaudio">GlideAudio</Link>
            <a
              href="https://shop.glidevideo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Glide Video Tools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
