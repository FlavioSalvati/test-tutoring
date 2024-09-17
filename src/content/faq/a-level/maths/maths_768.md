---
title: "What's the integral of x/(1+x^2)?"
summary: "The integral of x/(1+x^2) is ln|1+x^2|/2 + C."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-27
---

Here’s an enhanced version of your content for improved clarity and readability:

The integral of the function $ \frac{x}{1+x^2} $ can be expressed as:

$$
\int \frac{x}{1+x^2} \, dx = \frac{1}{2} \ln |1+x^2| + C
$$

where $ C $ is the constant of integration.

To solve this integral, we can apply the method of substitution. We start by letting $ u = 1 + x^2 $. Consequently, the derivative $ \frac{du}{dx} $ becomes $ 2x $. Rearranging this gives us:

$$
dx = \frac{du}{2x}
$$

Now, substituting $ u $ and $ dx $ into the integral, we have:

$$
\int \frac{x}{1+x^2} \, dx = \int \frac{1}{u} \cdot \frac{du}{2} = \frac{1}{2} \int \frac{1}{u} \, du
$$

The integral of $ \frac{1}{u} $ is $ \ln |u| $, so we get:

$$
\frac{1}{2} \ln |u| + C = \frac{1}{2} \ln |1+x^2| + C
$$

Thus, we confirm that:

$$
\int \frac{x}{1+x^2} \, dx = \frac{1}{2} \ln |1+x^2| + C
$$

To verify the correctness of our result, we differentiate the expression using the chain rule:

$$
\frac{d}{dx} \left[ \frac{1}{2} \ln |1+x^2| \right] = \frac{1}{2} \cdot \frac{1}{1+x^2} \cdot \frac{d}{dx} [1+x^2]
$$

Calculating the derivative of $ 1+x^2 $ gives us $ 2x $. Therefore, we have:

$$
\frac{1}{2} \cdot \frac{1}{1+x^2} \cdot 2x = \frac{x}{1+x^2}
$$

This matches the original integrand, confirming that our solution is indeed correct.
    