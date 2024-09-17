---
title: "Define the concept of feasible flow in networks"
summary: "Feasible flow in networks refers to the maximum amount of flow that can be sent through a network without violating any capacity constraints."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-02
---

Feasible flow in networks refers to the maximum volume of flow that can be transmitted through a network without violating any capacity constraints imposed on the edges.

In a network, each edge has a specific capacity limit that restricts the flow that can traverse it. The feasible flow represents the highest amount of flow that can be sent through the network while ensuring that none of these capacity limits are exceeded. This concept is crucial in network optimization problems, where the objective is to determine the maximum flow that can be conveyed through the network.

To calculate the feasible flow in a network, we can employ the Ford-Fulkerson algorithm. This algorithm begins with an initial feasible flow and iteratively enhances the flow until it reaches the maximum feasible flow. During each iteration, the algorithm identifies an augmenting path—defined as a route from the source to the sink that possesses available capacity. The flow along this path is then increased by the maximum possible amount, which corresponds to the minimum capacity of all edges along the path. This iterative process continues until no further augmenting paths can be located.

The maximum feasible flow is commonly referred to as the maximum flow of the network, and it can be determined using the max-flow min-cut theorem. This theorem asserts that the maximum flow in a network is equivalent to the minimum capacity of all possible cuts within the network. A cut is defined as a partition of the nodes into two distinct sets: one containing the source and the other containing the sink. The capacity of a cut is quantified as the sum of the capacities of all edges that cross this partition. The minimum cut is the cut that has the smallest capacity, and its capacity is equal to the maximum flow of the network.
    