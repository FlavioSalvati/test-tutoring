---
title: "How does the insertion sort algorithm sort elements?"
summary: "Insertion sort algorithm sorts elements by comparing each element with its predecessor and inserting it at the correct position."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-01-26
---

The insertion sort algorithm organizes elements by comparing each one with its predecessor and inserting it into the correct position.

Insertion sort is a straightforward sorting technique that resembles the way one might sort playing cards in hand. The algorithm begins with the second element, comparing it to the first. If the second element is smaller, the two elements are swapped. The algorithm then proceeds to the third element, checking if it is smaller than the preceding elements. If it is, the algorithm places it in its appropriate position among the previously sorted elements. This procedure continues until all elements in the list are sorted.

The algorithm functions by dividing the list into two regions: a sorted region and an unsorted region. The sorted region initially contains just the first element, while the unsorted region starts with the second element. The algorithm repeatedly selects the first element from the unsorted region and positions it correctly within the sorted region. This positioning is achieved by shifting larger elements in the sorted region to create space for the new element.

Insertion sort is particularly efficient for small lists or those that are already partially sorted. However, for larger lists, the algorithm's performance can decline significantly. This inefficiency arises from the need to compare each element with all preceding elements, often requiring the movement of many elements to accommodate a new insertion.

Regarding complexity, the best-case scenario for insertion sort occurs when the list is already sorted. In this case, the algorithm only needs to traverse the list once, yielding a time complexity of $O(n)$. Conversely, the worst-case scenario happens when the list is sorted in reverse order. In this situation, each insertion necessitates shifting all existing sorted elements, resulting in a time complexity of $O(n^2)$.

In summary, the insertion sort algorithm is a simple and intuitive sorting method that is effective for small or partially sorted lists. However, it is less efficient for larger lists or those arranged in reverse order.
    