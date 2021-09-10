/**
 * @jest-environment jsdom
 */
import { getCommentCount } from '../src/modules/counters';

describe('Gets correct count of comments', () => {
  test('Comment count equals to 3', () => {
    document.body.innerHTML = '<div><ul class="container"></li></div>';
    const commentsContainer = document.querySelector('.container');
    const item1 = { item_id: '1', likes: 50, id: 1 };
    const item2 = { item_id: '2', likes: 500, id: 2 };
    const item3 = { item_id: '3', likes: 5000 };
    const commentsArray = [item1, item2, item3];
    getCommentCount(commentsContainer, commentsArray);

    expect(commentsContainer.innerHTML).toBe('Comments (3)');
  });
  test('Comment count equals to 0', () => {
    document.body.innerHTML = '<div><ul class="container"></li></div>';
    const commentsContainer = document.querySelector('.container');
    const commentsArray = [];
    getCommentCount(commentsContainer, commentsArray);

    expect(commentsContainer.innerHTML).toBe('Comments (0)');
  });
});
