import { motion } from "framer-motion";

const names = ["Samsa", "Piter", "Romulus", "Blank"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const FramerContainer = () => (
  <motion.ul variants={container} initial="hidden" animate="show">
    {names.map((name, index) => (
      <motion.li variants={listItem} key={index}>
        {name}
      </motion.li>
    ))}
  </motion.ul>
);
