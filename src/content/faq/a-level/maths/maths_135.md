---
title: "How to derive the formulas for hyperbolic cosine?"
summary: "The hyperbolic cosine formula is derived from the exponential function, highlighting the relationship between hyperbolic functions and exponential growth in mathematics."
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-08-03
---

The formula for hyperbolic cosine can be derived using the exponential function.

To begin, we start with the definition of the exponential function expressed in its Taylor series:

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
$$

Next, we substitute $-x$ for $x$ to obtain the series for $e^{-x}$:

$$
e^{-x} = 1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \cdots
$$

By adding these two equations together, we have:

$$
e^x + e^{-x} = (1 + 1) + \left( x^2 + \frac{x^2}{2!} \right) + \left( -x + \frac{-x^3}{3!} \right) + \cdots = 2 + \frac{x^2}{2!} + \frac{x^4}{4!} + \cdots
$$

We can rearrange this to express the hyperbolic cosine function:

$$
\frac{e^x + e^{-x}}{2} = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \cdots
$$

From this, we define the hyperbolic cosine function as:

$$
\cosh(x) = \frac{e^x + e^{-x}}{2}
$$

Substituting our definition into the equation above yields:

$$
\cosh(x) = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \cdots
$$

This expression gives us the formula for hyperbolic cosine. 

Furthermore, we can also derive this formula using the identity:

$$
\cosh(x) = \cos(ix)
$$

where $i$ is the imaginary unit. Using the formula for cosine, we have:

$$
\cosh(x) = \cos(ix) = \frac{e^{ix} + e^{-ix}}{2}
$$

If we substitute $x = iy$, where $y$ is a real number, we can express this as:

$$
\cosh(iy) = \frac{e^{iy} + e^{-iy}}{2}
$$

Applying Euler's formula, $e^{iy} = \cos(y) + i \sin(y)$, we find:

$$
\cosh(iy) = \frac{(\cos(y) + i \sin(y)) + (\cos(y) - i \sin(y))}{2}
$$

Simplifying this expression gives:

$$
\cosh(iy) = \cos(y)
$$

Substituting back $x = iy$ into our original formula, we obtain:

$$
\cosh(x) = \cosh(iy) = \cos(y)
$$

Additionally, using the identity:

$$
\cosh^2(x) - \sinh^2(x) = 1
$$

we can derive the formula for hyperbolic sine:

$$
\sinh(x) = \sqrt{\cosh^2(x) - 1}
$$

This concludes the derivation of the formulas for hyperbolic cosine and hyperbolic sine.
    