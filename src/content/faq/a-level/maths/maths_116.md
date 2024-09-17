---
title: "How to calculate the hyperbolic functions of a complex number?"
summary: "To compute hyperbolic functions for a complex number, apply the definitions of sinh, cosh, and tanh."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-13
---

To compute the hyperbolic functions of a complex number, we utilize the definitions of the hyperbolic sine, cosine, and tangent functions.

Let a complex number be defined as:

$$
z = x + iy
$$

where \( x \) and \( y \) are the real and imaginary parts, respectively. The hyperbolic functions of \( z \) are defined as follows:

$$
\sinh(z) = \frac{e^z - e^{-z}}{2}
$$

$$
\cosh(z) = \frac{e^z + e^{-z}}{2}
$$

$$
\tanh(z) = \frac{\sinh(z)}{\cosh(z)}
$$

To evaluate these functions, we first express \( e^z \) and \( e^{-z} \) using Euler's formula:

$$
e^z = e^x \cdot e^{iy} = e^x \cdot (\cos(y) + i \sin(y))
$$

$$
e^{-z} = e^{-x} \cdot e^{-iy} = e^{-x} \cdot (\cos(y) - i \sin(y))
$$

Now we can substitute these expressions into the definitions of the hyperbolic functions.

**Calculating \( \sinh(z) \):**

\[
\sinh(z) = \frac{e^z - e^{-z}}{2} = \frac{e^x \cdot (\cos(y) + i \sin(y)) - e^{-x} \cdot (\cos(y) - i \sin(y))}{2}
\]

This simplifies to:

\[
\sinh(z) = \frac{(e^x - e^{-x})}{2} \cos(y) + i \frac{(e^x + e^{-x})}{2} \sin(y)
\]

**Calculating \( \cosh(z) \):**

\[
\cosh(z) = \frac{e^z + e^{-z}}{2} = \frac{e^x \cdot (\cos(y) + i \sin(y)) + e^{-x} \cdot (\cos(y) - i \sin(y))}{2}
\]

This simplifies to:

\[
\cosh(z) = \frac{(e^x + e^{-x})}{2} \cos(y) + i \frac{(e^x - e^{-x})}{2} \sin(y)
\]

**Calculating \( \tanh(z) \):**

Finally, we find \( \tanh(z) \):

\[
\tanh(z) = \frac{\sinh(z)}{\cosh(z)} = \frac{\left[ \frac{(e^x - e^{-x})}{2} \cos(y) + i \frac{(e^x + e^{-x})}{2} \sin(y) \right]}{\left[ \frac{(e^x + e^{-x})}{2} \cos(y) + i \frac{(e^x - e^{-x})}{2} \sin(y) \right]}
\]

This can be further simplified to:

$$
\tanh(z) = \frac{\sinh(x)}{\cosh(x)} + i \tan(y)
$$

In summary, the hyperbolic functions for a complex number \( z = x + iy \) can be expressed in terms of its real and imaginary components, allowing for straightforward calculations in complex analysis.
    