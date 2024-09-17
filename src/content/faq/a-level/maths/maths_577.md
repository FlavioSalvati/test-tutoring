---
title: "How to derive the identity for hyperbolic cosine?"
summary: "The identity for hyperbolic cosine is derived using the exponential function and its properties."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-17
---

The identity for hyperbolic cosine is established using the properties of the exponential function.

The hyperbolic cosine function is defined as:

$$
\cosh(x) = \frac{e^x + e^{-x}}{2}.
$$

To derive its identity, we begin with the definition of $\cosh(x)$ and its derivative:

$$
\cosh'(x) = \sinh(x) = \frac{e^x - e^{-x}}{2}.
$$

Next, we can leverage the properties of the exponential function to simplify these expressions. Notably, since $e^x \cdot e^{-x} = 1$, we can manipulate the expression for $\cosh(x)$ by multiplying both the numerator and denominator by $e^x$:

$$
\cosh(x) = \frac{e^{2x} + 1}{2e^x}.
$$

Similarly, for $\sinh(x)$, we can also multiply the numerator and denominator by $e^x$:

$$
\sinh(x) = \frac{e^{2x} - 1}{2e^x}.
$$

With these expressions in hand, we can derive the identity for $\cosh^2(x) - \sinh^2(x)$. We start with the following expression:

$$
\cosh^2(x) - \sinh^2(x) = \frac{(e^{2x} + 1)^2}{4e^{2x}} - \frac{(e^{2x} - 1)^2}{4e^{2x}}.
$$

Now, let’s simplify this expression:

$$
\cosh^2(x) - \sinh^2(x) = \frac{(e^{4x} + 2e^{2x} + 1) - (e^{4x} - 2e^{2x} + 1)}{4e^{2x}}.
$$

This simplifies to:

$$
\cosh^2(x) - \sinh^2(x) = \frac{2e^{2x}}{4e^{2x}}.
$$

Thus, we find that:

$$
\cosh^2(x) - \sinh^2(x) = 1.
$$

In conclusion, we have derived the fundamental identity:

$$
\cosh^2(x) - \sinh^2(x) = 1,
$$

which is a key property of hyperbolic functions.
    