---
title: "How is a graph represented using an adjacency matrix?"
summary: "A graph is represented using an adjacency matrix by creating a square matrix where each cell represents a possible edge."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-08-17
---

A graph can be represented using an adjacency matrix, which is a square matrix where each cell indicates the presence or absence of an edge between vertices.

More specifically, an adjacency matrix is a square array used to represent a finite graph. The elements of this matrix indicate whether pairs of vertices are adjacent. The rows and columns of the matrix are labeled with the graph's vertices, and the cell located at the intersection of row $v$ and column $w$ is filled based on whether there is an edge connecting vertices $v$ and $w$.

In the case of an undirected graph, the adjacency matrix is symmetric. This symmetry arises from the fact that if there is an edge from vertex $v$ to vertex $w$, there must also be an edge from vertex $w$ to vertex $v$. Consequently, the entries of the matrix are either $0$ or $1$, with $1$ indicating the presence of an edge and $0$ indicating its absence.

For directed graphs (or digraphs), the adjacency matrix does not have to be symmetric, as the edges have a specific direction. In this scenario, the entry in row $v$ and column $w$ signifies an edge that goes from vertex $v$ to vertex $w$.

When dealing with weighted graphs, the entries of the adjacency matrix can represent the weight of each edge instead of merely indicating whether an edge exists. For instance, if the weight of the edge from vertex $v$ to vertex $w$ is $2$, then the cell at the intersection of row $v$ and column $w$ would contain the value $2$.

The adjacency matrix is a valuable tool for quickly checking if an edge exists between two vertices. However, it is not the most space-efficient representation for sparse graphs, where the number of edges is significantly less than the square of the number of vertices. In such cases, alternative representations like an adjacency list or edge list may be more efficient.
    