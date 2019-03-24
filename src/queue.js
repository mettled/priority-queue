const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap =  new MaxHeap;
	}

	push(data, priority = 0) {

		return this.heap.push({
			value: value,
			priority: priority
		  });
		//this.heap.push(data, priority);

		//console.log(data);

	}

	shift() {

	}

	size() {
		//return this.length;
	}

	isEmpty() {
		//return !(this.length === 0);
	}
}

module.exports = PriorityQueue;
