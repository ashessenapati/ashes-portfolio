// src/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

/**
 * Portfolio.jsx
 * Redesigned professional portfolio with Framer Motion + TailwindCSS.
 *
 * - Light-mode headings: #e11d48 (text-rose-600)
 * - Light-mode body: #374151 (text-[#374151])
 * - Dark-mode: bg-gray-900, text-gray-100
 *
 * Notes:
 * - Ensure public/Ashes_Senapati--Resume.pdf exists for View/Download buttons.
 * - Tailwind must be configured in your project.
 */

export default function Portfolio() {
  // Theme (dark/light) with persistence
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // scroll spy active section
  const [active, setActive] = useState("hero");

  // mobile menu toggle
  const [openMenu, setOpenMenu] = useState(false);

  // Persist theme and toggle class
  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {}
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Scroll spy to set active nav item
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
    const onScroll = () => {
      const offset = 150;
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Framer Motion variants
  const containerFade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const cardHover = {
    scale: 1.03,
    y: -6,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  // data (projects/skills/experience)
  const skills = [
    "Java",
    "Python",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "JSP & Servlet",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "SQL",
    "MySQL",
    "Git",
    "REST APIs",
    "AWS",
    "Kubernetes",
  ];

  const projects = [
    {
      title: "Mental Health Survey Chatbot",
      desc: "AI-powered chatbot using NLP for mental health awareness and assessment.",
      github: "https://github.com/ashessenapati", // replace with real repo
      demo: "#",
      tags: ["NLP", "Chatbot", "Python/JS"],
    },
    {
      title: "Quiz Generator Application",
      desc: "Role-based quiz system with CRUD, authentication, and analytics.",
      github: "https://github.com/ashessenapati",
      demo: "#",
      tags: ["Spring Boot", "React", "MySQL"],
    },
    {
      title: "Capstone Full Stack Application",
      desc: "Developed at JSpider with secure authentication and MVC architecture.",
      github: "https://github.com/ashessenapati",
      demo: "#",
      tags: ["MVC", "Spring", "Security"],
    },
  ];

  const experience = [
    {
      date: "2023 — 2024",
      title: "Java Developer Intern",
      company: "Techplement",
      desc: "Developed Java-based applications, built REST APIs, optimized SQL queries, and collaborated with cross-functional teams to deliver scalable solutions.",
      icon: "💼",
    },
    {
      date: "2022 — 2023",
      title: "Full Stack Java Developer",
      company: "JSpider",
      desc: "Completed an intensive full stack program, developed multiple projects with Spring Boot, MySQL, and REST APIs, and collaborated on agile-based team projects.",
      icon: "🛠️",
    },
  ];

  // Utility: nav link class with underline hover
  const NavLink = ({ href, children, id }) => (
    <a
      href={href}
      className={`relative inline-block text-sm md:text-base px-1 py-1 transition-colors ${
        active === id ? "text-rose-600 font-semibold" : "text-[#374151] dark:text-gray-200 hover:text-rose-600"
      }`}
      onClick={() => setOpenMenu(false)}
    >
      <span className="relative z-10">{children}</span>
      {/* animated underline */}
      <span
        className={`absolute left-0 -bottom-[2px] w-0 h-0.5 bg-rose-600 transition-all ${
          active === id ? "w-full" : "group-hover:w-full"
        }`}
      />
    </a>
  );

  return (
    <div className={`${dark ? "bg-gray-900 text-gray-100" : "bg-white text-[#374151]"} min-h-screen transition-colors duration-300`}>
      {/* STICKY NAV */}
      <header className="fixed w-full top-4 left-0 z-50 flex justify-center px-4">
        <nav
          className={`w-full max-w-6xl flex items-center justify-between gap-4 px-4 py-3 rounded-2xl shadow-lg backdrop-blur-md border transition-colors duration-300 ${
            dark ? "bg-gray-800/70 border-gray-700" : "bg-white/85 border-gray-200"
          }`}
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold shadow">
              AS
            </div>
            <div className="hidden sm:block">
              <div className={`text-sm font-semibold ${dark ? "text-gray-100" : "text-rose-600"}`}>Ashes Senapati</div>
              <div className="text-xs text-gray-400">Full Stack Java Developer</div>
            </div>
          </div>

          {/* center nav (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="#hero" id="hero">Home</NavLink>
            <NavLink href="#about" id="about">About</NavLink>
            <NavLink href="#skills" id="skills">Skills</NavLink>
            <NavLink href="#projects" id="projects">Projects</NavLink>
            <NavLink href="#experience" id="experience">Experience</NavLink>
            <NavLink href="#contact" id="contact">Contact</NavLink>
          </div>

          <div className="flex items-center gap-3">
            {/* View resume (desktop) */}
            <a
              href="/Ashes_Senapati--Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${
                dark ? "bg-gray-700 text-gray-100" : "bg-rose-50 text-rose-600"
              } border ${dark ? "border-gray-600" : "border-rose-100"} hover:shadow-md transition`}
            >
              <FileText size={16} /> View Resume
            </a>

            {/* theme toggle */}
            <button
              onClick={() => setDark((s) => !s)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:scale-105 transition"
            >
              {dark ? (
                <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a1 1 0 0 1 1 1v1.06a7.002 7.002 0 0 0 3.536 12.044 1 1 0 0 1 .84 1.891A9 9 0 1 1 12 2z"/></svg>
              ) : (
                <svg className="w-5 h-5 text-[#374151]" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zM20.84 4.84l-1.79 1.79 1.8 1.79 1.79-1.79-1.79-1.79zM21 11v2h3v-2h-3zM6.76 19.16l-1.79 1.79 1.8 1.79 1.79-1.79-1.8-1.79zM12 6a6 6 0 100 12A6 6 0 0012 6z"/></svg>
              )}
            </button>

            {/* mobile menu toggle */}
            <button
              onClick={() => setOpenMenu((s) => !s)}
              className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:scale-105 transition"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-[#374151] dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={openMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>

          {/* mobile dropdown */}
          {openMenu && (
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[94%] sm:w-80 bg-white dark:bg-gray-800 border ${dark ? "border-gray-700" : "border-gray-200"} rounded-xl shadow-xl p-4 md:hidden`}>
              <div className="flex flex-col gap-3">
                <a href="#hero" className={`text-sm ${active === "hero" ? "text-rose-600 font-semibold" : "text-[#374151] dark:text-gray-200"}`} onClick={() => setOpenMenu(false)}>Home</a>
                <a href="#about" className={`text-sm ${active === "about" ? "text-rose-600 font-semibold" : "text-[#374151] dark:text-gray-200"}`} onClick={() => setOpenMenu(false)}>About</a>
                <a href="#skills" className={`text-sm ${active === "skills" ? "text-rose-600 font-semibold" : "text-[#374151] dark:text-gray-200"}`} onClick={() => setOpenMenu(false)}>Skills</a>
                <a href="#projects" className={`text-sm ${active === "projects" ? "text-rose-600 font-semibold" : "text-[#374151] dark:text-gray-200"}`} onClick={() => setOpenMenu(false)}>Projects</a>
                <a href="#experience" className={`text-sm ${active === "experience" ? "text-rose-600 font-semibold" : "text-[#374151] dark:text-gray-200"}`} onClick={() => setOpenMenu(false)}>Experience</a>
                <a href="#contact" className={`text-sm ${active === "contact" ? "text-rose-600 font-semibold" : "text-[#374151] dark:text-gray-200"}`} onClick={() => setOpenMenu(false)}>Contact</a>

                <div className="flex gap-2 mt-2">
                  <a href="/Ashes_Senapati--Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-md bg-rose-50 text-rose-600 text-center">View Resume</a>
                  <a href="/Ashes_Senapati--Resume.pdf" download="Ashes_Senapati_Resume.pdf" className="flex-1 px-3 py-2 rounded-md bg-rose-600 text-white text-center">Download</a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* MAIN */}
      <main className="pt-32">
        {/* HERO */}
        <section id="hero" className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div initial="hidden" animate="visible" variants={containerFade} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 bg-rose-50/60 dark:bg-white/5 px-3 py-1 rounded-full text-xs md:text-sm">
                <span className="text-rose-600 font-semibold">Hello — I’m</span>
                <span className="text-[#374151] dark:text-gray-200">Ashes Senapati</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Building reliable, scalable <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500">Java & Full-Stack</span> systems.
              </h1>

              <p className="text-lg md:text-xl max-w-2xl text-[#374151] dark:text-gray-300">
                Full Stack Java Developer | B.Tech in Computer Science — I design and implement backend-first, secure, maintainable web applications using Spring Boot, Hibernate and modern frontend frameworks.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="/Ashes_Senapati--Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-rose-600 text-white font-semibold shadow hover:scale-[1.02] transition"
                >
                  View Resume
                </a>

                <a
                  href="/Ashes_Senapati--Resume.pdf"
                  download="Ashes_Senapati_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-rose-600 font-semibold border border-rose-100 hover:shadow-md transition"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a href="https://github.com/ashessenapati" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/40 dark:bg-white/5 hover:scale-105 transition"><FaGithub /></a>
                <a href="http://www.linkedin.com/in/ashes-senapati-46aa771a5" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/40 dark:bg-white/5 hover:scale-105 transition"><FaLinkedin /></a>
                <a href="mailto:ashessenapati@gmail.com" className="p-3 rounded-lg bg-white/40 dark:bg-white/5 hover:scale-105 transition"><Mail size={18} /></a>
              </div>
            </motion.div>

            {/* Avatar / Visual */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="lg:col-span-5">
              <div className={`rounded-2xl p-6 shadow-2xl ${dark ? "bg-gray-800" : "bg-gradient-to-br from-white to-rose-50"}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    AS
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-semibold">Ashes Senapati</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Full Stack Java Developer</div>
                    <div className="mt-3 text-sm text-[#374151] dark:text-gray-300 max-w-xs">
                      Java • Spring Boot • Hibernate • React • REST • MySQL • Git
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-700/60 text-sm border border-gray-100 dark:border-gray-700">Available for hire</div>
                  <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-700/60 text-sm border border-gray-100 dark:border-gray-700">Bangalore,India</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-12">
            <path d="M0,0 V40 Q300,90 600,40 T1200,40 V0z" className={`${dark ? "fill-gray-900" : "fill-white"}`} />
          </svg>
        </div>

        {/* ABOUT (split) */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-bold text-rose-600">About Me</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-[#374151] dark:text-gray-300">
                  <p>
                    I have completed my <strong>Bachelor of Technology in Computer Science & Engineering</strong> from Biju Patnaik University and Technology, Odisha, India. Over time, I have developed a strong interest in web technologies and backend technology, which allows me to work with <strong>Java, Hibernate, Spring Boot, HTML5, CSS, JavaScript, React.js, Git</strong> and <strong>GitHub</strong>.
                  </p>

                  <p>
                    To enhance my skills, I pursued an internship as a Jr. Full Stack Developer Intern, where I worked extensively with the <strong>Spring Boot framework</strong> and gained hands-on experience in building interactive user interfaces using HTML, CSS, and JavaScript. During this period, I also contributed to several projects, collaborating with teams to design and develop engaging digital experiences.
                  </p>

                  <p>
                    Beyond coding and designing, I have a passion for <em>running, carrom, and travelling</em>. Exploring new places and learning new technologies always excites me, and I continuously strive to improve my skills and stay updated with the latest trends in web development.
                  </p>

                  <p className="font-semibold text-rose-600">That’s all about me! 🚀</p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <motion.div whileHover={{ scale: 1.02 }} className={`rounded-2xl p-6 shadow-xl ${dark ? "bg-gray-800" : "bg-white"}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-rose-100 flex items-center justify-center text-2xl">AS</div>
                    <div>
                      <div className="text-lg font-semibold">Ashes Senapati</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Java Developer</div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-[#374151] dark:text-gray-300">
                    <p className="mb-3">Specialties: Backend design, API development, secure authentication, and responsive UI.</p>
                    <ul className="text-sm space-y-2">
                      <li>• Java, Spring Boot, Hibernate</li>
                      <li>• REST APIs, MySQL, SQL optimization</li>
                      <li>• Frontend: React, HTML5, CSS3, JavaScript</li>
                    </ul>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a href="mailto:ashessenapati@gmail.com" className="flex-1 px-3 py-2 rounded-lg bg-rose-600 text-white text-center">Contact</a>
                    <a href="/Ashes_Senapati--Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-lg bg-white text-rose-600 border border-rose-100 text-center">Resume</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 bg-[rgba(249,245,241,1)] dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade} className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-rose-600">Skills</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Technologies & tools I use frequently</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((s) => (
                <motion.div
                  key={s}
                  whileHover={cardHover}
                  className={`p-4 rounded-xl shadow-sm transition transform ${dark ? "bg-gray-700" : "bg-white"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-rose-200 to-pink-200 text-rose-700 font-semibold">
                      {s.charAt(0)}
                    </div>
                    <div className="text-sm font-semibold">{s}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade} className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-rose-600">Projects</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Selected work — backend & full-stack</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p) => (
                <motion.article key={p.title} whileHover={cardHover} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade} className={`relative overflow-hidden rounded-2xl shadow-md ${dark ? "bg-gray-800" : "bg-white"}`}>
                  {/* image / gradient block */}
                  <div className={`h-36 ${dark ? "bg-gradient-to-br from-gray-700 to-gray-800" : "bg-gradient-to-br from-rose-50 to-amber-50"} flex items-center justify-center`}>
                    <div className="text-xl font-semibold text-rose-600">{p.title}</div>
                  </div>

                  {/* content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {p.tags.map((t) => <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-[#374151] dark:text-gray-200">{t}</span>)}
                      </div>

                      <div className="flex gap-2">
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-sm hover:shadow-sm transition">GitHub</a>
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-md bg-rose-600 text-white text-sm hover:bg-rose-700 transition">Demo</a>
                      </div>
                    </div>
                  </div>

                  {/* hover overlay (appears on hover via opacity) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/0 hover:bg-black/30 pointer-events-none"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE (timeline) */}
        <section id="experience" className="py-20 bg-[rgba(249,245,241,1)] dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade} className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-rose-600">Experience</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Work & internship highlights</p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* vertical line */}
              <span className={`absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] ${dark ? "bg-gray-700" : "bg-gray-200"}`} />

              <div className="space-y-8">
                {experience.map((job, idx) => (
                  <motion.div key={job.role} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade} className={`relative md:pl-12 md:pr-6 ${idx % 2 === 0 ? "md:text-right md:pr-12" : ""}`}>
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-10 h-10 rounded-full flex items-center justify-center bg-rose-600 text-white shadow">
                      <span className="text-sm">{job.icon}</span>
                    </div>

                    <div className={`bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm ${dark ? "border border-gray-700" : ""}`}>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div>
                          <h4 className="font-semibold">{job.title}</h4>
                          <div className="text-sm text-gray-500 dark:text-gray-300">{job.company}</div>
                        </div>
                        <div className="text-sm text-gray-400">{job.date}</div>
                      </div>
                      <p className="text-sm text-[#374151] dark:text-gray-300">{job.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade}>
              <h2 className="text-3xl font-bold text-rose-600 mb-4">Get In Touch</h2>
              <p className="text-[#374151] dark:text-gray-300 mb-8">Let’s connect! Reach out for collaborations, opportunities, or just a friendly chat.</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:ashessenapati@gmail.com" className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold shadow hover:scale-[1.02] transition"><Mail size={18}/> Email</a>
                <a href="https://github.com/ashessenapati" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-[#374151] dark:text-gray-200 font-semibold hover:scale-[1.02] transition"><FaGithub/> GitHub</a>
                <a href="http://www.linkedin.com/in/ashes-senapati-46aa771a5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-[#374151] dark:text-gray-200 font-semibold hover:scale-[1.02] transition"><FaLinkedin/> LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-100 py-8">
          <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div>
              <div className="text-lg md:text-xl font-semibold">Ashes Senapati</div>
              <div className="text-sm text-gray-400 mt-2">Full Stack Java Developer</div>
            </div>

            <div>
              <div className="font-semibold mb-1">Contact</div>
              <div className="text-sm text-gray-400">📧 ashessenapati@gmail.com</div>
              <div className="text-sm text-gray-400">📱 +91 76829 13363</div>
            </div>

            <div className="flex flex-col items-start">
              <div className="font-semibold mb-2">Follow</div>
              <div className="flex gap-3 mb-4">
                <a href="https://www.linkedin.com/in/ashes-senapati-46aa771a5/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-rose-600 hover:bg-rose-700 transition"><FaLinkedin className="text-white" /></a>
                <a href="https://github.com/ashessenapati" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"><FaGithub className="text-white" /></a>
                <a href="https://www.youtube.com/@ASLifestyle143" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-red-600 hover:bg-red-700 transition"><FaYoutube className="text-white" /></a>
                <a href="https://www.instagram.com/smile_boy_ashes?igsh=MTNsZnk0cmV1ZTBkMw==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition"><FaInstagram className="text-white" /></a>
              </div>

              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} All Rights Reserved.
                <br />
                Developed by <span className="font-semibold">Ashes Senapati</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
