import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const Preloader = () => {
  const [startAnimation, setStartAnimation] = useState(false); // State to trigger animation
  const controls = useAnimation(); // Animation controls for line animation

  // Handler for the "Click to Start" button
  const handleStartClick = () => {
    setStartAnimation(true); // Trigger animation on button click

    // Animate the lines when the button is clicked
    controls.start({
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Background Particle Animation */}
      <motion.div
        className="absolute w-full h-full bg-gradient-to-b from-black/50 via-purple-900/20 to-black opacity-40"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="absolute w-full h-full bg-gradient-to-t from-[#00C9FF] to-[#FF007F] opacity-10 blur-3xl"></div>
      </motion.div>

      {/* Floating Orbs with Smooth 3D Effects */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-500 rounded-full opacity-70"
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -80, 0],
          x: [0, 100, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-[#f0f] rounded-full opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, 80, 0],
          x: [0, -100, 0],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Developer Journey Text with Smooth Animation */}
      <motion.div
        className="absolute text-white font-mono text-4xl opacity-100"
        animate={{
          opacity: [0, 1, 0],
          x: [0, 50, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <span className="typing-text">Writing Code...</span>
      </motion.div>

      <motion.div
        className="absolute text-white font-mono text-4xl opacity-100"
        animate={{
          opacity: [0, 1, 0],
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 2,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <span className="typing-text">Sipping my coffee...</span>
      </motion.div>

      <motion.div
        className="absolute text-white font-mono text-4xl opacity-100"
        animate={{
          opacity: [0, 1, 0],
          x: [0, 50, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <span className="typing-text">Deploying.....</span>
      </motion.div>

      {/* Particle Animation (Starry, Minimalistic Particles) */}
      <div className="absolute w-full h-full flex justify-center items-center pointer-events-none">
        <motion.div
          className="particle"
          animate={{
            opacity: [0, 0.5, 0],
            y: [-50, 0, 50],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="particle"
          animate={{
            opacity: [0, 0.5, 0],
            y: [50, 0, -50],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Interactive Developer Avatar */}
      <motion.div
        className="absolute w-20 h-20 bg-gray-800 rounded-full border-4 border-white flex items-center justify-center cursor-pointer"
        whileHover={{
          scale: 1.2,
          rotate: 10,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="w-12 h-12 bg-gray-700 rounded-full"></div>{" "}
        {/* Avatar */}
      </motion.div>

      {/* Soft Glowing Progress Bar */}
      {/* <motion.div
        className="absolute bg-gradient-to-r from-[#00C9FF] to-[#FF007F] h-2 rounded-full w-64"
        animate={{
          width: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      /> */}

      {/* Start Button with Glow Effect */}
      <motion.div
        className="absolute bottom-16 text-white font-mono text-xl opacity-100 cursor-pointer"
        whileHover={{
          scale: 1.1,
          color: "#FF007F",
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={handleStartClick} // Trigger animation on click
      >
        <span>Click to Start</span>
      </motion.div>

      {/* Line Animation triggered by Button Click */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#FF007F] h-1 rounded-full"
        initial={{ width: "0%" }}
        animate={startAnimation ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Preloader;
