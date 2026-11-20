import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Download,
  Code2,
  Layers3,
  Database,
  Terminal,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Sparkles,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Send,
  CheckCircle2,
  Clock3,
  Globe2,
  Monitor,
  FileText,
  ChevronRight,
} from "lucide-react";

const profile = {
  name: "Amit Kumar Pati",
  role: "Software Developer",
  location: "Sripura, Pubasahi, Jajpur, Odisha, India",
  email: "apati9587@gmail.com",
  phone: "+91 8018543476",
  github: "https://github.com/sanuamit",
  linkedin: "https://www.linkedin.com/in/amit-kumar-pati-975351241",
  portfolio: "https://sanuamit.github.io/Portfolio_Web/",
  mapQuery: "Sripura, Pubasahi, Jajpur, Odisha, India",
};

const navItems = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["JavaScript (ES6+)", "Java", "C", "C++", "Python"],
  },
  {
    icon: Layers3,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    icon: Terminal,
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "CRUD Operations"],
  },
  { icon: Database, title: "Databases", skills: ["MongoDB", "MySQL (Basics)"] },
  {
    icon: Monitor,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel"],
  },
  {
    icon: Sparkles,
    title: "Core Concepts",
    skills: [
      "OOP",
      "DBMS",
      "SQL Fundamentals",
      "Data Structures & Algorithms (Basics)",
      "Software Development Fundamentals",
    ],
  },
];

const internships = [
  {
    role: "Software Developer Intern",
    company: "Zaalima Development Pvt. Ltd.",
    period: "June 2025 – September 2025",
    location: "Bengaluru, India · Remote",
    points: [
      "Developed web application features using React.js, Node.js, Express.js and MongoDB.",
      "Created reusable UI components and responsive layouts using modern frontend technologies.",
      "Worked with backend APIs and database-driven application functionality.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    role: "Software Developer Intern",
    company: "VeriTech Software IT Services Pvt. Ltd.",
    period: "March 2024 – June 2024",
    location: "Noida, India · Remote",
    points: [
      "Developed responsive web interfaces using HTML, CSS, JavaScript and React.js.",
      "Implemented reusable components and layouts using Bootstrap and Tailwind CSS.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Graviton Web Technologies",
    period: "June 2023 – December 2023",
    location: "Bengaluru, India · Remote",
    points: [
      "Worked on full-stack web development using MongoDB, Express.js, React.js and Node.js.",
      "Developed responsive application components and worked on frontend-backend integration.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const projects = [
  {
    number: "01",
    title: "Task Management Application",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A responsive task management application built with React, HTML5 and CSS3. Includes task creation, updating, deletion and status management using React Hooks and component-based architecture.",
    stack: ["React.js", "HTML5", "CSS3", "React Hooks"],
    icon: CheckCircle2,
    tone: "violet",
    github: profile.github,
  },
  {
    number: "02",
    title: "Book Store Application",
    category: "FULL-STACK · MERN",
    description:
      "A full-stack book management application with MongoDB, Express, React and Node.js. Implements CRUD operations, REST API integration and database connectivity for managing book records.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    icon: Layers3,
    tone: "blue",
    github: profile.github,
  },
  {
    number: "03",
    title: "E-Health Care Management System",
    category: "CORE JAVA",
    description:
      "A console-based healthcare management application developed with Core Java, applying object-oriented principles including classes, objects, inheritance, encapsulation and abstraction.",
    stack: ["Core Java", "OOP"],
    icon: BriefcaseBusiness,
    tone: "green",
    github: profile.github,
  },
  {
    number: "04",
    title: "Student Management System",
    category: "PYTHON DEVELOPMENT",
    description:
      "A basic student management application using Python, with student record management, data entry, searching and updating using fundamental Python concepts.",
    stack: ["Python", "Record Management"],
    icon: GraduationCap,
    tone: "orange",
    github: profile.github,
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute:
      "Einstein Academy of Technology and Management (EATM), Bhubaneswar",
    period: "2024 – 2026",
    score: "79%",
    current: true,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "N.C. Autonomous College, Jajpur",
    period: "2019 – 2022",
    score: "78%",
  },
  {
    degree: "Higher Secondary (+2 Science)",
    institute: "Salandi Residential College, Bhadrak",
    period: "2017 – 2019",
    score: "55%",
  },
  {
    degree: "Secondary School Examination (10th)",
    institute: "Nandipur High School, Nandipur",
    period: "2016 – 2017",
    score: "55.5%",
  },
];

const certifications = [
  "Cisco ThingQbator — MERN Stack, MEAN Stack, HTML & CSS",
  "Let'sUpgrade, Tech Paathshala & ScholarHat — React.js, JavaScript, Java, DBMS, DSA in C++, Prompt Engineering",
  "Be10x, Office Master & Geekster — AI Certification Bootcamp, MS Office with AI, Git & GitHub",
  "Diploma in Computer Applications (DCA)",
  "Advanced Diploma in Computer Applications (ADCA)",
  "Office Master Certification",
  "MS Office with AI Workshop Certificate",
  "Excel for Beginners — Great Learning",
  "PowerPoint for Beginners — Great Learning",
  "Get Started with Spreadsheet Applications (Excel) — Coursera",
];

const officeSkills = [
  "Microsoft Word, Excel, PowerPoint & Outlook",
  "Spreadsheet data entry, formatting, formulas and calculations",
  "File management, folder organization and software installation",
  "Internet browsing and professional email communication",
  "Data entry, documentation and record maintenance",
  "Report preparation and professional presentations",
  "Online form submission, document uploads and portal operations",
];

const softSkills = [
  "Problem-Solving & Analytical Thinking",
  "Effective Communication",
  "Teamwork & Coordination",
  "Time Management & Organization",
  "Leadership & Decision-Making",
  "Critical Thinking",
  "Emotional & Social Intelligence",
  "Creativity & Innovation",
  "Stress Management & Adaptability",
  "Self-Motivation & Positive Attitude",
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [formState, setFormState] = useState("idle");
  const [formError, setFormError] = useState("");
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const attempt = video.play();
    if (attempt?.catch) attempt.catch(() => setPlaying(false));
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    setFormState("sending");
    setFormError("");

    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      to_email: "apati9587@gmail.com",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setFormState("sent");
      setFormError("");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setFormState("error");
      setFormError(
        "We couldn't confirm message delivery. Please contact apati9587@gmail.com.",
      );
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">
            <img src="/ap-logo.png" alt="AP Logo" />
          </span>
          <span>
            AMIT<span className="brand-muted"> / PORTFOLIO</span>
          </span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-button"
            aria-label="Toggle color theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-cta" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button menu-button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="availability-dot" /> OPEN TO ENTRY-LEVEL
              OPPORTUNITIES
            </motion.div>
            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              HELLO, I'M
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Amit Kumar
              <br />
              <span>
                Pati<span className="hero-period">.</span>
              </span>
            </motion.h1>
            <motion.div
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="role-line" /> Software Developer{" "}
              <span className="role-divider">/</span> Full-Stack Enthusiast
            </motion.div>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I build responsive web experiences and practical applications with
              React, JavaScript and the MERN stack — turning ideas into useful
              digital products.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-ghost" href="/resume.pdf" download>
                <Download size={16} /> Download CV
              </a>
            </motion.div>
            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span>FIND ME ON</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={17} />
              </a>
            </motion.div>
          </div>

          <Reveal className="hero-visual">
            <div className="video-frame">
              <div className="video-topline">
                <span>
                  <i /> INTRODUCTION / 001
                </span>
                <span className="video-live">PERSONAL PROFILE</span>
              </div>
              <video
                ref={videoRef}
                className={`intro-video ${videoReady && !videoError ? "visible" : ""}`}
                src="/videos/amit-intro.mp4"
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="metadata"
                onCanPlay={() => setVideoReady(true)}
                onError={() => setVideoError(true)}
                aria-label="Amit Kumar Pati introduction video"
              />
              {(!videoReady || videoError) && (
                <div className="video-placeholder">
                  <div className="placeholder-orbit orbit-a" />
                  <div className="placeholder-orbit orbit-b" />
                  <div className="placeholder-initials">AKP</div>
                  <span className="placeholder-caption">
                    {videoError
                      ? "ADD YOUR INTRO VIDEO"
                      : "YOUR INTRODUCTION VIDEO"}
                  </span>
                  <small>amit-intro.mp4</small>
                </div>
              )}
              <div className="video-shade" />
              <div className="video-bottom">
                <div>
                  <span className="video-name">Amit Kumar Pati</span>
                  <span className="video-subtitle">
                    Software Developer · Odisha, India
                  </span>
                </div>
                <div className="video-controls">
                  <button
                    onClick={togglePlay}
                    aria-label={playing ? "Pause video" : "Play video"}
                  >
                    {playing ? <Pause size={15} /> : <Play size={15} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Enable video sound" : "Mute video"}
                  >
                    {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>
              </div>
            </div>
            <div className="floating-card card-code">
              <Code2 size={16} />
              <span>Building with React</span>
              <b>↗</b>
            </div>
            <div className="floating-card card-location">
              <MapPin size={15} />
              <span>Based in Odisha, IN</span>
            </div>
            <div className="visual-index">
              01 <span>/ 06</span>
            </div>
          </Reveal>
          <a href="#about" className="scroll-cue">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="stats-strip section-wrap">
          <div>
            <strong>03</strong>
            <span>Internship experiences</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>MERN</strong>
            <span>Full-stack foundation</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>MCA graduate</span>
          </div>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="A little"
            accent="introduction."
            description="A developer focused on clean interfaces, practical problem-solving and continuous learning."
          />
          <div className="about-grid">
            <Reveal className="about-main">
              <span className="large-quote">“</span>
              <h3>
                Curious by nature.
                <br />
                <em>Developer by choice.</em>
              </h3>
              <p>
                Recent Master of Computer Applications graduate with hands-on
                internship experience in full-stack web development. Familiar
                with JavaScript, React.js, Node.js, Express.js, MongoDB, HTML
                and CSS.
              </p>
              <p>
                Experienced in developing responsive user interfaces,
                implementing CRUD operations, integrating REST APIs and working
                with database-driven applications. I bring a foundational
                understanding of OOP, DBMS, SQL and Data Structures, and I'm
                looking for an entry-level Software Developer opportunity where
                I can contribute and grow.
              </p>
              <a className="text-link" href="#contact">
                Let's build something <ArrowUpRight size={16} />
              </a>
            </Reveal>
            <Reveal className="about-side" delay={0.12}>
              <div className="about-detail">
                <span>01</span>
                <div>
                  <small>MY FOCUS</small>
                  <b>Frontend & Full-Stack Development</b>
                </div>
              </div>
              <div className="about-detail">
                <span>02</span>
                <div>
                  <small>MY TOOLKIT</small>
                  <b>React · Node · Express · MongoDB</b>
                </div>
              </div>
              <div className="about-detail">
                <span>03</span>
                <div>
                  <small>MY APPROACH</small>
                  <b>Learn, build, improve, repeat.</b>
                </div>
              </div>
              <div className="about-note">
                <Sparkles size={18} />
                <p>
                  Driven by curiosity and a commitment to building useful,
                  user-friendly software.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            eyebrow="02 / WHAT I WORK WITH"
            title="Skills &"
            accent="toolkit."
            description="Technologies and fundamentals I use to design, develop and support web applications."
          />
          <div className="skill-grid">
            {skillGroups.map((group, i) => (
              <Reveal className="skill-card" key={group.title} delay={i * 0.05}>
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <group.icon size={19} />
                  </span>
                  <span className="skill-number">0{i + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="secondary-skills">
            <Reveal>
              <div className="secondary-heading">
                <FileText size={19} />
                <h3>Technical & Office Skills</h3>
              </div>
              <div className="office-list">
                {officeSkills.map((x) => (
                  <span key={x}>
                    <ChevronRight size={14} />
                    {x}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="secondary-heading">
                <Sparkles size={19} />
                <h3>Soft Skills</h3>
              </div>
              <div className="soft-tags">
                {softSkills.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionHeading
            eyebrow="03 / WHERE I'VE LEARNED"
            title="Internship"
            accent="experience."
            description="Practical exposure to frontend interfaces, full-stack workflows and collaborative development."
          />
          <div className="timeline">
            {internships.map((job, i) => (
              <Reveal
                className="timeline-item"
                key={job.company}
                delay={i * 0.08}
              >
                <div className="timeline-marker">
                  <BriefcaseBusiness size={16} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span>{job.period}</span>
                    <span className="remote-pill">REMOTE</span>
                  </div>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <p className="timeline-location">
                    <MapPin size={13} />
                    {job.location}
                  </p>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="stack-list">
                    {job.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading
            eyebrow="04 / SELECTED WORK"
            title="Projects I've"
            accent="built."
            description="Hands-on applications demonstrating UI development, CRUD workflows, API integration and programming fundamentals."
          />
          <div className="project-grid">
            {projects.map((project, i) => (
              <Reveal
                className={`project-card ${project.tone}`}
                key={project.number}
                delay={i * 0.07}
              >
                <div className="project-card-head">
                  <span className="project-number">{project.number} / 04</span>
                  <span className="project-icon">
                    <project.icon size={21} />
                  </span>
                </div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub profile <ArrowUpRight size={16} />
                </a>
              </Reveal>
            ))}
          </div>
          <p className="project-footnote">
            <span>*</span> Project cards describe work listed in my resume. The
            GitHub link opens my profile; individual repository links can be
            added when confirmed.
          </p>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionHeading
            eyebrow="05 / LEARNING JOURNEY"
            title="Education &"
            accent="certifications."
            description="Academic foundations and additional learning across software development and office productivity."
          />
          <div className="education-layout">
            <div className="education-list">
              {education.map((item, i) => (
                <Reveal
                  className="education-item"
                  key={item.degree}
                  delay={i * 0.05}
                >
                  <div className="education-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div className="education-copy">
                    <span className="education-period">{item.period}</span>
                    <h3>{item.degree}</h3>
                    <p>{item.institute}</p>
                  </div>
                  <strong className="education-score">{item.score}</strong>
                </Reveal>
              ))}
            </div>
            <Reveal className="cert-panel">
              <div className="cert-title">
                <Award size={20} />
                <div>
                  <span>CONTINUOUS LEARNING</span>
                  <h3>Certifications & Training</h3>
                </div>
              </div>
              <ul>
                {certifications.map((item) => (
                  <li key={item}>
                    <span className="cert-check">
                      <CheckCircle2 size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section
          className="section-wrap section-block contact-section"
          id="contact"
        >
          <SectionHeading
            eyebrow="06 / GET IN TOUCH"
            title="Have a project or"
            accent="opportunity?"
            description="I'm open to entry-level Software Developer opportunities, internships and conversations about building useful products."
          />
          <div className="contact-grid">
            <Reveal className="contact-info">
              <span className="contact-label">LET'S CONNECT</span>
              <h3>
                Let's make the
                <br />
                <em>next thing happen.</em>
              </h3>
              <a className="contact-method" href={`mailto:${profile.email}`}>
                <span>
                  <Mail size={18} />
                </span>
                <div>
                  <small>EMAIL ME</small>
                  <b>{profile.email}</b>
                </div>
                <ArrowUpRight size={16} />
              </a>
              <a
                className="contact-method"
                href={`tel:${profile.phone.replaceAll(" ", "")}`}
              >
                <span>
                  <Phone size={18} />
                </span>
                <div>
                  <small>CALL ME</small>
                  <b>{profile.phone}</b>
                </div>
                <ArrowUpRight size={16} />
              </a>
              <div className="contact-method">
                <span>
                  <MapPin size={18} />
                </span>
                <div>
                  <small>LOCATION</small>
                  <b>{profile.location}</b>
                </div>
              </div>
              <div className="contact-social">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn
                </a>
              </div>
            </Reveal>
            <Reveal className="contact-form-wrap" delay={0.1}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-heading">
                  <span>DROP A MESSAGE</span>
                  <small>
                    <i /> Usually responds as soon as possible
                  </small>
                </div>
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      required
                      minLength="2"
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <label>
                  Subject
                  <input
                    name="subject"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me a little about your opportunity or idea..."
                    required
                    minLength="10"
                  />
                </label>
                <button
                  className="button button-primary submit-button"
                  type="submit"
                  disabled={formState === "sending"}
                >
                  {formState === "sending" ? "Sending..." : "Send message"}{" "}
                  <Send size={16} />
                </button>
                {formState === "sent" && (
                  <p className="form-success">
                    <CheckCircle2 size={16} /> Message sent successfully. Thank
                    you!
                  </p>
                )}
                {formState === "fallback" && (
                  <p className="form-success">
                    Your email app should open with the message ready to send.
                  </p>
                )}
                {formError && <p className="form-error">{formError}</p>}
                <p className="form-hint">
                  Email delivery uses EmailJS when configured. Otherwise, your
                  email app opens with a pre-filled message.
                </p>
              </form>
            </Reveal>
          </div>
        </section>

        <section className="section-wrap map-section">
          <div className="map-heading">
            <div>
              <span className="eyebrow">BASED IN ODISHA, INDIA</span>
              <h3>
                Grounded here. <em>Open to everywhere.</em>
              </h3>
            </div>
            <a
              className="text-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open directions <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Map showing Amit Kumar Pati's location in Jajpur, Odisha"
              src={`https://www.google.com/maps?q=${encodeURIComponent(profile.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-overlay">
              <MapPin size={16} />
              <span>Jajpur, Odisha, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">
            <img src="/ap-logo.png" alt="AP Logo" />
          </span>
          <span>
            AMIT<span className="brand-muted"> / PORTFOLIO</span>
          </span>
        </a>
        <p>
          Designed & developed with curiosity <span>✳</span> ©{" "}
          {new Date().getFullYear()} Amit Kumar Pati
        </p>
        <a href="#home" className="back-top">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </footer>
      <a href="#home" className="floating-top" aria-label="Back to top">
        <ArrowUpRight size={17} />
      </a>
    </div>
  );
}

export default App;
