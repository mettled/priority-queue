const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = 30;
		this.heap =  new MaxHeap;
	}

	push(data, priority = 0) {
		return this._Data.push({
			data: data,
			priority: priority
		  });
	}

	shift() {

	}

	size() {
		return this._q.length;
	}

	isEmpty() {

	}
}

module.exports = PriorityQueue;
