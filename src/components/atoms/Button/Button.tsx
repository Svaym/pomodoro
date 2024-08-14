import { motion } from 'framer-motion';

import clsx from 'clsx';

import classes from './Button.module.css';

type ButtonVariant = 'primary_filled' | 'default_filled';
interface ButtonProps extends React.ComponentProps<'button'> {
  variant: ButtonVariant;
  onClick: () => void;
}
export default function Button({ children, variant, onClick }: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, x: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      type="button"
      onClick={onClick}
      className={clsx(classes.btn, {
        [classes.btnDefault]: variant === 'default_filled',
        [classes.btnPrimary]: variant === 'primary_filled',
      })}
    >
      {children}
    </motion.button>
  );
}
