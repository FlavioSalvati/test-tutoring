---
title: "How does the counting sort algorithm function?"
summary: "Counting sort is a sorting algorithm that sorts elements by counting the number of occurrences of each unique element in the array."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-05-09
---

Counting sort is a sorting algorithm that organizes elements by tallying the occurrences of each unique element within an array.

This algorithm is classified as a non-comparison based sorting method, meaning it does not rely on comparing elements to arrange them. Instead, it utilizes an auxiliary array, known as the count array, to store the frequency of each unique element found in the input array. The size of this count array corresponds to the maximum value present in the input array. The algorithm further modifies the count array such that each index contains the cumulative sum of previous counts. This adjusted count array reveals the position of each element in the final sorted output.

The counting sort algorithm proceeds through three main steps:

1. **Counting Occurrences**: First, it counts how many times each number appears in the input array, storing this information in the count array.
   
2. **Prefix Sum Calculation**: Next, it performs a prefix sum calculation on the count array to determine the starting index for each number in the output array. This transformation adjusts the count array so that each index reflects the total of all previous counts.

3. **Building the Output Array**: Finally, the algorithm iterates through the input array in reverse order. For each element, it places it in the output array at the index specified by the count array, then decrements the count for that element by one.

Counting sort is particularly efficient when the range of the input data, denoted as $k$, is not excessively larger than the number of elements, denoted as $n$, to be sorted. The algorithm boasts a time complexity of $O(n + k)$ and a space complexity of $O(n + k)$, where $n$ represents the number of elements in the input array.

However, counting sort is not a comparison-based sort and is frequently employed as a subroutine in other sorting algorithms, such as radix sort. It is also unsuitable for sorting arrays that include negative numbers or floating-point values. Importantly, counting sort is a stable sorting algorithm, meaning that it maintains the relative order of equal elements in the sorted output.
    