/* eslint-disable */

import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize"; // Import sanitizer for safety
import { BookOpen, Briefcase, Code } from "lucide-react";

export default function Resume() {
  const education = [
    {
      title: "Indian Institute Of Information Technology (IIIT), Una",
      duration: "2022 — 2026",
      description: `
- Pursuing **Bachelor of Technology (B.Tech)** in Computer Science and Engineering.
- Recognized for its focus on technology and innovation, offering a curriculum aligned with industry standards.
- Current CGPA: **8.99**`,
    },
    {
      title: "Sunbeam School Mughalsarai",
      duration: "2019-2021",
      description: `
- Focusing on core science subjects like Mathematics, Physics, and Chemistry.
- Grade: **95%**`,
    },
    {
      title: "DAV Schools Network",
      duration: "2008-2019",
      description: `
- Primary Education & High Schooling
- Grade: **94.6%**`,
    },
  ];

  const experiences = [
    {
      title: "Web Developer",
      company: "IIIT Una Official Website",
      duration: "2023",
      description: `
- **Team Collaboration**: Worked with a team of 10-12 members to enhance the official college website, significantly boosting user engagement and reducing page load times. [iiitu.ac.in](https://iiitu.ac.in)
- **UI Development**: Developed and maintained responsive UI components using **HTML, CSS, JavaScript, and React.js**, improving the user experience.
- **Backend API Integration**: Assisted in implementing efficient API integrations, ensuring faster performance and reliable uptime.
- **User Testing**: Organized user testing sessions, gathering feedback and iterating on the user interface to improve accessibility.`,
    },
    {
      title: "OpenCV Attendance System",
      company: "Project with Dr. Girdhar Gopal",
      duration: "Aug 2023 — May 2024",
      description: `
- Developed a contact-less attendance management system using **OpenCV** and **MySQL**.
- Implemented computer vision technology for real-time face recognition and acknowledgment via the **Gmail API**.
- Contributed to system testing and optimization for better scalability and efficiency.
- **GitHub Repository**: [OpenCV Attendance System](https://github.com/Prasoon-kushwaha/OpenCV_Attendence)`,
    },
    {
      title: "QCA-based ALU Design",
      company: "Project with Dr. Girdhar Gopal",
      duration: "Nov 2018 — Dec 2018",
      description: `
- Designed a **Quantum-dot Cellular Automata (QCA)**-based Arithmetic Logic Unit (ALU).
- Focused on the theoretical design aspects, without conducting simulations.`,
    },
  ];

  const projects = [
    {
      title: "Crypto-Nexus App",
      technologies: "React, Next.js, Tailwind CSS, Web-Sockets",
      duration: "2025",
      description: `
- **Live Cryptocurrency Prices**: Bitcoin, Ethereum, and Solana with WebSocket updates
- **Global Weather Data**: Current conditions for major cities
- **Personalized News Feed**: Curated news based on your selected topics.
- **Favorites System**: Bookmark your preferred cities and cryptos
- **Dark/Light Mode**: Eye-friendly theme switching
- **Real-time Updates**: Automatic data refresh without page reloads
- **Interactive UI**: Smooth animations and transitions
- **Github Repository**: [Prasoon-kushwaha/Crypto-Nexus](https://github.com/Prasoon-kushwaha/Crypto-Nexus)
- **Live Demo**: [crypto-nexus-two.vercel.app](https://crypto-nexus-two.vercel.app/)`,
    },
    {
      title: "Top-Scorer",
      technologies: "React, Node.js, MongoDB, SocketIO, ExpressJS, JWT Auth",
      duration: "2024",
      description: `
**Top Scorer** is a sports website developed to enhance the sports meet experience for inter-college events, such as Inter-IIIT or other sports fests. The website uses **Socket.IO** to provide real-time updates, improving engagement and accessibility for users.

- **Match Winning Prediction**
- **Real-Time Chat Functionality** for authenticated users

Top Scorer manages data related to participants, matches, and scores, allowing efficient tracking of top performers across various sports. The platform supports real-time interactions, making it an ideal solution for live sports events.
- **Github Repository**: [Prasoon-kushwaha/top_scorer](https://github.com/Prasoon-kushwaha/top_scorer)
- **Live Website**: [top-scorer-ecru.vercel.app](top-scorer-ecru.vercel.app)`,

    },
   
  ];

  return (
    <div className="p-6 md:p-8 animate-fade-in">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in">Resume</h2>
        <div className="w-12 h-1 bg-[#ffd700] rounded-full animate-scale-in"></div>
      </header>

      {/* Education Section */}
      <section className="mb-20 relative">
        <div className="flex items-center gap-4 mb-8 animate-slide-in" style={{ animationDelay: "0.1s" }}>
          <BookOpen className="text-[#ffd700] w-6 h-6" />
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>

        <div className="absolute left-2.5 top-[4.5rem] bottom-0 w-px bg-[#333] md:left-[2.25rem]" />
        <div className="space-y-8 border-b border-[#333] pb-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute left-0 top-3 w-5 h-5 rounded-full border-4 border-[#2f2f2f] bg-[#ffd700] md:left-[1.75rem]" />
              <div className="bg-[#2f2f2f] rounded-xl p-6 border-b border-[#333]">
                <h4 className="text-l font-semibold text-white mb-1">{edu.title}</h4>
                <span className="text-[#ffd700] mb-2 block">{edu.duration}</span>
                {edu.description && (
                  <ReactMarkdown
                    className="text-gray-400 prose prose-invert"
                    rehypePlugins={[rehypeSanitize]}
                  >
                    {edu.description}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20 relative">
        <div className="flex items-center gap-4 mb-8 animate-slide-in" style={{ animationDelay: "0.5s" }}>
          <Briefcase className="text-[#ffd700] w-6 h-6" />
          <h3 className="text-2xl font-bold text-white">Experience</h3>
        </div>

        <div className="absolute left-2.5 top-[4.5rem] bottom-0 w-px bg-[#333] md:left-[2.25rem]" />
        <div className="space-y-8 border-b border-[#333] pb-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 animate-scale-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="absolute left-0 top-3 w-5 h-5 rounded-full border-4 border-[#2f2f2f] bg-[#ffd700] md:left-[1.75rem]" />
              <div className="bg-[#2f2f2f] rounded-xl p-6 border-b border-[#333]">
                <h4 className="text-l font-semibold text-white mb-1">{exp.title}</h4>
                <span className="text-[#ffd700] mb-2 block">{exp.company}</span>
                <span className="text-gray-400 italic mb-2 block">{exp.duration}</span>
                {exp.description && (
                  <ReactMarkdown
                    className="text-gray-400 prose prose-invert"
                    rehypePlugins={[rehypeSanitize]}
                  >
                    {exp.description}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative">
        <div className="flex items-center gap-4 mb-8 animate-slide-in" style={{ animationDelay: "0.9s" }}>
          <Code className="text-[#ffd700] w-6 h-6" />
          <h3 className="text-2xl font-bold text-white">Projects</h3>
        </div>

        <div className="absolute left-2.5 top-[4.5rem] bottom-0 w-px bg-[#333] md:left-[2.25rem]" />
        <div className="space-y-8 border-b border-[#333] pb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 animate-scale-in"
              style={{ animationDelay: `${1.0 + index * 0.1}s` }}
            >
              <div className="absolute left-0 top-3 w-5 h-5 rounded-full border-4 border-[#2f2f2f] bg-[#ffd700] md:left-[1.75rem]" />
              <div className="bg-[#2f2f2f] rounded-xl p-6 border-b border-[#333]">
                <h4 className="text-l font-semibold text-white mb-1">{project.title}</h4>
                <span className="text-[#ffd700] mb-2 block">{project.technologies}</span>
                <span className="text-gray-400 italic mb-2 block">{project.duration}</span>
                {project.description && (
                  <ReactMarkdown
                    className="text-gray-400 prose prose-invert"
                    rehypePlugins={[rehypeSanitize]}
                  >
                    {project.description}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}