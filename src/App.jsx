import { useMemo, useState } from "react";
import {
  experiences,
  projects,
  skills,
  educationData,
  certificationsData
} from "./data/cvData";
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

  // دالة الإجابة الشاملة والتفاعلية للمساعد
  const handleQuery = (query) => {
    if (!query || !query.trim()) return;
    setAiQuestion(query);

    const q = query.toLowerCase();

    if (
      q.includes("إلكترونيات") ||
      q.includes("اليكترونيات") ||
      q.includes("شبكات") ||
      q.includes("انفرتر") ||
      q.includes("أنفرتر") ||
      q.includes("inverter") ||
      q.includes("power") ||
      q.includes("باور")
    ) {
      setAiAnswer(
        isArabic
          ? "تغطي خبرة محمود في مجال الإلكترونيات والتكنولوجيا أكثر من 15 عاماً؛ بدءاً من إدارة الشبكات وصيانة المواقع، مروراً بإدارة وتأسيس مراكز الصيانة، وحتى تأسيس 'Power Center' المتخصص في تصميم وصيانة الدوائر الإلكترونيه ، كروت التحكم، وأجهزة Inverters والـ VFD. هل تود الاستفسار عن خدمة هندسية محددة؟"
          : "Mahmoud's tech & electronics expertise spans over 15 years, covering network infrastructure, computer systems, and power electronics design/repair at Power Center (inverters, VFDs, and control boards). Would you like to know more about a specific technical solution?"
      );
    } else if (
      q.includes("تربية") ||
      q.includes("تعليم") ||
      q.includes("مدرسة") ||
      q.includes("وزارة") ||
      q.includes("stem") ||
      q.includes("ستيم")
    ) {
      setAiAnswer(
        isArabic
          ? "محمود له مسيرة ممتدة بوزارة التربية والتعليم؛ عمل خلالها كأخصائي اجتماعي بالمراحل الثلاثة الابتدائية والاعدادية والثانوية، وعضو فني بالتوجيه والإدارة التعليمية، وحالياً يعمل بمدرسة STEM بالإسكندرية حيث يدمج خبرته الاجتماعية بالتقنية لقيادة التحول الرقمي لمكتب التربية الاجتماعية. هل ترغب في الاطلاع على المنظومة الرقمية التي طورها؟"
          : "Mahmoud has an extensive career with the Ministry of Education as a Social Worker across primary and secondary stages, educational administration, and currently at STEM High School Alexandria, leading digital transformation for student services. Would you like to explore his digital platform?"
      );
    } else if (
      q.includes("اجتماعي") ||
      q.includes("إرشاد") ||
      q.includes("ارشاد") ||
      q.includes("نفسية") ||
      q.includes("سلوك") ||
      q.includes("حالات")
    ) {
      setAiAnswer(
        isArabic
          ? "بصفته أخصائي اجتماعي أول، يمتلك محمود خبرة عميقة في الإرشاد التربوي والاجتماعي، تعديل السلوك، إدارة الحالات الطلابية، الاتحادات الطلابية، والرعاية النفسية والاجتماعية الشاملة، مع استخدام أدوات رقمية حديثة لمتابعة الحالات. هل تود معرفة منهجية العمل الاجتماعي لديه؟"
          : "As a Senior Social Worker, Mahmoud specializes in educational counseling, student behavior modification, case management, and student unions, integrated with modern digital tracking tools. Would you like to know more about his social work methodology?"
      );
    } else if (
      q.includes("برمجة") ||
      q.includes("ذكاء") ||
      q.includes("ai") ||
      q.includes("تطبيق") ||
      q.includes("flutterflow") ||
      q.includes("n8n")
    ) {
      setAiAnswer(
        isArabic
          ? "يجمع محمود بين البرمجة والأتمتة؛ حيث يطور تطبيقات الويب والمنصات التفاعلية باستخدام FlutterFlow وSupabase، ويستعين بسكريبتات Python وأدوات مثل n8n وبناء وكلاء الذكاء الاصطناعي (AI Agents) لتسهيل وتطوير منظومات العمل. هل تود استكشاف مشروعاته البرمجية؟"
          : "Mahmoud builds web applications and smart workflow automations using FlutterFlow, Supabase, Python, n8n, and custom AI Agents to streamline complex processes. Would you like to check his featured software projects?"
      );
    } else {
      setAiAnswer(
        isArabic
          ? "أهلاً بك! محمود الهواري يجمع بين مجالات متنوعة: الخدمة والتربية الاجتماعية، الدوائر الإلكترونيه والشبكات، وتطوير البرمجيات والذكاء الاصطناعي. يمكنك سؤالي عن: الخبرة الاجتماعية، المنظومة الرقمية، الإلكترونيات، أو الحلول البرمجية!"
          : "Welcome! Mahmoud El-Hawary combines Social Work, Power Electronics & Networks, and Software Development & AI. Feel free to ask about: Social Work Experience, Digital Systems, Electronics, or Software Solutions!"
      );
    }
  };

  const labels = {
    ar: {
      title: "محمود محمد الهواري",
      subtitle:
        "أخصائي أول تربية اجتماعية وتنمية طلابية | خبير حلول البرمجيات و الدوائر الإلكترونيه ",
      summary:
        "مهني متعدد التخصصات يدمج الخبرة العميقة في الخدمة الاجتماعية والإرشاد التربوي مع تطوير البرمجيات، أتمتة الذكاء الاصطناعي، وهندسة الإلكترونيات.",
      education: "التربية والخدمة الاجتماعية",
      tech: "البرمجيات والإلكترونيات",
      all: "كل الخبرات",
      timeline: "الخط الزمني للخبرات",
      projects: "المشروعات والحلول",
      skills: "المهارات والكفاءات",
      academicTitle: "المؤهلات العلمية والأكاديمية",
      certificationsTitle: "الشهادات والبرامج التدريبية",
      contact: "تواصل معي",
      download: "تحميل السيرة الذاتية",
      details: "التفاصيل",
      close: "إغلاق"
    },
    en: {
      title: "Mahmoud Mohamed El-Hawary",
      subtitle:
        "Senior Social Work & Student Development Specialist | Software & Power Electronics Expert",
      summary:
        "A multidisciplinary professional merging extensive social work & counseling experience with software engineering, AI automation, and power electronics.",
      education: "Social Work & Education",
      tech: "Software & Electronics",
      all: "All Experience",
      timeline: "Professional Timeline",
      projects: "Projects & Solutions",
      skills: "Skills & Competencies",
      academicTitle: "Academic Credentials",
      certificationsTitle: "Certifications & Training",
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
            <a href="https://wa.me/201552130669" target="_blank" rel="noreferrer">
              WhatsApp
            </a>

            <a href="tel:+201111383748">Phone</a>

            <a href="mailto:e.m.elhawary@gmail.com">Email</a>

            <a href="https://www.linkedin.com/in/eng-elhawary" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://code4zone.com" target="_blank" rel="noreferrer">
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

                <p>{isArabic ? item.descriptionAr : item.descriptionEn}</p>

                <button>{t.details}</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* قسم المؤهلات العلمية والأكاديمية */}
      <section className="section">
        <h2>{t.academicTitle}</h2>
        <div className="grid">
          {educationData.map((edu, idx) => (
            <article className="project-card" key={idx}>
              <span className="project-label">{edu.year}</span>
              <h3>{isArabic ? edu.titleAr : edu.titleEn}</h3>
              <p>{isArabic ? edu.institutionAr : edu.institutionEn}</p>
            </article>
          ))}
        </div>
      </section>

      {/* قسم الشهادات والدورات التدريبية */}
      <section className="section">
        <h2>{t.certificationsTitle}</h2>
        <div className="grid">
          {certificationsData.map((cert, idx) => (
            <article className="project-card" key={idx}>
              <span className="project-label">{cert.category.toUpperCase()}</span>
              <h3>{isArabic ? cert.titleAr : cert.titleEn}</h3>
              <p>{isArabic ? cert.issuerAr : cert.issuerEn}</p>
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

      {/* المساعد الذكي الشامل والتفاعلي Ask Mahmoud AI */}
      <section className="assistant-box">
        <div className="assistant-header">
          <span className="assistant-icon">AI</span>
          <div>
            <h2>Ask Mahmoud AI</h2>
            <p>
              {isArabic
                ? "أهلاً بك! أنا المساعد الذكي لمحمود الهواري. اسألني عن الخبرة الاجتماعية والتربوية، الإلكترونيات والشبكات، أو البرمجة والذكاء الاصطناعي."
                : "Welcome! I am Mahmoud's AI Assistant. Ask me about Social Work & Education, Electronics & Networks, or Software & AI Solutions."}
            </p>
          </div>
        </div>

        {/* أزرار الاقتراحات السريعة الشاملة */}
        <div className="quick-topics">
          <button onClick={() => handleQuery(isArabic ? "التربية والخدمة الاجتماعية" : "Social Work")}>
            {isArabic ? "التربية والخدمة الاجتماعية" : "Social Work"}
          </button>
          <button onClick={() => handleQuery(isArabic ? "قطاع التعليم والمدارس" : "Education Sector")}>
            {isArabic ? "قطاع التعليم والمدارس" : "Education Sector"}
          </button>
          <button onClick={() => handleQuery(isArabic ? "الإلكترونيات والشبكات" : "Electronics & Networks")}>
            {isArabic ? "الإلكترونيات والشبكات" : "Electronics & Networks"}
          </button>
          <button onClick={() => handleQuery(isArabic ? "تطوير البرمجيات والذكاء الاصطناعي" : "Software & AI")}>
            {isArabic ? "تطوير البرمجيات والذكاء الاصطناعي" : "Software & AI"}
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