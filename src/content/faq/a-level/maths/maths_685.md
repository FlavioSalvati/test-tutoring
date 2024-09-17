---
title: "How to calculate the area in polar coordinates?"
summary: To calculate the area in polar coordinates, we use the formula $A = \frac{1}{2} \int (r^2) \, d\theta$.
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-28
---

To calculate the area in polar coordinates, we utilize the formula:

$$
A = \frac{1}{2} \int r^2 \, d\theta.
$$

In polar coordinates, a point is defined by an angle $\theta$ and a distance $r$ from the origin. To determine the area enclosed by a polar curve, we need to integrate the function $r^2$ with respect to $\theta$.

First, we must establish the limits of integration for $\theta$. This can be accomplished by identifying the values of $\theta$ at which the curve begins and ends. For instance, if we wish to find the area enclosed by the curve described by $r = 2 + 4\cos\theta$, we observe that the curve starts at $\theta = 0$ and completes one full cycle at $\theta = 2\pi$.

Next, we need to compute $r^2$. For the curve $r = 2 + 4\cos\theta$, squaring both sides gives us:

$$
r^2 = (2 + 4\cos\theta)^2 = 4 + 16\cos\theta + 16\cos^2\theta.
$$

We can now substitute $r^2$ and the determined limits of integration into the area formula:

$$
A = \frac{1}{2} \int_{0}^{2\pi} (4 + 16\cos\theta + 16\cos^2\theta) \, d\theta.
$$

To simplify the integral, we can apply the trigonometric identity for $\cos^2\theta$:

$$
\cos^2\theta = \frac{1 + \cos(2\theta)}{2}.
$$

Substituting this identity into our expression, we have:

$$
A = \frac{1}{2} \int_{0}^{2\pi} \left( 4 + 16\cos\theta + 8 + 8\cos(2\theta) \right) \, d\theta.
$$

This further simplifies to:

$$
A = \frac{1}{2} \int_{0}^{2\pi} (12 + 16\cos\theta + 8\cos(2\theta)) \, d\theta.
$$

Now, we can integrate each term separately:

$$
A = \frac{1}{2} \left[ 12\theta + 16\sin\theta + 4\sin(2\theta) \right]_{0}^{2\pi}.
$$

Evaluating this expression at the limits $\theta = 0$ and $\theta = 2\pi$ gives:

$$
A = \frac{1}{2} \left[ 12(2\pi) + 16\sin(2\pi) + 4\sin(4\pi) - (12(0) + 16\sin(0) + 4\sin(0)) \right].
$$

Since $\sin(2\pi) = 0$ and $\sin(4\pi) = 0$, we find:

$$
A = \frac{1}{2} \left[ 24\pi \right].
$$

Thus, the area enclosed by the curve $r = 2 + 4\cos\theta$ is:

$$
A = 12\pi.
$$
    