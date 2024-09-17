---
title: "What's the integral of x/(x^2-1)?"
summary: "The integral of x/(x^2-1) is ln|x^2-1|/2 + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-06
---

Let's enhance the clarity and readability of the content while ensuring that mathematical expressions are appropriately formatted.

The integral of the function $\frac{x}{x^2 - 1}$ can be expressed as:

$$
\int \frac{x}{x^2 - 1} \, dx = \frac{1}{2} \ln |x^2 - 1| + C
$$

To solve this integral, we will use the substitution $ u = x^2 - 1 $. Consequently, we compute the derivative $ \frac{du}{dx} = 2x $, which leads us to express $ dx $ in terms of $ du $:

$$
dx = \frac{du}{2x}
$$

Now, substituting $ u $ and $ dx $ into the integral, we obtain:

$$
\int \frac{x}{x^2 - 1} \, dx = \int \frac{x}{u} \cdot \frac{du}{2x}
$$

This simplifies to:

$$
\int \frac{1}{2} \cdot \frac{1}{u} \, du
$$

Integrating this expression yields:

$$
\frac{1}{2} \ln |u| + C
$$

Substituting back $ u = x^2 - 1 $, we find:

$$
\frac{1}{2} \ln |x^2 - 1| + C
$$

Thus, we conclude that the integral of $\frac{x}{x^2 - 1}$ is:

$$
\int \frac{x}{x^2 - 1} \, dx = \frac{1}{2} \ln |x^2 - 1| + C
$$

It is crucial to note that the absolute value $ |x^2 - 1| $ is included in the logarithmic function to accommodate the possibility of negative values for $ x^2 - 1 $.
    