---
title: "Evaluate the integral of cos^2(x) dx"
summary: "The integral of cos^2(x) dx is (1/2)x + (1/4)sin(2x) + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-27
---

To evaluate the integral of $\cos^2(x) \, dx$, we can utilize the identity:

$$
\cos^2(x) = \frac{1}{2}(1 + \cos(2x)).
$$

Using this identity, we can rewrite the integral as follows:

$$
\int \cos^2(x) \, dx = \int \frac{1}{2}(1 + \cos(2x)) \, dx.
$$

This expression can be separated into two integrals:

$$
= \frac{1}{2} \int dx + \frac{1}{2} \int \cos(2x) \, dx.
$$

Calculating these integrals, we get:

$$
= \frac{1}{2} x + \frac{1}{4} \sin(2x) + C,
$$

where $C$ is the constant of integration. 

To verify our result, we can differentiate the expression we found:

$$
\frac{d}{dx} \left( \frac{1}{2} x + \frac{1}{4} \sin(2x) + C \right) = \frac{1}{2} + \frac{1}{2} \cos(2x) = \cos^2(x).
$$

Thus, our answer is confirmed to be correct.

Alternatively, we can also evaluate the integral of $\cos^2(x) \, dx$ using the half-angle formula for cosine, which states:

$$
\cos^2(x) = \frac{1}{2}(1 + \cos(2x)).
$$

Using this formula, we can rewrite the integral in the same manner:

$$
\int \cos^2(x) \, dx = \int \frac{1}{2}(1 + \cos(2x)) \, dx
= \frac{1}{2} \int dx + \frac{1}{2} \int \cos(2x) \, dx
= \frac{1}{2} x + \frac{1}{4} \sin(2x) + C.
$$

Once again, we arrive at the same result as before.
    