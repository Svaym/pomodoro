import { motion } from 'framer-motion';

import classes from './Header.module.css';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className={classes.header}
    >
      Pomodoro
    </motion.header>
  );
}
