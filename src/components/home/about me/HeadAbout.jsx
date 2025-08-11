import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const text = "About Me";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const HeadAbout = () => {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise((res) => setTimeout(res, 1500));
        await controls.start("hidden");
        await new Promise((res) => setTimeout(res, 500));
      }
    };

    loop();
  }, [controls]);

  return (
    <div>
      <motion.h1
        className="text-2xl font-bold mb-2 text-left flex text-white"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={child}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default HeadAbout;
