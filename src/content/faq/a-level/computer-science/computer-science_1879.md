---
title: "How can you implement depth-first search in a graph using functional programming?"
summary: "You can implement depth-first search in a graph using functional programming through recursion and immutability."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-04-19
---

You can implement a depth-first search (DFS) in a graph using functional programming principles, specifically through recursion and immutability.

Depth-first search (DFS) is a systematic technique used to traverse or search through a graph. In functional programming, DFS is typically implemented using recursion, which is a core concept where a function calls itself until it reaches a base case. In the context of DFS, this means the function continues to explore one branch of the graph down to its deepest node before backtracking to explore the next branch.

To implement DFS in a functional programming language, you start by defining a function that takes two parameters: the graph and the current node. The function will recursively visit each unvisited node connected to the current node by invoking itself with the graph and the next unvisited node as arguments. The recursion's base case occurs when there are no unvisited nodes left to explore.

Additionally, functional programming emphasizes the principle of immutability, meaning that data structures cannot be altered once they are created. To adhere to this principle, you will need to create a new list or set to track the visited nodes rather than modifying an existing structure. Each recursive call will then pass this new list or set as a parameter, ensuring that the visited nodes' state is preserved across calls.

Here is a simple pseudocode example illustrating how DFS might be implemented in a functional programming language:

'''
function DFS(graph, node, visited):
    if node is in visited:
        return visited
    else:
        visited = add node to visited
        for each neighbour in graph[node]:
            visited = DFS(graph, neighbour, visited)
        return visited
'''

In this example, the 'DFS' function accepts a graph, a node, and a list of visited nodes as parameters. It first checks if the current node has already been visited. If it has, the function returns the list of visited nodes. If the node is unvisited, it adds the node to the visited list and then recursively calls itself for each neighbor of the current node. Finally, the function returns the updated list of visited nodes. This approach exemplifies depth-first search as it explores each branch of the graph to its furthest node before backtracking.
    