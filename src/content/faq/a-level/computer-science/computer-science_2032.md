---
title: "Define a treap and its characteristics"
summary: "A treap is a hybrid data structure that combines the properties of a binary search tree and a binary heap."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-02-06
---

A treap is a hybrid data structure that effectively combines the characteristics of both a binary search tree and a binary heap.

Also known as a tree-heap, a treap is a unique data structure that efficiently supports the key operations associated with binary search trees and binary heaps. The term "treap" is derived from the combination of "TREE" and "HEAP." This structure is distinctive because it maintains the in-order traversal property of a binary search tree while simultaneously upholding the heap property.

In a treap, each node consists of two values: a key and a priority. The key adheres to the binary search tree property, which stipulates that for any given node, all keys in its left subtree are smaller, while all keys in its right subtree are larger. Conversely, the priority follows the heap property, ensuring that each node has a higher priority than its children. Typically, priority values are assigned randomly, which contributes to maintaining the balance of the tree.

The primary operations performed on a treap include search, insertion, and deletion. The search operation is akin to that of a binary search tree. The insertion process involves two key steps: first, a new node is inserted according to the binary search tree property; second, the tree is restructured based on the heap property using rotations. Similarly, the deletion operation comprises two steps: the node to be deleted is first moved down to a leaf position through rotations that preserve the heap property, and then the node is removed.

One of the significant advantages of a treap is its efficiency. The expected height of a treap containing $n$ nodes is logarithmic in $n$, which allows the search, insertion, and deletion operations to run in $O(\log n)$ expected time. This efficiency makes treaps an excellent choice for maintaining ordered lists or implementing priority queues. Additionally, treaps are generally easier to implement compared to other balanced binary search trees, such as red-black trees or AVL trees.
    