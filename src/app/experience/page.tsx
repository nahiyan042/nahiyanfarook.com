import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import styles from "./experience.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Nahiyan Al Farook",
  description: "Professional experience of Engr. Nahiyan Al Farook in structural engineering, sustainability, and creative direction.",
};

const experiences = [
  {
    id: 1,
    role: "Structural Engineer",
    company: "Dimension Nano Engineering (DNEL)",
    companyUrl: "https://dimensionel.com/",
    period: "January 2025 – March 2026",
    location: "Uttara, Dhaka 1230, Bangladesh",
    logo: "/images/dnel-logo.png",
    color: "var(--bright-blue)",
    tagColor: "badge-blue",
    description: "Structural & Retrofitting Design, Structural Analysis using ETABS, SAFE & STAAD Pro, BOQ Development, Proposal Writing, Project Management.",
    projects: [
      "Design & Construction of a 4 Storied Steel Structure for Bancoff Ltd. in Narayganj",
      "Design & Construction of a Single Storied Generator Building for Stella Manufacturing Bangladesh Ltd. at Bay Economic Zone",
      "Detailed Engineering Assessment (DEA) & Retro-fitting design for Lantabur Apparels Ltd.",
      "DEA & Retro-fitting design for Cherry Intimate Ltd.",
      "DEA & Retro-fitting design for Swanlon Co. Ltd.",
      "DEA & Retro-fitting design and RSC Approval for KAIXI Fashion Ltd Bangladesh",
    ],
    tags: ["ETABS", "SAFE", "STAAD Pro", "Steel Structure", "Retrofitting"],
    image: "/images/project-2.png",
  },
  {
    id: 2,
    role: "Founder & Creative Director",
    company: "Nafrin Atelier",
    companyUrl: "https://nahiyanfarook.com/#creative-director",
    period: "June 2022 – Present",
    location: "Uttara, Dhaka 1230, Bangladesh",
    logo: "/images/nafrin-logo.png",
    color: "var(--deep-brown)",
    tagColor: "badge-brown",
    description: "As the Founder and Principal Designer of Nafrin Atelier, I leverage over five years of expertise in corporate graphics, web development, and photography to deliver integrated design solutions.",
    projects: [],
    responsibilities: "Full client lifecycle management — from initial consultation to final delivery, providing corporate clients with modern graphic design, exclusive photography, and intuitive, user-friendly web designs that effectively elevate their digital presence.",
    tags: ["Photography", "Web Design", "Graphic Design", "Branding"],
    image: null,
  },
  {
    id: 3,
    role: "Sustainability Engineer",
    company: "The Sustainability Nexus Ltd. (SusNex)",
    companyUrl: "https://susnex.com/",
    period: "September 2021 – January 2025",
    location: "Uttara, Dhaka 1230, Bangladesh",
    logo: "/images/susnex-logo.png",
    color: "var(--teal)",
    tagColor: "badge-teal",
    description: "Management System Audits (ISO 9001, 14001, 45001), Training Management, Business Development, Proposal Writing, DEA, Energy Assessments, ETP Assessments, GRI Sustainability Reporting.",
    projects: [
      "DEA & Retro-fitting design for Teen Age Modern Fashion Ltd",
      "Assessment of NOSTRI Fire Safety Lab requirement & architectural design with German Development Agency (GIZ)",
      "Environment Sustainability & Climate Change Assessment of Fred Hollows Foundation",
      "Pilot project with BGMEA on ESG Data Reporting / Sustainability Report for 4 member factories",
      "Management System Audit for ISO 9001:2015 of SusNex",
      "Research Support to GIZ on JHUT Market System of Bangladesh",
      "Energy Audit of Pioneer Group",
      "Developing Sustainability Strategy and Writing Sustainability Report for Bashundhara Group",
    ],
    tags: ["ISO Auditing", "ESG Reporting", "GRI Standards", "Sustainability"],
    image: "/images/project-1.png",
  },
];

const voluntaryExperience = [
  {
    role: "General Secretary",
    organization: "BM Global Foundation",
    orgUrl: "https://bmglobal.org/",
    period: "October 2024 – Present",
    location: "Floral Park, NY 11002, United States of America",
    description: "Leading a U.S.-based non-profit foundation dedicated to philanthropic initiatives in Bangladesh. Spearheaded the establishment and operational management of country office in Bangladesh. Led field surveys on women's reproductive health in underserved communities of Kushtia and organized community outreach programs.",
  },
  {
    role: "Volunteer",
    organization: "United Nations Volunteers",
    period: "January 2018 – February 2021",
    location: "",
    description: "",
  },
  {
    role: "Volunteer",
    organization: "Bidyanondo Foundation",
    period: "January 2020 – December 2020",
    location: "",
    description: "",
  },
  {
    role: "Secretary (Festival & Outreach)",
    organization: "Notre Dame College Eco & Space Club",
    period: "June 2017 – April 2019",
    location: "",
    description: "",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <ScrollReveal />
      <div className={styles.page}>
        {/* Professional Experience */}
        <section className={`section grid-bg`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Career</span>
              <h2>Professional Experience</h2>
              <p>Bridging structural engineering, sustainability consulting, and creative design.</p>
            </div>

            <div className={styles.expList}>
              {experiences.map((exp, i) => (
                <div key={exp.id} className={`reveal reveal-delay-${i + 1} ${styles.expCard}`}>
                  <div className={styles.expLeft} style={{ borderColor: exp.color }}>
                    <div className={styles.expLogoWrapper}>
                      <Image src={exp.logo} alt={exp.company} width={60} height={60} className={styles.expLogo} />
                    </div>
                    <div className={styles.expMeta}>
                      <h3>{exp.role}</h3>
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.expCompany} style={{ color: exp.color }}>
                        {exp.company}
                      </a>
                      <p className={styles.expPeriod}>{exp.period}</p>
                      <p className={styles.expLocation}>{exp.location}</p>
                    </div>
                  </div>

                  <div className={styles.expRight}>
                    <p className={styles.expDesc}>{exp.description}</p>
                    
                    {exp.responsibilities && (
                      <p className={styles.expDesc} style={{ marginTop: '8px' }}>{exp.responsibilities}</p>
                    )}

                    {exp.projects.length > 0 && (
                      <>
                        <h4 className={styles.projectsTitle}>Key Projects:</h4>
                        <ul className={styles.projectsList}>
                          {exp.projects.map((project, j) => (
                            <li key={j}>{project}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className={styles.expTags}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className={`badge ${exp.tagColor}`}>{tag}</span>
                      ))}
                    </div>

                    {exp.image && (
                      <div className={styles.expImageWrapper}>
                        <Image src={exp.image} alt={`${exp.company} project`} width={600} height={400} className={styles.expImage} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voluntary Experience */}
        <section className={`section ${styles.voluntary}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Community</span>
              <h2>Extra-Curricular & Voluntary</h2>
              <p>Contributing to community development and social impact.</p>
            </div>

            <div className={styles.voluntaryGrid}>
              {voluntaryExperience.map((vol, i) => (
                <div key={i} className={`card reveal reveal-delay-${i + 1} ${styles.voluntaryCard}`}>
                  <div className={styles.voluntaryHeader}>
                    <h4>{vol.role}</h4>
                    <span className="badge badge-green">{vol.period}</span>
                  </div>
                  <p className={styles.voluntaryOrg}>
                    {vol.orgUrl ? (
                      <a href={vol.orgUrl} target="_blank" rel="noopener noreferrer">{vol.organization}</a>
                    ) : vol.organization}
                  </p>
                  {vol.location && <p className={styles.voluntaryLocation}>{vol.location}</p>}
                  {vol.description && <p className={styles.voluntaryDesc}>{vol.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
