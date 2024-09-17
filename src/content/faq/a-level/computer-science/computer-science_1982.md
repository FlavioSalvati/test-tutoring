---
title: "How does the tree sort algorithm work?"
summary: "Tree sort algorithm works by building a binary search tree from the elements to be sorted, then traversing it in-order."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-02-03
---

The tree sort algorithm sorts data by constructing a binary search tree (BST) from the elements to be sorted, followed by an in-order traversal of the tree.

Tree sort is a sorting algorithm that leverages the properties of a binary search tree. The process begins by initializing an empty binary search tree and subsequently inserting each element from the input list into this tree. The insertion adheres to the binary search tree property, which dictates that for any given node, all elements in the left subtree must be less than the node, while all elements in the right subtree must be greater.

After all elements have been inserted into the tree, the sorted list is generated through an in-order traversal. In this traversal method, the algorithm first visits the left subtree, then the root node, and finally the right subtree. This recursive process is applied to each node, starting from the root, resulting in a list of elements arranged in ascending order.

The time complexity of tree sort is $O(n \log n)$ in the best and average cases, which occurs when the tree is balanced. This is due to the fact that each insertion operation takes $O(\log n)$ time, and there are $n$ such insertions. However, in the worst-case scenario—when the input list is already sorted or reverse sorted—the tree becomes skewed, leading to a degradation of the time complexity to $O(n^2)$. In this case, each insertion operation takes $O(n)$ time due to the unbalanced nature of the tree.

Despite its worst-case time complexity, tree sort has several advantages. It performs efficiently on average, maintains stability (preserving the relative order of equal elements), and does not require additional space for sorting, as the sorting is conducted directly within the tree structure. Nonetheless, it is not widely used in practice, primarily due to its subpar worst-case performance compared to other algorithms such as quicksort and mergesort, which generally offer superior average and worst-case performance.
    