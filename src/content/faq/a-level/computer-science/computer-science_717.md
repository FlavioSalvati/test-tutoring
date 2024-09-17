---
title: "How does the quicksort algorithm sort an array?"
summary: "Quicksort algorithm sorts an array by dividing it into two smaller arrays around a pivot element and recursively sorting them."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-01
---

The Quicksort algorithm is a highly efficient sorting technique that organizes an array by dividing it into two smaller sub-arrays around a chosen pivot element, and then recursively sorting these sub-arrays.

Quicksort, also referred to as partition-exchange sort, utilizes the divide-and-conquer strategy to sort elements. It begins by selecting a 'pivot' element from the array and partitioning the remaining elements into two sub-arrays based on whether they are less than or greater than the pivot. These sub-arrays are then sorted recursively.

The first step in the Quicksort algorithm is to choose a pivot. This can be any element from the array, such as the first element, the last element, the median, or even a randomly selected element. While the choice of pivot does not affect the correctness of the algorithm, it can greatly influence its efficiency. A common approach is to select the last element of the array as the pivot.

Once the pivot is selected, the algorithm proceeds to partition the array. It employs two pointers: one starting at the beginning of the array and the other at the end. The algorithm moves the pointers toward each other until they identify an element that is on the incorrect side of the pivot. When such elements are found, they are swapped. This process continues until the two pointers converge. At that point, the pivot is swapped with the element located at the convergence point of the pointers, placing the pivot in its final sorted position. This ensures that all elements to the left of the pivot are smaller, while all elements to the right are larger.

Following the partitioning, the algorithm recursively applies the same procedure to the sub-arrays created by the elements to the left and right of the pivot. This recursion continues until the base case is reached, which occurs when a sub-array contains either one element or no elements at all.

Quicksort is classified as an in-place sorting algorithm, meaning it sorts the array by making modifications directly to it without necessitating the creation of a new array. This characteristic contributes to its space efficiency. However, it is important to note that the worst-case time complexity of Quicksort is $O(n^2)$, which arises in scenarios where the array is already sorted or reverse sorted. Despite this potential drawback, Quicksort often outperforms other $O(n \log n)$ sorting algorithms, such as mergesort or heapsort, in practice. This is largely due to the efficient implementation of its inner loop on most modern architectures.
    