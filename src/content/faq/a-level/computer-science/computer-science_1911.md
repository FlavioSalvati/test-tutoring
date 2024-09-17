---
title: "How does the insertion sort algorithm function?"
summary: "The insertion sort algorithm sorts a list by building a sorted array one item at a time."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-01
---

The insertion sort algorithm is a straightforward method for sorting a list, which builds a sorted array one element at a time.

This algorithm operates similarly to how one might sort playing cards in hand. It begins with the second element in the list and compares it to the first. If the second element is smaller, the two elements are swapped. The algorithm then progresses to the next element, comparing it with all preceding elements and swapping as necessary until it finds the correct position for that element. This process continues iteratively until the entire list is sorted.

You can visualize the insertion sort algorithm as dividing the list into two regions: a sorted region and an unsorted region. The sorted region starts with the first element, and with each iteration, one element from the unsorted region is placed in its correct position within the sorted region. This continues until there are no remaining elements in the unsorted region, resulting in a fully sorted list.

Insertion sort is particularly efficient for small lists or lists that are already partially sorted. However, its time complexity can become a limitation for larger lists. In the worst-case scenario, where the list is sorted in reverse order, the time complexity is $O(n^2)$, as each element must be compared with every other element. Conversely, in the best-case scenario, where the list is already sorted, the time complexity is $O(n)$, since each element only requires a single comparison.

In terms of space complexity, insertion sort is highly efficient, requiring only a single additional memory space for the element currently being sorted. This characteristic makes it an in-place sorting algorithm, as it does not need extra space proportional to the size of the input list.

In conclusion, while insertion sort may not be the most efficient algorithm for sorting large lists, its simplicity and effectiveness for small or partially sorted lists make it a valuable tool in a programmer's toolkit.
    