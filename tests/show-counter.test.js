/**
 * @jest-environment jsdom
 */
import { showsCount } from '../src/modules/counters';

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
