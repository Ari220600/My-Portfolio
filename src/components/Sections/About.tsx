import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const skills = [
  { name: "Gen AI", level: 90 },
  { name: "Agentic Ai", level: 80 },
  { name: "Computer Vision", level: 90 },
  { name: "Python Scripting", level: 95 },
  { name: "Ai & ML", level: 85 },
  { name: "Docker", level: 85 },
  { name: "React", level: 90 },
  { name: "CPP", level: 80 },
];

const About = () => {
  return (
    <section
      className="py-20 bg-gradient-to-t from-black/50 via-purple-900/20 to-black"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }} // Re-triggers animation on scroll
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am a <strong>Developer</strong> expertised in
            <br />
            creating exceptional digital experiences through innovative coding,
            with expertise in developing immersive web applications using
            cutting-edge technologies. Proficient in the field of Generative AI,
            bringing a wealth of experience to deliver transformative
            solutions...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }} // Re-triggers animation on scroll
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-[#0ff]">{skill.level}%</span>
                  </div>
                  <motion.div
                    className="h-2 bg-gray-700 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ amount: 0.5 }} // Re-triggers animation on scroll
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#0ff] to-[#f0f] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
          <ScrollParallax>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.5 }} // Re-triggers animation on scroll
              className="bg-gray-900 rounded-lg p-8 shadow-inner hover:shadow-purple-600/90 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Experience
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[#0ff] font-semibold">
                    Senior Developer
                  </h4>
                  <p className="text-gray-400">Wipro Technologies • 3 Years</p>
                  <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
                    <li>
                      Led 5 major projects, delivering production-ready Agentic
                      AI and Generative AI based web applications.
                    </li>
                    <li>
                      2 Major Predictive maintainance projects based on textual
                      and imagery datasets.
                    </li>
                    <li>
                      Partnered with Intel on live projects and POCs, focusing
                      on cutting-edge technologies.
                    </li>
                    <li>
                      Hands-on expertise in Generative AI with LLMs, VLMs, and
                      tools like LLAMA-INDEX for Data Analysis and Development.
                    </li>
                    <li>
                      Proficient in Docker, AWS, Linux, and AI/ML for Raspberry
                      Pi devices.
                    </li>
                    <li>
                      Developed vision models, Python scripts, and advanced AI
                      applications.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#0ff] font-semibold">
                    Additional Experience
                  </h4>
                  <p className="text-gray-400">
                    Personal and Collaborative Projects
                  </p>
                  <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
                    <li>
                      Web application designs, including clones of popular
                      platforms.
                    </li>
                    <li>
                      Development of AI/ML and Generative AI applications,
                      including RAAG-powered solutions.
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="text-[#0ff] underline hover:text-white"
                      >
                        Explore projects
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default About;
