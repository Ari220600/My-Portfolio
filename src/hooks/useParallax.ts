import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface UseParallaxProps {
  offset?: number[];
  inputRange?: number[];
  outputRange?: number[];
}

export const useParallax = ({
  offset = ["start end", "end start"],
  inputRange = [0, 1],
  outputRange = [0, 1],
}: UseParallaxProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const value = useTransform(scrollYProgress, inputRange, outputRange);

  return { ref, value };
};