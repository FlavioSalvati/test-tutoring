---
title: "What's the integral of x^4*ln(x)?"
summary: "The integral of x^4*ln(x) is (1/5)x^5*ln(x) - (1/25)x^5 + C."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-01
---

The integral of the function $x^4 \ln(x)$ can be expressed as:

$$\int x^4 \ln(x) \, dx = \frac{1}{5} x^5 \ln(x) - \frac{1}{25} x^5 + C,$$

where $C$ is the constant of integration.

To evaluate this integral, we will apply the technique known as integration by parts. We begin by making the following substitutions:

- Let $u = \ln(x)$, which implies that $du = \frac{1}{x} \, dx$.
- Let $dv = x^4 \, dx$, which gives us $v = \frac{1}{5} x^5$.

Using the integration by parts formula, which states that:

$$\int u \, dv = uv - \int v \, du,$$

we can substitute our expressions for $u$, $du$, $v$, and $dv$:

$$\int x^4 \ln(x) \, dx = uv - \int v \, du.$$

Substituting in, we get:

$$\int x^4 \ln(x) \, dx = \left(\frac{1}{5} x^5 \ln(x)\right) - \int \left(\frac{1}{5} x^5 \cdot \frac{1}{x}\right) \, dx.$$

This simplifies to:

$$\int x^4 \ln(x) \, dx = \frac{1}{5} x^5 \ln(x) - \int \frac{1}{5} x^4 \, dx.$$

Now, we can evaluate the remaining integral:

$$\int \frac{1}{5} x^4 \, dx = \frac{1}{5} \cdot \frac{1}{5} x^5 = \frac{1}{25} x^5.$$

Putting it all together, we find:

$$\int x^4 \ln(x) \, dx = \frac{1}{5} x^5 \ln(x) - \frac{1}{25} x^5 + C.$$

Thus, the final result for the integral of $x^4 \ln(x)$ is:

$$\int x^4 \ln(x) \, dx = \frac{1}{5} x^5 \ln(x) - \frac{1}{25} x^5 + C.$$
    