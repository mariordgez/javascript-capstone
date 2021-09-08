import './style.css';
import mainButtons from './components/mainButtons';
import modalComments from './components/modalComments';

const initializer = () => {
  console.log('Botones: ', mainButtons);
  console.log('Modal: ', modalComments);
  mainButtons();
  modalComments();
};

initializer();