---
title: "How do you merge two sorted linked lists?"
summary: "You merge two sorted linked lists by creating a new list and appending the smallest elements from each list in order."
author: "Dr. Noah Taylor"
degree: "PhD in Data Science, University College London"
tutor_type: "IB Computer Science Tutor"
date: 2024-04-27
---

To merge two sorted linked lists, you will create a new linked list by sequentially appending the smallest elements from each list.

Here’s a detailed explanation of the merging process:

1. **Initialization**: Start by creating a new linked list, often referred to as a "dummy" node. This dummy node serves as the starting point for the merged list. You will also need two pointers, each pointing to the head of the two linked lists you wish to merge.

2. **Comparison and Merging**: Begin the merging process by comparing the elements at the heads of the two lists. Append the smaller element to the new list and advance the pointer for that particular list to its next node. If the elements are equal, you can choose either one to append and move the corresponding pointer.

3. **Iteration**: Continue repeating the comparison and appending steps until you reach the end of one of the lists. 

4. **Appending Remaining Elements**: Once one list is exhausted, you will still have elements left in the other list. Since both lists are sorted, you can directly append all remaining elements from the non-exhausted list to the newly created list.

5. **Result**: The final result is a new linked list that contains all the elements from both lists, arranged in sorted order.

Here’s a step-by-step guide to effectively merge the two sorted linked lists:

1. Initialize a new linked list (dummy node) and two pointers, with each pointing to the head of the respective lists.
2. Compare the elements at the heads of the two lists.
3. Append the smaller element to the new list and move the pointer of that list to the next node.
4. If the elements at the heads are equal, append either one and advance the corresponding pointer.
5. Repeat steps 2-4 until one of the lists is fully traversed.
6. Append all remaining elements from the non-exhausted list to the new list.

It’s important to note that the assumption of sorted lists is crucial for this merging process. This ensures that if an element is smaller than the heads of both lists, it will also be smaller than all subsequent elements in both lists. Thus, the merged list will maintain the sorted order.
    