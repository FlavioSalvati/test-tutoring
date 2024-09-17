---
title: "How to calculate the logarithm of a complex number?"
summary: "To calculate the logarithm of a complex number, use the formula log(z) = ln|z| + i arg(z)."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-20
---

To compute the logarithm of a complex number, we can use the formula:

$$
\log(z) = \ln|z| + i \arg(z).
$$

The logarithm of a complex number represents the exponent to which the base $e$ must be raised to produce that complex number. It is important to note that this logarithm is not a unique value; rather, it encompasses a set of values that differ by integer multiples of $2\pi i$. Consequently, it is necessary to specify a branch of the logarithm function when calculating it.

To find the logarithm of a complex number $z = x + iy$, we follow these steps:

1. Calculate the modulus of $z$:

$$
|z| = \sqrt{x^2 + y^2}.
$$

2. Determine the argument of $z$, denoted as $\arg(z)$, using the arctangent function, while ensuring that the angle is adjusted for the correct quadrant:

$$
\arg(z) = \tan^{-1}\left(\frac{y}{x}\right).
$$

3. Substitute these values into the formula for the logarithm:

$$
\log(z) = \ln|z| + i \arg(z).
$$

For instance, consider the complex number $z = 2 + 3i$. 

First, we find its modulus:

$$
|z| = \sqrt{2^2 + 3^2} = \sqrt{4 + 9} = \sqrt{13}.
$$

Next, we calculate the argument:

$$
\arg(z) = \tan^{-1}\left(\frac{3}{2}\right) \approx 1.249 \text{ radians}.
$$

Now, we can compute the logarithm:

$$
\log(z) = \ln|z| + i \arg(z) = \ln(\sqrt{13}) + i(1.249) \approx 1.322 + 1.249i.
$$

It is crucial to remember that this represents just one of the possible values of the logarithm of $z$. To obtain additional values, we can add integer multiples of $2\pi i$ to the imaginary component. Therefore, the general expression for the logarithm can be written as:

$$
\log(z) = 1.322 + 1.249i + 2\pi ni,
$$

where $n$ is any integer.
    