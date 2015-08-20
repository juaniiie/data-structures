var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  
  return someInstance;
};

stackMethods = {
	storage: {},
  	storageLength: 0,
	push: function(value){
	    this.storage[this.storageLength] = value;
	    this.storageLength++;
 	 }, 
 	pop: function(){
	    var popped = this.storage[this.storageLength - 1];
	    delete this.storage[this.storageLength - 1];
	    this.storageLength--;
	    if (this.storageLength < 0){
	    	this.storageLength = 0;
	    }
	    return popped;
  	},
  	size: function(){
	    return this.storageLength;
  	}

};
//If ever we are looking for a method on the instanceObject, and its a failed lookup,
//Object.create allows us to fall through to stackMethods


