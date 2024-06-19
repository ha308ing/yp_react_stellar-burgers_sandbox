import { useRef, useState } from "react";
import styles from "./block.module.css";

export const Block = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (ref?.current?.classList)
      ref.current.classList.toggle(styles.isOpen, !isOpen);
  };

  return (
    <>
      <div ref={ref} className={styles.block}>
        Hello there!
      </div>
      <button onClick={handleClick}>Toggle</button>
    </>
  );
};
