---
title: "What are the common operations performed on lists in functional languages?"
summary: "Common operations performed on lists in functional languages include creation, concatenation, mapping, filtering, and reduction."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-11
---

In functional programming languages, lists serve as a fundamental data structure for storing collections of items. The following operations are commonly performed on lists, facilitating efficient data manipulation: creation, concatenation, mapping, filtering, and reduction.

### List Creation
The creation of lists is the most basic operation, involving the definition of a list containing a specific set of elements. For example, in Haskell, one can create a list of integers as follows:

$$
\text{let numbers = [1, 2, 3, 4, 5]}
$$

### Concatenation
Concatenation is another essential operation that combines two or more lists into a new list. In Haskell, the '++' operator is used for this purpose. For instance, the following code:

$$
\text{let moreNumbers = numbers ++ [6, 7, 8, 9, 10]}
$$

results in a new list, 'moreNumbers', containing the integers from $1$ to $10$.

### Mapping
Mapping is a higher-order function that applies a specified function to each element of a list, producing a new list with the results. For example, you can use the 'map' function in Haskell to compute the squares of each number in a list:

$$
\text{let squares = map (^2) numbers}
$$

### Filtering
Filtering is another higher-order function that generates a new list containing only the elements from an existing list that meet a specified condition. For example, you can filter the 'numbers' list to include only even numbers:

$$
\text{let evens = filter even numbers}
$$

### Reduction
Reduction, also known as folding, is a process that condenses a list into a single value by repeatedly applying a binary function. For instance, you can use the 'foldl' function in Haskell to calculate the sum of all the numbers in a list:

$$
\text{let sum = foldl (+) 0 numbers}
$$

These operations are prevalent across most functional programming languages, although the specific syntax and function names may differ. Together, they provide powerful tools for list manipulation and are essential for effectively understanding and utilizing functional programming.
    