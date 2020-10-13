const { describe, test, expect } = require('@jest/globals');
const Stack = require('./stack');

describe('Stack tests', () => {
  const TestStack = new Stack();
  let i = 0;
  test('isEmpty returns true when empty', () => {
    expect(TestStack.isEmpty()).toBe(true);
  });

  test('Push adds new items to stack', () => {
    while (i <= 100) {
      i++;
      TestStack.push(`Item ${i}`);
    }
    expect(TestStack.getLength()).toBe(i);
  });

  test('isEmpty returns false when not empty', () => {
    expect(TestStack.isEmpty()).toBe(false);
  });

  test('Peek returns top of stack', () => {
    expect(TestStack.peek()).toBe(`Item ${i}`);
  });

  test('Pop removes and returns item from stack', () => {
    const popOne = TestStack.pop();
    expect(popOne).toBe(`Item ${i}`);
    i--;
    const popTwo = TestStack.pop();
    expect(popTwo).toBe(`Item ${i}`);
    i--;
  });

  test('Trying to pop empty list', () => {
    while (i >= -1) {
      TestStack.pop();
      i--;
    }
    expect(TestStack.pop()).toBeUndefined();
  });

  test('Length prop after empty pop', () => {
    expect(TestStack.getLength()).toBe(0);
  });

  test('Top prop after empty pop', () => {
    expect(TestStack.getTop()).toBe(-1);
  });

  test('Peek after empty pop', () => {
    expect(TestStack.peek()).toBeUndefined();
  });
});
