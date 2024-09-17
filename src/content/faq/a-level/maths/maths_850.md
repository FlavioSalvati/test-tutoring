---
title: "Explain the concept of minimum cost network flow"
summary: "Minimum cost network flow is a mathematical model used to find the cheapest way to transport goods through a network."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-03
---

**Minimum Cost Network Flow: An Overview**

Minimum cost network flow is a mathematical model designed to determine the most economical method for transporting goods across a network.

In a minimum cost network flow problem, we start with a directed graph where nodes represent sources, sinks, and intermediate points. The edges of the graph indicate both the capacity and the cost associated with transporting goods between these nodes. The primary objective is to identify the flow of goods that minimizes the total transportation cost while adhering to the capacity constraints.

To tackle this problem, we can utilize the Ford-Fulkerson algorithm. This algorithm systematically identifies augmenting paths within the graph and incrementally increases the flow along these paths until no further augmenting paths can be located. An augmenting path is defined as a route from the source to the sink that possesses available capacity and a non-negative cost associated with its edges.

The algorithm concludes when there are no more augmenting paths available, resulting in an optimal flow configuration. The total cost of the flow is calculated as the sum of the costs of all edges that carry a positive flow.

**Example Illustration**

To exemplify this concept, let's consider a network consisting of four nodes: $A$, $B$, $C$, and $D$. The network has five edges with the following capacities and costs:

- $A \to B$: capacity $3$, cost $2$
- $A \to C$: capacity $2$, cost $4$
- $B \to C$: capacity $2$, cost $1$
- $B \to D$: capacity $2$, cost $5$
- $C \to D$: capacity $3$, cost $3$

Our goal is to determine the minimum cost flow from node $A$ to node $D$, with a total desired flow of $4$.

Starting with an initial flow of zero, we apply the Ford-Fulkerson algorithm to identify an augmenting path from $A$ to $D$. We find a path with a capacity of $2$ and a total cost of $7$, specifically the path $A \to C \to D$. We then increase the flow along this path to $2$ and update the residual graph accordingly:

- $A \to B$: capacity $3$, cost $2$, flow $0$
- $A \to C$: capacity $2$, cost $4$, flow $2$
- $B \to C$: capacity $2$, cost $1$, flow $0$
- $B \to D$: capacity $2$, cost $5$, flow $0$
- $C \to D$: capacity $3$, cost $3$, flow $2$

Next, we search for another augmenting path from $A$ to $D$. We discover a new path with a capacity of $2$ and a total cost of $8$, which follows the route $A \to B \to D$. We increase the flow along this path to $2$ and once again update the residual graph accordingly:

- $A \to B$: capacity $3$, cost $2$, flow $2$
- $A \to C$: capacity $2$, cost $4$, flow $2$
- $B \to C$: capacity $2$, cost $1$, flow $0$
- $B \to D$: capacity $2$, cost $5$, flow $2$
- $C \to D$: capacity $3$, cost $3$, flow $2$

This process continues until we have reached our desired total flow of $4$ from $A$ to $D$ at the minimum possible cost.
    