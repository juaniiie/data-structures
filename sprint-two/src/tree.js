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

treeMethods.contains = function(target){
	if(this.value === target.value) {
		return true;
	} else {
		return false;
	}
	for (var i = 0; i < this.children.length; i++){
		treeMethods.contains(children[i]);
	}

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
