const mainButtons = () => {
  const btnContainer = document.getElementById('container');
  const btnComments = document.createElement('a');
  const btnReservations = document.createElement('a');

  btnComments.id = 'btn-comments';
  btnComments.innerHTML = 'Comments';
  btnReservations.id = 'btn-reservations';
  btnReservations.innerHTML = 'Reservations';
  
  btnContainer.classList.add('container');
  btnComments.classList.add('btn');
  btnReservations.classList.add('btn');

  btnContainer.appendChild(btnComments);
  btnContainer.appendChild(btnReservations);
};

export default mainButtons;