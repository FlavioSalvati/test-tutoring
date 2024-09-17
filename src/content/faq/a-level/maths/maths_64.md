---
title: "What's the integral of x/(x^2+1)?"
summary: "The integral of x/(x^2+1) results in (1/2)ln|x^2+1| + C, where C represents the constant of integration."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-04
---

Let's enhance the clarity and readability of the content while ensuring proper formatting for the mathematical expressions.

---

To evaluate the integral of the function $\frac{x}{x^2 + 1}$, we can use a substitution method. The integral we want to solve is:

$$
\int \frac{x}{x^2 + 1} \, dx.
$$

We will use the substitution \( u = x^2 + 1 \). Consequently, we find the derivative \( \frac{du}{dx} = 2x \), which allows us to express \( dx \) in terms of \( du \):

$$
dx = \frac{du}{2x}.
$$

Now, substituting \( u \) and \( dx \) into the integral gives us:

$$
\int \frac{x}{x^2 + 1} \, dx = \int \frac{x}{u} \cdot \frac{du}{2x}.
$$

Notice that the \( x \) in the numerator and the \( x \) in the denominator cancel out:

$$
= \int \frac{1}{2} \cdot \frac{1}{u} \, du.
$$

This simplifies to:

$$
= \frac{1}{2} \int \frac{1}{u} \, du.
$$

The integral of \( \frac{1}{u} \) is \( \ln |u| \), so we have:

$$
= \frac{1}{2} \ln |u| + C.
$$

Substituting back \( u = x^2 + 1 \) into the expression, we obtain:

$$
= \frac{1}{2} \ln |x^2 + 1| + C.
$$

Therefore, the final result for the integral of \( \frac{x}{x^2 + 1} \) is:

$$
\int \frac{x}{x^2 + 1} \, dx = \frac{1}{2} \ln |x^2 + 1| + C.
$$
    