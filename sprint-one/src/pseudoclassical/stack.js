var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageLength = 0;
};
Stack.prototype.push = function(value){
    this.storage[this.storageLength] = value;
    this.storageLength++;
};
Stack.prototype.pop = function(){
	var popped = this.storage[this.storageLength - 1];
	delete this.storage[this.storageLength - 1];
	this.storageLength--;
	if (this.storageLength < 0){
		this.storageLength = 0;
	}
	return popped;
};
Stack.prototype.size = function(){
	return this.storageLength;
};


