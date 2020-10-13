const { describe, test, expect } = require('@jest/globals');
const Queue = require('./queue');

describe('Queue tests', () => {
  const TestQ = new Queue();
  let i = 0;

  test('isEmpty returns true when empty', () => {
    expect(TestQ.isEmpty()).toBe(true);
  });

  test('Add adds new items to queue', () => {
    while (i <= 100) {
      i++;
      TestQ.add(`Item ${i}`);
    }
    expect(TestQ.getLength()).toBe(i);
  });

  test('isEmpty returns false when not empty', () => {
    expect(TestQ.isEmpty()).toBe(false);
  });

  test('Peek returns front of queue', () => {
    expect(TestQ.peek()).toBe('Item 1');
  });

  test('Remove removes and returns first in line', () => {
    expect(TestQ.remove()).toBe('Item 1');
    i--;
    expect(TestQ.getLength()).toBe(i);
    expect(TestQ.remove()).toBe('Item 2');
    i--;
    expect(TestQ.getLength()).toBe(i);
  });

  test('Trying to remove empty queue', () => {
    while (i >= -1) {
      TestQ.remove();
      i--;
    }
    expect(TestQ.remove()).toBeUndefined();
  });

  test('Length prop after removing empty queue', () => {
    expect(TestQ.getLength()).toBe(0);
  })

  test('isEmpty after remove() on empty queue', () => {
    expect(TestQ.isEmpty()).toBe(true);
  })

  test('peek() on empty queue', () => {
    expect(TestQ.peek()).toBeUndefined();
  })
});
