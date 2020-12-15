# What is this?

A ready to use priority queue for our coders community. Especially coders from the C++ background will love this package.

# Installation

`npm i priority-queue`

Then...

```
const PriorityQueue = require("priority-queue");

// Our own custom compare function which we can pass while instantiating PriorityQueue

function compare(a, b) {
  if (a.salary > b.salary) return false;
  return true;
}

const myPriorityQueue = new PriorityQueue(compare);

pq.push({ name: "Hitesh", salary: 10000 });
pq.push({ name: "Hitesh1", salary: 22000 });
pq.push({ name: "Hitesh2", salary: 14000 });
pq.push({ name: "Hitesh3", salary: 16000 });
pq.push({ name: "Hitesh4", salary: 20000 });

console.log(pq.top()); // output -> { name: 'Hitesh1', salary: 22000 }
console.log(pq.pop()); // output -> { name: 'Hitesh1', salary: 22000 }
console.log(pq.top()); // output -> { name: 'Hitesh4', salary: 20000 }
```

## Options

PriorityQueue supports following methods:

Comparator function //as shows in example above

- You can create your own Comparator function as per the requirement in order to create a Min Heap or a Max Heap.
  Inside the Comparator function return true if want to perform a swap otherwise return false.

- push() -> inserts the element inside the priority queue
- pop() -> pops and returns the front element from the priority queue
- top() -> returns the front element from the priority queue
- size() -> returns the size of the priority queue
