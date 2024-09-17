---
title: "What's the integral of cos^5(2x)?"
summary: "The integral of cos^5(2x) is expressed as (1/2)cos^4(2x)sin(2x) + (2/3)cos^3(2x)sin^3(2x) + C."
author: "Dr. Sarah Wilson"
degree: "MSc in Physics, University College London"
tutor_type: "A-Level Physics Tutor"
date: 2024-06-24
---

Let's enhance the clarity and readability of the provided content, while ensuring that all mathematical expressions are correctly formatted using LaTeX.

---

The integral of $\cos^5(2x)$ can be expressed as:

$$
\int \cos^5(2x) \, dx = \frac{1}{2} \cos^4(2x) \sin(2x) + \frac{2}{3} \cos^3(2x) \sin^3(2x) + C,
$$

where $C$ is the constant of integration.

To solve this integral, we will utilize the substitution $u = \sin(2x)$. Consequently, we have:

$$
\frac{du}{dx} = 2 \cos(2x) \quad \Rightarrow \quad dx = \frac{1}{2 \cos(2x)} \, du.
$$

Next, we can rewrite $\cos^5(2x)$ as $\cos^4(2x) \cos(2x)$, enabling us to express the integral as follows:

$$
\int \cos^5(2x) \, dx = \int \cos^4(2x) \cos(2x) \, dx.
$$

Substituting our earlier expressions, we get:

$$
\int \cos^5(2x) \, dx = \int \cos^4(2x) \cos(2x) \, dx = \int \cos^4(2x) \left(\frac{1}{2 \cos(2x)} \, du\right).
$$

Now, substituting $\cos^2(2x)$ with $(1 - u^2)$, we have:

$$
\int \cos^5(2x) \, dx = \frac{1}{2} \int (1-u^2)^2 \, du.
$$

Next, we expand the integrand:

$$
(1-u^2)^2 = 1 - 2u^2 + u^4.
$$

Thus, the integral becomes:

$$
\frac{1}{2} \int (1 - 2u^2 + u^4) \, du.
$$

Calculating this integral gives us:

$$
\frac{1}{2} \left( u - \frac{2}{3} u^3 + \frac{1}{5} u^5 \right) + C.
$$

Finally, we substitute back $u = \sin(2x)$:

$$
= \frac{1}{2} \sin(2x) - \frac{2}{3} \sin^3(2x) + \frac{1}{5} \sin^5(2x) + C.
$$

Thus, we arrive at the final expression for the integral:

$$
\int \cos^5(2x) \, dx = \frac{1}{2} \cos^4(2x) \sin(2x) + \frac{2}{3} \cos^3(2x) \sin^3(2x) + C.
$$

This process illustrates the use of substitution and integration techniques to derive the integral of a trigonometric function.
    