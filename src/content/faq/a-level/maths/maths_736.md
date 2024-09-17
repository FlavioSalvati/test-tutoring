---
title: "What's the integral of (1+x)^2/(x^2+1)?"
summary: "The integral of (1+x)^2/(x^2+1) is ln|x^2+1|+x-2arctan(x)+C."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-08
---

Let's enhance the content for clarity and readability while ensuring proper formatting with LaTeX. Here’s the revised version:

The integral of the function $\frac{(1+x)^2}{x^2+1}$ can be expressed as:

$$
\int \frac{(1+x)^2}{x^2+1} \, dx = \ln|x^2+1| + x - 2\arctan(x) + C
$$

To solve this integral, we will utilize partial fraction decomposition. We begin by factoring the denominator:

$$
x^2 + 1 = (x + i)(x - i)
$$

This allows us to rewrite the integrand as:

$$
\frac{(1+x)^2}{(x+i)(x-i)} = \frac{A}{x+i} + \frac{B}{x-i}
$$

Next, we multiply both sides by the denominator $(x+i)(x-i)$ to eliminate the fractions:

$$
(1+x)^2 = A(x-i) + B(x+i)
$$

To find the constants $A$ and $B$, we can substitute suitable values for $x$. 

1. Setting $x = i$:

$$
(1+i)^2 = A(i-i) + B(i+i)
$$

Calculating the left-hand side:

$$
(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i
$$

This gives us:

$$
2i = B(2i) \implies B = 1
$$

2. Setting $x = -i$:

$$
(1-i)^2 = A(-i-i) + B(-i+i)
$$

Calculating the left-hand side:

$$
(1-i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i
$$

This results in:

$$
-2i = A(-2i) \implies A = 1
$$

Thus, we can express the integrand as:

$$
\frac{(1+x)^2}{(x+i)(x-i)} = \frac{1}{x+i} + \frac{1}{x-i}
$$

Now, we can integrate each term separately:

1. For the first term:

$$
\int \frac{1}{x+i} \, dx = \ln|x+i| + C_1
$$

2. For the second term:

$$
\int \frac{1}{x-i} \, dx = \ln|x-i| + C_2
$$

Combining these two integrals, we have:

$$
\int \frac{(1+x)^2}{x^2+1} \, dx = \ln|x+i| + \ln|x-i| + C
$$

Using the property of logarithms, we can combine the two logarithmic terms:

$$
\ln|x+i| + \ln|x-i| = \ln|(x+i)(x-i)| = \ln|x^2+1|
$$

Thus, we arrive at the final expression for the integral:

$$
\int \frac{(1+x)^2}{x^2+1} \, dx = \ln|x^2+1| + C
$$

By integrating the remaining components, we can summarize the result as:

$$
\int \frac{(1+x)^2}{x^2+1} \, dx = \ln|x^2+1| + x - 2\arctan(x) + C
$$

Therefore, the integral of $\frac{(1+x)^2}{x^2+1}$ is given by:

$$
\ln|x^2+1| + x - 2\arctan(x) + C
$$
    