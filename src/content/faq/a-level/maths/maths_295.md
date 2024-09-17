---
title: "How to integrate x^2*sin(x)?"
summary: "To integrate x^2*sin(x), use integration by parts."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-04
---

To integrate the function $x^2 \sin(x)$, we will use the technique known as integration by parts.

Integration by parts is a method employed to integrate the product of two functions. This technique involves selecting one function to differentiate and the other to integrate. The formula for integration by parts is given by:

$$
\int u \, dv = uv - \int v \, du
$$

In this formula, $u$ and $v$ are functions of $x$, and $du/dx$ and $dv/dx$ denote their respective derivatives.

For the integration of $x^2 \sin(x)$, we can set:

- $u = x^2$ 
- $dv = \sin(x) \, dx$

Calculating the derivatives, we find:

- $du = 2x \, dx$
- $v = -\cos(x)$ (since the integral of $\sin(x)$ is $-\cos(x)$).

Substituting these into the integration by parts formula, we obtain:

$$
\int x^2 \sin(x) \, dx = -x^2 \cos(x) + \int 2x \cos(x) \, dx
$$

Next, we need to integrate the term $\int 2x \cos(x) \, dx$. For this, we will again apply integration by parts. We choose:

- $u = 2x$ 
- $dv = \cos(x) \, dx$

Calculating the derivatives gives us:

- $du = 2 \, dx$
- $v = \sin(x)$ (since the integral of $\cos(x)$ is $\sin(x)$).

Applying the integration by parts formula once more, we have:

$$
\int 2x \cos(x) \, dx = 2x \sin(x) - \int 2 \sin(x) \, dx
$$

Now, we compute the integral $\int 2 \sin(x) \, dx$:

$$
\int 2 \sin(x) \, dx = -2 \cos(x)
$$

Putting it all together, we substitute back into our previous expression:

$$
\int x^2 \sin(x) \, dx = -x^2 \cos(x) + 2x \sin(x) - (-2 \cos(x))
$$

This simplifies to:

$$
\int x^2 \sin(x) \, dx = -x^2 \cos(x) + 2x \sin(x) + 2 \cos(x) + C
$$

where $C$ is the constant of integration. Thus, the final result for the integral of $x^2 \sin(x)$ is:

$$
\int x^2 \sin(x) \, dx = -x^2 \cos(x) + 2x \sin(x) + 2 \cos(x) + C
$$
    