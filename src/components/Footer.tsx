import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="20" width="24" height="4" rx="1" fill="currentColor" opacity="0.8"/>
                <polygon points="14,2 24,18 4,18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                <line x1="14" y1="8" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="9" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>N.Farook</span>
            </Link>
            <p className={styles.tagline}>
              Civil Engineer · Researcher · Creative
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkCol}>
              <h4>Navigate</h4>
              <Link href="/">Home</Link>
              <Link href="/research">Research</Link>
              <Link href="/experience">Experience</Link>
            </div>
            <div className={styles.linkCol}>
              <h4>More</h4>
              <Link href="/skills">Skills</Link>
              <Link href="/education">Education</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.linkCol}>
              <h4>Connect</h4>
              <a href="https://www.linkedin.com/in/nahiyan04/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.behance.net/nahiyan04" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="https://scholar.google.com/citations?user=GqK7zvoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Nahiyan Al Farook. All rights reserved.</p>
          <p className={styles.credit}>Designed & Built with precision</p>
        </div>
      </div>
    </footer>
  );
}
