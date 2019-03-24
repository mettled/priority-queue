const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap =  new MaxHeap;
	}

	push(data, priority = 0) {



	}

	shift() {

	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return (this.heap.length === 0);
	}
}

module.exports = PriorityQueue;
