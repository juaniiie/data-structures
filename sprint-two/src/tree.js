var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  
  _.extend(newTree, treeMethods);
  
  return newTree;
};


  // your code here
  // newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){

	this.children.push(Tree(value));
 
};

treeMethods.contains = function(target, node) {
	node = node || this;
	if(node.value === target) {
		return true;
	}
	if (node.children && node.children.length > 0){
		for (var i = 0; i < node.children.length; i++) {
			if(this.contains(target, node.children[i])){
				return true;
			}
		}
	}
	return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
