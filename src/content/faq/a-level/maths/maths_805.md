---
title: "How to integrate x^4/(x^2-1)?"
summary: "To integrate x^4/(x^2-1), use partial fractions and substitution."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-15
---

To evaluate the integral 

$$
\int \frac{x^4}{x^2 - 1} \, dx,
$$ 

we will utilize partial fractions and substitution.

First, we factor the denominator:

$$
x^2 - 1 = (x + 1)(x - 1).
$$

Next, we express the fraction as a sum of partial fractions:

$$
\frac{x^4}{x^2 - 1} = \frac{A}{x + 1} + \frac{B}{x - 1},
$$

where $A$ and $B$ are constants that we need to determine. To find $A$ and $B$, we multiply both sides by the common denominator, $(x + 1)(x - 1)$, and simplify:

$$
x^4 = A(x - 1) + B(x + 1).
$$

To isolate $A$, we can substitute $x = 1$ into the equation, which eliminates $B$:

$$
1^4 = A(1 - 1) + B(1 + 1) \implies 1 = 2B \implies B = \frac{1}{2}.
$$

Next, we substitute $x = -1$ to eliminate $A$ and solve for $B$:

$$
(-1)^4 = A(-1 - 1) + B(-1 + 1) \implies 1 = -2A \implies A = -\frac{1}{2}.
$$

Now that we have determined the values of $A$ and $B$, we can rewrite the original integral using the partial fractions:

$$
\int \frac{x^4}{x^2 - 1} \, dx = \int \left( \frac{1/2}{x + 1} - \frac{1/2}{x - 1} \right) \, dx.
$$

Next, we simplify and integrate:

$$
= \frac{1}{2} \int \frac{1}{x + 1} \, dx - \frac{1}{2} \int \frac{1}{x - 1} \, dx.
$$

The integrals of the individual fractions are:

$$
= \frac{1}{2} \ln |x + 1| - \frac{1}{2} \ln |x - 1| + C.
$$

Combining the logarithmic terms, we arrive at:

$$
= \frac{1}{2} \ln \left| \frac{x + 1}{x - 1} \right| + C.
$$

Thus, the final result for the integral is:

$$
\int \frac{x^4}{x^2 - 1} \, dx = \frac{1}{2} \ln \left| \frac{x + 1}{x - 1} \right| + C.
$$
    