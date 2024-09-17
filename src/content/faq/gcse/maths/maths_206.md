---
title: "How do you find the nth term of 5, 15, 35, 65?"
summary: The sequence 5, 15, 35, 65 is defined by the formula $ n^3 + 4n - 1 $ for its nth term.
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "GCSE Maths Tutor"
date: 2024-05-05
---

The $n$th term of the sequence $5, 15, 35, 65$ is represented by the formula 

$$ n^3 + 4n - 1. $$

To derive the $n$th term of this sequence, we first need to identify the underlying pattern or rule that governs it. Let's analyze the provided sequence: $5, 15, 35, 65$.

We begin by calculating the differences between consecutive terms:

- The difference between the second term and the first term is: 
  $$ 15 - 5 = 10. $$

- The difference between the third term and the second term is: 
  $$ 35 - 15 = 20. $$

- The difference between the fourth term and the third term is: 
  $$ 65 - 35 = 30. $$

Next, we calculate the second differences:

- The difference between the second difference and the first difference is: 
  $$ 20 - 10 = 10. $$

- The difference between the third difference and the second difference is: 
  $$ 30 - 20 = 10. $$

Since the second differences are constant, this suggests that the sequence is quadratic. However, the nature of the differences indicates that a cubic term may also be involved. To derive the exact formula, we assume it has the form 

$$ an^3 + bn^2 + cn + d. $$

We can set up a system of equations based on the first four terms of the sequence:

1. For $n = 1$: 
   $$ a(1)^3 + b(1)^2 + c(1) + d = 5. $$

2. For $n = 2$: 
   $$ a(2)^3 + b(2)^2 + c(2) + d = 15. $$

3. For $n = 3$: 
   $$ a(3)^3 + b(3)^2 + c(3) + d = 35. $$

4. For $n = 4$: 
   $$ a(4)^3 + b(4)^2 + c(4) + d = 65. $$

By solving this system of equations, we determine the coefficients: 

$$ a = 1, \quad b = 0, \quad c = 4, \quad d = -1. $$ 

Thus, the formula for the $n$th term becomes 

$$ n^3 + 4n - 1. $$

This formula enables us to compute any term in the sequence by substituting the desired value of $n$. For instance, to find the 5th term, we substitute $n = 5$ into the formula:

$$ 5^3 + 4(5) - 1 = 125 + 20 - 1 = 144. $$ 

Therefore, the 5th term of the sequence is $144$.
    