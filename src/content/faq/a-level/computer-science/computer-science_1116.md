---
title: "How do you implement a queue using an array?"
summary: "You can implement a queue using an array by maintaining two indices, front and rear, to add and remove elements."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-07-19
---

You can implement a queue using an array by managing two indices: 'front' and 'rear', which are used to add and remove elements efficiently.

A queue is a data structure that adheres to the First-In-First-Out (FIFO) principle. This means that the element that is added first will also be the first one to be removed. To realize a queue using an array, you need to maintain two indices: the 'front' index, which points to the beginning of the queue (where elements are dequeued), and the 'rear' index, which indicates the end of the queue (where elements are enqueued).

To initialize the queue, both the 'front' and 'rear' indices should be set to $-1$. When you wish to add an element (a process known as enqueueing), you first check if the queue is empty—indicated by both indices being $-1$. If the queue is empty, you set both indices to $0$ and place the new element at that position in the array. If the queue is not empty, you increment the 'rear' index by $1$ and add the new element at this updated position.

When you need to remove an element (a process known as dequeueing), you must first check if the queue is empty. If it is, there are no elements to remove, and you can return an error or a specific value to indicate this condition. If the queue is not empty, you remove the element located at the 'front' index. After this, you should check whether this removal leaves the queue empty (i.e., if both the 'front' and 'rear' indices are now the same). If it does, you reset both indices to $-1$ to signify that the queue is empty. If there are still elements in the queue, you simply increment the 'front' index by $1$.

It is essential to note that this implementation can lead to inefficient use of space within the array. Once an element is removed, the space it occupied is not reused. This limitation can be addressed by employing a circular queue, where the 'front' and 'rear' indices wrap around to the beginning of the array when they reach the end.

Regarding time complexity, both the enqueue and dequeue operations are $O(1)$, as they involve a fixed number of steps. However, this implementation requires $O(n)$ space, where $n$ represents the maximum capacity of the queue.
    