---
title: "How to find the maximal flow in a network?"
summary: "The Ford-Fulkerson algorithm is an effective method for determining the maximal flow in a network."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-20
---

To determine the maximum flow in a network, we can employ the Ford-Fulkerson algorithm.

The Ford-Fulkerson algorithm is an iterative approach that begins with an initial feasible flow and continuously enhances it until the maximum flow is achieved. The algorithm operates by identifying an augmenting path in the residual graph. This residual graph illustrates the remaining capacity of the network after the current flow has been subtracted from the original capacities. An augmenting path is defined as a path from the source to the sink that has a positive residual capacity across all its edges. The flow along this path can be increased by an amount equal to the minimum residual capacity, known as the bottleneck capacity of the path.

The algorithm persists in locating augmenting paths and increasing the flow until no further augmenting paths can be found. At this stage, the flow is maximal and cannot be increased any further. The time complexity of the Ford-Fulkerson algorithm varies based on the method used to find augmenting paths, but it can reach up to $O(E^2F)$, where $E$ represents the number of edges and $F$ denotes the maximum flow.

To implement the Ford-Fulkerson algorithm, we must first represent the network as a graph with capacities assigned to its edges. This can be accomplished using either an adjacency matrix or an adjacency list to store the graph. A residual graph can then be constructed from the original graph by deducting the current flow from the capacities. The algorithm can be executed using either depth-first search (DFS) or breadth-first search (BFS) to identify augmenting paths.

In summary, the Ford-Fulkerson algorithm is a technique for finding the maximum flow in a network by iteratively enhancing an initial feasible flow. It achieves this by identifying augmenting paths within the residual graph and increasing the flow along these paths. The time complexity of the algorithm can be as high as $O(E^2F)$, depending on the method used to locate augmenting paths.
    