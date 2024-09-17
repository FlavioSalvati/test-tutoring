---
title: "What's the integral of x*ln(x)?"
summary: "The integral of x*ln(x) is calculated as (x^2/2)*ln(x) - (x^2/4) + C, where C is the constant of integration."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-19
---

To evaluate the integral of \( x \ln(x) \), we find that:

$$
\int x \ln(x) \, dx = \frac{x^2}{2} \ln(x) - \frac{x^2}{4} + C
$$

where \( C \) is the constant of integration.

To derive this result, we can apply the technique of integration by parts. We begin by selecting our components:

- Let \( u = \ln(x) \) 
- Let \( dv = x \, dx \)

Next, we compute the differentials:

- The derivative \( du = \frac{1}{x} \, dx \)
- The integral \( v = \frac{x^2}{2} \)

Using the integration by parts formula:

$$
\int u \, dv = uv - \int v \, du
$$

we can substitute our chosen \( u \) and \( v \):

$$
\int x \ln(x) \, dx = uv - \int v \, du
$$

Substituting in our values:

$$
= \left( \frac{x^2}{2} \ln(x) \right) - \int \left( \frac{x^2}{2} \cdot \frac{1}{x} \right) \, dx
$$

This simplifies to:

$$
= \frac{x^2}{2} \ln(x) - \int \frac{x}{2} \, dx
$$

Now, we can evaluate the remaining integral:

$$
= \frac{x^2}{2} \ln(x) - \left( \frac{x^2}{4} \right) + C
$$

Thus, we conclude that the integral of \( x \ln(x) \) is given by:

$$
\int x \ln(x) \, dx = \frac{x^2}{2} \ln(x) - \frac{x^2}{4} + C
$$
    