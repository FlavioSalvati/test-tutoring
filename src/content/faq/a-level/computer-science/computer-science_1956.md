---
title: "How does the stooge sort algorithm work?"
summary: "The Stooge Sort algorithm is a recursive sorting algorithm that works by dividing the array into thirds and recursively sorting them."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-02-02
---

The Stooge Sort algorithm is a recursive sorting method that operates by dividing an array into three parts and sorting these segments recursively.

Stooge Sort is known for its inefficiency, with a time complexity of approximately $O(n^{2.7095...})$, which renders it impractical for large datasets. Nonetheless, it serves as an instructive example of a recursive sorting algorithm, making it valuable for educational purposes.

The algorithm begins by dividing the array into three nearly equal segments. If the array's length is not perfectly divisible by three, the middle segment will overlap with the first and last segments. The sorting process involves recursively sorting the first two-thirds of the array, followed by the last two-thirds, and then sorting the first two-thirds again. This cycle repeats until the entire array is sorted.

Here’s a step-by-step breakdown of how the Stooge Sort algorithm functions:

1. If the value at the beginning of the array is greater than the value at the end, swap these two values.
2. If the array contains three or more elements, perform the following steps:
   a. Calculate one-third of the array size, denoted as $m$.
   b. Recursively apply Stooge Sort to the first two-thirds of the array (from index $0$ to index $2m$).
   c. Recursively apply Stooge Sort to the last two-thirds of the array (from index $m$ to the end).
   d. Recursively apply Stooge Sort to the first two-thirds of the array once more (from index $0$ to index $2m$).

The algorithm continues to divide the array into thirds and sort these segments until the entire array is sorted. Despite its poor efficiency, Stooge Sort exemplifies the divide-and-conquer strategy in computer science. It also provides an engaging way to delve into the concept of recursion, which is fundamental to many algorithms in the field.
    