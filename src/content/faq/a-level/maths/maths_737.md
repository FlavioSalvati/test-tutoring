---
title: "What is Dijkstra's algorithm for finding the shortest path in a graph?"
summary: "Dijkstra's algorithm is a method for finding the shortest path between two nodes in a graph."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-15
---

Dijkstra's algorithm is a systematic method used to determine the shortest path between two nodes in a graph.

The algorithm begins at the source node, assigning a tentative distance to each node in the graph. Initially, the tentative distance is set to infinity for all nodes except for the source node, which is assigned a value of $0$. The algorithm then selects the node with the smallest tentative distance and inspects all of its neighboring nodes. For each neighbor, it computes the distance from the source node through the current node and updates the tentative distance if this new distance is less than the previously recorded value. This process continues until the destination node is reached or all nodes have been evaluated.

To demonstrate how Dijkstra's algorithm operates, consider the following graph:

![Dijkstra's Algorithm Graph](https://i.imgur.com/5JZJZJL.png)

Let’s find the shortest path from node A to node F. We start by initializing the tentative distances for all nodes as follows:

| Node | Tentative Distance |
|------|--------------------|
| A    | $0$                |
| B    | $\infty$          |
| C    | $\infty$          |
| D    | $\infty$          |
| E    | $\infty$          |
| F    | $\infty$          |

Next, we select node A and examine its neighbors. The distance from A to B is $2$, so we update the tentative distance for node B:

| Node | Tentative Distance |
|------|--------------------|
| A    | $0$                |
| B    | $2$                |
| C    | $\infty$          |
| D    | $\infty$          |
| E    | $\infty$          |
| F    | $\infty$          |

We proceed by evaluating node B, which now has the smallest tentative distance. From node B, the distance to node E is $3$. Therefore, we update the tentative distance for node E to reflect the new calculated distance from A through B:

| Node | Tentative Distance |
|------|--------------------|
| A    | $0$                |
| B    | $2$                |
| C    | $\infty$          |
| D    | $\infty$          |
| E    | $5$                |
| F    | $\infty$          |

Continuing this process, we will next evaluate nodes C and D, updating their tentative distances accordingly, until we finally reach node F:

| Node | Tentative Distance |
|------|--------------------|
| A    | $0$                |
| B    | $2$                |
| C    | $5$                |
| D    | ...                |

This methodical approach ensures that we find the shortest path efficiently, moving from one node to the next based on the smallest tentative distance at each step.
    