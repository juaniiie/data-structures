var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.storageLength = 0;
  someInstance.first = 0;
  someInstance.last = 0;
  
  return someInstance;
};

var queueMethods = {
	
  	enqueue: function(value){
	    this.storage[this.last] = value;
		this.last++;
		this.storageLength++;
  	},

  	dequeue: function(){


	  	var popped = this.storage[this.first];
	    delete this.storage[this.first];
	    this.first++;

	    if(this.storageLength > 0) {
	    	this.storageLength--;
	    }

	    return popped;
 	},

	size: function(){
	    return this.storageLength;
  	}
};


