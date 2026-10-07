import { useMemo, useState } from "react";
import { experiences, projects, skills } from "./data/cvData";
import "./index.css";

function App() {
  const [language, setLanguage] = useState("ar");
  const [mode, setMode] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState(null);

  // حالات المساعد الذكي
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  const isArabic = language === "ar";

  const filteredExperiences = useMemo(() => {
    if (mode === "all") return experiences;
    return experiences.filter((item) => item.tracks.includes(mode));
  }, [mode]);

  const filteredProjects = useMemo(() => {
    if (mode === "all") return projects;
    return projects.filter((item) => item.category === mode);
  }, [mode]);

  const filteredSkills = useMemo(() => {
    if (mode === "all") return skills;
    return skills.filter((item) => item.category === mode);
  }, [mode]);

  // دالة الإجابة الذكية للمساعد
  const handleQuery = (query) => {
    if (!query || !query.trim()) return;
    setAiQuestion(query);

    const q = query.toLowerCase();

    if (
      q.includes("inverter") ||
      q.includes("أنفرتر") ||
      q.includes("انفرتر") ||
      q.includes("باور") ||
      q.includes("power")
    ) {
      setAiAnswer(
        isArabic
          ? "محمود يمتلك خبرة طويلة كمالك ومهندس تنفيذي لمركز POWER CENTER، متخصص في تصميم وصيانة إلكترونيات القوى، كروت التحكم، وتتبع أعطال أجهزة Inverters والـ VFD."
          : "Mahmoud is the owner and lead engineer at Power Center, specialized in power electronics design, control board troubleshooting, and VFD/Inverter repair."
      );
    } else if (
      q.includes("stem") ||
      q.includes("ستيم") ||
      q.includes("مدرسة")
    ) {
      setAiAnswer(
        isArabic
          ? "يعمل محمود حالياً كأخصائي اجتماعي ومطور أنظمة رقمية بمدرسة STEM بالإسكندرية، حيث يقود التحول الرقمي لمكتب التربية الاجتماعية وإدارة المنظومة الطلابية."
          : "Mahmoud currently serves as a Social Specialist & Digital Systems Developer at STEM High School - Alexandria, leading digital transformation for student services."
      );
    } else if (
      q.includes("ذكاء") ||
      q.includes("ai") ||
      q.includes("برمجة") ||
      q.includes("flutterflow") ||
      q.includes("n8n")
    ) {
      setAiAnswer(
        isArabic
          ? "يطور محمود تطبيقات الويب والجيل الجديد من الأتمتة باستخدام FlutterFlow وSupabase وn8n وسكريبتات Python وبناء وكلاء الذكاء الاصطناعي (AI Agents)."
          : "Mahmoud builds web apps and automation workflows using FlutterFlow, Supabase, n8n, Python scripts, and integrated AI Agents."
      );
    } else if (
      q.includes("صحة") ||
      q.includes("نفسية") ||
      q.includes("إرشاد") ||
      q.includes("ارشاد") ||
      q.includes("اجتماعي")
    ) {
      setAiAnswer(
        isArabic
          ? "يمتلك محمود خبرة تزيد عن 13 عاماً في الإرشاد النفسي، تعديل السلوك، إدارة الحالات الطلابية، والتوجيه الاجتماعي المباشر والقيادة."
          : "Mahmoud brings over 13 years of experience in mental health counseling, behavioral intervention, student case management, and educational guidance."
      );
    } else {
      setAiAnswer(
        isArabic
          ? "محمود متخصص مجتمعي وتقني يجمع بين التربية الاجتماعية والصحة النفسية وتطوير البرمجيات وإلكترونيات القوى. يمكنك الاستفسار عن: Inverters، STEM، البرمجة، أو الإرشاد النفسي."
          : "Mahmoud is a multidisciplinary specialist combining social work, mental health, software engineering, and power electronics. Try asking about: Inverters, STEM, AI, or Counseling."
      );
    }
  };

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
          <button onClick={() => setLanguage(isArabic ? "en" : "ar")}>
            {isArabic ? "English" : "العربية"}
          </button>

          <a className="download-btn" href="/cv-en.pdf" download>
            {t.download}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-image">
          <img src="/profile.jpg" alt="Mahmoud Mohamed El-Hawary" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Senior Multidisciplinary Professional</p>

          <h1>{t.title}</h1>

          <h2>{t.subtitle}</h2>

          <p>{t.summary}</p>

          <div className="contact-buttons">
            <a href="https://wa.me/201111383748" target="_blank" rel="noreferrer">
              WhatsApp
            </a>

            <a href="tel:+201111383748">Phone</a>

            <a href="mailto:e.m.elhawary@gmail.com">Email</a>

            <a
              href="https://mahmoud-cv-portfolio.mahmoud-el-hawary.workers.dev/"
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
              <span className="timeline-year">{item.year}</span>

              <div className="card">
                <h3>{isArabic ? item.titleAr : item.titleEn}</h3>

                <p className="organization">
                  {isArabic ? item.organizationAr : item.organizationEn}
                </p>

                <p>
                  {isArabic ? item.descriptionAr : item.descriptionEn}
                </p>

                <button>{t.details}</button>
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
                {project.category === "tech" ? "TECH" : "EDUCATION"}
              </span>

              <h3>{isArabic ? project.titleAr : project.titleEn}</h3>

              <p>{isArabic ? project.descriptionAr : project.descriptionEn}</p>

              <div className="tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
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
                <span>{isArabic ? skill.nameAr : skill.nameEn}</span>

                <strong>{skill.value}%</strong>
              </div>

              <div className="skill-bar">
                <span style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* المساعد الذكي التفاعلي Ask Mahmoud AI */}
      <section className="assistant-box">
        <div className="assistant-header">
          <span className="assistant-icon">AI</span>
          <div>
            <h2>Ask Mahmoud AI</h2>
            <p>
              {isArabic
                ? "أهلاً بك! أنا المساعد الذكي الخاص بمحمود الهواري. يمكنك سؤالي عن خبراته في STEM، صيانة الـ Inverters، أو حلول البرمجة والصحة النفسية."
                : "Welcome! I am Mahmoud's AI Assistant. Ask me about his STEM experience, Inverters maintenance, software solutions, or mental health expertise."}
            </p>
          </div>
        </div>

        <div className="quick-topics">
          <button onClick={() => handleQuery("Inverters")}>Inverters</button>
          <button onClick={() => handleQuery(isArabic ? "مدرسة STEM" : "STEM School")}>
            {isArabic ? "مدرسة STEM" : "STEM School"}
          </button>
          <button onClick={() => handleQuery(isArabic ? "الذكاء الاصطناعي" : "AI Workflow")}>
            {isArabic ? "الذكاء الاصطناعي" : "AI Workflow"}
          </button>
          <button onClick={() => handleQuery(isArabic ? "الصحة النفسية" : "Mental Health")}>
            {isArabic ? "الصحة النفسية" : "Mental Health"}
          </button>
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder={isArabic ? "اكتب سؤالك هنا..." : "Type your question..."}
            value={aiQuestion}
            onChange={(e) => setAiQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleQuery(aiQuestion)}
          />
          <button onClick={() => handleQuery(aiQuestion)}>
            {isArabic ? "إرسال" : "Send"}
          </button>
        </div>

        {aiAnswer && (
          <div className="assistant-response">
            <strong>{isArabic ? "إجابة المساعد:" : "AI Response:"}</strong>
            <p>{aiAnswer}</p>
          </div>
        )}
      </section>

      <footer>
        <p>© 2026 Mahmoud Mohamed El-Hawary</p>
      </footer>

      {selectedExperience && (
        <div className="modal-backdrop">
          <div className="modal">
            <button
              className="close"
              onClick={() => setSelectedExperience(null)}
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

            <button onClick={() => setSelectedExperience(null)}>
              {t.close}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;