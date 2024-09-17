---
title: "What's the integral of x^5/(x^2+1)?"
summary: The integral of $ \frac{x^5}{x^2+1} $ is $ \frac{1}{2}x^4 - \frac{1}{2}x^2 + \frac{5}{2}\ln|x^2+1| + C $.
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-18
---

Let's enhance the clarity and readability of your content while ensuring that all mathematical expressions are appropriately formatted.

---

The integral of the function $\frac{x^5}{x^2 + 1}$ can be expressed as:

$$
\int \frac{x^5}{x^2 + 1} \, dx = \frac{1}{2} x^4 - \frac{1}{2} x^2 + \frac{5}{2} \ln |x^2 + 1| + C,
$$

where $C$ is the constant of integration.

To solve this integral, we begin by applying polynomial long division to rewrite the integrand. This allows us to express $\frac{x^5}{x^2 + 1}$ as:

$$
x^3 - x + \frac{x^2 - 1}{x^2 + 1}.
$$

We can then break the integral into two distinct parts:

1. The integral of $x^3 - x$, which can be evaluated easily using the power rule.
2. The integral of $\frac{x^2 - 1}{x^2 + 1}$.

For the first part, we compute:

$$
\int (x^3 - x) \, dx = \frac{1}{4} x^4 - \frac{1}{2} x^2.
$$

Next, we tackle the second integral, $\int \frac{x^2 - 1}{x^2 + 1} \, dx$. We can simplify this expression as follows:

$$
\frac{x^2 - 1}{x^2 + 1} = 1 - \frac{2}{x^2 + 1}.
$$

Thus, we can rewrite the integral as:

$$
\int \frac{x^2 - 1}{x^2 + 1} \, dx = \int \left( 1 - \frac{2}{x^2 + 1} \right) \, dx.
$$

This results in two separate integrals:

1. The integral of $1$, which yields $x$.
2. The integral of $\frac{2}{x^2 + 1}$, which evaluates to $2 \tan^{-1}(x)$.

Combining these results gives us:

$$
\int \frac{x^2 - 1}{x^2 + 1} \, dx = x - 2 \tan^{-1}(x).
$$

Putting everything together, we obtain:

$$
\int \frac{x^5}{x^2 + 1} \, dx = \int \left( x^3 - x + \frac{x^2 - 1}{x^2 + 1} \right) \, dx
= \left( \frac{1}{4} x^4 - \frac{1}{2} x^2 + x - 2 \tan^{-1}(x) \right) + C.
$$

Finally, simplifying the expression yields:

$$
\int \frac{x^5}{x^2 + 1} \, dx = \frac{1}{4} x^4 - \frac{1}{2} x^2 + \frac{5}{2} \ln |x^2 + 1| + C.
$$

This provides us with the complete solution to the integral.

--- 

This enhanced version clarifies the steps and improves the flow of the explanation while ensuring that all mathematical expressions are correctly formatted.
    