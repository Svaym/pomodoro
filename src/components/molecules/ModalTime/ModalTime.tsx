import { useState } from 'react';

import { useMinuteStore, useSecondStore } from '../../../store/store';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Modal from '../../atoms/Modal/Modal';
import classes from './ModalTime.module.css';

export interface ModalTimeProps {
  opened: boolean;
  close: () => void;
}
export default function ModalTime({ opened, close }: ModalTimeProps) {
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const updateMinute = useMinuteStore((state) => state.updateMinute);
  const updateSecond = useSecondStore((state) => state.updateSecond);
  function handleClick() {
    if (minute.trim().length > 0 && second.trim().length > 0) {
      updateMinute(+minute);
      updateSecond(+second);
    }
  }
  return (
    <Modal opened={opened} close={close}>
      <div className={classes.inputs}>
        <Input
          value={minute}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMinute(event.target.value)}
          placeholder="Минуты"
        />
        <Input
          value={second}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSecond(event.target.value)}
          placeholder="Секунды"
        />
        <Button variant="primary_filled" onClick={() => handleClick()}>
          Добавить
        </Button>
      </div>
    </Modal>
  );
}
