const comparator = (firstElement, secondElement) => {
  if (firstElement > secondElement) return false;
  return true;
};

class PriorityQueue {
  array = [];
  classComparator;

  constructor(compareFunction) {
    if (compareFunction) {
      this.classComparator = compareFunction;
    } else {
      this.classComparator = comparator;
    }
  }

  push(element) {
    this.array.push(element);
    let n = this.array.length - 1;
    let i = n;
    let temp = this.array[i];

    while (i > 0 && this.classComparator(this.array[parseInt(i / 2)], temp)) {
      this.array[i] = this.array[parseInt(i / 2)];
      i = parseInt(i / 2);
    }

    this.array[i] = temp;
  }

  pop() {
    if (this.array.length === 0) return;

    let temp = this.array[0];
    let n = this.array.length;

    let i, j, x;
    x = this.array[n - 1];
    this.array[0] = this.array[n - 1];
    this.array.pop();
    (i = 0), (j = 2 * i + 1);

    while (j < this.array.length) {
      if (this.array[j] < this.array[j + 1]) {
        j = j + 1;
      }

      if (this.classComparator(this.array[i], this.array[j])) {
        let temp1 = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp1;
        i = j;
        j = 2 * j;
      } else break;
    }

    return temp;
  }

  size() {
    return this.array.length;
  }

  top() {
    return this.array[0];
  }
}

module.exports = PriorityQueue;
