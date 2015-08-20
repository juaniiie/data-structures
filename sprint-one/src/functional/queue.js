var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    var popped = storage[0];
    delete storage[0];
    if (length > 0) {
      length--;
    }

    var arrVals = [];
    for(var key in storage){
      arrVals.push(storage[key]);
    }
    
    storage = {};
    
    _.each(arrVals, function(elem, i){
      storage[i] = elem;
    });

    return popped
  };

  someInstance.size = function(){
      return length;
  };

  return someInstance;
};
