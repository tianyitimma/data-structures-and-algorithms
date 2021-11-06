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

  //reading current->left->right
  preOrder(current) {
    console.log(current.value);
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
    console.log(current.value);
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
    console.log(current.value);
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;

    while(current){
      if(value === current.value) {
        return undefined;
      }
      if(value < current.value) {
        if(current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if(current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }

    }

  }

  contains(value) {
    let current = this.root;
    while(current){
      if(value === current.value) {
        return true;
      }
      if(value < current.value) {
        if(current.left === null) {
          return false;
        }
        current = current.left;
      } else {
        if(current.right === null) {
          return false;
        }
        current = current.right;
      }

    }
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};


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
// console.log('**********');
// console.log('In Order:');
// tree.inOrder(tree.root);
// console.log('**********');
// console.log('Post Order:');
// tree.postOrder(tree.root);

// let BST = new BinarySearchTree();

// BST.root = new Node(10);
// BST.add(13);
// BST.add(23);
// BST.add(25);
// BST.add(50);
// BST.add(2);
// BST.add(45);
// BST.add(3);
// BST.add(7);

// console.log(JSON.stringify(BST));
// console.log(BST.contains(50));
// console.log(BST.contains(100));
