class Graph {
  constructor(){
    this.nodes = [];
    this.edges = [];
  }
  addNodes(node){
    this.nodes.push(node);
    this.edges[node] = [];
  }
  addEdges(node1, node2) {
    this.edges[node1].push(node2);
    this.edges[node2].push(node1);
  }
}
