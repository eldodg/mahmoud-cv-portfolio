import { useMemo, useState } from "react";
import {
  experiences,
  projects,
  skills
} from "./data/cvData";
import "./index.css";

function App() {
  const [language, setLanguage] = useState("ar");
  const [mode, setMode] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState(null);

  const isArabic = language === "ar";

  const filteredExperiences = useMemo(() => {
    if (mode === "all") return experiences;

    return experiences.filter((item) =>
      item.tracks.includes(mode)
    );
  }, [mode]);

  const filteredProjects = useMemo(() => {
    if (mode === "all") return projects;

    return projects.filter((item) => item.category === mode);
  }, [mode]);

  const filteredSkills = useMemo(() => {
    if (mode === "all") return skills;

    return skills.filter((item) => item.category === mode);
  }, [mode]);

  const labels = {
    ar: {
      title: "محمود محمد الهواري",
      subtitle:
        "أخصائي أول تربية اجتماعية وصحة نفسية | خبير حلول تكنولوجيا المعلومات والإلكترونيات",
      summary:
        "مهني متعدد المهارات يجمع بين التربية الاجتماعية والصحة النفسية وتطوير البرمجيات والذكاء الاصطناعي والإلكترونيات.",
      education: "التربية والصحة النفسية",
      tech: "البرمجيات والإلكترونيات",
      all: "كل الخبرات",
      timeline: "الخط الزمني للخبرات",
      projects: "المشروعات والحلول",
      skills: "المهارات والكفاءات",
      contact: "تواصل معي",
      download: "تحميل السيرة الذاتية",
      details: "التفاصيل",
      close: "إغلاق"
    },
    en: {
      title: "Mahmoud Mohamed El-Hawary",
      subtitle:
        "Senior Social Work & Mental Health Specialist | IT Solutions & Electronics Expert",
      summary:
        "A multidisciplinary professional combining social work, mental health, software development, AI integration, and electronics expertise.",
      education: "Education & Mental Health",
      tech: "Software & Electronics",
      all: "All Experience",
      timeline: "Professional Timeline",
      projects: "Projects & Solutions",
      skills: "Skills & Competencies",
      contact: "Contact Me",
      download: "Download CV",
      details: "Details",
      close: "Close"
    }
  };

  const t = labels[language];

  return (
    <main dir={isArabic ? "rtl" : "ltr"}>
      <nav className="topbar">
        <strong>MH</strong>

        <div className="top-actions">
          <button
            onClick={() =>
              setLanguage(isArabic ? "en" : "ar")
            }
          >
            {isArabic ? "English" : "العربية"}
          </button>

          <a
            className="download-btn"
            href="/cv-en.pdf"
            download
          >
            {t.download}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-image">
          <img
            src="/profile.jpg"
            alt="Mahmoud Mohamed El-Hawary"
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            Senior Multidisciplinary Professional
          </p>

          <h1>{t.title}</h1>

          <h2>{t.subtitle}</h2>

          <p>{t.summary}</p>

          <div className="contact-buttons">
            <a href="https://wa.me/201271619151">
              WhatsApp
            </a>

            <a href="tel:+201271619151">
              Phone
            </a>

            <a href="mailto:e.m.elhawary@gmail.com">
              Email
            </a>

            <a
              href="https://mahmoud-elhawary.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="mode-switcher">
        <button
          className={mode === "all" ? "active" : ""}
          onClick={() => setMode("all")}
        >
          {t.all}
        </button>

        <button
          className={mode === "education" ? "active" : ""}
          onClick={() => setMode("education")}
        >
          {t.education}
        </button>

        <button
          className={mode === "tech" ? "active" : ""}
          onClick={() => setMode("tech")}
        >
          {t.tech}
        </button>
      </section>

      <section className="section">
        <h2>{t.timeline}</h2>

        <div className="timeline">
          {filteredExperiences.map((item) => (
            <article
              className="timeline-item"
              key={`${item.year}-${item.titleEn}`}
              onClick={() => setSelectedExperience(item)}
            >
              <span className="timeline-year">
                {item.year}
              </span>

              <div className="card">
                <h3>
                  {isArabic
                    ? item.titleAr
                    : item.titleEn}
                </h3>

                <p className="organization">
                  {isArabic
                    ? item.organizationAr
                    : item.organizationEn}
                </p>

                <p>
                  {isArabic
                    ? item.descriptionAr
                    : item.descriptionEn}
                </p>

                <button>
                  {t.details}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.projects}</h2>

        <div className="grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.titleEn}>
              <span className="project-label">
                {project.category === "tech"
                  ? "TECH"
                  : "EDUCATION"}
              </span>

              <h3>
                {isArabic
                  ? project.titleAr
                  : project.titleEn}
              </h3>

              <p>
                {isArabic
                  ? project.descriptionAr
                  : project.descriptionEn}
              </p>

              <div className="tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.skills}</h2>

        <div className="skills-list">
          {filteredSkills.map((skill) => (
            <div className="skill" key={skill.nameEn}>
              <div className="skill-heading">
                <span>
                  {isArabic
                    ? skill.nameAr
                    : skill.nameEn}
                </span>

                <strong>{skill.value}%</strong>
              </div>

              <div className="skill-bar">
                <span
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="assistant">
        <div>
          <span className="assistant-icon">AI</span>
          <div>
            <h2>Ask Mahmoud</h2>
            <p>
              {isArabic
                ? "اكتب سؤالك عن الخبرات والمهارات."
                : "Ask about experience and skills."}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            alert(
              isArabic
                ? "المساعد الذكي الكامل يحتاج إلى ربطه بخدمة AI."
                : "The full AI assistant requires an AI service connection."
            );
          }}
        >
          {isArabic ? "ابدأ المحادثة" : "Start Chat"}
        </button>
      </section>

      <footer>
        <p>© 2026 Mahmoud Mohamed El-Hawary</p>
      </footer>

      {selectedExperience && (
        <div className="modal-backdrop">
          <div className="modal">
            <button
              className="close"
              onClick={() =>
                setSelectedExperience(null)
              }
            >
              ×
            </button>

            <h2>
              {isArabic
                ? selectedExperience.titleAr
                : selectedExperience.titleEn}
            </h2>

            <p>
              {isArabic
                ? selectedExperience.organizationAr
                : selectedExperience.organizationEn}
            </p>

            <p>
              {isArabic
                ? selectedExperience.descriptionAr
                : selectedExperience.descriptionEn}
            </p>

            <button
              onClick={() =>
                setSelectedExperience(null)
              }
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
