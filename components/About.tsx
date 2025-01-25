import ReactMarkdown from "react-markdown";
import { Code, Smartphone, Layout, ServerCrash } from "lucide-react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function About() {
  const aboutMeMarkdown = `
  
  I'm a **6th-semester Computer Science student** and an aspiring **Software Development Engineer** at **IIIT Una**, India.
  
  I specialize in:
  
  - Web Development (Backend & Frontend)
  - Competitive Programming and Problem-Solving
  - Building user-friendly and intuitive applications
  
  I have strong algorithmic knowledge, which I actively apply in competitive programming and problem-solving.
  
  I have worked on projects like the IIIT Una website and an OpenCV-based attendance system. I strive to create solutions that are both functional and visually appealing, with a focus on simplicity and usability.
  `;
  

  const projects = [
    {
      title: "Web Development",
      description:
        "Developing dynamic and responsive websites with a focus on functionality, usability, and performance.",
      icon: <Layout className="w-12 h-12 text-[#ffd700] mb-4" />,
      animationDelay: "0.4s",
    },
    {
      title: "Competitive Programming",
      description:
        "Solving challenging algorithmic problems and improving problem-solving skills through coding competitions.",
      icon: <Code className="w-12 h-12 text-[#ffd700] mb-4" />,
      animationDelay: "0.5s",
    },
    {
      title: "Project Development",
      description:
        "Building end-to-end projects like the OpenCV-based attendance system, focusing on real-world applications.",
      icon: <Smartphone className="w-12 h-12 text-[#ffd700] mb-4" />,
      animationDelay: "0.6s",
    },
    {
      title: "Problem-Solving",
      description:
        "Tackling complex problems through logical reasoning and efficient algorithms, especially in competitive programming.",
      icon: <ServerCrash className="w-12 h-12 text-[#ffd700] mb-4" />,
      animationDelay: "0.7s",
    },
  ];

  return (
    <div className="p-6 md:p-8 animate-fade-in">
      {/* About Me Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in">
          About Me
        </h2>
        <div className="w-12 h-1 bg-[#ffd700] rounded-full mb-8 animate-scale-in"></div>

        <div className="space-y-6 text-gray-300">
          <ReactMarkdown
            className="markdown text-gray-300 animate-slide-in"
            style={{ animationDelay: "0.1s" }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {aboutMeMarkdown}
          </ReactMarkdown>
        </div>
      </section>

      {/* What I'm Working On Section */}
      <section>
        <h2
          className="text-2xl font-bold text-white mb-8 animate-slide-in"
          style={{ animationDelay: "0.3s" }}
        >
          What I'm Working On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2f2f2f] rounded-xl p-6 animate-scale-in"
              style={{ animationDelay: project.animationDelay }}
            >
              {project.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
