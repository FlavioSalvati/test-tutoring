---
title: "Evaluate the integral of cos^4(x) dx"
summary: "The integral of cos^4(x) dx is (3/8)x + (1/4)sin(2x) + (1/32)sin(4x) + C."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-05
---

To compute the integral of $\cos^4(x) \, dx$, we start with the following result:

$$ \int \cos^4(x) \, dx = \frac{3}{8} x + \frac{1}{4} \sin(2x) + \frac{1}{32} \sin(4x) + C, $$

where $C$ represents the constant of integration.

To derive this result, we can utilize the identity for $\cos^2(x)$, which is given by 

$$ \cos^2(x) = \frac{1}{2}(1 + \cos(2x)). $$ 

Using this identity, we can express $\cos^4(x)$ as follows:

$$ \cos^4(x) = \left(\cos^2(x)\right)^2 = \left(\frac{1}{2}(1 + \cos(2x))\right)^2. $$ 

Next, we expand this square using the binomial theorem:

$$ \cos^4(x) = \frac{1}{4}(1 + 2\cos(2x) + \cos^2(2x)). $$

Now, we can rewrite $\cos^2(2x)$ using the identity $\sin^2(x) = 1 - \cos^2(x)$, resulting in:

$$ \cos^2(2x) = 1 - \sin^2(2x). $$

Substituting this back into our expression for $\cos^4(x)$, we have:

$$ \cos^4(x) = \frac{1}{4}(1 + 2\cos(2x) + 1 - \sin^2(2x)) = \frac{1}{2}(1 + \cos(2x)) + \frac{1}{8}(1 - \sin^2(2x)). $$

Now, we can proceed to evaluate the integral term by term:

$$ \int \cos^4(x) \, dx = \frac{1}{2} \int (1 + \cos(2x)) \, dx + \frac{1}{8} \int (1 - \sin^2(2x)) \, dx. $$

Calculating each integral separately, we obtain:

1. For $\int (1 + \cos(2x)) \, dx$:

$$ \int (1 + \cos(2x)) \, dx = x + \frac{1}{2} \sin(2x). $$

2. For $\int (1 - \sin^2(2x)) \, dx$, we can use the fact that $\sin^2(2x) = \frac{1}{2}(1 - \cos(4x))$:

$$ \int (1 - \sin^2(2x)) \, dx = \int \left(1 - \frac{1}{2}(1 - \cos(4x))\right) \, dx = \int \left(\frac{1}{2} + \frac{1}{2} \cos(4x)\right) \, dx = \frac{1}{2} x + \frac{1}{8} \sin(4x). $$

Combining these results, we find:

$$ \int \cos^4(x) \, dx = \frac{1}{2} \left(x + \frac{1}{2} \sin(2x)\right) + \frac{1}{8} \left(\frac{1}{2} x + \frac{1}{8} \sin(4x)\right) + C. $$

Upon simplifying, we arrive at the final result:

$$ \int \cos^4(x) \, dx = \frac{3}{8} x + \frac{1}{4} \sin(2x) + \frac{1}{32} \sin(4x) + C. $$ 

This concludes the evaluation of the integral.
    