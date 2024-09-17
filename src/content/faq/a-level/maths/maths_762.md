---
title: "How to integrate sqrt(1-x^2)?"
summary: "To integrate sqrt(1-x^2), use the substitution x = sin(u)."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-05
---

To integrate the function $\sqrt{1 - x^2}$, we can employ the substitution $x = \sin(u)$. This approach transforms the integrand into a form involving trigonometric functions, which can be integrated using standard techniques.

First, we need to determine the derivative $\frac{dx}{du}$. By applying the chain rule, we find:

$$
\frac{dx}{du} = \cos(u)
$$

From this, we can express $\frac{du}{dx}$ as follows:

$$
\frac{du}{dx} = \frac{1}{\cos(u)}
$$

Next, substituting $x = \sin(u)$ into the integral, we have:

$$
\int \sqrt{1 - x^2} \, dx = \int \sqrt{1 - \sin^2(u)} \cos(u) \, du
$$

Utilizing the trigonometric identity $\cos^2(u) = 1 - \sin^2(u)$, we can simplify the integrand:

$$
\int \sqrt{1 - x^2} \, dx = \int \cos^2(u) \, du
$$

Now, we can apply the power-reducing formula for cosine:

$$
\int \cos^2(u) \, du = \frac{1}{2} \int (1 + \cos(2u)) \, du
$$

This integral can be computed as follows:

$$
= \frac{1}{2} \left( u + \frac{1}{2} \sin(2u) \right) + C
$$

Finally, we substitute back $u = \arcsin(x)$ to express the integral in terms of $x$:

$$
\int \sqrt{1 - x^2} \, dx = \frac{1}{2} \arcsin(x) + \frac{1}{4} \sin(2 \arcsin(x)) + C
$$

This represents the final result for the integral $\int \sqrt{1 - x^2} \, dx$.
    