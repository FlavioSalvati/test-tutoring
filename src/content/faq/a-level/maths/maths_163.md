---
title: "How to integrate (x^3+1)/(x^2+1)^2?"
summary: To integrate $(x^3+1)/(x^2+1)^2$, apply partial fractions and substitution techniques for simplification and solution.
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-23
---

To integrate the expression $\frac{x^3 + 1}{(x^2 + 1)^2}$, we will utilize partial fractions and substitution techniques.

First, we decompose the integrand using partial fractions. We set up the equation:

$$
\frac{x^3 + 1}{(x^2 + 1)^2} = \frac{A}{x^2 + 1} + \frac{B}{(x^2 + 1)^2}.
$$

Next, we cross-multiply to eliminate the denominators and obtain:

$$
x^3 + 1 = A(x^2 + 1) + B.
$$

By expanding and rearranging this equation, we can solve for the constants $A$ and $B$. Doing so yields $A = \frac{1}{2}$ and $B = -\frac{1}{2}$.

Now, we proceed with the substitution $u = x^2 + 1$. Consequently, we have:

$$
du = 2x \, dx,
$$

which implies that:

$$
dx = \frac{du}{2x}.
$$

However, since we will be integrating in terms of $u$, we need to express $x$ in terms of $u$. Noticing that $x^2 = u - 1$, we can rewrite $x$ as $\sqrt{u - 1}$. 

The integral then transforms into:

$$
\int \left( \frac{1}{2} \cdot \frac{1}{u} - \frac{1}{2} \cdot \frac{1}{u^2} \right) du.
$$

This can be separated into two integrals:

$$
\frac{1}{2} \int \frac{1}{u} \, du - \frac{1}{2} \int \frac{1}{u^2} \, du.
$$

Integrating each term individually gives us:

$$
\frac{1}{2} \ln |u| - \frac{1}{2} \cdot \left(-\frac{1}{u}\right) + C,
$$

where $C$ is the constant of integration. Substituting back $u = x^2 + 1$, we arrive at:

$$
\frac{1}{2} \ln |x^2 + 1| + \frac{1}{2(x^2 + 1)} + C.
$$

Thus, the final result for the integral is:

$$
\frac{1}{2} \ln |x^2 + 1| + \frac{1}{2(x^2 + 1)} + C.
$$
    