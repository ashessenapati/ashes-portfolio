import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Navbar (links only, no name) */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-center items-center p-4">
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Add top padding so content is not hidden behind navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <h1 className="text-6xl font-extrabold mb-4">Hi, I'm Ashes Senapati</h1>
          <p className="text-2xl mb-6">Full Stack Java Developer | B.Tech in Computer Science</p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:scale-105 transition">
              View Projects
            </a>
            <a href="/Ashes_Senapati--Resume.pdf" target="_blank" className="px-6 py-3 bg-blue-800 rounded-lg shadow-md hover:scale-105 transition">
              Download Resume
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            I am a passionate Full Stack Java Developer with expertise in Java, Spring Boot,
            Hibernate, and modern web technologies. With hands-on experience from internships and training,
            I enjoy solving real-world problems by building secure, scalable, and user-friendly applications.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-100">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Java", "Spring Boot", "Spring MVC", "Hibernate", "JSP & Servlet",
              "HTML5", "CSS3", "JavaScript", "SQL", "MySQL", "Git", "REST APIs"
            ].map((skill) => (
              <div key={skill} className="flex justify-center">
                <div className="p-6 bg-white shadow-lg rounded-xl text-center font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden w-full">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
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
                <div className="p-6 bg-white shadow-xl rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden w-full">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-100">
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
                <div className="p-6 bg-white rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl overflow-hidden w-full">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-gray-600 mt-2">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-6 text-gray-700">
            Let’s connect! Reach out for collaborations, opportunities, or just a friendly chat.
          </p>
          <div className="flex justify-center gap-8">
            <a href="mailto:ashessenapati@gmail.com" className="hover:text-blue-600">
              <Mail size={28} />
            </a>
            <a href="https://github.com/ashessenapati" target="_blank" className="hover:text-blue-600">
              <Github size={28} />
            </a>
            <a href="http://www.linkedin.com/in/ashes-senapati-46aa771a5" target="_blank" className="hover:text-blue-600">
              <Linkedin size={28} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-white text-center">
          <p>© {new Date().getFullYear()} Ashes Senapati. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
