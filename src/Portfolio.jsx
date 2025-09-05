import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      let current = "hero";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-[#fdf6f0] text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 
          px-6 py-3 rounded-2xl shadow-lg z-50 backdrop-blur-md border 
          transition-colors duration-500 ${
            darkMode
              ? "bg-gray-800/90 text-gray-100 border-gray-700"
              : "bg-[#ffe5d9]/90 text-gray-900 border-[#ffcad4]"
          }`}
      >
        <div className="flex justify-between items-center gap-8">
          {/* Links */}
          <div className="flex gap-6 font-medium">
            <a
              href="#about"
              className={`hover:text-rose-600 transition ${
                activeSection === "about" ? "text-rose-600 font-semibold" : ""
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`hover:text-rose-600 transition ${
                activeSection === "skills" ? "text-rose-600 font-semibold" : ""
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`hover:text-rose-600 transition ${
                activeSection === "projects" ? "text-rose-600 font-semibold" : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={`hover:text-rose-600 transition ${
                activeSection === "experience" ? "text-rose-600 font-semibold" : ""
              }`}
            >
              Experience
            </a>
            <a
              href="#contact"
              className={`hover:text-rose-600 transition ${
                activeSection === "contact" ? "text-rose-600 font-semibold" : ""
              }`}
            >
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-1.5 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Content wrapper with top padding */}
      <div className="pt-28">
        {/* Hero */}
        <section
          id="hero"
          className={`h-screen flex flex-col items-center justify-center text-center px-4 ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-700 text-white"
              : "bg-gradient-to-r from-rose-200 to-pink-300 text-gray-900"
          }`}
        >
          <h1 className="text-6xl font-extrabold mb-4">Hi, I'm Ashes Senapati</h1>
          <p className="text-2xl mb-6">
            Full Stack Java Developer | B.Tech in Computer Science
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-rose-600 font-semibold rounded-lg shadow-md hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="/Ashes_Senapati--Resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-rose-500 text-white rounded-lg shadow-md hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-center mb-6">
            I am a passionate Full Stack Java Developer with expertise in Java,
            Spring Boot, Hibernate, and modern web technologies. With hands-on
            experience from internships and training, I enjoy solving real-world
            problems by building secure, scalable, and user-friendly applications.
          </p>
          <p className="text-lg leading-relaxed text-center">
            I have completed my Bachelor of Technology in Computer Science &
            Engineering from Biju Patnaik University and Technology, Odisha,
            India. Over time, I have developed a strong interest in web and backend
            technologies, working with Java, Hibernate, Spring Boot, HTML5, CSS,
            JavaScript, React.js, Git, and GitHub.
          </p>
          <p className="text-lg leading-relaxed text-center mt-6">
            During my internship as a Jr. Full Stack Developer, I gained hands-on
            experience with Spring Boot, HTML, CSS, and JavaScript, collaborating
            with teams on real projects. Beyond coding, I enjoy running, carrom,
            and traveling 🚀
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 bg-[#fff1e6] dark:bg-gray-800">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Java",
              "Spring Boot",
              "Spring MVC",
              "Hibernate",
              "JSP & Servlet",
              "HTML5",
              "CSS3",
              "JavaScript",
              "SQL",
              "MySQL",
              "Git",
              "REST APIs",
            ].map((skill) => (
              <div key={skill} className="flex justify-center">
                <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-xl text-center font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Mental Health Survey Chatbot",
                desc: "AI-powered chatbot using NLP for mental health awareness and assessment.",
                link: "#",
              },
              {
                title: "Quiz Generator Application",
                desc: "Role-based quiz system with CRUD, authentication, and analytics.",
                link: "#",
              },
              {
                title: "Capstone Full Stack Application",
                desc: "Developed at JSpider with secure authentication and MVC architecture.",
                link: "#",
              },
            ].map((project) => (
              <div key={project.title} className="flex justify-center">
                <div className="p-6 bg-white dark:bg-gray-700 shadow-xl rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.desc}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-rose-600 font-semibold hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 bg-[#fff1e6] dark:bg-gray-800">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                role: "Java Developer Intern – Techplement",
                desc: "Developed Java-based applications, built REST APIs, optimized SQL queries, and collaborated with cross-functional teams to deliver scalable solutions.",
              },
              {
                role: "Full Stack Java Developer – JSpider",
                desc: "Completed an intensive full stack program, developed multiple projects with Spring Boot, MySQL, and REST APIs, and collaborated on agile-based team projects.",
              },
            ].map((job) => (
              <div key={job.role} className="flex justify-center">
                <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl w-full">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {job.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-6">
            Let’s connect! Reach out for collaborations, opportunities, or just a friendly chat.
          </p>
          <div className="flex justify-center gap-8">
            <a href="mailto:ashessenapati@gmail.com" className="hover:text-rose-600">
              <Mail size={28} />
            </a>
            <a
              href="https://github.com/ashessenapati"
              target="_blank"
              className="hover:text-rose-600"
            >
              <Github size={28} />
            </a>
            <a
              href="http://www.linkedin.com/in/ashes-senapati-46aa771a5"
              target="_blank"
              className="hover:text-rose-600"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-10 mt-10 transition-colors duration-500 ${
            darkMode ? "bg-[#111] text-gray-300" : "bg-[#fff1e6] text-gray-800"
          }`}
        >
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Ashes Senapati</h2>
                <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
                <p className="text-sm">Developed by <span className="font-semibold">Ashes Senapati</span></p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-3 border-b border-gray-400 pb-1">
                Contact Me
              </h3>
              <p className="text-sm">📧 ashessenapati@gmail.com</p>
              <p className="text-sm">📱 +91 76829 13363</p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-semibold mb-3 border-b border-gray-400 pb-1">
                Useful Links
              </h3>
              <ul className="space-y-2 text-sm">
                {["hero", "skills", "projects", "experience", "contact"].map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className="hover:text-rose-500">
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-3 border-b border-gray-400 pb-1">
                Social Links
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ashes-senapati-46aa771a5/"
                  target="_blank"
                  className="p-2 bg-rose-500 rounded hover:bg-rose-600 transition"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a
                  href="https://github.com/ashessenapati"
                  target="_blank"
                  className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
                <a
                  href="https://www.youtube.com/@ASLifestyle143"
                  target="_blank"
                  className="p-2 bg-red-500 rounded hover:bg-red-600 transition"
                >
                  <FaYoutube className="text-white text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/smile_boy_ashes?igsh=MTNsZnk0cmV1ZTBkMw=="
                  target="_blank"
                  className="p-2 bg-pink-500 rounded hover:bg-pink-600 transition"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
