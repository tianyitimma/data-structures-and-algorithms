'use strict';

const {Node, BinaryTree} = require('../code-challenge-16/tree-max');

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



describe('checking if the get max function works properly', () => {
  it('Should return 50 as the result,', () => {

    expect(tree.getMax()).toBe(50);
  });

});
