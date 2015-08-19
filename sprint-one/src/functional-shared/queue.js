var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
		storage: {},
		storageLength: 0,
	};

	someInstance = _.extend(someInstance, queueMethods);
	return someInstance;
};

var queueMethods = {

	enqueue: function(value){
	    length = Object.keys(storage).length;
	    storage[length] = value;
  	},

  	dequeue: function(){
	    length = Object.keys(storage).length;
	    var popped = storage[0];
	    delete storage[0];
	    return popped;
	    var arrKeys = [];
	    var arrVals = [];
	    for(var key in storage){
	      arrKeys.push(key);
	      arrVals.push(storage[key]);
	    }
	    for(var i = 0; i < arrKeys.length; i++){
	      arrKeys[i] = i;
	      storage[i] = arrVals[i];
	    }
 	},

	size: function(){
	    length = Object.keys(storage).length;
	    return length;
  	}

};


