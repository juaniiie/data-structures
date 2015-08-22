var BinarySearchTree = function(value) {
	var node = {};		
		node.value = value;
		node.left = null;
		node.right = null;

	_.extend(node, methods);
	
	return node;
};

var methods = {};

methods.insert = function(val, node) {
	
	node = node || this;
	
	//create a new node with val
	var newNode = BinarySearchTree(val);
	
	if(node.value > val) {
		if(node.left){
			return node.left.insert(val, node.left);
		}
		node.left = newNode;
	} else if (node.value < val) {
		if(node.right){
			return node.right.insert(val, node.right);
		}
		node.right = newNode;
	}

};

methods.contains = function(val, node) {

	node = node || this;
	
	if(node.value === val) {
		return true;
	} else if (node.value !== val) {
		if(node.value > val){
			if(node.left){
				return node.left.contains(val, node.left);
			}
			return false;
		} else if (node.value < val) {
			if(node.right) {
				return node.right.contains(val, node.right);
			}

			return false;
		}
	}

	return false;


};

methods.depthFirstLog = function(cb, node) {
	node = node || this;
	if(node.value) {
		cb(node.value);
	} 
	if (node.left){
		
		node.left.depthFirstLog(cb, node.left);
	}
	if (node.right) {
		
		node.right.depthFirstLog(cb, node.right);
	}

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
