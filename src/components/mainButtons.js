const mainButtons = () => {
  const btnContainer = document.getElementById('container');
  const btnComments = document.createElement('a');
  const btnReservations = document.createElement('a');

  btnComments.id = 'btn-comments';
  btnComments.innerHTML = 'Comments';
  btnReservations.id = 'btn-reservations';
  btnReservations.innerHTML = 'Reservations';
  
  btnContainer.classList.add('container', 'js-modal');
  btnComments.classList.add('btn');
  btnReservations.classList.add('btn');

  btnContainer.appendChild(btnComments);
  btnContainer.appendChild(btnReservations);
  
  
};

const modalComments = () => {
  const modalContainer = document.createElement('div');
  const modalInner = document.createElement('div');
  const modalClose = document.createElement('a');
  const modalContent = document.createElement('div')
  const modalTitle = document.createElement('h2');
  const modalDescription = document.createElement('p');
  const modalForm = document.createElement('form');
  const modalInput = document.createElement('input');
  const modalInput1 = document.createElement('input');
  const modalSubmit = document.createElement('button');

  modalContainer.id = 'modal-1';
  modalContainer.classList.add('modal');
  modalInner.classList.add('modal-inner');
  modalClose.classList.add('close-modal');
  modalContent.classList.add('modal-content');
  modalClose.innerHTML = '&times;';
  modalTitle.innerHTML = 'Movie.Name';
  modalDescription.innerHTML = 'Movie.Description';
  modalInput.type = 'text';
  modalInput.placeholder = 'Your Name';
  modalInput1.type = 'text';
  modalInput1.placeholder = 'Your Comment';
  modalSubmit.type = 'submit';
  modalSubmit.innerHTML = 'Submit';

  modalForm.appendChild(modalInput);
  modalForm.appendChild(modalInput1);
  modalForm.appendChild(modalSubmit);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalDescription);
  modalContent.appendChild(modalForm);
  modalInner.appendChild(modalClose);
  modalInner.appendChild(modalContent);
  modalContainer.appendChild(modalInner);

};

export { mainButtons, modalComments };




// const closeModal = () => {
//   const modal = document.querySelector('.modal-container');
//   modal.remove();
// };

// const displayPopup = () => {
//   const modal = document.createElement('div');
//   modal.classList.add('modal-container', 'main-center');

//   const modalWrapper = document.createElement('div');
//   modalWrapper.classList.add('wrapper', 'card', 'bg', 'flex');
//   modal.appendChild(modalWrapper);

//   const modalHeader = document.createElement('div');
//   modalHeader.classList.add('modal-header', 'flex');
//   modalWrapper.appendChild(modalHeader);

//   const modalTitle = document.createElement('h2');
//   modalTitle.classList.add('modal-title', 'Title');
//   modalTitle.innerHTML = 'Movie.Name'; // Change for the real data
//   modalHeader.appendChild(modalTitle);

//   const modalClose = document.createElement('a');
//   modalClose.classList.add('modal-close', 'close-modal');
//   modalClose.addEventListener('click', closeModal);
//   modalHeader.appendChild(modalClose);

//   const modalCloseIcon = document.createElement('img');
//   modalCloseIcon.setAttribute('src', '../assets/close.svg');
//   modalCloseIcon.setAttribute('alt', 'Close');
//   modalClose.appendChild(modalCloseIcon);

//   const infoList = document.createElement('div');
//   infoList.classList.add('info-txt');
//   modalWrapper.appendChild(infoList);

//   let infoItem = document.createElement('p');
//   let infoItemLink = document.createElement('a');
//   infoItemLink.classList.add('info-link', 'txt-link');
//   infoItemLink.href = '#';
//   infoItem.innerHTML = 'Movie.Description'; // Change for the real data
//   infoItemLink.innerHTML = 'Read more';
//   infoItem.appendChild(infoItemLink);
//   infoList.appendChild(infoItem);


// };

// export default { mainButtons, displayPopup, closeModal };