class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
    this.length = 0;
  }

  push(item) {
    this.data.push(item);
    this.top++;
    this.length++;
  }
  pop() {
    if (!this.length) return undefined;
    this.top--;
    this.length--;
    return this.data.pop();
  }
  peek() {
    if (!this.length) return undefined;
    return this.data[this.top];
  }
  isEmpty() {
    return !this.length;
  }
  getLength() {
    return this.length;
  }
  getTop() {
    return this.top;
  }
  printStack() {
    if (!this.length) {
      console.log('Stack is empty');
      return;
    }
    let i = this.top;
    while (i >= 0) {
      console.log(this.data[i]);
      i--;
    }
  }
}

module.exports = Stack;
