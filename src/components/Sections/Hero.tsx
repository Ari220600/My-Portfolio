import { motion } from "framer-motion";
import { Code, Sparkles, BotIcon } from "lucide-react";
import NetworkVisualization from "../3D/NetworkVisualization";

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen snap-both">
      <div className="absolute inset-0">
        <NetworkVisualization />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/20 to-black pointer-events-none" />

      <div className="relative z-10 h-screen md:flex-row flex flex-col items-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="text-left space-y-6"
          >
            <div className="flex gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20"
              >
                <BotIcon className="w-4 h-4 mr-2 text-[#f0f]" />
                <span className="text-[#f0f]">Ai & ML Lead</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#f0f]" />
                <span className="text-[#f0f]">Full Stack Developer</span>
              </motion.div>
            </div>

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Hi, I'm
              <span className="gradient-text block pb-2">
                Arindam Chakraborty
              </span>
            </motion.h4>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-lg"
            >
              AI/ML developer specializing in Generative AI, Agentic AI, and
              Computer Vision, with a strong foundation in building intelligent,
              end-to-end solutions. Experienced in developing and deploying
              full-stack web applications that integrate advanced AI
              capabilities for real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#0ff] to-[#f0f] text-black rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                <a href="#projects">View Projects</a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <a href="#contact">Contact Me</a>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="relative md:hiddden md:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.09, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="md:absolute inset-0"
              >
                <img
                  src="assets/img/img.png"
                  alt="ME"
                  className="md:w-full md:h-full w-1/2 md:mx-0 mx-auto h-1/2 object-cover rounded-2xl shadow-2xl"
                />
                <div className="md:absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#0ff]/20 to-[#f0f]/20 pointer-events-none" />
              </motion.div>
            </div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-tr from-[#0ff] to-[#f0f] rounded-full blur-3xl opacity-20"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-1 h-8 bg-gradient-to-b from-[#0ff] to-[#f0f] rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
