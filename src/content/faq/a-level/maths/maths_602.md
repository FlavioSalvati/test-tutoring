---
title: "What's the integral of sin^3(x)cos(x)?"
summary: "The integral of sin^3(x)cos(x) is (-1/4)cos^4(x) + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-12
---

To find the integral of $\sin^3(x) \cos(x)$, we can express it as:

$$
\int \sin^3(x) \cos(x) \, dx = -\frac{1}{4} \cos^4(x) + C,
$$

where $C$ is the constant of integration.

To solve this integral, we will use the substitution $ u = \sin(x) $. Consequently, the differential $ du $ can be expressed as:

$$
du = \cos(x) \, dx.
$$

This substitution transforms our integral into:

$$
\int \sin^3(x) \cos(x) \, dx = \int u^3 \, du.
$$

Next, we integrate $ u^3 $:

$$
\int u^3 \, du = \frac{1}{4} u^4 + C.
$$

Substituting back for $ u $, we replace $ u $ with $ \sin(x) $:

$$
\frac{1}{4} u^4 + C = \frac{1}{4} \sin^4(x) + C.
$$

Now, to express our result in terms of $ \cos(x) $, we can use the identity $ \sin^2(x) + \cos^2(x) = 1 $. Thus, we have:

$$
\sin^4(x) = (1 - \cos^2(x))^2 = 1 - 2\cos^2(x) + \cos^4(x).
$$

Using this identity, we can rewrite our integral as:

$$
-\frac{1}{4} \cos^4(x) + C.
$$

Therefore, the final result for the integral of $ \sin^3(x) \cos(x) $ is:

$$
\int \sin^3(x) \cos(x) \, dx = -\frac{1}{4} \cos^4(x) + C.
$$
    