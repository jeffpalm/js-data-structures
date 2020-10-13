class Queue {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  add(item) {
    this.data.push(item);
    this.length++;
  }
  remove() {
    if (!this.length) return undefined;
    this.length--;
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
  isEmpty() {
    return !this.length;
  }
  getLength() {
    return this.length
  }
  print() {
    if (!this.length) {
      console.log('Queue Empty');
      return;
    }
    this.data.forEach((item) => {
      console.log(item);
    });
  }
}

module.exports = Queue;
