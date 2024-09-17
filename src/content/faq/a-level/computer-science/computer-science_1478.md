---
title: "Define a Cartesian tree and its applications"
summary: "A Cartesian tree is a binary tree derived from a sequence of numbers, used in various data structure applications."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-25
---

A Cartesian tree is a specific type of binary tree constructed from a sequence of numbers, and it is utilized in various applications within data structures.

In a Cartesian tree, each node corresponds to a number from the sequence, and the tree is designed to maintain the characteristics of both a binary search tree and a heap. This dual property ensures that an in-order traversal of the tree will yield the original sequence. Furthermore, for any given node in the tree, its parent is the minimum number from the subsequence that lies to the left or right of the node in the original sequence.

The root of a Cartesian tree is the minimum element of the input sequence. The construction process begins with this root, and the remaining elements are added recursively. For each new number, you traverse as far right in the tree as possible until you locate a node that is smaller than the number being inserted. This smaller node becomes the parent of the new number, and any right child of this node becomes the left child of the newly added number.

Cartesian trees have numerous applications in computer science. They are instrumental in constructing range minimum query data structures, which enable efficient retrieval of the minimum value within a specified range of numbers. Additionally, they play a role in the creation of suffix trees, which are essential in string matching algorithms. Furthermore, Cartesian trees can effectively address the nearest smaller values problem, which involves identifying the closest number that is smaller than each number in a sequence.

In summary, a Cartesian tree is a versatile data structure that integrates the properties of binary search trees and heaps. It is derived from a sequence of numbers and finds utility in various applications, including range minimum queries, string matching, and solving the nearest smaller values problem.
    