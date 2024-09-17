---
title: "Explain the Euclidean algorithm for finding the greatest common divisor"
summary: "The Euclidean algorithm is a method for finding the greatest common divisor of two integers."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-13
---

The Euclidean algorithm is an efficient method for determining the greatest common divisor (GCD) of two integers.

To apply the Euclidean algorithm, we begin by dividing the larger integer by the smaller integer. We then take the remainder from this division and divide the smaller integer by this remainder. This process is repeated, where we continually divide the previous divisor by the previous remainder, until we reach a remainder of zero. The last non-zero remainder obtained during this process is the greatest common divisor of the original two integers.

For instance, let's use the Euclidean algorithm to find the greatest common divisor of $48$ and $18$:

1. First, divide $48$ by $18$:
   $$ 48 \div 18 = 2 \quad \text{(remainder } 12\text{)} $$
   
2. Next, divide $18$ by the remainder $12$:
   $$ 18 \div 12 = 1 \quad \text{(remainder } 6\text{)} $$
   
3. Now, divide $12$ by the remainder $6$:
   $$ 12 \div 6 = 2 \quad \text{(remainder } 0\text{)} $$

At this point, we have reached a remainder of zero, which means the last non-zero remainder is $6$. Therefore, the greatest common divisor of $48$ and $18$ is $6$.

The Euclidean algorithm is effective because if a number divides both of the original integers, it must also divide the remainder derived from their division. By continually dividing the previous divisor by the previous remainder, we systematically check for smaller integers that might divide both original numbers. Consequently, the last non-zero remainder we obtain is the largest integer that divides both original integers, confirming it as their greatest common divisor.
    