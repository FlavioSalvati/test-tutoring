---
title: "How can you represent weighted graphs in functional programming?"
summary: "In functional programming, weighted graphs can be represented as a list of tuples or records, each containing two nodes and a weight."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-06
---

In functional programming, weighted graphs can be effectively represented as a list of tuples or records, where each entry contains two nodes and a corresponding weight.

To elaborate, a graph consists of a set of vertices (or nodes) connected by edges. In a weighted graph, each edge is assigned a numerical value known as a weight. This structure can be represented in functional programming using a list of tuples or records, with each tuple or record comprising two nodes that denote the start and end of an edge, along with a weight that signifies the edge's weight.

For instance, in Haskell, a functional programming language, a weighted graph can be represented as follows:

$$
\texttt{type WeightedGraph a = [(a, a, Int)]}
$$

This line defines a type alias called 'WeightedGraph', which represents a list of tuples. Each tuple consists of two nodes of type 'a' and an integer weight. A specific graph can then be defined using the following syntax:

$$
\texttt{graph :: WeightedGraph Char} \\
\texttt{graph = [('A', 'B', 5), ('B', 'C', 3), ('C', 'A', 2)]}
$$

In this example, the graph includes three edges: from node 'A' to node 'B' with a weight of $5$, from node 'B' to node 'C' with a weight of $3$, and from node 'C' back to node 'A' with a weight of $2$.

Functional programming often employs recursion to navigate such structures. For example, we can define a function to compute the total weight of a graph as follows:

$$
\texttt{totalWeight :: WeightedGraph a -> Int} \\
\texttt{totalWeight [] = 0} \\
\texttt{totalWeight ((_, _, w):ws) = w + totalWeight ws}
$$

This function utilizes pattern matching to deconstruct the list of edges. It adds the weight of the first edge to the total weight of the remaining edges, calculated recursively. The base case for this recursion is an empty graph, which has a total weight of $0$.

In summary, functional programming offers a robust and flexible approach for representing and manipulating complex data structures such as weighted graphs.
    