import './style.css';
import { modalComments, mainButtons } from './components/mainButtons';

const initializer = () => {
  console.log('Botones: ', mainButtons);
  console.log('Modal: ', modalComments);
  mainButtons();
  modalComments();
};

initializer();