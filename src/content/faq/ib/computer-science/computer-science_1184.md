---
title: "How do you insert into a binary search tree?"
summary: "To insert into a binary search tree, you compare the new node with the root and place it in the appropriate subtree."
author: "Dr. Ethan Mitchell"
degree: "PhD in Artificial Intelligence, University of Cambridge"
tutor_type: "IB Computer Science Tutor"
date: 2024-06-06
---

To insert a new node into a binary search tree (BST), you begin by comparing the new node's key with the key of the root node, then placing it in the appropriate subtree based on the comparison.

In a binary search tree, each node contains a unique key. The keys in the left subtree of any given node are always smaller than the node's key, while the keys in the right subtree are larger. To insert a new node, start at the root and compare the new node's key with the root's key. If the new key is smaller, you proceed to the left child; if it's larger, you move to the right child. This process continues recursively until you find an empty spot where the new node can be inserted.

For example, let's consider a BST with a root key of $8$, and you want to insert a new node with a key of $3$. Starting at the root, since $3$ is less than $8$, you move to the left child. If the left child is null, you insert the new node there. If the left child is not null, you compare the new key with the left child's key and decide whether to move to the left or right child of the left node. You repeat this comparison process until you locate a null spot for the new node's insertion.

The time complexity for the insertion operation in a BST is $O(h)$, where $h$ represents the height of the tree. In the worst-case scenario—when the tree is skewed—the height can be equal to the number of nodes, leading to a time complexity of $O(n)$. Conversely, in the average case, when the tree is balanced, the height is $O(\log n)$, resulting in a time complexity of $O(\log n)$.

In summary, inserting a node into a binary search tree involves a sequence of comparisons starting from the root. The new node is placed in the correct position to uphold the BST properties. This operation is efficient, with an average-case time complexity of $O(\log n)$.
    