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

export default modalComments;