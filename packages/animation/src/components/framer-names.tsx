import { Variants, motion } from "framer-motion";

const names = ["Samsa", "Piter", "Romulus", "Blank"];

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: { delay: index * 0.3 + 1, duration: 1 },
  }),
};

export const FramerNames = () => {
  return (
    <ul>
      {names.map((name, index) => (
        <motion.li
          variants={variants}
          animate="visible"
          key={index}
          initial="hidden"
          custom={index}
        >
          {name}
        </motion.li>
      ))}
    </ul>
  );
};
