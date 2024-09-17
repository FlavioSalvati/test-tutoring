---
title: "What is an abstract data structure, and how does it differ from a concrete one?"
summary: "An abstract data structure is a theoretical concept that defines how data is stored and manipulated, unlike a concrete data structure which is a specific implementation of these concepts."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-08-20
---

An abstract data structure is a theoretical concept that defines how data is stored and manipulated, unlike a concrete data structure which is a specific implementation of these concepts.

In more detail, an abstract data structure (ADS) is a high-level description of a collection of data and the operations that can be performed on that data. It does not concern itself with how the data is organised in memory, or how the operations are implemented. Instead, it focuses on what the data represents and what actions can be taken on it. For example, a queue is an ADS that represents a collection of elements with two main operations: enqueue (add an element to the end of the queue) and dequeue (remove an element from the front of the queue). The ADS does not specify how these operations are implemented, just that they must exist.

On the other hand, a concrete data structure is a specific implementation of an ADS in a particular programming language. It takes the abstract concept and turns it into something that can be used in code. For instance, a queue could be implemented as an array or a linked list. The concrete data structure includes not only the data and operations, but also the details of how the data is stored in memory and how the operations are carried out.

The distinction between abstract and concrete data structures is important because it allows us to separate the 'what' from the 'how'. By defining data structures abstractly, we can design algorithms that work with any implementation of the data structure. This makes our algorithms more flexible and reusable. Meanwhile, when we implement a concrete data structure, we can choose the most efficient method for our specific use case, without having to change the algorithm that uses it.

In summary, an abstract data structure is a theoretical concept that defines the data and operations, while a concrete data structure is a specific, practical implementation of this concept.
    