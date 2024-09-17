---
title: "What is a double-ended queue and how is it used?"
summary: "A double-ended queue, or deque, is a data structure that allows insertion and removal of elements from both ends."
author: "Prof. Mia Brown"
degree: "PhD in Software Engineering, University of Oxford"
tutor_type: "IB Computer Science Tutor"
date: 2024-04-12
---

A double-ended queue, commonly referred to as a deque (pronounced 'deck'), is a versatile data structure that enables the insertion and removal of elements from both ends.

Unlike a standard queue, where elements are added at the rear and removed from the front—following the First In, First Out (FIFO) principle—a deque provides greater flexibility. In a deque, elements can be added or removed from either the front or the rear, allowing for more dynamic data management.

This flexibility makes deques particularly useful in numerous applications. For instance, they are often employed in breadth-first search algorithms in graph theory, where elements are typically enqueued at the rear and dequeued from the front. However, if the algorithm needs to explore a different branch of the graph, it can insert elements at the front of the deque, effectively prioritizing these new entries over those added previously.

Deques can also operate in a Last In, First Out (LIFO) manner, functioning similarly to a stack. This characteristic is advantageous in situations such as expression parsing or web page navigation, where the most recently added element needs to be accessed first.

In terms of implementation, deques can be constructed using a doubly-linked list, where each node maintains references to both its next and previous nodes. This structure allows for efficient insertion and removal of elements at both ends. Alternatively, deques can be implemented using a circular buffer, where the front and rear are represented by indices within an array.

In summary, a double-ended queue is a highly adaptable data structure suitable for various scenarios requiring addition or removal of elements from both ends. Its inherent flexibility makes it an invaluable tool in the toolkit of any computer scientist.
    