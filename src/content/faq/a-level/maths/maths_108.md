---
title: "How to integrate x^2*ln(x)?"
summary: "To integrate x^2*ln(x), apply integration by parts, choosing u = ln(x) and dv = x^2 dx, to simplify the process and find the solution."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-01
---

To integrate the function $x^2 \ln(x)$, we can apply the technique of integration by parts. We start by choosing the following:

- Let $u = \ln(x)$, which implies that $du = \frac{1}{x} \, dx$.
- Let $dv = x^2 \, dx$, leading to $v = \frac{1}{3} x^3$.

Using the integration by parts formula, which states that:

$$
\int u \, dv = uv - \int v \, du,
$$

we can proceed with the integration as follows:

$$
\int x^2 \ln(x) \, dx = u v - \int v \, du.
$$

Substituting in our expressions for $u$, $v$, $du$, and $dv$, we have:

$$
= \ln(x) \cdot \left(\frac{1}{3} x^3\right) - \int \left(\frac{1}{3} x^3\right) \left(\frac{1}{x}\right) \, dx.
$$

This simplifies to:

$$
= \frac{1}{3} x^3 \ln(x) - \int \frac{1}{3} x^2 \, dx.
$$

Next, we compute the remaining integral:

$$
\int \frac{1}{3} x^2 \, dx = \frac{1}{3} \cdot \frac{1}{3} x^3 = \frac{1}{9} x^3.
$$

Putting it all together, we find:

$$
\int x^2 \ln(x) \, dx = \frac{1}{3} x^3 \ln(x) - \frac{1}{9} x^3 + C,
$$

where $C$ is the constant of integration.

Thus, the antiderivative of $x^2 \ln(x)$ is:

$$
\frac{1}{3} x^3 \ln(x) - \frac{1}{9} x^3 + C.
$$
    