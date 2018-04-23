describe('Graph class', () => {
    it('A Graph should be created which has Nodes', () => {
        const graph = new Graph();
        var result = Array.isArray(graph.nodes);
        var expected = true;
        expect(expected).toBe(result);
    })
})
