---
title: "Determine the sum of the first n terms of a geometric sequence"
summary: "To determine the sum of the first n terms of a geometric sequence, use the formula Sn = a(1 - r^n)/(1 - r)."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-23
---

To calculate the sum of the first $n$ terms of a geometric sequence, you can use the formula:

$$
S_n = \frac{a(1 - r^n)}{1 - r}
$$

In this formula, $a$ represents the first term of the sequence, while $r$ denotes the common ratio—the constant factor by which each term is multiplied to get the next term.

A geometric sequence is defined as a series of numbers in which each term is derived by multiplying the preceding term by the common ratio $r$. 

The formula for the sum of the first $n$ terms, given by 

$$
S_n = \frac{a(1 - r^n)}{1 - r},
$$ 

can be derived from the formula for the sum of an infinite geometric series by considering the limit as $n$ approaches infinity.

For instance, let's examine the geometric sequence $2, 4, 8, 16, 32, \ldots$ In this case, the first term $a$ is $2$, and the common ratio $r$ is also $2$. If we want to find the sum of the first $5$ terms, we substitute $n = 5$ into the formula:

$$
S_5 = \frac{2(1 - 2^5)}{1 - 2}
= \frac{2(1 - 32)}{-1}
= \frac{2(-31)}{-1}
= 62.
$$

Thus, the sum of the first $5$ terms of this geometric sequence is $62$.

It is crucial to remember that this formula is applicable only when the common ratio $r$ is not equal to $1$. If $r = 1$, the sequence consists of the same number repeated $n$ times, resulting in a sum of $n$ multiplied by that number. Moreover, if $r$ is less than $-1$ or greater than $1$, the sum of the infinite series does not converge.
    