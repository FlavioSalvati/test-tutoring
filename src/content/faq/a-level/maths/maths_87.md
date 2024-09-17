---
title: "What's the integral of cos^3(x)?"
summary: "The integral of cos^3(x) is expressed as (sin(x) + sin(3x))/4 + C, where C represents the constant of integration."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-10
---

To find the integral of \( \cos^3(x) \), we can start by applying the trigonometric identity: 

$$
\cos^3(x) = \cos(x) \cos^2(x).
$$

Next, we will use integration by substitution. We set \( u = \sin(x) \), which leads us to the differential \( du = \cos(x) \, dx \). This transforms our integral as follows:

$$
\int \cos^3(x) \, dx = \int \cos(x) \cos^2(x) \, dx.
$$

Substituting \( u \) into the integral gives us:

$$
= \int (1 - u^2) \, du.
$$

This integral can be computed as:

$$
= u - \frac{1}{3} u^3 + C.
$$

Substituting back for \( u \), we obtain:

$$
= \sin(x) - \frac{1}{3} \sin^3(x) + C.
$$

Next, we can simplify this expression further by utilizing the identity \( \sin^2(x) = 1 - \cos^2(x) \). Thus, we have:

$$
\sin^3(x) = \sin(x) \sin^2(x) = \sin(x) (1 - \cos^2(x)) = \sin(x) - \sin(x) \cos^2(x).
$$

Substituting this back into our integral, we arrive at:

$$
\int \cos^3(x) \, dx = \sin(x) - \frac{1}{3} \left( \sin(x) - \sin(x) \cos^2(x) \right) + C.
$$

This simplifies to:

$$
= \sin(x) - \frac{1}{3} \sin(x) + \frac{1}{3} \sin(x) \cos^2(x) + C.
$$

Combining the terms results in:

$$
= \frac{2}{3} \sin(x) + \frac{1}{3} \sin(x) \cos^2(x) + C.
$$

Finally, using the double angle identity for sine, we can express \( \sin(3x) \) in terms of \( \sin(x) \) and \( \cos^2(x) \) to rewrite our integral. After simplification, we arrive at the final result:

$$
\int \cos^3(x) \, dx = \frac{\sin(x) + \sin(3x)}{4} + C.
$$

Thus, the integral of \( \cos^3(x) \) is:

$$
\frac{\sin(x) + \sin(3x)}{4} + C.
$$
    