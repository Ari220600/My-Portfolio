import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BackgroundPatternProps {
  pattern: "hero" | "about" | "projects" | "contact";
}

const patterns = {
  hero: {
    d: "M0 0c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20",
    viewBox: "0 0 400 40",
    clr: "#B829E1",
  },
  about: {
    d: "M0 0c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20",
    viewBox: "0 0 400 40",
    clr: "#1ca9c9",
  },
  projects: {
    d: "M0 0c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20",
    viewBox: "0 0 400 40",
    clr: "#47d61e",
  },
  contact: {
    d: "M0 0c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20",
    viewBox: "0 0 400 40",
    clr: "#592b1f",
  },
};

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ pattern }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      <motion.div className="absolute inset-0" style={{ scale, rotate }}>
        <svg
          className="w-full h-full opacity-5"
          viewBox={patterns[pattern].viewBox}
          preserveAspectRatio="none"
        >
          <motion.path
            d={patterns[pattern].d}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={patterns[pattern].clr} />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default BackgroundPattern;
