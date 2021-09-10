/* eslint-disable no-await-in-loop */
import { getLikes } from './getInvolvement.js';
import { postLikes } from './postInvolvement.js';
import { getLikesCount } from './counters.js';

const buildShows = async (showsList, container) => {
  const likes = await getLikes();
  for (let i = 0; i <= showsList.length - 1; i += 1) {
    const showContainer = document.createElement('div');
    showContainer.id = `movie_${showsList[i].id}`;
    showContainer.classList.add('shows');

    const img = document.createElement('img');
    img.src = showsList[i].image.medium;
    img.style.width = 'auto';
    showContainer.appendChild(img);

    const likeBtn = document.createElement('div');
    likeBtn.innerHTML =
      '<button class= "like-btn"><i class="fas fa-heart"></i></button>';
    likeBtn.id = `like_${showsList[i].id}`;
    const likeCounter = document.createElement('div');
    likeCounter.classList.add('like-cnt');
    getLikesCount(likeBtn, likes, likeCounter);
    showContainer.appendChild(likeCounter);
    showContainer.appendChild(likeBtn);
    const commentBtn = document.createElement('div');
    commentBtn.innerHTML = '<button class="comment-popup">Comment</button>';
    showContainer.appendChild(commentBtn);
    container.appendChild(showContainer);

    likeBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      await postLikes(likeBtn.id);
      window.location.reload();
    });
  }
};

export default buildShows;
