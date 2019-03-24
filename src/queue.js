const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this._Data = [];
		this._maxSize = maxSize;
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
