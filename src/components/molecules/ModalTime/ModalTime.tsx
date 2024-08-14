import Button from '../../atoms/Button/Button';
import Modal from '../../atoms/Modal/Modal';

export interface ModalTimeProps {
  opened: boolean;
  close: () => void;
}
export default function ModalTime({ opened, close }: ModalTimeProps) {
  return (
    <Modal opened={opened} close={close}>
      <Button onClick={() => console.log(123132)} variant="primary_filled">
        adsads
      </Button>
    </Modal>
  );
}
