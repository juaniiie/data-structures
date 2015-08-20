var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.leng = 0;

  list.addToTail = function(value){
    if (list.leng === 0) {
      list.head = Node(value);
      list.tail = list.head;
    }
    if (list.leng > 0) {
      list.tail.next = Node(value);               
      list.tail = Node(value);
    }
    list.leng++;
  };

  list.removeHead = function(){
    var oldHead;
    if (list.leng === 1) {
      oldHead = list.head.value;
      list.head = null;
      list.tail = null;
    };
    if (list.leng > 1) {
      oldHead = list.head.value;
      list.head = list.head.next;
    }
    list.leng--;
    return oldHead;
  }; 

  list.contains = function(target){
    var current = list.head;
    while (current.value != target) {
      current = current.next
      if(current === null){
        return false;
    }
  }
  return true;
  };

  return list;
};

//Our node function is creating a new node
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 *addToTail is linear: we are traversing through nodes
 *removeHead is linear: we are traversing through nodes
 *contains is linear: we are traversing throuhg nodes
 */
