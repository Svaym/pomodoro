import { ChildrenProps } from '../../../types/types';
import classes from './Title.module.css';

export default function Title({ children }: ChildrenProps) {
  return <h2 className={classes.title}>{children}</h2>;
}
