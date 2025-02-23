---
title: "How do you implement a stack using a linked list?"
summary: "A stack can be implemented using a linked list by designating the head of the list as the top of the stack, allowing for efficient push and pop operations."
author: "Prof. David Wright"
degree: "MSc in Economics, University of Warwick"
tutor_type: "A-Level Economics Tutor"
date: 2024-04-12
---

You can implement a stack using a linked list by designating the head of the list as the top of the stack.

A stack is a data structure that adheres to the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. In the context of a linked list, this translates to performing all additions and removals at the head of the list, which is the most efficient operation in this data structure.

To create a stack using a linked list, you will need to define two classes: a 'Node' class and a 'Stack' class. The 'Node' class will have two properties: 'data', which stores the value of the node, and 'next', which points to the subsequent node in the list. The 'Stack' class will include a 'head' property to keep track of the top of the stack, along with methods for the main stack operations: 'push', 'pop', and 'peek'.

The 'push' method adds a new node at the head of the list. This involves creating a new node with the specified value, setting its 'next' property to the current head of the list, and then updating the head to be this new node.

The 'pop' method removes the node at the head of the list and returns its value. It first stores the value of the current head, updates the head to point to the next node in the list, and then returns the stored value. If the list is empty, this method can either return 'null' or throw an exception, depending on your implementation choice.

The 'peek' method retrieves the value of the node at the head of the list without removing it. It simply returns the value of the current head. Similar to the 'pop' method, if the list is empty, 'peek' can return 'null' or throw an exception.

By following this approach, you can efficiently implement a stack using a linked list with operations that run in constant time, $O(1)$. The key is to treat the head of the list as the top of the stack and to perform all additions and removals at this head position.
    