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

  addUndirectedEdge(startVertex, endVertex, weight = 0) {
    if(!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex do not exist');
    }

    let forward = this.adjacencyList.get(startVertex);
    let backward = this.adjacencyList.get(endVertex);

    let newEdgeForward = new Edge(endVertex, weight);
    let newEdgeBackward = new Edge(startVertex, weight);

    forward.push(newEdgeForward);
    backward.push(newEdgeBackward);
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

  depthFirst(startVertex){
    const visitedVertex = new Set();
    const stack = [startVertex];
    visitedVertex.add(startVertex);

    while(stack.length) {

      const current = stack.pop();

      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {

        let neighbor = edge.vertex;

        if (!visitedVertex.has(neighbor)) {
          stack.push(neighbor);
          visitedVertex.add(neighbor);
        }
      }
    }

    return visitedVertex;
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

graph.addUndirectedEdge(A, B);
graph.addUndirectedEdge(A, D);
graph.addUndirectedEdge(B, C);
graph.addUndirectedEdge(B, D);
graph.addUndirectedEdge(C, G);
graph.addUndirectedEdge(D, E);
graph.addUndirectedEdge(D, H);
graph.addUndirectedEdge(D, F);
graph.addUndirectedEdge(H, F);

// console.log(graph);
console.log('breadth first', graph.breadthFirst(A));
console.log('depth first', graph.depthFirst(A));
console.log(graph.size());
