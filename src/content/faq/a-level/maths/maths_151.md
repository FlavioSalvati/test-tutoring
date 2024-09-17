---
title: "How to integrate e^x*cos(x)?"
summary: To integrate $ e^x \cos(x) $, apply the method of integration by parts, which involves selecting functions for differentiation and integration to simplify the process.
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-08-11
---

To integrate the function $e^x \cos(x)$, we will employ the technique known as integration by parts.

Integration by parts is a method used for integrating the product of two functions. It involves selecting one function to differentiate and another to integrate. In this case, we will let $u = \cos(x)$ (the function to differentiate) and $dv = e^x \, dx$ (the function to integrate).

We first compute the derivatives and integrals:
- The derivative of $u$ is given by:
$$ du = -\sin(x) \, dx $$
- The integral of $dv$ yields:
$$ v = e^x $$

Applying the integration by parts formula, which states that:
$$ \int u \, dv = uv - \int v \, du, $$
we substitute our choices for $u$, $du$, $v$, and $dv$:

$$ \int e^x \cos(x) \, dx = e^x \cos(x) - \int e^x (-\sin(x)) \, dx $$

This simplifies to:

$$ \int e^x \cos(x) \, dx = e^x \cos(x) + \int e^x \sin(x) \, dx $$

Next, we need to integrate $e^x \sin(x)$. We can again use integration by parts, this time setting:
- $u = \sin(x)$, so $du = \cos(x) \, dx$,
- $dv = e^x \, dx$, leading to $v = e^x$.

Using the integration by parts formula again, we have:

$$ \int e^x \sin(x) \, dx = e^x \sin(x) - \int e^x \cos(x) \, dx $$

Now, substituting this back into our earlier equation gives us:

$$ \int e^x \cos(x) \, dx = e^x \cos(x) + e^x \sin(x) - \int e^x \cos(x) \, dx $$

Rearranging terms, we obtain:

$$ 2 \int e^x \cos(x) \, dx = e^x (\cos(x) + \sin(x)) $$

Dividing both sides by $2$, we find:

$$ \int e^x \cos(x) \, dx = \frac{1}{2} e^x (\cos(x) + \sin(x)) + C $$

where $C$ represents the constant of integration.

Thus, the integral of $e^x \cos(x)$ is given by:

$$ \int e^x \cos(x) \, dx = \frac{1}{2} e^x (\cos(x) + \sin(x)) + C $$
    