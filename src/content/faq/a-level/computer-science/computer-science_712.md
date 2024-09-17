---
title: "What's the time complexity of the breadth-first search algorithm?"
summary: "The time complexity of the breadth-first search (BFS) algorithm is O(V + E)."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-29
---

The time complexity of the breadth-first search (BFS) algorithm is given by $O(V + E)$.

Breadth-first search (BFS) is a graph traversal technique that systematically explores all the vertices of a graph in a breadth-first manner. This means it examines all vertices at the current depth level before proceeding to vertices at the next depth level. The time complexity of BFS is expressed as $O(V + E)$, where $V$ denotes the number of vertices and $E$ denotes the number of edges in the graph.

The BFS algorithm begins at a designated root node and visits all its adjacent nodes. For each of these immediate neighbors, the algorithm then explores their unexplored neighbors, continuing this process until it either finds the target node or exhausts all possibilities. To manage the nodes that need to be explored, BFS employs a queue data structure.

Regarding time complexity, BFS visits each vertex precisely once and traverses each edge exactly once. Consequently, the overall time complexity is linear with respect to the size of the graph, represented by the sum of the number of vertices and edges, or $O(V + E)$.

In this notation, the "O" signifies the upper bound of the time required for the algorithm, indicating that the execution time will not exceed this value. Here, $V$ corresponds to the number of vertices in the graph. Since BFS processes each vertex exactly once as it navigates through the graph from one node to its neighbors, $V$ is a crucial component of the time complexity.

On the other hand, $E$ represents the number of edges in the graph. BFS checks each edge exactly once when determining whether there is a connection between a node and its adjacent nodes. Thus, $E$ is also included in the time complexity.

In summary, the time complexity of the breadth-first search algorithm is $O(V + E)$, indicating that it scales linearly with the size of the graph. This characteristic makes BFS an efficient choice for solving large-scale graph traversal problems.
    