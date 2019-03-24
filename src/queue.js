const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = 30;
		this.heap =  new MaxHeap;
	}

	push(data, priority = 0) {

		if (data.length < 1) {
			return false;
		  } else if (data.length === 1) {
			return this.add(data[0]);
		  } else {
			return this.addAll(data);
		  }

	}

	shift() {

	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.length === 0;
	}
}

module.exports = PriorityQueue;
