import { ScrollReveal } from "@/components/ScrollReveal";
import styles from "./research.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Nahiyan Al Farook",
  description: "Research interests, experience, and academic publications by Engr. Nahiyan Al Farook.",
};

const researchInterests = [
  { name: "Ground Improvement", icon: "🏗️" },
  { name: "Granular Pile Foundation", icon: "🪨" },
  { name: "Sustainable Materials", icon: "♻️" },
  { name: "Finite Element Method", icon: "📐" },
  { name: "Reclaimed Asphalt Pavement", icon: "🛣️" },
  { name: "Geo-textile", icon: "🧵" },
  { name: "Artificial Neural Network", icon: "🧠" },
  { name: "Foundation Engineering", icon: "🏛️" },
  { name: "Structural Analysis", icon: "📊" },
  { name: "Liquefaction", icon: "💧" },
  { name: "3D Printing", icon: "🖨️" },
  { name: "Steel Structure", icon: "⚙️" },
];

const researchExperience = [
  {
    id: 1,
    role: "Research Assistant (Part-time)",
    period: "July 2024 – January 2026",
    lab: "Geotechnical Engineering Lab",
    institution: "Islamic University of Technology",
    supervisor: "Professor Dr. Hossain Md. Shahin",
    labUrl: "https://cee.iutoic-dhaka.edu/research-1/labs",
    responsibilities: [
      "Mentored undergraduates in experimental design, data analysis, and laboratory techniques.",
      "Designed custom instrumentation and conducted geotechnical testing as per ASTM standards.",
      "Trained undergraduates on the development of column behavior models using PLAXIS 3D.",
      "Analyzed experimental and numerical data to assess technical and economic feasibility.",
    ],
  },
  {
    id: 2,
    role: "Undergraduate Researcher (Senior Year)",
    period: "July 2023 – June 2024",
    lab: "Geotechnical Engineering Lab",
    institution: "Islamic University of Technology",
    supervisor: "Professor Dr. Hossain Md. Shahin",
    labUrl: "https://cee.iutoic-dhaka.edu/research-1/labs",
    responsibilities: [
      "Designed custom instrumentation and conducted ASTM-compliant testing to determine soil parameters.",
      "Developed PLAXIS 3D finite element models to simulate RAP-infused granular pile behavior.",
      "Analyzed experimental and numerical data to study RAP-infused granular pile behavior.",
      "Executed comprehensive literature reviews and contributed to thesis proposal development.",
    ],
  },
  {
    id: 3,
    role: "Undergraduate Researcher (Junior Year)",
    period: "January 2022 – June 2023",
    lab: "Environmental Engineering Lab",
    institution: "Islamic University of Technology",
    supervisor: "Associate Professor Dr. Amimul Ahsan",
    labUrl: "https://cee.iutoic-dhaka.edu/research-1/labs",
    responsibilities: [
      "Developed Artificial Neural Network models to forecast industrial impact on urban river water quality.",
      "Acquired 20 years of surface water quality data through coordination with government agencies.",
      "Performed data analysis, including time-series and correlation studies, to identify key pollution parameters.",
      "Conducted literature reviews and supported thesis development on hydrological systems.",
    ],
  },
];

const publications = [
  {
    id: 1,
    authors: "Farook, N. A., Mahtab, A., Shahin, H. M., Musaddik, N., Kabir, M. U., & Zahid, C. Z. B.",
    year: "2026",
    title: "Experimental and numerical analysis of reclaimed asphalt pavement-infused granular piles for lean clay improvement.",
    journal: "International Journal of Pavement Research and Technology",
    doi: "https://doi.org/10.1007/s42947-026-00756-z",
    status: "Published",
  },
  {
    id: 2,
    authors: "Mahtab, A., Farook, N. A., Kabir, M. U., Tashfiah, R., & Musaddik, N.",
    year: "",
    title: "Axisymmetric laboratory model testing of a single floating RAP–stone granular pile in reconstituted clay and sand under vertical loading.",
    journal: "",
    doi: "",
    status: "Abstract Submitted",
  },
  {
    id: 3,
    authors: "Tashfiah, R., Farook, N. A., Musaddik, N., Mahtab, A., & Shahin, H. M.",
    year: "",
    title: "Sustainable ground improvement with granular piles incorporating recycled asphalt pavement (RAP).",
    journal: "",
    doi: "",
    status: "Submitted for Review",
  },
  {
    id: 4,
    authors: "Farook, N. A., Mahtab, A., Abrar, M. F., Rafi, M., Koatha, I. A. & Ahsan, A.",
    year: "",
    title: "Predicting the impact of industrial effluent on the Buriganga and Turag Rivers in Dhaka using artificial neural networks and regression analysis.",
    journal: "",
    doi: "",
    status: "In Preparation",
  },
];

function getStatusBadge(status: string) {
  switch (status) {
    case "Published": return "badge badge-green";
    case "Abstract Submitted": return "badge badge-yellow";
    case "Submitted for Review": return "badge badge-blue";
    case "In Preparation": return "badge badge-brown";
    default: return "badge";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "Published": return "✅";
    case "Abstract Submitted": return "📝";
    case "Submitted for Review": return "🔄";
    case "In Preparation": return "📋";
    default: return "📄";
  }
}

export default function ResearchPage() {
  return (
    <>
      <ScrollReveal />
      <div className={styles.page}>
        {/* Research Interests */}
        <section className={`section grid-bg ${styles.interests}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Focus Areas</span>
              <h2>Research Interests</h2>
              <p>Exploring innovative solutions in geotechnical engineering, sustainability, and computational methods.</p>
            </div>

            <div className={styles.interestsGrid}>
              {researchInterests.map((interest, i) => (
                <div key={interest.name} className={`card reveal reveal-delay-${(i % 4) + 1} ${styles.interestCard}`}>
                  <span className={styles.interestIcon}>{interest.icon}</span>
                  <span className={styles.interestName}>{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section className={`section ${styles.experience}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Journey</span>
              <h2>Research Experience</h2>
              <p>A timeline of academic research across geotechnical and environmental engineering.</p>
            </div>

            <div className={styles.timeline}>
              {researchExperience.map((exp, i) => (
                <div key={exp.id} className={`reveal reveal-delay-${i + 1} ${styles.timelineItem}`}>
                  <div className={styles.timelineDot} />
                  <div className={`card ${styles.timelineCard}`}>
                    <div className={styles.timelineHeader}>
                      <h3>{exp.role}</h3>
                      <span className="badge badge-green">{exp.period}</span>
                    </div>
                    <p className={styles.timelineInstitution}>
                      <a href={exp.labUrl} target="_blank" rel="noopener noreferrer">
                        {exp.lab}
                      </a>
                      , {exp.institution}
                    </p>
                    <p className={styles.timelineSupervisor}>
                      <em>Under the supervision of {exp.supervisor}</em>
                    </p>
                    <h4 className={styles.respTitle}>Responsibilities:</h4>
                    <ul className={styles.respList}>
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className={`section grid-bg ${styles.publications}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Papers</span>
              <h2>Academic Publications</h2>
              <p>Contributing to the body of knowledge in civil and environmental engineering.</p>
            </div>

            <div className={styles.pubList}>
              {publications.map((pub, i) => (
                <div key={pub.id} className={`card reveal reveal-delay-${i + 1} ${styles.pubCard}`}>
                  <div className={styles.pubHeader}>
                    <span className={styles.pubNumber}>0{pub.id}</span>
                    <span className={getStatusBadge(pub.status)}>
                      {getStatusIcon(pub.status)} {pub.status}
                    </span>
                  </div>
                  <h4 className={styles.pubTitle}>{pub.title}</h4>
                  <p className={styles.pubAuthors}>{pub.authors} {pub.year && `(${pub.year})`}</p>
                  {pub.journal && (
                    <p className={styles.pubJournal}>
                      <em>{pub.journal}</em>
                    </p>
                  )}
                  {pub.doi && (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className={styles.pubLink}>
                      Read Paper
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className={`reveal ${styles.pubStats}`}>
              <div className={styles.pubStatItem}>
                <span className={styles.pubStatValue}>1</span>
                <span className={styles.pubStatLabel}>Published</span>
              </div>
              <div className={styles.pubStatItem}>
                <span className={styles.pubStatValue}>2</span>
                <span className={styles.pubStatLabel}>Under Review</span>
              </div>
              <div className={styles.pubStatItem}>
                <span className={styles.pubStatValue}>1</span>
                <span className={styles.pubStatLabel}>In Preparation</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
