---
title: "How do you reverse a linked list?"
summary: "You can reverse a linked list by changing the next to previous, previous to current, and current to next."
author: "Prof. Mia Brown"
degree: "PhD in Software Engineering, University of Oxford"
tutor_type: "IB Computer Science Tutor"
date: 2024-07-30
---

Reversing a linked list involves reorienting the direction of the 'next' pointers so that each node points to its predecessor instead of its successor. This can be accomplished using either an iterative or a recursive approach.

### Iterative Method

In the iterative method, you begin by initializing three pointers: 'previous', 'current', and 'next'. The 'previous' pointer is initially set to 'null', as the first node in the reversed list will eventually point to 'null'. The 'current' pointer starts at the head of the linked list. The 'next' pointer is utilized to temporarily store the next node before altering the pointer of the 'current' node.

The process follows these steps:

1. Store the next node in the 'next' pointer.
2. Change the 'next' pointer of the 'current' node to point to the 'previous' node.
3. Advance the 'previous' and 'current' pointers one step forward.

This sequence is repeated until the 'current' pointer becomes 'null', at which point the 'previous' node will represent the new head of the reversed linked list.

### Recursive Method

The recursive method is a bit more complex. It involves defining a function that takes two parameters: the current node and the previous node. If the current node is 'null', then the previous node is the new head of the reversed list. If the current node is not 'null', the function saves the next node, modifies the current node's 'next' pointer to reference the previous node, and then calls itself recursively with the next node and the current node as arguments.

### Comparison of Methods

Both the iterative and recursive methods effectively reverse the linked list by modifying the direction of the 'next' pointers. However, there are notable differences:

- The **iterative method** uses a constant amount of extra space, making it more space-efficient.
- The **recursive method**, on the other hand, consumes additional stack space for each recursive call, which can lead to a stack overflow if the linked list is particularly large.

As a result, the iterative approach is generally favored for reversing linked lists due to its efficiency and reduced risk of stack overflow.
    