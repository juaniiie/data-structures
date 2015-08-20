var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.storageLength = 0;
  this.first = 0;
  this.last = 0;

};


Queue.prototype.enqueue = function(value){
	this.storage[this.last] = value;
	this.last++;
	this.storageLength++;
};

Queue.prototype.dequeue = function(){
	var popped = this.storage[this.first];
	delete this.storage[this.first];
	this.first++;

	if(this.storageLength > 0) {
		this.storageLength--;
	}

	return popped;
};

Queue.prototype.size = function(){
	return this.storageLength;
};

