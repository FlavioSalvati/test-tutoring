---
title: "How to derive the identity for hyperbolic tangent?"
summary: "The identity for hyperbolic tangent is derived from the definition of hyperbolic functions."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-04
---

The identity for the hyperbolic tangent function is derived from the definitions of hyperbolic functions.

Hyperbolic functions are defined in terms of exponential functions as follows:

$$
\sinh(x) = \frac{e^x - e^{-x}}{2}
$$

$$
\cosh(x) = \frac{e^x + e^{-x}}{2}
$$

$$
\tanh(x) = \frac{\sinh(x)}{\cosh(x)}
$$

To derive the identity for the hyperbolic tangent function, we begin with its definition:

$$
\tanh(x) = \frac{\sinh(x)}{\cosh(x)}
$$

Next, we substitute the definitions of $\sinh(x)$ and $\cosh(x)$ in terms of exponential functions:

$$
\tanh(x) = \frac{\frac{e^x - e^{-x}}{2}}{\frac{e^x + e^{-x}}{2}}
$$

We can simplify this expression by multiplying both the numerator and the denominator by $2$:

$$
\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

Now, we can further simplify this expression by dividing both the numerator and the denominator by $e^x$:

$$
\tanh(x) = \frac{1 - e^{-2x}}{1 + e^{-2x}}
$$

This gives us the identity for the hyperbolic tangent function. To verify this identity, we can substitute a specific value for $x$ and evaluate both sides of the equation. For instance, if we let $x = 1$, we find:

$$
\tanh(1) = \frac{e^1 - e^{-1}}{e^1 + e^{-1}} \approx 0.7616
$$

And from the derived identity:

$$
\frac{1 - e^{-2}}{1 + e^{-2}} \approx 0.7616
$$

Since both expressions yield the same value, we confirm that the identity is indeed valid.
    