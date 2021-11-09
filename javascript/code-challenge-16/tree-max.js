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
    this.preResults = [];
    this.inResults = [];
    this.postResults = [];

  }

  //reading current->left->right
  preOrder(current) {
    this.preResults.push(current.value);
    if(current.left) {
      this.preOrder(current.left);
    }
    if(current.right) {
      this.preOrder(current.right);
    }
  }

  //reading left->current->right
  inOrder(current) {
    if(current.left) {
      this.inOrder(current.left);
    }
    this.inResults.push(current.value);
    if(current.right) {
      this.inOrder(current.right);
    }
  }

  //reading left->right->current
  postOrder(current) {
    if(current.left) {
      this.postOrder(current.left);
    }
    if(current.right) {
      this.postOrder(current.right);
    }
    this.postResults.push(current.value);
  }

  getPreResults() {
    this.preOrder(this.root);
    let results = this.preResults;
    this.preResults = [];
    return results;
  }
  getInResults() {
    this.inOrder(this.root);
    let results = this.inResults;
    this.inResults = [];
    return results;
  }

  getPostResults() {
    this.postOrder(this.root);
    let results = this.postResults;
    this.postResults = [];
    return results;
  }

  getMax() {
    let allNumber = this.getInResults();
    let result = null;
    for(let i=0; i<allNumber.length; i++){
      if(allNumber[i] >= result){
        result = allNumber[i];
      }
    }
    return result;
  }
}

// let tree = new BinaryTree();

// tree.root = new Node(10);
// tree.root.left = new Node(13);
// tree.root.left.left = new Node(23);
// tree.root.left.left.left = new Node(25);
// tree.root.left.left.right = new Node(50);
// tree.root.right = new Node(2);
// tree.root.right.right = new Node(45);
// tree.root.right.right.left = new Node(3);
// tree.root.right.right.left.right = new Node(7);

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
