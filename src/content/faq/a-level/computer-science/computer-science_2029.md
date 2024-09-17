---
title: "How does the counting sort algorithm function?"
summary: "Counting sort is a sorting algorithm that sorts elements by counting the number of occurrences of each unique element in the array."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-04-07
---

Counting sort is an efficient sorting algorithm that organizes elements by tallying the occurrences of each unique value in the array.

As a non-comparison based sorting algorithm, counting sort does not rely on comparing elements to arrange them. Instead, it constructs an auxiliary array, known as the count array, which keeps track of the frequency of each unique element present in the input array. The size of the count array corresponds to the maximum value found in the input array. Subsequently, the algorithm modifies the count array so that each index contains the cumulative sum of the counts, which indicates the positions of each element in the final sorted output.

The counting sort algorithm can be broken down into three distinct steps:

1. **Counting Occurrences**: The first step involves counting how many times each number appears in the input array, storing this information in the count array.
  
2. **Prefix Sum Computation**: The second step entails performing a prefix sum calculation on the count array. This process transforms the count array such that each index holds the cumulative sum of counts, effectively determining the starting position for each number in the output array.
  
3. **Building the Output Array**: In the final step, the algorithm iterates over the input array in reverse order. For each element, it places it in the output array at the index specified by the count array, and subsequently decrements the count for that element by one.

Counting sort is particularly effective when the range of input data, denoted as $k$, is not excessively larger than the number of elements, $n$, that need to be sorted. The algorithm boasts a time complexity of $O(n + k)$ and a space complexity of $O(n + k)$, where $n$ represents the number of elements in the input array and $k$ signifies the range of the input values.

It is important to note that counting sort is not a comparison sort. It is often utilized as a subroutine within other sorting algorithms, such as radix sort. Additionally, counting sort is not suitable for sorting arrays that contain negative integers or floating-point numbers. One of the key advantages of counting sort is its stability; it preserves the relative order of equal elements in the final sorted output.
    