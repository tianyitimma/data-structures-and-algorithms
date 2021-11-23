'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;

  }

}

function breadthFirst(tree) {
  let results = [];
  let current = tree.root;

  while(current){
    results.push(current.value);
    if(current.left){
      this.breadthFirst(current.left);
    }
    if(current.right){
      this.breadthFirst(current.right);
    }
  }
}

let tree = new BinaryTree();

tree.root = new Node(10);
tree.root.left = new Node(13);
tree.root.left.left = new Node(23);
tree.root.left.left.left = new Node(25);
tree.root.left.left.right = new Node(50);
tree.root.right = new Node(2);
tree.root.right.right = new Node(45);
tree.root.right.right.left = new Node(3);
tree.root.right.right.left.right = new Node(7);
breadthFirst(tree);

// console.log('Pre Order:');
// tree.preOrder(tree.root);
// console.log(tree.getPreResults());
// console.log(tree.getMax());
// console.log('**********');
// console.log('In Order:');
// console.log(tree.inOrder(tree.root));
// console.log('**********');
// console.log('Post Order:');
// console.log(tree.postOrder(tree.root));

module.exports = {
  Node,
  BinaryTree,
};
