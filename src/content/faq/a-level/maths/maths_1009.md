---
title: "What's the integral of csc(x)cot(x)?"
summary: "The integral of csc(x)cot(x) is -csc(x) + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-07
---

Let's enhance the clarity and readability of the content while maintaining the mathematical expressions.

The integral of $\csc(x) \cot(x)$ can be expressed as:

$$
\int \csc(x) \cot(x) \, dx = -\csc(x) + C
$$

To compute this integral, we can use the substitution $ u = \csc(x) $. Consequently, the derivative $ \frac{du}{dx} = -\csc(x) \cot(x) $. This allows us to rewrite the integral as follows:

$$
\int \csc(x) \cot(x) \, dx = -\int du
$$

Next, we can utilize the trigonometric identity $ \csc(x) = \frac{1}{\sin(x)} $ to express the integral in another form:

$$
\int \csc(x) \cot(x) \, dx = \int \left( \frac{\cos(x)}{\sin^2(x)} \right) \, dx
$$

Now, we apply another substitution, letting $ u = \sin(x) $. Thus, we have $ \frac{du}{dx} = \cos(x) $, which transforms our integral into:

$$
\int \left( \frac{\cos(x)}{\sin^2(x)} \right) \, dx = -\int \frac{du}{u^2}
$$

Integrating the expression $ -\int \frac{du}{u^2} $ yields:

$$
-\int \frac{du}{u^2} = -(-u^{-1}) + C = \frac{1}{u} + C = -\csc(x) + C
$$

Thus, we arrive at the final result for the integral:

$$
\int \csc(x) \cot(x) \, dx = -\csc(x) + C
$$
    