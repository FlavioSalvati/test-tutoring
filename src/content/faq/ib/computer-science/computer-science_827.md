---
title: "When should you choose a linked list over an array?"
summary: "You should choose a linked list over an array when you need efficient insertions and deletions, but not random access."
author: "Prof. Mia Brown"
degree: "PhD in Software Engineering, University of Oxford"
tutor_type: "IB Computer Science Tutor"
date: 2024-06-19
---

When deciding between a linked list and an array, it's important to consider your specific needs related to data manipulation. A linked list is the preferred choice when you require efficient insertions and deletions but do not need random access.

A linked list is a dynamic data structure, which means it can expand and contract at runtime without incurring performance penalties. This characteristic makes it ideal for scenarios where the number of elements is unpredictable. In contrast, an array is a static data structure; its size must be defined at the time of creation. This can lead to inefficient memory usage—either wasting space if the array is too large or necessitating resizing if the array is too small.

One of the principal advantages of linked lists is their efficiency in performing insertions and deletions. These operations can be executed in constant time, $O(1)$, provided you have a pointer to the relevant node. This efficiency arises because only the links of the neighboring nodes need to be updated. Conversely, in an array, insertions and deletions require shifting all subsequent elements, resulting in a linear time complexity of $O(n)$, where $n$ represents the number of elements in the array.

However, it is important to note that linked lists do not offer random access. This means that accessing the $i$-th element necessitates traversing from the head node to the $i$-th node, which takes linear time, $O(n)$. In contrast, arrays facilitate random access, allowing you to retrieve any element in constant time, $O(1)$.

Another consideration is memory usage. Each node in a linked list occupies more memory than an equivalent element in an array, as it must store both the data and a reference to the next node. This can be a disadvantage if memory efficiency is a priority.

In summary, if your application requires frequent additions or removals of elements and does not necessitate direct access by index, a linked list is an excellent choice. Conversely, if random access is essential and memory efficiency is a concern, an array may be the more suitable option.
    