import { Plus } from 'lucide-react';

import { useState } from 'react';

import { useMinuteStore, useSecondStore } from '../../../store/store';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import ModalTime from '../../molecules/ModalTime/ModalTime';
import classes from './Pomodoro.module.css';

export default function Pomodoro() {
  const [modalOpen, setModalOpen] = useState(false);
  const minute = useMinuteStore((state) => state.minute);
  const second = useSecondStore((state) => state.second);
  return (
    <>
      <section>
        <Container>
          <div>
            {minute} минут
            {second} секунд
          </div>
          {minute === 0 || second === 0 ? (
            <Button onClick={() => setModalOpen(!modalOpen)} variant="default_filled">
              <div className={classes.btn}>
                <Plus className={classes.plus} />
                <h2>Новый интервал</h2>
              </div>
            </Button>
          ) : (
            <Button onClick={() => setModalOpen(!modalOpen)} variant="default_filled">
              Изменить интервал
            </Button>
          )}
          {modalOpen && <ModalTime opened={modalOpen} close={() => setModalOpen(!modalOpen)} />}
        </Container>
      </section>
    </>
  );
}
