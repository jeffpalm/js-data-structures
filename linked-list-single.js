class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = Symbol('head');

class LinkedListSingle {
  constructor() {
    this[head] = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new LinkedListNode(data);

    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let cur = this[head];

      while (cur.next !== null) {
        cur = cur.next;
      }

      cur.next = newNode;
    }
    this.length++
  }

  get(index) {
    if (index < 0) return undefined;

    let cur = this[head],
      i = 0;

    while (cur !== null && i < index) {
      cur = cur.next;
      i++;
    }

    return cur === null ? undefined : cur.data;
  }

  remove(index) {
    if (this[head] === null || index < 0)
      throw new RangeError(`Index ${index} doesn't exist in the list`);

    if (index === 0) {
      const data = this[head].data;

      this[head] = this[head].next;

      this.length--;

      return data;
    }

    let cur = this[head],
      prev = null,
      i = 0;

    while (cur !== null && i < index) {
      prev = cur;
      cur = cur.next;
      i++;
    }

    if (cur === null)
      throw new RangeError(`Index ${index} doesn't exist in the list`);

    prev.next = cur.next;

    this.length--;

    return cur.data;
  }

  *values() {
    let cur = this[head];

    while (cur !== null) {
      yield cur.data;
      cur = cur.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}

module.exports = LinkedListSingle;
