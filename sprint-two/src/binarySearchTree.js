var BinarySearchTree = function(value){
	var node = {
		value: value;
	};
	//this.left;
	//this.right;
	_.extend(node, methods);
	return node;
};

var methods = {};

methods.insert = function(value) {
	var node = new BinarySearchTree(value);
	if(this.value > value) {
		this.left = node;
	} else {
		this.right = node;
	}
};

methods.contains = function () {

};

methods.depthFirstLog = function () {
	// _.each(this.arrOfNodes, function(node){
	// 	var valueNode = node.value;
	// 	cb(valueNode);
	// });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
