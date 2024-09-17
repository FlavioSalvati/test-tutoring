---
title: "What's the integral of x*sin(x)?"
summary: "The integral of x*sin(x) is expressed as sin(x) - x*cos(x) + C, where C represents the constant of integration."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-04-01
---

To determine the integral of the function $x \sin(x)$, we will employ the method of integration by parts. 

First, we define the components for integration by parts:
- Let \( u = x \) and \( dv = \sin(x) \, dx \).
- Consequently, we compute \( du = dx \) and \( v = -\cos(x) \).

The integration by parts formula is given by:

$$
\int u \, dv = uv - \int v \, du.
$$

Substituting our defined variables into this formula, we get:

$$
\int x \sin(x) \, dx = -x \cos(x) - \int -\cos(x) \, dx.
$$

This simplifies to:

$$
\int x \sin(x) \, dx = -x \cos(x) + \int \cos(x) \, dx.
$$

We know that the integral of \( \cos(x) \) is \( \sin(x) \), so we can further simplify:

$$
\int x \sin(x) \, dx = -x \cos(x) + \sin(x) + C,
$$

where \( C \) is the constant of integration.

Thus, the integral of \( x \sin(x) \) is 

$$
\sin(x) - x \cos(x) + C.
$$

To verify our result, we can differentiate our answer using the product rule. We differentiate \( \sin(x) - x \cos(x) \):

$$
\frac{d}{dx} [\sin(x) - x \cos(x)] = \cos(x) - \left( \cos(x) + x \sin(x) \right).
$$

This simplifies to:

$$
\frac{d}{dx} [\sin(x) - x \cos(x)] = \cos(x) - \cos(x) - x \sin(x) = x \sin(x).
$$

This confirms that our differentiation matches the original integrand. Therefore, we have successfully computed the integral, and our final result is:

$$
\int x \sin(x) \, dx = \sin(x) - x \cos(x) + C.
$$
    