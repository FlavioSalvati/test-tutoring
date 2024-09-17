---
title: "How does bubble sort algorithm work, and what is its complexity?"
summary: "Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order, with a complexity of O(n^2)."
author: "Dr. Ava Johnson"
degree: "PhD in Software Development, University of Nottingham"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-07-29
---

Bubble sort is a straightforward sorting algorithm that operates by repeatedly iterating through the list and comparing each pair of adjacent elements. If the elements are found to be in the wrong order, they are swapped. This process continues until no further swaps are necessary, indicating that the list is correctly sorted. The name "bubble sort" derives from the way smaller or larger elements "bubble" to their appropriate positions within the list.

During each iteration, the algorithm effectively places the next largest value in its correct position. Specifically, every element "bubbles" up to the position it is meant to occupy. For an array containing $n$ elements, bubble sort typically requires $n - 1$ passes to ensure that every element has been compared with all other elements.

The time complexity of bubble sort is $O(n^2)$ in both average and worst-case scenarios. This is due to the fact that each comparison involves a pair of elements, and in the worst case, the algorithm must perform $\frac{n(n-1)}{2}$ comparisons. This expression simplifies to $O(n^2)$. Consequently, bubble sort becomes inefficient for large lists and is generally outperformed by more advanced sorting algorithms such as quicksort, mergesort, or heapsort.

However, bubble sort does exhibit a best-case time complexity of $O(n)$ when the input list is already sorted. In this scenario, only one pass is required to verify that all elements are in the correct order. Additionally, the algorithm can efficiently determine if a list is sorted if it completes a full pass without any swaps. This characteristic makes bubble sort particularly useful in situations where the list is expected to be nearly sorted, such as in real-time systems where data is almost in order, and the overhead associated with more complex sorting algorithms would be unnecessary.

In terms of space complexity, bubble sort is highly efficient, with a complexity of $O(1)$. This is because it only requires a single additional memory space for a temporary variable used during the swapping process. As a result, bubble sort can be a suitable choice in scenarios where memory space is constrained.
    