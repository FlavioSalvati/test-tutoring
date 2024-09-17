---
title: "What's the integral of sin(x)*cos(x)?"
summary: The integral of $\sin(x)\cos(x)$ is $\frac{1}{2}\sin^2(x) + C$, where $C$ represents the constant of integration.
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-08
---

To find the integral of $\sin(x) \cos(x)$, we can utilize the trigonometric identity $\sin(2x) = 2\sin(x)\cos(x)$. By rearranging this equation, we can express $\sin(x)\cos(x)$ as:

$$
\sin(x)\cos(x) = \frac{1}{2}\sin(2x).
$$

Consequently, the integral of $\sin(x) \cos(x)$ can be rewritten as:

$$
\int \sin(x) \cos(x) \, dx = \int \frac{1}{2} \sin(2x) \, dx.
$$

Next, we employ the substitution $u = 2x$, which gives us the derivative $du/dx = 2$, or equivalently, $dx = \frac{1}{2} du$. Substituting this into the integral, we obtain:

$$
\int \sin(x) \cos(x) \, dx = \int \frac{1}{2} \sin(2x) \, dx = \frac{1}{2} \int \sin(u) \, du.
$$

Now, integrating $\sin(u)$, we find:

$$
\int \sin(u) \, du = -\cos(u) + C.
$$

Substituting back for $u$, we have:

$$
-\cos(u) + C = -\cos(2x) + C.
$$

Thus, the integral can be expressed as:

$$
\int \sin(x) \cos(x) \, dx = -\frac{1}{2} \cos(2x) + C.
$$

Alternatively, we can apply the identity $\cos^2(x) + \sin^2(x) = 1$ to rewrite the original integral in a different form. Notably, we can express:

$$
\int \sin(x) \cos(x) \, dx = \frac{1}{2} \int \sin(2x) \, dx.
$$

Integrating $\sin(2x)$ gives:

$$
\int \sin(2x) \, dx = -\frac{1}{2} \cos(2x) + C.
$$

Thus, we arrive at:

$$
\frac{1}{2} \int \sin(2x) \, dx = -\frac{1}{4} \cos(2x) + C.
$$

This leads us to a different expression for the integral:

$$
\int \sin(x) \cos(x) \, dx = \frac{1}{2} \sin^2(x) + C.
$$

In conclusion, the integral of $\sin(x) \cos(x)$ can be expressed in two equivalent forms:

$$
-\frac{1}{2} \cos(2x) + C \quad \text{or} \quad \frac{1}{2} \sin^2(x) + C.
$$
    