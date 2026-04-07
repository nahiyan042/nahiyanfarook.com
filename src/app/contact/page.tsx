"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import styles from "./contact.module.css";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nahiyan04/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: "Behance",
    url: "https://www.behance.net/nahiyan04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
      </svg>
    ),
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=GqK7zvoAAAAJ&hl=en",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
      </svg>
    ),
  },
  {
    name: "Website",
    url: "https://nahiyanfarook.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    // Obfuscated email construction
    const parts = ["nahiyan04", "gmail.com"];
    const email = parts.join("@");
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    });
  };

  const handleCallPhone = () => {
    // Obfuscated phone number
    const p = ["+880", "1725", "871", "948"];
    window.location.href = `tel:${p.join("")}`;
  };

  return (
    <>
      <ScrollReveal />
      <div className={styles.page}>
        <section className={`section ${styles.contactSection}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Connect</span>
              <h2>Let&apos;s Connect</h2>
              <p>Open for research collaborations, engineering projects, and professional opportunities.</p>
            </div>

            <div className={styles.contactGrid}>
              {/* Profile Summary */}
              <div className={`card reveal ${styles.profileCard}`}>
                <div className={styles.profileIcon}>
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                    <rect x="2" y="20" width="24" height="4" rx="1" fill="currentColor" opacity="0.8"/>
                    <polygon points="14,2 24,18 4,18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                    <line x1="14" y1="8" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="9" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3>Engr. Nahiyan Al Farook</h3>
                <p className={styles.profileSubtitle}>
                  B.Sc. in Civil Engineering<br/>
                  Islamic University of Technology
                </p>
                <p className={styles.profileBio}>
                  Civil engineer with expertise in geotechnical research, structural design, 
                  and sustainability consulting. Open to research assistant and graduate study opportunities.
                </p>
                
                <a href="/nahiyan-resume.pdf" target="_blank" rel="noopener" className={`btn btn-primary ${styles.resumeBtn}`}>
                  Download Resume
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </a>
              </div>

              {/* Contact Actions */}
              <div className={`reveal reveal-delay-1 ${styles.contactActions}`}>
                <div className={`card ${styles.actionCard}`}>
                  <div className={styles.actionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 4L12 13 2 4"/>
                    </svg>
                  </div>
                  <div className={styles.actionInfo}>
                    <h4>Email</h4>
                    <p>Send me an email for collaborations</p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className={`btn btn-secondary ${styles.actionBtn} ${emailCopied ? styles.copied : ""}`}
                    id="copy-email-btn"
                  >
                    {emailCopied ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                        </svg>
                        Copy Email
                      </>
                    )}
                  </button>
                </div>

                <div className={`card ${styles.actionCard}`}>
                  <div className={styles.actionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className={styles.actionInfo}>
                    <h4>Phone</h4>
                    <p>Available for calls during office hours (GMT+6)</p>
                  </div>
                  <button onClick={handleCallPhone} className={`btn btn-primary ${styles.actionBtn}`} id="call-phone-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/>
                    </svg>
                    Call Now
                  </button>
                </div>

                <div className={`card ${styles.actionCard}`}>
                  <div className={styles.actionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.actionInfo}>
                    <h4>Location</h4>
                    <p>Uttara, Dhaka 1230, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={`reveal reveal-delay-2 ${styles.socialSection}`}>
                <h3 className={styles.socialTitle}>Profiles</h3>
                <div className={styles.socialGrid}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card ${styles.socialCard}`}
                    >
                      <span className={styles.socialIcon}>{link.icon}</span>
                      <span className={styles.socialName}>{link.name}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.socialArrow}>
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
