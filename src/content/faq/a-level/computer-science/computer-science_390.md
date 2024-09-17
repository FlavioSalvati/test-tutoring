---
title: "Define a treap and its characteristics"
summary: "A treap is a hybrid data structure that combines the properties of a binary search tree and a binary heap."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-07-18
---

A treap is a hybrid data structure that integrates the features of both a binary search tree and a binary heap.

Also referred to as a tree heap, a treap is an efficient data structure that supports operations characteristic of both binary search trees and binary heaps. The term 'treap' derives from its dual nature, combining elements of a TREE and a HEAP. This data structure is distinctive because it simultaneously maintains the in-order traversal property of a binary search tree and the heap property.

In a treap, each node contains two values: a key and a priority. The key adheres to the binary search tree property, ensuring that for any given node, all keys in its left subtree are smaller, while those in its right subtree are larger. Conversely, the priority conforms to the heap property, meaning that each node's priority is greater than that of its children. Typically, priority values are assigned randomly, which contributes to maintaining the balance of the tree.

The principal operations supported by a treap include search, insertion, and deletion. The search operation behaves similarly to that in a binary search tree. Insertion consists of two steps: first, the new node is added according to the binary search tree property; second, the tree is restructured using rotations to satisfy the heap property. The deletion process also involves two steps: initially, the target node is moved down to a leaf position through rotations that preserve the heap property; subsequently, the node is removed.

One of the key advantages of a treap is its efficiency. The expected height of a treap containing $n$ nodes is logarithmic in $n$, allowing search, insertion, and deletion operations to run in $O(\log n)$ expected time. This efficiency makes treaps an excellent choice for maintaining ordered lists or priority queues. Furthermore, treaps are relatively straightforward to implement in comparison to other balanced binary search trees, such as red-black trees or AVL trees.
    