'use strict';

const {LinkedList, Node} = require('./linked-list/index');

let linkedList1 = new LinkedList();

linkedList1.head = new Node(1);
linkedList1.head.next = new Node(3);
linkedList1.head.next.next = new Node(2);

let linkedList2 = new LinkedList();
linkedList2.head = new Node(5);
linkedList2.head.next = new Node(9);
linkedList2.head.next.next = new Node(4);

// console.log(list1);
// console.log(list2);

let zipLists = (list1, list2) => {
  let zipList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  zipList.head = current1;
  while(current1 || current2){
    let temp1 = current1.next;
    let temp2 = current2.next;
    current1.next = current2;
    current2.next = temp1;
    current1 = temp1;
    current2 = temp2;
  }
  return console.log(zipList.toString());
};

zipLists(linkedList1, linkedList2);
