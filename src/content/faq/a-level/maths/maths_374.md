---
title: "How to calculate the inverse hyperbolic functions of a complex number?"
summary: "To calculate the inverse hyperbolic functions of a complex number, use the formulas for the inverse hyperbolic functions."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-23
---

To compute the inverse hyperbolic functions of a complex number, we can apply specific formulas designed for these functions. The definitions of the inverse hyperbolic functions are as follows:

$$
\text{arcsinh}(z) = \ln\left(z + \sqrt{z^2 + 1}\right)
$$

$$
\text{arccosh}(z) = \ln\left(z + \sqrt{z^2 - 1}\right)
$$

$$
\text{arctanh}(z) = \frac{1}{2} \ln\left(\frac{1 + z}{1 - z}\right)
$$

To find the inverse hyperbolic functions of a complex number, first express the complex number in terms of its real and imaginary parts, specifically as $ z = x + iy $. Then, substitute $ x $ and $ y $ into the appropriate formula for the desired inverse hyperbolic function.

### Example Calculations

**1. Finding $ \text{arcsinh}(2 + 3i) $**

We can compute this as follows:

$$
\text{arcsinh}(2 + 3i) = \ln\left(2 + 3i + \sqrt{(2 + 3i)^2 + 1}\right)
$$

Calculating the square, we have:

$$
(2 + 3i)^2 = 4 + 12i - 9 = -5 + 12i
$$

Thus,

$$
(2 + 3i)^2 + 1 = -4 + 12i
$$

Now we compute the square root:

$$
\sqrt{-4 + 12i}
$$

Next, we substitute back into our equation:

$$
\text{arcsinh}(2 + 3i) = \ln\left(2 + 3i + \sqrt{-4 + 12i}\right)
$$

This expression continues, but let's highlight the main steps without diving into all intermediate calculations. The final expression will yield:

$$
\text{arcsinh}(2 + 3i) = \ln\left(2 + 3i + 2i \sqrt{2 - 3i}\right)
$$

**2. Finding $ \text{arccosh}(2 + 3i) $**

Similarly, we compute:

$$
\text{arccosh}(2 + 3i) = \ln\left(2 + 3i + \sqrt{(2 + 3i)^2 - 1}\right)
$$

Calculating the square:

$$
(2 + 3i)^2 - 1 = -5 + 12i - 1 = -6 + 12i
$$

Now, we compute the square root:

$$
\sqrt{-6 + 12i}
$$

Substituting this back, we get:

$$
\text{arccosh}(2 + 3i) = \ln\left(2 + 3i + \sqrt{-6 + 12i}\right)
$$

This will also yield a complex logarithmic expression upon further simplification.

**3. Finding $ \text{arctanh}(2 + 3i) $**

For this function, we start with:

$$
\text{arctanh}(2 + 3i) = \frac{1}{2} \ln\left(\frac{1 + (2 + 3i)}{1 - (2 + 3i)}\right)
$$

Simplifying the fractions gives:

$$
= \frac{1}{2} \ln\left(\frac{-1 + 3i}{-1 - 3i}\right)
$$

This can be further simplified:

$$
= \frac{1}{2} \ln\left(\frac{8 - 6i}{10}\right)
$$

Finally, we can express this as:

$$
\text{arctanh}(2 + 3i) = \frac{1}{2} \ln(4 - 3i)
$$

In summary, calculating the inverse hyperbolic functions of complex numbers involves expressing the complex number in terms of its real and imaginary parts, followed by substituting these values into the appropriate formulas. Each calculation can lead to complex logarithmic forms that require careful manipulation and simplification.
    