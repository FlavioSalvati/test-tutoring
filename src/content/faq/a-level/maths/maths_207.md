---
title: "Explain how to find the sum of the first n terms of a geometric sequence"
summary: "The sum of the first n terms of a geometric sequence is calculated using the formula Sn = a(1 - r^n) / (1 - r), where a is the first term and r is the common ratio."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-01-20
---

To calculate the sum of the first $n$ terms of a geometric sequence, you can use the formula:

$$
S_n = \frac{a(1 - r^n)}{1 - r}
$$

In this formula, $a$ represents the first term of the sequence, and $r$ denotes the common ratio.

A geometric sequence is defined as a series of numbers in which each term is obtained by multiplying the preceding term by a constant factor, known as the common ratio. For instance, the sequence $2, 4, 8, 16, 32$ is a geometric sequence with a first term of $2$ and a common ratio of $2$.

To illustrate the use of the formula for the sum of the first $n$ terms, consider the geometric sequence $2, 4, 8, 16, 32$. In this case, we have $a = 2$ and $r = 2$. To find the sum of the first $5$ terms, we can substitute these values into the formula:

$$
S_5 = \frac{2(1 - 2^5)}{1 - 2} = \frac{2(1 - 32)}{-1} = \frac{2 \times -31}{-1} = 62.
$$

It is important to note that this formula is applicable only for finite geometric sequences where the common ratio $r$ is not equal to $1$. If $r = 1$, the sequence is not geometric, and the sum of the first $n$ terms simplifies to $n \times a$. 

Additionally, when the common ratio $r$ is greater than $1$, the sequence is increasing, and the sum of the first $n$ terms will approach infinity as $n$ approaches infinity. Conversely, if the common ratio $r$ lies between $-1$ and $1$, the sequence is decreasing, and the sum of the first $n$ terms will approach the limit:

$$
\frac{a}{1 - r}
$$ 

as $n$ approaches infinity.
    