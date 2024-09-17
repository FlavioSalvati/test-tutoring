---
title: "How to find the shortest cycle in a network?"
summary: "To find the shortest cycle in a network, we can use the Floyd-Warshall algorithm."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-16
---

To identify the shortest cycle in a network, we can employ the Floyd-Warshall algorithm.

The Floyd-Warshall algorithm is a dynamic programming technique designed to determine the shortest paths between all pairs of vertices in a weighted graph. It operates by evaluating all possible intermediate vertices between any two vertices and updating the shortest path as necessary.

To adapt the Floyd-Warshall algorithm for finding the shortest cycle in a network, we can modify the approach to consider cycles of lengths ranging from $1$ to $n-1$, where $n$ denotes the total number of vertices in the network. By doing this, we can subsequently identify the minimum cycle length, which represents the shortest cycle.

For implementation, we introduce a third dimension to the distance matrix utilized in the Floyd-Warshall algorithm. The entry $(i, j, k)$ in this distance matrix signifies the shortest path from vertex $i$ to vertex $j$ using only the vertices $1, 2, \ldots, k$ as intermediate vertices. The distance matrix is updated using the following recurrence relation:

$$
d(i, j, k) = \min(d(i, j, k-1), d(i, k, k-1) + d(k, j, k-1))
$$

In this equation, $d(i, j, k-1)$ represents the shortest path from vertex $i$ to vertex $j$ using only the intermediate vertices $1, 2, \ldots, k-1$. The term $d(i, k, k-1) + d(k, j, k-1)$ represents the path that passes through the vertex $k$.

Once the modified Floyd-Warshall algorithm has been executed, we can iterate through all cycles of length $3$ or greater to determine the minimum length, which will indicate the shortest cycle in the network. If no cycles of length $3$ or greater are found, it can be concluded that the network is acyclic.
    