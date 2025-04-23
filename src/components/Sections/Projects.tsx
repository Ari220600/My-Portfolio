import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../UI/ProjectCard";
import BackgroundPattern from "../Layout/BackgroundPattern";

const projects = [
  {
    title: "Football analysis app using Yolo",
    description:
      "Using YOLO model Football match can be analysed in live time to detect players' speed position, Ball's position nd posession percentage among the tams also camera angles.",
    image: "assets/img/ftbl.png",
    video: "public/assets/vdo/Football_Yolo.mp4",
    tags: ["Python", "AI", "VISION-MODEL", "Machine Learning"],
    links: {
      demo: "",
      github: "https://github.com/Ari220600/Football-Analysis-using-YOLO",
    },
  },

  {
    title: "brainwave-ai-tool-landing-page",
    description:
      "This is a Landing page for imaginary AI based website Brainwave using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    image: "assets/img/brnv.png",
    video: "public/assets/vdo/Brainwave-Ai-tool-landing-page.mp4",
    tags: ["React", "Tailwind", "GSAP"],
    links: {
      demo: "https://brainwave-ai-tool-landing-page.netlify.app",
      github: "https://github.com/Ari220600/Brainwave_react_landing_page",
    },
  },
  {
    title: "Code-Gen using OLLAMA",
    description:
      "Using OLLAMA and LLAMA index and RAAG pyprline creating a code base chatbot that providing a code and info regarding the topic that the code is based on this will be your assistant ro walk through and improve the CODE... Further improvement can be done upon Fine tuning....(Ongoing)",
    image: "public/assets/img/LLama.png",
    video: "public/assets/vdo/LLama.mp4",
    tags: ["Ollama", "LLama index", "GEN AI", "Python", "RAAG"],
    links: {
      demo: "",
      github: "https://github.com/Ari220600/Code-Gen",
    },
  },

  {
    title: "Iphone 15-pro Landing Page Webapp",
    description:
      "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    image: "assets/img/iphn.png",
    video: "public/assets/vdo/Iphone-15-Pro-clone.mp4",
    tags: ["React", "Three.js", "Tailwind", "GSAP"],
    links: {
      demo: "https://iphone-15-pro-clone-webapp.netlify.app/",
      github: "https://github.com/Ari220600/iphone-15-pro-clone",
    },
  },
  {
    title: "Zentry Website Clone",
    description:
      "This project is a modern clone of the iconic Zentry website, built with React.js, Tailwind CSS, and GSAP to deliver a luxurious and immersive user journey. It features scroll-triggered animations, geometric clip-path transitions, and interactive 3D hover effects, all contributing to a sleek, cutting-edge aesthetic. Integrated video storytelling enhances engagement, while smooth UI/UX and full responsiveness ensure an elegant experience on all devices. Thoughtfully structured for code reusability and scalability, this clone reflects the spirit of Awwwards-winning design.",
    image: "assets/img/znt.png",
    video: "public/assets/vdo/Zentry-landing-page.mp4",
    tags: ["React", "TypeScript", "GSAP", "Tailwind"],
    links: {
      demo: "https://zentry-landing-page-clone.netlify.app/",
      github: "https://github.com/Ari220600/Zentry-clone",
    },
  },
];

const Projects = () => {
  return (
    <section
      className="relative py-20 bg-gradient-to-t from-black/50 via-purple-900/20"
      id="projects"
    >
      <BackgroundPattern pattern="projects" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work showcasing creative solutions and
            technical expertise
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className=" lg:columns-3 md:columns-2 columns-1 ">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ amount: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
