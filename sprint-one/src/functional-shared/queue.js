var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
		storage: {},
		storageLength: 0,
		first: 0,
		last: 0
	};

	someInstance = _.extend(someInstance, queueMethods);
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

	   //  var arrVals = [];
	   //  for(var key in this.storage){
	   //    arrVals.push(this.storage[key]);
	   //  }
	    
	   //  this.storage = {};
	    
	   //  _.each(arrVals, function(elem, i){
	   //    this.storage[i] = elem;
	   //  });

	    return popped;
 	},

	size: function(){
	    return this.storageLength;
  	}

};


