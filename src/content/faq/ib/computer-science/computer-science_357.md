---
title: "How do you delete a node from a binary tree?"
summary: "To delete a node from a binary tree, you need to consider three scenarios: no child, one child, and two children."
author: "Dr. Liam Davis"
degree: "PhD in Computer Networks, University of Edinburgh"
tutor_type: "IB Computer Science Tutor"
date: 2024-04-22
---

To delete a node from a binary tree, it is essential to consider three different scenarios based on the number of children the node has: no children, one child, and two children.

Deleting a node from a binary tree is generally more intricate than adding one. The complexity of the deletion process is influenced by how many children the node to be deleted possesses.

1. **No Children**: If the node to be deleted has no children, the deletion process is straightforward. You simply remove the node from the tree. Consequently, the parent of the deleted node will now point to null, effectively disconnecting the deleted node from the tree.

2. **One Child**: In the case where the node to be deleted has one child, you need to update the pointer of the parent node to reference the child of the deleted node. This action effectively bypasses the deleted node while preserving the remaining structure of the tree.

3. **Two Children**: The most complex scenario arises when the node to be deleted has two children. In this instance, you must find a suitable replacement for the deleted node. This replacement can either be the largest node in the left subtree or the smallest node in the right subtree. By using this replacement node, you can ensure that the binary search tree property is maintained.

After locating the replacement node, you will need to remove it from its original position and insert it in place of the node being deleted. If the replacement node has a child, you must adjust the pointers accordingly to preserve the binary search tree property.

It is crucial to remember that the key to successfully deleting a node from a binary tree lies in maintaining the binary search tree property: for any given node, all nodes in the left subtree must be smaller, and all nodes in the right subtree must be larger. This property must be upheld for every node within the tree.

Regarding time complexity, the deletion of a node from a binary tree typically has a time complexity of $O(h)$, where $h$ denotes the height of the tree. This complexity arises because, in the worst-case scenario, you may need to traverse from the root down to the deepest leaf node.
    