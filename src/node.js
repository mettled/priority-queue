class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left  = null;
		this.right = null;

	}

	appendChild(node) {
		if (this.left && this.right)
			return;

		if (this.left == null){
			this.left = node;
		} else if (this.left){
			this.right = node;
		}





		this.left.parent = null;
	}

	removeChild(node) {
		if (this.left){
			this.left = null;
		}
		if (this.right){
			this.right = null;
		}

		if (node.left != this.left && node.right != this.right)
			return error;


	}

	remove() {
		if (this.parent == null )
			return;

		removeChild(node);
	}

	swapWithParent() {
		if (this.parent == null )
			return;


	}
}

module.exports = Node;
