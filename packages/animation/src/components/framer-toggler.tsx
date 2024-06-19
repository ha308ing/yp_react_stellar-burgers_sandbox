import { motion } from "framer-motion";
import "./framer-toggler.css";
import { useState } from "react";

export const FramerToggler = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleIsOn = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="switch" onClick={toggleIsOn} data-ison={isOn}>
      <motion.div className="handle" layout={true} />
    </div>
  );
};
