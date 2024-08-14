import { X } from 'lucide-react';

import { ChildrenProps } from '../../../types/types';
import classes from './Modal.module.css';

interface ModalProps extends ChildrenProps {
  opened: boolean;
  close: () => void;
}
export default function Modal({ children, opened, close }: ModalProps) {
  if (!opened) {
    return null;
  }
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <X onClick={close} className={classes.x} />
        {children}
      </div>
    </div>
  );
}
