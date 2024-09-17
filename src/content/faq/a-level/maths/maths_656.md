---
title: "How to integrate (x^2+1)/(x^2-1)?"
summary: "To integrate (x^2+1)/(x^2-1), use partial fractions and substitution."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-19
---

To integrate the expression $\frac{x^2 + 1}{x^2 - 1}$, we will utilize partial fractions and substitution.

First, we begin by factoring the denominator:

$$
x^2 - 1 = (x + 1)(x - 1)
$$

Next, we express the fraction as a sum of partial fractions:

$$
\frac{x^2 + 1}{x^2 - 1} = \frac{A}{x + 1} + \frac{B}{x - 1}
$$

To determine the constants $A$ and $B$, we will multiply both sides by the common denominator $(x + 1)(x - 1)$ and simplify:

$$
x^2 + 1 = A(x - 1) + B(x + 1)
$$

Now, we can find the values of $A$ and $B$. By substituting $x = 1$, we eliminate $A$:

$$
2 = 2B \implies B = 1
$$

Next, we substitute $x = -1$ to eliminate $B$:

$$
2 = -2A \implies A = -1
$$

Thus, we can rewrite the fraction:

$$
\frac{x^2 + 1}{x^2 - 1} = -\frac{1}{x + 1} + \frac{1}{x - 1}
$$

Now, we can integrate each term separately using substitution:

1. For the first term:
   $$ 
   \int -\frac{1}{x + 1} \, dx = -\ln |x + 1| + C 
   $$

2. For the second term:
   $$ 
   \int \frac{1}{x - 1} \, dx = \ln |x - 1| + C 
   $$

Combining these results, we obtain:

$$
\int \frac{x^2 + 1}{x^2 - 1} \, dx = -\ln |x + 1| + \ln |x - 1| + C
$$

To simplify further, we can apply the properties of logarithms:

$$
-\ln |x + 1| + \ln |x - 1| = \ln \left( \frac{x - 1}{x + 1} \right)
$$

Thus, the final result for the integral is:

$$
\int \frac{x^2 + 1}{x^2 - 1} \, dx = \ln \left| \frac{x - 1}{x + 1} \right| + C
$$
    