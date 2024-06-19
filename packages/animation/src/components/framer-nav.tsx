import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 0, transform: "translateX(0)" },
  closed: { opacity: 1, transform: "translateX(-100px)" },
};

export const FramerNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleIsOpen}>Toggle</button>
      <motion.nav
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 3 }}
      >
        hello
      </motion.nav>
    </>
  );
};
