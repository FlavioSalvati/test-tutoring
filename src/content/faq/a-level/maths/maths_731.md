---
title: "What's the integral of 1/(x^2+4)?"
summary: "The integral of 1/(x^2+4) is (1/2)arctan(x/2) + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-04
---

Let's enhance the clarity and readability of the content while maintaining the mathematical formatting. Here is the revised version:

The integral of the function $\frac{1}{x^2 + 4}$ can be expressed as:

$$
\int \frac{1}{x^2 + 4} \, dx = \frac{1}{2} \arctan\left(\frac{x}{2}\right) + C,
$$

where $C$ is the constant of integration.

To evaluate this integral, we can utilize the substitution method. We start by letting $u = \frac{x}{2}$. Consequently, we find that:

$$
\frac{du}{dx} = \frac{1}{2} \quad \text{and thus} \quad dx = 2 \, du.
$$

Now, we substitute these expressions into the integral:

$$
\int \frac{1}{x^2 + 4} \, dx = \int \frac{1}{(2u)^2 + 4} \cdot 2 \, du.
$$

This simplifies to:

$$
= \int \frac{2}{4u^2 + 4} \, du = \int \frac{2}{4(u^2 + 1)} \, du = \frac{1}{2} \int \frac{1}{u^2 + 1} \, du.
$$

Next, we apply the known formula for the integral of $\frac{1}{u^2 + 1}$, which is $\arctan(u) + C$. Thus, we have:

$$
\frac{1}{2} \int \frac{1}{u^2 + 1} \, du = \frac{1}{2} \left( \arctan(u) + C \right).
$$

Finally, we substitute back for $u$ to return to the original variable $x$:

$$
= \frac{1}{2} \arctan\left(\frac{x}{2}\right) + C.
$$

In conclusion, the integral of $\frac{1}{x^2 + 4}$ is given by:

$$
\int \frac{1}{x^2 + 4} \, dx = \frac{1}{2} \arctan\left(\frac{x}{2}\right) + C.
$$
    