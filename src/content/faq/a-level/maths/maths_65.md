---
title: "How to use Edmonds-Karp algorithm for maximum network flow?"
summary: "The Edmonds-Karp algorithm efficiently computes maximum network flow using breadth-first search to find augmenting paths, iteratively increasing flow until no more paths exist, ensuring optimal flow in polynomial time."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-02-29
---

## How to Use the Edmonds-Karp Algorithm for Maximum Network Flow

The Edmonds-Karp algorithm is a method for determining the maximum flow in a flow network. It is a specific implementation of the Ford-Fulkerson method that employs the Breadth-First Search (BFS) algorithm to identify the augmenting path with the fewest edges.

### Steps to Implement the Edmonds-Karp Algorithm

1. **Graph Representation**: First, represent the network as a directed graph where each edge has a specified capacity. The capacity indicates the maximum flow that can traverse that edge. In this graph, the source node is where the flow originates, and the sink node is where the flow terminates.

2. **Initialize Flow**: Begin the algorithm by initializing the flow on each edge to zero.

3. **Find Augmenting Paths**: Repeatedly search for an augmenting path from the source to the sink using BFS. An augmenting path is defined as a path where each edge has remaining capacity (i.e., capacity minus current flow) available.

4. **Update Flows**: Once an augmenting path is identified, increase the flow along each edge in this path by the minimum capacity of the edges within that path. 

5. **Repeat**: Continue the process of finding augmenting paths and updating flows until no more augmenting paths can be found. When this occurs, the algorithm has determined the maximum flow for the network.

### Example Network

To illustrate the Edmonds-Karp algorithm, consider the following network representation:

```
   10
 (s)---(1)---(2)
   | \   | \   |
   |  \  |  \  |
  20   5 10   5
   |    \ |    |
   |     \|    |
 (3)---(4)---(t)
   10
```

In this diagram, the numbers on the edges denote their capacities. The source node is labeled as `s`, and the sink node is labeled as `t`.

#### Initialization

We start by setting the flow on each edge to zero:

```
   0/10
 (s)---(1)---(2)
   | \   | \   |
   |  \  |  \  |
  0/20 0/5 0/10 0/5
   |    \ |    |
   |     \|    |
 (3)---(4)---(t)
   0/10
```

#### Finding Augmenting Paths

Next, we utilize BFS to find an augmenting path. For example, we can find the path `s → 1 → 2 → t`. This path has a bottleneck capacity of $5$, which is the minimum capacity among the edges in this path.

After updating the flow along this path, the network would look as follows:

```
   0/10
 (s)---(1)---(2)
   | \   | \   |
   |  \  |  \  |
  0/20 0/0 5/10 0/5
   |    \ |    |
   |     \|    |
 (3)---(4)---(t)
   0/10
```

### Conclusion

The Edmonds-Karp algorithm continues this process of finding augmenting paths and updating the flow until no further augmenting paths are available. At this point, the maximum flow for the network has been successfully calculated.
    