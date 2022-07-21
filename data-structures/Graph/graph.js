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

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjancencyList = this.adjancencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjancencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
        })(start);
        return result;
    }

    depthFirstIterative(start){
        const result = [];
        const visited = {};
        const stack = [start];
        let currentVertex;

        visited[stack] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result; 
    }


    breathFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        while(queue.length){
            let currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }

}


let graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")

graph.depthFirstRecursive("A")