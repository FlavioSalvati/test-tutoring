---
title: "Evaluate the integral of sin^2(x) dx"
summary: "The integral of sin^2(x) dx is (1/2)x - (1/4)sin(2x) + C."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-20
---

To evaluate the integral of $\sin^2(x) \, dx$, we can utilize the trigonometric identity:

$$
\sin^2(x) = \frac{1}{2}(1 - \cos(2x)).
$$

Using this identity, we rewrite the integral:

$$
\int \sin^2(x) \, dx = \int \frac{1}{2}(1 - \cos(2x)) \, dx.
$$

Next, we can factor out the constant $\frac{1}{2}$:

$$
= \frac{1}{2} \int (1 - \cos(2x)) \, dx.
$$

Now, we can evaluate the integral on the right:

$$
= \frac{1}{2} \left( \int 1 \, dx - \int \cos(2x) \, dx \right).
$$

The integral of $1 \, dx$ is simply $x$, and the integral of $\cos(2x) \, dx$ can be computed using a simple substitution, yielding $\frac{1}{2} \sin(2x)$. Therefore, we have:

$$
= \frac{1}{2} \left( x - \frac{1}{2} \sin(2x) \right) + C,
$$

where $C$ is the constant of integration. Simplifying this expression gives us:

$$
= \frac{1}{2} x - \frac{1}{4} \sin(2x) + C.
$$

Thus, the integral of $\sin^2(x) \, dx$ is:

$$
\int \sin^2(x) \, dx = \frac{1}{2} x - \frac{1}{4} \sin(2x) + C.
$$
    