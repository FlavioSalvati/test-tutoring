---
title: "How to find the shortest disjoint paths in a network?"
summary: "The Edmonds-Karp algorithm can be utilized to determine the shortest disjoint paths in a network."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-06
---

To determine the shortest disjoint paths in a network, we can utilize the Edmonds-Karp algorithm.

The Edmonds-Karp algorithm is a specific implementation of the Ford-Fulkerson method that employs Breadth-First Search (BFS) to identify the shortest augmenting path. An augmenting path is defined as a route from the source to the sink where all edges have available capacity. The algorithm systematically locates the shortest augmenting path and increases the flow along that path until no further augmenting paths can be discovered.

To adapt the Edmonds-Karp algorithm for finding $k$ disjoint paths instead of a single path, we begin by identifying the shortest augmenting path using BFS. After locating this path, we mark all edges within it as visited and reduce their capacity by the amount of flow that has been sent along the path. This process is repeated $k$ times, each time excluding edges that have been marked as visited in earlier iterations.

If we are unable to find $k$ disjoint paths, we can incrementally decrease the value of $k$ and reattempt the search until we determine the maximum number of disjoint paths that can be obtained. The total flow along these paths will represent the maximum flow achievable in the network.

In summary, the Edmonds-Karp algorithm provides an efficient method for finding the shortest disjoint paths in a network. It operates with a time complexity of $O(E^2 \cdot V)$, where $E$ denotes the number of edges and $V$ signifies the number of vertices in the network.
    