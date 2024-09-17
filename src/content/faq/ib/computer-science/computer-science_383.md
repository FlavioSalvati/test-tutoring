---
title: "Can you sketch an example of an ordered binary tree?"
summary: "Yes, an ordered binary tree is a binary tree in which every node's left child is less than the parent node, and the right child is greater."
author: "Prof. Mia Brown"
degree: "PhD in Software Engineering, University of Oxford"
tutor_type: "IB Computer Science Tutor"
date: 2024-02-02
---

An ordered binary tree, commonly known as a binary search tree (BST), is a type of binary tree that adheres to a specific ordering rule. In this structure, each node can have up to two children: a left child and a right child. The defining characteristic of an ordered binary tree is that for any given node, all elements in its left subtree are less than the value of the node, while all elements in its right subtree are greater. This property must hold true for every node in the tree, not just the root.

To illustrate this concept, let’s examine the following example of an ordered binary tree:

'''
    8
   / \
  3   10
 / \    \
1   6   14
   / \   /
  4   7 13
'''

In this tree, the root node is $8$. All nodes in the left subtree, which include $3$, $1$, $6$, $4$, and $7$, are less than $8$. Conversely, all nodes in the right subtree, which comprise $10$, $14$, and $13$, are greater than $8$. This ordering property is consistent for each node in the tree. For example, consider the node with the value $3$: its left child, $1$, is indeed less than $3$, and its right child, $6$, is greater than $3$. Similarly, for the node with the value $10$, its right child, $14$, is greater than $10$.

The inherent ordering property of binary search trees facilitates efficient operations for searching, inserting, and deleting nodes. When searching for a specific value, the process begins at the root node. Depending on whether the target value is less than or greater than the current node's value, the search algorithm proceeds to the left or right child, respectively. This recursive approach continues until the value is found or until a null reference is reached, indicating that the value is not present in the tree. This method allows for significant node skipping, resulting in a highly efficient search operation.

In summary, an ordered binary tree is a robust data structure that enables efficient data management due to its distinctive ordering property.
    