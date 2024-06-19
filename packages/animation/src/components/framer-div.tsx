import { motion } from "framer-motion";

export const FramerDiv = () => (
  <motion.h1
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    // animate={{ scale: 2 }}
    transition={{ duration: 50, repeat: Infinity }}
    // initial={false}
  >
    hello there!
  </motion.h1>
);
