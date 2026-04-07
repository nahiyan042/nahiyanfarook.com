"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const stats = [
  { value: "4", label: "Publications", icon: "📄" },
  { value: "3+", label: "Years Experience", icon: "⏱️" },
  { value: "8.0", label: "IELTS (C1)", icon: "🌐" },
  { value: "IEB", label: "Associate Member", icon: "🏛️" },
];

const tags = [
  "Ground Improvement",
  "Sustainable Materials",
  "FEM Modeling",
  "Structural Analysis",
  "Neural Networks",
];

export function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Blueprint grid background */}
      <div className={styles.gridOverlay} />
      
      {/* Animated particles */}
      <div className={styles.particles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
          }} />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.tag}>
              <span className={styles.tagDot} />
              Geotechnical Researcher & Engineer
            </div>

            <h1 className={styles.name}>
              Engr. Nahiyan
              <br />
              <span className={styles.nameAccent}>Al Farook</span>
            </h1>

            <p className={styles.subtitle}>
              Civil Engineer | Sustainability Researcher | Creative Director
            </p>

            <p className={styles.description}>
              Specializing in ground improvement, reclaimed asphalt pavement research, 
              and finite element modeling. Passionate about sustainable engineering solutions 
              and innovative construction methods.
            </p>

            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.skillTag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              <Link href="/research" className="btn btn-primary">
                View Research
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                Get in Touch
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorder} />
              <div className={styles.imageContainer}>
                <Image
                  src="/images/profile.jpg"
                  alt="Nahiyan Al Farook"
                  width={400}
                  height={500}
                  priority
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.imageDecor}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="48" stroke="var(--primary-green)" strokeWidth="0.5" opacity="0.3"/>
                  <circle cx="50" cy="50" r="35" stroke="var(--primary-green)" strokeWidth="0.5" opacity="0.2"/>
                </svg>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={styles.statIcon}>{stat.icon}</span>
                  <div>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
    </section>
  );
}
