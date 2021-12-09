'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.totalNodes = 0;
  }

  addVertex(value) {
    let addedNode = new Vertex(value);
    this.adjacencyList.set(addedNode, []);
    this.totalNodes +=1;
    return addedNode;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {

    if(!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex do not exist');
    }

    let neighbors = this.adjacencyList.get(startVertex);

    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)) {
      throw new Error('GET NEIGHBOR ERROR :: Invalid vertex');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {

    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);


    while(queue.length) {

      const current = queue.shift();

      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {

        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        }
      }
    }

    return visitedNodes;
  }

  size(){
    return this.totalNodes;
  }
}

module.exports = Graph;

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

// console.log(graph);
console.log(graph.breadthFirst(A));
console.log(graph.size());
