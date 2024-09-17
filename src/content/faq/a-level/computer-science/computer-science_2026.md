---
title: "How is a directed acyclic graph (DAG) represented?"
summary: "A directed acyclic graph (DAG) is represented using vertices and edges, with each edge having a direction and no cycles."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-02-11
---

A directed acyclic graph (DAG) is a mathematical and computational structure composed of vertices and directed edges. In a DAG, every edge has a specific direction, and crucially, the graph contains no directed cycles.

To elaborate, a directed acyclic graph is characterized by its formation as a directed graph that does not permit any cycles. This means that it consists of a collection of vertices connected by edges, where each edge has a direction pointing from one vertex (the "tail") to another (the "head"). When visualized, vertices are typically depicted as circles or dots, while edges are represented as arrows indicating the direction from the tail to the head.

A fundamental property of a DAG is the absence of directed cycles. This restriction implies that it is impossible to start at any vertex $v$ and traverse a sequence of edges, all following their designated directions, that eventually leads back to $v$. This characteristic is what defines the graph as "acyclic."

DAGs can be represented in various ways in computer memory, with the two most prevalent representations being adjacency lists and adjacency matrices. An adjacency list for a vertex $v$ contains all the vertices that are directly reachable from $v$ via a directed edge. Conversely, an adjacency matrix is a two-dimensional array where the entry at the $i$-th row and $j$-th column is marked as true if there exists a directed edge from the $i$-th vertex to the $j$-th vertex, and false otherwise.

In the realm of computer science, DAGs find application in numerous algorithms and data structures. They are particularly useful in scheduling problems, data compression algorithms, and in the representation of expressions within compilers. Additionally, DAGs are utilized in network theory, bioinformatics, and various other fields.

In summary, a directed acyclic graph (DAG) is defined by its vertices and directed edges, with the critical restriction of no cycles. This structure can be visually represented using circles and arrows, or in computer systems via adjacency lists or matrices.
    