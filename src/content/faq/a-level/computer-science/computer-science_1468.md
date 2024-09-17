---
title: "Define a splay tree and its properties"
summary: "A splay tree is a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-07-03
---

A splay tree is a self-adjusting binary search tree that enhances access speed for recently accessed elements, making them quicker to reach in subsequent operations.

This type of binary search tree reorganizes itself with each operation, such as insertion, deletion, or search. This reorganization is accomplished by moving the element involved in the operation to the root of the tree, which facilitates faster access in future operations. As a result, splay trees are particularly advantageous in scenarios where certain elements are accessed more frequently than others.

The process of reorganization in a splay tree is known as 'splaying'. When an element is accessed, it is 'splayed' to the root through a series of tree rotations. These rotations not only elevate the accessed element to the root but also help to partially rebalance the tree, thereby enhancing the efficiency of future operations.

A notable characteristic of splay trees is their self-adjusting nature. This means that the tree automatically modifies its structure based on the sequence of performed operations. Such adjustments can lead to significant efficiency gains for specific sequences of operations. For instance, if a particular element is frequently accessed, it will tend to stay near the root, resulting in very fast future accesses to that element.

Another important feature of splay trees is that they do not require any additional information to be stored per node, unlike other self-adjusting trees such as AVL trees or red-black trees. This characteristic enhances the space efficiency of splay trees.

Regarding time complexity, while the worst-case time complexity for search, insert, and delete operations in a splay tree is $O(n)$, the amortized time complexity for these operations is $O(\log n)$. This indicates that over a series of $n$ operations, the average time per operation is $O(\log n)$. Consequently, splay trees prove to be efficient for sequences of operations where certain elements are accessed more frequently than others.
    