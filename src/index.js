import './style.css';
import mainButtons from './components/mainButtons';

const initializer = () => {
  console.log('Buttons: ', mainButtons);
  mainButtons();
};

initializer();