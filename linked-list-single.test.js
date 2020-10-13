const { describe, test, expect } = require('@jest/globals');
const LinkedList = require('./linked-list-single');

describe('Linked List - Single Tests', () => {
  const TestList = new LinkedList();
  const nodesToAdd = ['zero', 'one', 'two', 'three', 'four'];
  nodesToAdd.forEach((node) => {
    TestList.add(node);
  });

  test('Add method adds nodes', () => {
    expect(TestList.length).toBe(5);
  });

  test('List is iterable', () => {
    let i = 0;
    for (let nodeData of TestList) {
      expect(nodeData).toBe(nodesToAdd[i]);
      i++;
    }
  });

  test('remove() removes and returns correct node', () => {
    const removed = TestList.remove(2);
    expect(removed).toBe('two');
    expect(TestList.length).toBe(4);
  });
});
