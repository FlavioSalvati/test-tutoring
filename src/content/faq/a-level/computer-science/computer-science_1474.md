---
title: "How do you implement a queue using an array?"
summary: "You can implement a queue using an array by maintaining two indices, front and rear, to add and remove elements."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-01-16
---

You can implement a queue using an array by managing two indices: 'front' and 'rear'. These indices are crucial for adding and removing elements from the queue.

A queue is a data structure that adheres to the First-In-First-Out (FIFO) principle. This principle dictates that the first element added will be the first one to be removed. In an array-based queue, the 'front' index indicates the position from which elements are removed, while the 'rear' index marks the position where elements are added.

To initialize the queue, set both the 'front' and 'rear' indices to $-1$. When adding an element (a process known as enqueueing), you should first check if the queue is empty, which is indicated by both indices being $-1$. If the queue is indeed empty, assign both indices a value of $0$ and place the new element at that position in the array. If the queue is not empty, increment the 'rear' index by $1$ and insert the new element at this updated position.

When removing an element (a process referred to as dequeueing), you must first verify if the queue is empty. If it is, you cannot remove any elements, and you should return an error message or a specific value to indicate this condition. If the queue contains elements, remove the element located at the 'front' index. Afterward, check if this was the last element in the queue—this occurs when the 'front' and 'rear' indices are equal. If they are the same, reset both indices back to $-1$, signaling that the queue is now empty. If there are still elements in the queue, simply increment the 'front' index by $1$.

It is important to recognize that this implementation may lead to inefficient use of space in the array. Once an element is removed, the space it occupied is not reused. This inefficiency can be addressed by utilizing a circular queue, where the 'front' and 'rear' indices wrap around to the beginning of the array once they reach the end.

Regarding complexity, both the enqueue and dequeue operations run in $O(1)$ time, as they involve a fixed number of steps. However, this implementation requires $O(n)$ space, where $n$ represents the capacity of the queue.
    