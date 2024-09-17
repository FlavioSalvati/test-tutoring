---
title: "How does the merge sort algorithm function?"
summary: "Merge sort divides an unsorted list into single-element sublists, then repeatedly merges them to create sorted sublists, ultimately resulting in a single sorted list."
author: "Dr. Laura Benson"
degree: "PhD in Behavioral Economics, University of Leeds"
tutor_type: "A-Level Economics Tutor"
date: 2024-01-24
---

The merge sort algorithm operates by systematically dividing an unsorted list into $n$ sublists, each containing a single element. It then repeatedly merges these sublists to create new sorted sublists until only one sorted sublist remains.

Merge sort is a recursive divide-and-conquer algorithm that was developed by John von Neumann in 1945. Its fundamental principle involves breaking a complex problem down into smaller, more manageable problems. In the case of sorting a list, the algorithm begins by splitting the unsorted list into $n$ individual sublists, each with one element. These sublists are then merged together in a series of steps, ultimately yielding a single sorted list.

The algorithm begins by dividing the unsorted list into two halves. If the list has one or zero elements, it is considered to be sorted. For lists containing more than one element, the algorithm recursively splits the list into two approximately equal halves until sublists of size one are created.

Since sublists of size one are inherently sorted, the merge process can commence at this stage. During merging, adjacent sublists are combined in a way that ensures the resulting sublist remains sorted. This is achieved by comparing the smallest elements from each sublist and adding the smaller element to the new sorted sublist. This comparison and merging process continues until all elements are reassembled into a single sorted list.

The time complexity of the merge sort algorithm is $O(n \log n)$ in all scenarios—best, average, and worst cases. This efficiency arises from the fact that the list is halved with each recursive call, and each element in the list is eventually processed and sorted.

However, a notable drawback of merge sort is its requirement for additional memory proportional to the size of the input list. This is due to the creation of new sublists during the division of the original list. Consequently, this can pose a significant limitation when working with large lists or in environments with restricted memory resources.

In summary, the merge sort algorithm is a robust and efficient sorting technique that sorts a list by repeatedly dividing it into smaller sublists and then merging them back together in sorted order.
    