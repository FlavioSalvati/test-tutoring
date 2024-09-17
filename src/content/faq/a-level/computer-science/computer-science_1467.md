---
title: "What is a singly linked list, and how does it work?"
summary: "A singly linked list is a linear data structure where each element points to the next element in the sequence."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-25
---

A singly linked list is a linear data structure in which each element, referred to as a node, points to the next node in the sequence.

The structure of a singly linked list consists of nodes, each containing two components: data and a reference (or link) to the subsequent node in the sequence. This design facilitates efficient insertion and removal of elements from any position during iteration.

The starting point of a linked list is known as the head. It is important to note that the first node does not have a preceding node, while the last node lacks a subsequent node. The last node in the list can be identified by the fact that its reference to the next node points to NULL.

To traverse a singly linked list, one begins at the head node and follows the references to the next nodes until reaching the end, which is indicated by NULL. When adding an element to the list, a new node is created, and its reference is set to the current next node. Subsequently, the reference of the previous node is updated to point to this new node. In order to remove an element, the reference of the previous node is adjusted to skip the current node, thereby linking directly to the next node.

One of the significant advantages of a singly linked list is its capability for dynamic memory allocation. Unlike arrays, which have a fixed size determined at compile time, linked lists can expand or contract as needed during runtime. However, they also have certain drawbacks. For example, they incur higher overhead compared to arrays due to the additional storage required for the next references. Furthermore, direct access to individual elements is not feasible; to access a particular element, one must start from the head and follow the references sequentially.

In conclusion, a singly linked list is a straightforward yet powerful data structure that is particularly advantageous when frequent addition and removal of elements are required, and when the maximum number of elements is not predetermined.
    