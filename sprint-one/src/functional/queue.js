var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length;

  // Implement the methods below

  someInstance.enqueue = function(value){
    length = Object.keys(storage).length;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
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
  };

  someInstance.size = function(){
    length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};
