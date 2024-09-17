---
title: "What's the integral of x^3/(x^2-1)?"
summary: "The integral of x^3/(x^2-1) is (1/2)ln|x^2-1| - (1/2)x - (1/2)ln|x+1| + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-22
---

Let's clarify and enhance the content for better readability while ensuring proper formatting of mathematical expressions.

---

The integral of the function $\frac{x^3}{x^2-1}$ can be expressed as:

$$
\int \frac{x^3}{x^2-1} \, dx = \frac{1}{2} \ln |x^2-1| - \frac{1}{2} x - \frac{1}{2} \ln |x+1| + C,
$$

where $C$ is the constant of integration.

To solve this integral, we will use the method of partial fractions. First, we factor the denominator $x^2 - 1$ as $(x+1)(x-1)$. We can then express the fraction as follows:

$$
\frac{x^3}{x^2-1} = \frac{A}{x+1} + \frac{B}{x-1},
$$

where $A$ and $B$ are constants to be determined.

Next, we multiply both sides by the denominator $(x+1)(x-1)$ to eliminate the fractions:

$$
x^3 = A(x-1) + B(x+1).
$$

To find the values of $A$ and $B$, we can substitute convenient values for $x$. 

1. Setting $x = 1$:

$$
1^3 = A(1-1) + B(1+1) \implies 1 = 0 + 2B \implies B = \frac{1}{2}.
$$

2. Setting $x = -1$:

$$
(-1)^3 = A(-1-1) + B(-1+1) \implies -1 = -2A + 0 \implies A = \frac{1}{2}.
$$

Thus, we can rewrite the original fraction as:

$$
\frac{x^3}{x^2-1} = \frac{1/2}{x+1} - \frac{1/2}{x-1}.
$$

Now, we can integrate each term separately:

1. For the first term:

$$
\int \frac{1/2}{x+1} \, dx = \frac{1}{2} \ln |x+1| + C_1.
$$

2. For the second term:

$$
\int -\frac{1/2}{x-1} \, dx = -\frac{1}{2} \ln |x-1| + C_2.
$$

Combining these two integrals and simplifying, we obtain:

$$
\int \frac{x^3}{x^2-1} \, dx = \frac{1}{2} \ln |x+1| - \frac{1}{2} \ln |x-1| + C,
$$

where $C$ is a constant that combines $C_1$ and $C_2$.

Finally, we can express the result in a more consolidated form:

$$
\int \frac{x^3}{x^2-1} \, dx = \frac{1}{2} \ln |x^2-1| - \frac{1}{2} x - \frac{1}{2} \ln |x+1| + C.
$$

Thus, the integral of $\frac{x^3}{x^2-1}$ is:

$$
\int \frac{x^3}{x^2-1} \, dx = \frac{1}{2} \ln |x^2-1| - \frac{1}{2} x - \frac{1}{2} \ln |x+1| + C.
$$
    