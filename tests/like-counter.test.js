/**
 * @jest-environment jsdom
 */
import { getLikesCount, showsCount } from '../src/modules/counters';

describe('Gets correct count of items based on a transformed array', () => {
  test('showCount equal to four based on showlist', () => {
    const showlist = ['show1', 'show2', 'show3', 'show4'];
    expect(showsCount(showlist)).toBe(4);
  });
  test('showCount not equal to 4 based on showlist', () => {
    const showlist = ['show1', 'show2', 'show3', 'show4'];
    showlist.push('show5');
    expect(showsCount(showlist)).toBe(5);
  });
});

describe('Gets correct count of likes based on the item', () => {
  beforeEach(() => {});

  test('likeCount equals to 50', () => {
    document.body.innerHTML =
      '<div>' + '  <ul class="container"></li>' + '</div>';
    const likesContainer = document.querySelector('.container');
    const likeBtn = document.createElement('div');
    likeBtn.innerHTML =
      '<button id="1" class= "like-btn"><i class="fas fa-heart"></i></button>';
    likeBtn.id = '1';
    const item1 = { item_id: '1', likes: 50, id: 1 };
    const item2 = { item_id: '2', likes: 500, id: 2 };
    const item3 = { item_id: '3', likes: 5000 };
    const likesArray = [item1, item2, item3];
    getLikesCount(likeBtn, likesArray, likesContainer);

    expect(likesContainer.innerHTML).toBe('50 likes');
  });
  test('likeCount equals to 500', () => {
    document.body.innerHTML =
      '<div>' + '  <ul class="container"></li>' + '</div>';
    const likesContainer = document.querySelector('.container');
    const likeBtn = document.createElement('div');
    likeBtn.innerHTML =
      '<button id="1" class= "like-btn"><i class="fas fa-heart"></i></button>';
    likeBtn.id = '2';
    const item1 = { item_id: '1', likes: 50, id: 1 };
    const item2 = { item_id: '2', likes: 500, id: 2 };
    const item3 = { item_id: '3', likes: 5000 };
    const likesArray = [item1, item2, item3];
    getLikesCount(likeBtn, likesArray, likesContainer);

    expect(likesContainer.innerHTML).toBe('500 likes');
  });
  test('likeCount not equal to 500', () => {
    document.body.innerHTML =
      '<div>' + '  <ul class="container"></li>' + '</div>';
    const likesContainer = document.querySelector('.container');
    const likeBtn = document.createElement('div');
    likeBtn.innerHTML =
      '<button id="1" class= "like-btn"><i class="fas fa-heart"></i></button>';
    likeBtn.id = '3';
    const item1 = { item_id: '1', likes: 500, id: 1 };
    const item2 = { item_id: '2', likes: 500, id: 2 };
    const item3 = { item_id: '3', likes: 5000 };
    const likesArray = [item1, item2, item3];
    getLikesCount(likeBtn, likesArray, likesContainer);

    expect(likesContainer.innerHTML).not.toBe('500 likes');
  });
});
