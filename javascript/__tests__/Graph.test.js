'use strict';

const Graph = require('../graphs/Graph');


describe('1. Can successfully push onto a stack', () => {
  let graph = new Graph();
  let A = graph.addVertex('A');
  let B = graph.addVertex('B');
  let C = graph.addVertex('C');
  let D = graph.addVertex('D');
  let E = graph.addVertex('E');
  let F = graph.addVertex('F');
  let G = graph.addVertex('G');
  let H = graph.addVertex('H');

  graph.addDirectedEdge(A, D);
  graph.addDirectedEdge(A, C);
  graph.addDirectedEdge(A, B);
  graph.addDirectedEdge(D, F);
  graph.addDirectedEdge(B, C);
  graph.addDirectedEdge(B, E);
  graph.addDirectedEdge(C, F);
  graph.addDirectedEdge(C, E);
  graph.addDirectedEdge(C, B);
  graph.addDirectedEdge(F, G);
  graph.addDirectedEdge(G, H);
  graph.addDirectedEdge(H, F);
  it('Node can be successfully added to the graph', () => {

    expect(graph).toBeTruthy();
  });
  it('An edge can be successfully added to the graph', () => {

    expect(graph.getNeighbors(A)).toBeTruthy();
  });
  
  it('The proper size is returned, representing the number of nodes in the graph', () => {

    expect(graph.size()).toBe(8);
  });
  

});

