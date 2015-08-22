var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //making buckets in each index of storage array
  for( var i = 0; i < this._limit; i++ ) {
  	this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  //check if bucket in index has any values stored in it
  if (this._storage.get(i).length > 0) {
    for (var m = 0; m < this._storage.get(i).length; m++) {
    	if (this._storage.get(i)[m][0] === key) {
    		this._storage.get(i)[m][1] = value;
    	} 
    } 
  } else {
  	 this._storage.get(i).push([key,value]);	
  }
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  
  if (this._storage.get(i).length > 0) {
    for (var m = 0; m < this._storage.get(i).length; m++) {
    	if (this._storage.get(i)[m][0] === key) {
    		return this._storage.get(i)[m][1];
    	} 
    } 
  }
  if (this._storage.get(i) === null) {
  	return null;
  	}
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);

  if (this._storage.get(i).length > 0) {
    for (var m = 0; m < this._storage.get(i).length; m++) {
    	if (this._storage.get(i)[m][0] === key) {
    		this._storage.get(i).splice(m, 1); 
    	} 
    } 
  }
  if (this._storage.get(i) === []) {
  	return null;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
