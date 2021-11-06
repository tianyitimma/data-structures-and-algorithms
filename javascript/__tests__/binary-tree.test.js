'use strict';

const {Node, BinaryTree, BinarySearchTree} = require('../code-challenge-15/binary-tree');

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

let BST = new BinarySearchTree();

BST.root = new Node(10);
BST.add(13);
BST.add(23);
BST.add(25);
BST.add(50);
BST.add(2);
BST.add(45);
BST.add(3);
BST.add(7);

// console.log(JSON.stringify(BST));
// console.log(BST.contains(50));
// console.log(BST.contains(100));

describe('1. Can successfully instantiate an empty tree', () => {
  it('Should return the root value,', () => {

    expect(tree.root).toBeTruthy();
  });

});

describe('2. Can successfully instantiate a tree with a single root node', () => {
  it('Should return the root value,', () => {

    expect(tree.root.value).toBe(10);
  });

});

describe('3. Can successfully add a left child and right child to a single root node', () => {
  it('Should return the left node and right node,', () => {

    expect(tree.root.left.value).toBe(13);
    expect(tree.root.right.value).toBe(2);
  });

});


