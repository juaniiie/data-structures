var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  //var valueArr = [value];
  this._storage.set(i, value);

};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);

  return this._storage.get(i);

};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);

  this._storage.storage[i] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
