import './assets/stylesheets/style.css';
import buildShows from './modules/buildShows.js';
import { showsCount } from './modules/counters.js';
import getShows from './modules/getShows.js';
import modalStructure from './modules/modal.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const itemsTitle = document.querySelector('.items-title');
const allShowsContainer = document.querySelector('.shows-list');

window.addEventListener('load', async () => {
  const shows = await getShows();
  const sixShows = shows.slice(0, 16);

  itemsTitle.innerHTML = `TV SHOWS (${showsCount(sixShows)})`;
  await buildShows(sixShows, allShowsContainer);

  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  modalStructure(commentPopup, sixShows);
});
