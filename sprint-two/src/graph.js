

// ###Graph Solution

// Instantiate a new graph
var Graph = function() {

	this.arrOfNodes = [];
	// this.arrOfNodes.value = node;
	// this.arrOfNodes.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	var nodeObj = {};
	nodeObj.value = node;
	nodeObj.edges = []; 
	this.arrOfNodes.push(nodeObj); // when we create a new graph instance

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
	for (var i = 0; i < this.arrOfNodes.length; i++) {
		if (this.arrOfNodes[i].value === node) {
			return true;
		}
	}
	return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){

	for(var i = 0; i < this.arrOfNodes.length; i++){
		if(this.arrOfNodes[i].value === node){
			 this.arrOfNodes.splice(i, 1);
		}
	}

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	var from;
	var to;
	for(var i = 0; this.arrOfNodes.length; i++){
		if(this.arrOfNodes[i].contains(fromNode)){
			from = this.arrOfNodes[i];
		}
		if(this.arrOfNodes[i].contains(toNode)){
			to = this.arrOfNodes[i];
		}
	}

	if(from.edges.indexOf(to) > -1 && to.edges.indexOf(from) > -1) {
		return true;
	} 
	return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
	var from;
	var to;
	for(var i = 0; this.arrOfNodes.length; i++){
		if(this.arrOfNodes[i].contains(fromNode)){
			from = this.arrOfNodes[i];
		}
		if(this.arrOfNodes[i].contains(toNode)){
			to = this.arrOfNodes[i];
		}
	}
	from.edges.push(to);
	to.edges.push(from);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var node = new Graph("cat");
 console.log(node);
 node.addNode('kitten'); 
 console.log(node);



