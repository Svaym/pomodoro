import { ReactNode } from 'react';

import styles from './Title.module.css';

interface TitleProps {
  children: ReactNode;
}
export default function Title({ children }: TitleProps) {
  return <h2 className={styles.title}>{children}</h2>;
}
