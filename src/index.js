import './assets/stylesheets/style.css';
import buildShows from './modules/buildShows';
import { showsCount } from './modules/counters';
import getShows from './modules/getShows';
import modalStructure from './modules/modal';
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
