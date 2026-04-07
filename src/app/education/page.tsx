import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import styles from "./education.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education — Nahiyan Al Farook",
  description: "Academic credentials, IELTS scores, professional memberships, and certifications of Engr. Nahiyan Al Farook.",
};

const ieltsScores = [
  { band: "Overall", score: "8.0", highlight: true },
  { band: "Listening", score: "8.5", highlight: false },
  { band: "Reading", score: "8.5", highlight: false },
  { band: "Writing", score: "6.5", highlight: false },
  { band: "Speaking", score: "7.5", highlight: false },
  { band: "CEFR Level", score: "C1", highlight: true },
];

const certifications = [
  {
    name: "Analysis & Design of RC Structure with code provision (BNBC 2020 & ACI 318)",
    issuer: "Development Technologies Ltd.",
    date: "July 2024",
    duration: "12 Week-long",
  },
  {
    name: "GRI Certified Training on Sustainability Report Writing & SDGs",
    issuer: "Global Reporting Initiative",
    date: "December 2024",
    duration: "3 Day-long",
  },
  {
    name: "Industrial Training on River Modelling | GIS Surveying | Hydraulic Structures | EIA",
    issuer: "Institute of Water Modelling (IWM)",
    date: "June 2023",
    duration: "3 Week-long",
  },
  {
    name: "IRCA/CQI Certified ISO 45001:2018 OHS Lead Auditor Course",
    issuer: "SGS Bangladesh Ltd",
    date: "January 2024",
    duration: "5 Day-long",
  },
  {
    name: "IRCA/CQI Certified ISO 14001:2015 EMS Lead Auditor Course",
    issuer: "SGS Bangladesh Ltd",
    date: "February 2022",
    duration: "5 Day-long",
  },
  {
    name: "ETP Operation and Functionality Assessment Preparedness",
    issuer: "Kingsley Engineering Service Corporation",
    date: "January 2025",
    duration: "",
  },
  {
    name: "GHG Emissions Inventory Preparation for SBTi",
    issuer: "The Sustainability Nexus Ltd.",
    date: "January 2023",
    duration: "",
  },
  {
    name: "Sustainable Materials Circularity & Traceability",
    issuer: "The Sustainability Nexus Ltd.",
    date: "October 2023",
    duration: "",
  },
  {
    name: "ETP Operation, Performance, Analysis & Improvement",
    issuer: "The Sustainability Nexus Ltd.",
    date: "November 2023",
    duration: "",
  },
  {
    name: "Wastewater Recycling & Zero Liquid Discharge",
    issuer: "The Sustainability Nexus Ltd.",
    date: "May 2022",
    duration: "",
  },
  {
    name: "An Insight into Green Building & Rating System",
    issuer: "The Sustainability Nexus Ltd.",
    date: "May 2022",
    duration: "",
  },
];

export default function EducationPage() {
  return (
    <>
      <ScrollReveal />
      <div className={styles.page}>
        {/* Academic Credentials */}
        <section className={`section grid-bg`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Academics</span>
              <h2>Academic Credentials</h2>
              <p>Foundation built on rigorous academic excellence in civil engineering.</p>
            </div>

            <div className={styles.eduCards}>
              {/* BSc */}
              <div className={`card reveal ${styles.eduCard}`}>
                <div className={styles.eduHeader}>
                  <div className={styles.eduLogoWrapper}>
                    <Image src="/images/iut-logo.png" alt="IUT" width={60} height={60} className={styles.eduLogo} />
                  </div>
                  <div>
                    <h3>Bachelor of Science (Civil Engineering)</h3>
                    <span className="badge badge-green">January 2020 – June 2024</span>
                  </div>
                </div>
                <div className={styles.eduBody}>
                  <p className={styles.eduInstitution}>
                    <a href="https://www.iutoic-dhaka.edu/" target="_blank" rel="noopener noreferrer">
                      Islamic University of Technology (IUT)
                    </a>
                  </p>
                  <p className={styles.eduDetail}><strong>Specialization:</strong> Geotechnical Engineering</p>
                  <p className={styles.eduDetail}><strong>CGPA:</strong> 3.44 out of 4.00</p>
                  
                  <div className={styles.thesisBox}>
                    <h4>Undergraduate Thesis</h4>
                    <p className={styles.thesisTitle}>
                      <em>Experimental and numerical analysis of reclaimed asphalt pavement-infused granular piles for lean clay improvement.</em>
                    </p>
                    <p className={styles.thesisMeta}>
                      <strong>Supervisor:</strong> Prof. Dr. Hossain Md. Shahin
                    </p>
                    <a href="http://dx.doi.org/10.2139/ssrn.5151503" target="_blank" rel="noopener noreferrer" className={styles.thesisLink}>
                      View Published Thesis
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* HSC */}
              <div className={`card reveal reveal-delay-1 ${styles.eduCard}`}>
                <div className={styles.eduHeader}>
                  <div className={styles.eduLogoWrapper}>
                    <div className={styles.eduLogoPlaceholder}>NDC</div>
                  </div>
                  <div>
                    <h3>Higher Secondary School Certificate (HSC)</h3>
                    <span className="badge badge-green">May 2017 – April 2019</span>
                  </div>
                </div>
                <div className={styles.eduBody}>
                  <p className={styles.eduInstitution}>
                    <a href="https://ndc.edu.bd/" target="_blank" rel="noopener noreferrer">
                      Notre Dame College, Dhaka
                    </a>
                  </p>
                  <p className={styles.eduDetail}><strong>Specialization:</strong> Science</p>
                  <p className={styles.eduDetail}><strong>GPA:</strong> 5.00 out of 5.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IELTS */}
        <section className={`section ${styles.ieltsSection}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Language</span>
              <h2>English Language Proficiency (IELTS)</h2>
            </div>

            <div className={`reveal ${styles.ieltsGrid}`}>
              {ieltsScores.map((item) => (
                <div key={item.band} className={`${styles.ieltsCard} ${item.highlight ? styles.ieltsHighlight : ""}`}>
                  <span className={styles.ieltsScore}>{item.score}</span>
                  <span className={styles.ieltsBand}>{item.band}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Membership */}
        <section className={`section grid-bg ${styles.membershipSection}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Membership</span>
              <h2>Professional Memberships</h2>
            </div>

            <div className={`card reveal ${styles.membershipCard}`}>
              <div className={styles.membershipInfo}>
                <h4>The Institute of Engineers, Bangladesh (IEB)</h4>
                <div className={styles.membershipMeta}>
                  <span className="badge badge-green">Associate Member</span>
                  <span className={styles.membershipDetail}>Membership No: A-28914</span>
                  <span className={styles.membershipDetail}>Valid: October 2025 – October 2027</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className={`section ${styles.certSection}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Certifications</span>
              <h2>Professional Training & Certifications</h2>
              <p>Continuous professional development across engineering, sustainability, and auditing.</p>
            </div>

            <div className={styles.certGrid}>
              {certifications.map((cert, i) => (
                <div key={i} className={`card reveal reveal-delay-${(i % 4) + 1} ${styles.certCard}`}>
                  <div className={styles.certIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2">
                      <path d="M12 15l-3 3 1-4-3-3h4L12 7l1 4h4l-3 3 1 4z"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  <h4 className={styles.certName}>{cert.name}</h4>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <div className={styles.certMeta}>
                    <span className={styles.certDate}>{cert.date}</span>
                    {cert.duration && <span className={styles.certDuration}>{cert.duration}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
