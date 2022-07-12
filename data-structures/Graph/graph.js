// undirected grsph 

class Graph {
    constructor(){
        this.adjancencyList = {};
    }

    addVertex(vertex){
        if(!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
    }

    addEdge(v1, v2){
        this.adjancencyList[v1].push(v2);
        this.adjancencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2){
        this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter(
            v => v !== vertex2
        );

        this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjancencyList[vertex].length){
            const adjancentVertex = this.adjancencyList[vertex].pop();
            this.removeEdge(vertex, adjancentVertex);
        }
        delete this.adjancencyList[vertex];
    }
}


let graph = new Graph();

graph.addVertex("Lagos")
graph.addVertex("Dublin")
graph.addVertex("Ontario")
graph.addVertex("Berlin")
graph.addVertex("London")
