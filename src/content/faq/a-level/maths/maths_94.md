---
title: "Evaluate the integral of sec^2(x) dx"
summary: "The integral of sec^2(x) with respect to x is tan(x) plus a constant of integration, C."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-05
---

Let's enhance the clarity and readability of your content while ensuring that all mathematical expressions are properly formatted using LaTeX.

---

The integral of $\sec^2(x) \, dx$ is given by:

$$
\int \sec^2(x) \, dx = \tan(x) + C
$$

where $C$ represents the constant of integration.

To evaluate the integral of $\sec^2(x) \, dx$, we can utilize the formula for the integral of a power function:

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C
$$

for $n \neq -1$. In this case, we note that $\sec^2(x)$ can be expressed as $(\cos(x))^{-2}$. This allows us to set $n = -2$, leading to:

$$
\int \sec^2(x) \, dx = \int \cos^{-2}(x) \, dx
$$

Now, we can rewrite the integral as follows:

$$
\int \cos^{-2}(x) \, dx = \int \left( \cos^{-2}(x) + 1 \right) \, dx = \int \cos^{-2}(x) \, dx + \int 1 \, dx
$$

This simplifies to:

$$
\int \cos^{-2}(x) \, dx + x + C
$$

Next, we need to evaluate $\int \cos^{-2}(x) \, dx$. We can perform a substitution by letting $u = \sin(x)$, which gives us:

$$
\cos^{-2}(x) \, dx = \sec^2(x) \, dx = (1 + \tan^2(x)) \, dx
$$

Using the substitution, we can transform the integral:

$$
\int \cos^{-2}(x) \, dx = \int \frac{1 + u^2}{1 - u^2} \, du
$$

This can be split into two separate integrals:

$$
= \int \frac{1}{1 - u^2} \, du + \int \frac{u^2}{1 - u^2} \, du
$$

The first integral can be evaluated using the formula for the arctangent:

$$
\int \frac{1}{1 - u^2} \, du = \text{arctanh}(u) + C
$$

And for the second integral, we can use the logarithmic identity:

$$
\int \frac{u^2}{1 - u^2} \, du = -\frac{1}{2} \ln |1 - u^2| + C
$$

Therefore, combining these results, we find:

$$
\int \sec^2(x) \, dx = \text{arctanh}(\sin(x)) - \frac{1}{2} \ln |1 - \sin^2(x)| + x + C
$$

However, to simplify our original calculation, we can directly state:

$$
\int \sec^2(x) \, dx = \tan(x) + C
$$

Thus, the final result is:

$$
\int \sec^2(x) \, dx = \tan(x) + C
$$

In conclusion, the integral of $\sec^2(x) \, dx$ is indeed $\tan(x) + C$.
    