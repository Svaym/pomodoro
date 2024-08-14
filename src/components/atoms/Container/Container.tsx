import { ChildrenProps } from '../../../types/types';
import classes from './Container.module.css';

export default function Container({ children }: ChildrenProps) {
  return <div className={classes.container}>{children}</div>;
}
