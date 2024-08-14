import { Plus } from 'lucide-react';

import { useState } from 'react';

import Button from '../../atoms/Button/Button';
import ModalTime from '../../molecules/ModalTime/ModalTime';
import classes from './Pomodoro.module.css';

export default function Pomodoro() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setModalOpen(!modalOpen)} variant="default_filled">
        <div className={classes.btn}>
          <Plus className={classes.plus} />
          <h2>Новый интервал</h2>
        </div>
      </Button>
      {modalOpen && <ModalTime opened={modalOpen} close={() => setModalOpen(!modalOpen)} />}
    </>
  );
}
