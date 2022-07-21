class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority
    }
}

class PriorityQueue {

    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp(){                                                         // this function is to place the inserted element into its best fit. i.e. it follows the order of 
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);

            let parent = this.values[parentIdx];

            if(element.priority >= parent.priority) break;                                      // if element is greater than parent, then swap
                
                this.values[parentIdx] = element;
                this.values[idx] = parent;

                idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end
            this.bubbleDown();
        }
        
        return min;

    }

    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild, rightChild;
            let swap = null;
            

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}




// weighted graph
class WeightedGraph {
    constructor(){
        this.adjancencyList = {};
    }
    addVertex(vertex){
        if(!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjancencyList[vertex1].push({node:vertex2, weight});
        this.adjancencyList[vertex2].push({node:vertex1, weight});

    }


    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let resultPath = [];

        for(let vertex in this.adjancencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = node.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    resultPath.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjancencyList[smallest]){
                    let nextNode = this.adjancencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                    }
                }
            }
        }
        return resultPath.concat(smallest).reverse();
    }
}


var graph = new WeightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B", 4)
graph.addEdge("A","C", 2)
graph.addEdge("B","E", 3)
graph.addEdge("C","D", 2)
graph.addEdge("C","F", 4)
graph.addEdge("D","E", 3)
graph.addEdge("D","F", 1)
graph.addEdge("E","F", 1)

graph.Dijstra("A", "E")