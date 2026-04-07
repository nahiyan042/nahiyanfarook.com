import { ScrollReveal } from "@/components/ScrollReveal";
import styles from "./skills.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills — Nahiyan Al Farook",
  description: "Technical skills, software proficiency, and laboratory expertise of Engr. Nahiyan Al Farook.",
};

const skillCategories = [
  {
    title: "Engineering Software",
    icon: "🔧",
    color: "var(--bright-blue)",
    skills: [
      { name: "Bentley PLAXIS 3D", level: 90 },
      { name: "CSI ETABS", level: 85 },
      { name: "CSI SAP2000", level: 80 },
      { name: "CSI SAFE", level: 85 },
      { name: "Bentley STAAD Pro", level: 80 },
      { name: "AutoCAD", level: 90 },
      { name: "Fusion 360", level: 75 },
      { name: "Origin Pro", level: 85 },
      { name: "MS Office", level: 95 },
    ],
  },
  {
    title: "Programming & Dev",
    icon: "💻",
    color: "var(--primary-green)",
    skills: [
      { name: "Python (Data Analysis)", level: 80 },
      { name: "C / C++", level: 75 },
      { name: "Web Development", level: 85 },
    ],
  },
  {
    title: "Design & Creative",
    icon: "🎨",
    color: "var(--deep-brown)",
    skills: [
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe Illustrator", level: 85 },
      { name: "Adobe Lightroom", level: 90 },
      { name: "Adobe After Effects", level: 70 },
      { name: "Adobe XD", level: 80 },
      { name: "Adobe Audition", level: 65 },
      { name: "Photography", level: 90 },
      { name: "Videography", level: 80 },
    ],
  },
];

const softSkills = [
  "Strong interpersonal & communication skills",
  "Ability to work collaboratively as part of a team",
  "Problem-solving",
  "Leadership",
  "Attention to detail",
  "Report/Proposal Writing",
];

const labTests = [
  "Particle Size Distribution (ASTM D7928)",
  "Liquid Limit and Plasticity Index (ASTM D4318)",
  "Specific Gravity of Soil Solids (ASTM D854-23)",
  "Hydrometer Analysis (ASTM D7928)",
  "Standard Proctor Compaction Test (ASTM D698)",
  "Unconfined Compressive Strength Test (ASTM D2166)",
  "Direct Shear Test (ASTM D3080)",
  "Triaxial Compression Test (ASTM D4767)",
  "California Bearing Ratio / CBR Test",
  "Sieve Analysis of Aggregates (ASTM C136)",
  "Absorption Test for Coarse Aggregates (ASTM C127)",
  "Bulk Specific Gravity Test (ASTM C127)",
  "Unit Weight and Voids in Aggregate (ASTM C29)",
];

export default function SkillsPage() {
  return (
    <>
      <ScrollReveal />
      <div className={styles.page}>
        {/* Technical Skills */}
        <section className={`section grid-bg`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Toolkit</span>
              <h2>Technical Skills & Proficiency</h2>
              <p>A comprehensive toolkit spanning engineering analysis, programming, and creative design.</p>
            </div>

            <div className={styles.skillsGrid}>
              {skillCategories.map((cat, i) => (
                <div key={cat.title} className={`card reveal reveal-delay-${i + 1} ${styles.skillCategory}`}>
                  <div className={styles.categoryHeader}>
                    <span className={styles.categoryIcon}>{cat.icon}</span>
                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  </div>
                  <div className={styles.skillsList}>
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className={styles.skillItem}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillPercent}>{skill.level}%</span>
                        </div>
                        <div className={styles.skillBar}>
                          <div
                            className={styles.skillFill}
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${cat.color}, ${cat.color}cc)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={`card reveal ${styles.softSkillsCard}`}>
              <h3 className={styles.softSkillsTitle}>
                <span>🤝</span> Professional Skills
              </h3>
              <div className={styles.softSkillsGrid}>
                {softSkills.map((skill) => (
                  <div key={skill} className={styles.softSkillItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Laboratory Expertise */}
        <section className={`section ${styles.labSection}`}>
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Laboratory</span>
              <h2>Geotechnical Lab Expertise</h2>
              <p>Comprehensive hands-on experience in soil and aggregate testing per ASTM/AASHTO standards.</p>
            </div>

            <div className={`card blueprint-line reveal ${styles.labCard}`}>
              <h3 className={styles.labTitle}>Geotechnical Engineering Lab Tests</h3>
              <div className={styles.labGrid}>
                {labTests.map((test, i) => (
                  <div key={i} className={styles.labItem}>
                    <span className={styles.labDot} />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
