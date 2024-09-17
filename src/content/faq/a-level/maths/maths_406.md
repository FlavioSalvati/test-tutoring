---
title: "How to integrate (x^2+1)/(x^3+1)?"
summary: "To integrate (x^2+1)/(x^3+1), use partial fractions and substitution."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-29
---

To integrate the expression $\frac{x^2+1}{x^3+1}$, we will utilize partial fractions and substitution techniques.

First, we start by factorizing the denominator using the sum of cubes formula:
$$
x^3 + 1 = (x + 1)(x^2 - x + 1).
$$

Next, we express the integrand $\frac{x^2+1}{x^3+1}$ as a sum of partial fractions:
$$
\frac{x^2 + 1}{x^3 + 1} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 - x + 1}.
$$

To determine the coefficients $A$, $B$, and $C$, we first find $A$. We do this by multiplying both sides by $x + 1$ and then substituting $x = -1$:
$$
A = \frac{(-1)^2 + 1}{(-1 + 1)((-1)^2 - (-1) + 1)} = \frac{2}{0 \cdot 3} = \text{undefined}.
$$
However, since we are looking for the limit as $x$ approaches $-1$, we need to analyze the expression more carefully:
$$
x^3 + 1 = (x + 1)(x^2 - x + 1) \implies \text{as } x \to -1, \text{ only the first factor matters.}
$$

Now, we can substitute $x = 0$ and $x = 1$ into the equations for $B$ and $C$. By multiplying both sides by $x^2 - x + 1$, we get:
1. For $x = 0$:
   $$B + C = 0.$$
2. For $x = 1$:
   $$B + C = \frac{2}{3}.$$

From these equations, we can solve for $B$ and $C$. We find:
- $B + C = 0$
- $B + C = \frac{2}{3}$

Thus, we can derive:
- $C = -B$
- Substituting into the second equation gives:
$$
B - B = \frac{2}{3} \implies 2B = \frac{2}{3} \implies B = \frac{1}{3}.
$$
Then substituting back to find $C$:
$$
C = -\frac{1}{3}.
$$

Now that we have the values of $A$, $B$, and $C$, we can substitute them back into our partial fractions expression:
$$
\frac{x^2 + 1}{x^3 + 1} = \frac{1}{3(x + 1)} + \frac{\frac{1}{3}x - \frac{1}{3}}{x^2 - x + 1}.
$$

Next, we perform the substitution $u = x^2 - x + 1$ which leads to:
$$
du = (2x - 1)dx.
$$

Thus, the integral becomes:
$$
\int \frac{x^2 + 1}{x^3 + 1} \, dx = \frac{1}{3} \ln |x + 1| + \frac{1}{6} \ln |x^2 - x + 1| - \frac{1}{3} \int \frac{du}{u}.
$$

The final integral $\int \frac{du}{u}$ can be evaluated as:
$$
\int \frac{du}{u} = \ln |u| + C = \ln |x^2 - x + 1| + C.
$$

Therefore, combining everything, we obtain the final result for the integral:
$$
\int \frac{x^2 + 1}{x^3 + 1} \, dx = \frac{1}{3} \ln |x + 1| + \frac{1}{6} \ln |x^2 - x + 1| - \frac{1}{3} \ln |x^2 - x + 1| + C.
$$

This simplifies to:
$$
\int \frac{x^2 + 1}{x^3 + 1} \, dx = \frac{1}{3} \ln |x + 1| - \frac{1}{6} \ln |x^2 - x + 1| + C.
$$
    