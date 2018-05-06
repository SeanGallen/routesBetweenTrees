describe('Graph class', () => {
    it('A Graph should be created which has Nodes', () => {
        const graph = new Graph();
        var result = Array.isArray(graph.nodes);
        var expected = true;
        expect(expected).toBe(result);
    })
})

describe('Graph has edges', () => {
    it('A Graph with nodes should have edges', () => {
        const graph = new Graph();
        var result = Array.isArray(graph.edges);
        var expected = true;
        expect(expected).toBe(result);
    })
})

describe('Add Nodes and Edges to Graphs', () => {
    it('Graphs can add Nodes and make connection with Edges', () => {
        const graph = new Graph();
        graph.addNodes(1);
        graph.addNodes(2);
        graph.addEdges(1, 2);
        var nodeCount = graph.nodes.length;
        var edgeCount = graph.edges.length-1; //Minus one because zero index is empty but still counts.
        var expected = 2;
        expect(expected).toBe(nodeCount);
        expect(expected).toBe(edgeCount);
    })
})

