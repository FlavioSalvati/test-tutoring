---
title: "How does the insertion sort algorithm sort elements?"
summary: "Insertion sort sorts elements by comparing each one with its predecessor and inserting it into the correct position, effectively building a sorted array one element at a time."
author: "Dr. Laura Benson"
degree: "PhD in Behavioral Economics, University of Leeds"
tutor_type: "A-Level Economics Tutor"
date: 2024-06-05
---

The insertion sort algorithm organizes elements by comparing each one with its predecessor and inserting it into the correct position within a sorted section of the list.

The insertion sort algorithm is a straightforward sorting method that resembles the way one might sort playing cards in hand. It begins with the second element of the list, checking if it is smaller than the first element. If it is, the two elements are swapped. The algorithm then proceeds to the third element, comparing it with the previous ones. If this element is smaller than any of the earlier elements, it is moved to its appropriate position within the already sorted section. This process continues until all elements in the list are sorted.

The algorithm operates by dividing the list into two regions: a sorted region and an unsorted region. The sorted region starts with the first element, while the unsorted region begins with the second element. The algorithm repeatedly selects the first element from the unsorted region and inserts it into the correct position within the sorted region. This insertion is achieved by shifting larger elements in the sorted region to create space for the new element.

Insertion sort is particularly efficient for small lists or for lists that are already partially sorted. However, its performance can degrade significantly with larger lists, as it requires comparing each element with all preceding elements, which can lead to numerous shifts of larger elements to accommodate the new one.

In terms of complexity, the best-case scenario occurs when the list is already sorted. In this case, the algorithm requires only a single pass through the list, resulting in a time complexity of $O(n)$. Conversely, the worst-case scenario arises when the list is sorted in reverse order. In this situation, each insertion necessitates shifting all sorted elements, leading to a time complexity of $O(n^2)$.

In summary, the insertion sort algorithm is a simple and intuitive method for sorting, particularly effective for small or partially sorted lists. However, it is less efficient for larger lists or those sorted in reverse order.
    