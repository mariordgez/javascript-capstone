/* eslint-disable no-await-in-loop */

const buildShows = async (showsList, container) => {
  for (let i = 0; i <= showsList.length - 1; i += 1) {
    const showContainer = document.createElement('div');
    showContainer.id = `movie_${showsList[i].id}`;

    const img = document.createElement('img');
    img.src = showsList[i].image.medium;
    img.style.width = 'auto';
    showContainer.appendChild(img);

    const commentBtn = document.createElement('div');
    commentBtn.innerHTML = '<button class="comment-popup">Comment</button>';
    showContainer.appendChild(commentBtn);
    container.appendChild(showContainer);

  }
};

export default buildShows;