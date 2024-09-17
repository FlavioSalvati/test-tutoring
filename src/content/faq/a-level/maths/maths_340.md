---
title: "How to integrate (x+1)^2/(x^2+1)?"
summary: "To integrate (x+1)^2/(x^2+1), use partial fractions and substitution."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-04
---

To integrate the expression $\frac{(x+1)^2}{x^2+1}$, we will employ the method of partial fractions along with a substitution.

First, we can decompose the integrand into simpler fractions using partial fractions:

$$
\frac{(x+1)^2}{x^2+1} = A \frac{x+1}{x^2+1} + B \frac{(x+1)^2}{(x^2+1)^2}
$$

To determine the constants $A$ and $B$, we multiply both sides by the denominator $x^2 + 1$ and simplify:

$$
(x+1)^2 = A(x^2 + 1) + B(x+1)^2
$$

Next, we expand both sides and equate coefficients:

1. Expanding the left side gives us $(x+1)^2 = x^2 + 2x + 1$.
2. Expanding the right side gives us $A(x^2 + 1) + B(x^2 + 2x + 1) = (A+B)x^2 + (2B)x + (A+B)$.

Equating coefficients from both expansions yields the following system of equations:

1. $A + B = 1$
2. $2B = 2$

From the second equation, we find that $B = 1$. Substituting this value into the first equation gives:

$$
A + 1 = 1 \implies A = 0.
$$

Thus, we have $A = 0$ and $B = 1$.

Now, we can rewrite our integral as:

$$
\int \frac{(x+1)^2}{x^2+1} \, dx = \int \left( \frac{1}{2} \frac{(x+1)}{x^2+1} \right) \, dx + \int \left( \frac{1}{2} \frac{(x+1)^2}{(x^2+1)^2} \right) \, dx.
$$

Next, we make the substitution $u = x^2 + 1$, which gives us $du = 2x \, dx$. Rewriting the integral, we get:

$$
\int \frac{(x+1)^2}{x^2+1} \, dx = \frac{1}{2} \ln(x^2 + 1) + \int \frac{1}{2} \frac{(1 + 2x^2 + 2x)}{(x^2 + 1)^2} \, dx.
$$

This simplifies to:

$$
\frac{1}{2} \ln(x^2 + 1) + \frac{1}{2} \int \frac{1}{(x^2 + 1)^2} \, dx + \int \frac{x}{(x^2 + 1)^2} \, dx.
$$

After integration, we find:

$$
\int \frac{1}{(x^2 + 1)^2} \, dx = \frac{1}{2} \arctan(x) - \frac{x}{2(x^2 + 1)} + C.
$$

Thus, combining all parts, we have:

$$
\int \frac{(x+1)^2}{x^2 + 1} \, dx = \frac{1}{2} \ln(x^2 + 1) + \frac{1}{2} \arctan(x) + C.
$$

In conclusion, the integral of $\frac{(x+1)^2}{x^2+1}$ is given by:

$$
\frac{1}{2} \ln(x^2 + 1) + \frac{1}{2} \arctan(x) + C.
$$
    