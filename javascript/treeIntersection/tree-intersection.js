'use strict';

const HashTable = require('../code-challenge-30/hashTable');
const {Node, BinaryTree} = require('../code-challenge-15/binary-tree');

function treeIntersection(tree1, tree2) {
  let result = [];
  let hashT = new HashTable(100);
  let current1 = tree1.root;
  let current2 = tree2.root;
  treeToHash(current1, hashT);
  console.log(`hashT: ${hashT.map}`);
  checkInHash(current2, hashT, result);
  console.log(result);
  return result;
}

function treeToHash(node, hashTable){

  hashTable.add(`${node.value}`, node.value);
  if(node.right){
    node = node.right;
    return treeToHash(node, hashTable);
  }
  if(node.left){
    node = node.left;
    return treeToHash(node, hashTable);
  }

  // return hashTable;

}

function checkInHash(node, hashTable, result){

  if(hashTable.contains(`${node.value}`)){
    result.push(node.value);
  }
  if(node.right){
    node = node.right;
    return checkInHash(node, hashTable, result);
  }
  if(node.left){
    node = node.left;
    return checkInHash(node, hashTable, result);
  }

  // return result;
  
}


let tree1 = new BinaryTree;

tree1.root = new Node(150);
tree1.root.left = new Node(100);
tree1.root.left.left = new Node(75);
tree1.root.left.right = new Node(160);
tree1.root.left.right.left = new Node(125);
tree1.root.left.right.right = new Node(175);
tree1.root.right = new Node(250);
tree1.root.right.left = new Node(200);
tree1.root.right.right = new Node(350);
tree1.root.right.right.left = new Node(300);
tree1.root.right.right.right = new Node(500);
console.log('tree1', tree1);
let tree2 = new BinaryTree;

tree2.root = new Node(42);
tree2.root.left = new Node(100);
tree2.root.left.left = new Node(15);
tree2.root.left.right = new Node(160);
tree2.root.left.right.left = new Node(125);
tree2.root.left.right.right = new Node(175);
tree2.root.right = new Node(600);
tree2.root.right.left = new Node(200);
tree2.root.right.right = new Node(350);
tree2.root.right.right.left = new Node(4);
tree2.root.right.right.right = new Node(500);

console.log(`output: ${treeIntersection(tree1, tree2)}`);
