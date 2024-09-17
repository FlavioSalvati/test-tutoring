---
title: "What is a Patricia tree, and how does it work?"
summary: "A Patricia tree is a compressed trie data structure that stores strings for efficient retrieval and search operations."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-08-24
---

A Patricia tree is a compressed trie data structure designed for efficient string storage, retrieval, and search operations.

The name "Patricia" stands for "Practical Algorithm to Retrieve Information Coded in Alphanumeric." This data structure was introduced by Donald R. Morrison in 1968. The Patricia tree is a specialized type of radix tree (or prefix tree) that optimizes space by compressing paths in the trie that contain single child nodes. This compression reduces space complexity and enhances the efficiency of various operations.

In a Patricia tree, each node represents a substring or a portion of a string, while each edge corresponds to a binary digit that distinguishes between different strings. Leaf nodes contain the full strings, whereas internal nodes store indexes that indicate the specific bit position within the strings that serves to differentiate them. This structure allows for efficient search, insertion, and deletion operations, all of which can be performed in $O(k)$ time, where $k$ is the length of the string.

To illustrate how a Patricia tree operates, let's consider the example of storing the words 'to', 'tea', 'ted', 'ten', 'A', 'i', and 'in'. We begin by creating a root node with an empty string. For each word, we traverse the tree from the root, following the path dictated by the binary digits of the word. If we encounter a node that lacks a child corresponding to the next binary digit, we create a new node and continue this process until all words are inserted. The resulting Patricia tree will have each word stored in a leaf node, with the path from the root to each leaf representing the binary digits of that word.

Searching within a Patricia tree involves traversing the tree from the root to a leaf node, following the path defined by the binary digits of the search key. If the search key matches the string in a leaf node, the search is successful. If not, the search key is determined to be absent from the tree.

Deletion in a Patricia tree requires locating the leaf node that contains the string to be deleted, after which the path from the root to that leaf is removed. If this action leaves an internal node with only one child, that internal node is also deleted, and its child is directly connected to its parent. This process ensures that the Patricia tree maintains its compressed structure even after the deletion operation.
    