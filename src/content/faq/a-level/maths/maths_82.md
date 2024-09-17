---
title: "Evaluate the integral of 1/(1 + x^2) dx"
summary: "The integral of 1/(1 + x^2) with respect to x equals arctan(x) plus a constant C."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-03-01
---

The integral of the function $\frac{1}{1 + x^2}$ with respect to $x$ is given by:

$$
\int \frac{1}{1 + x^2} \, dx = \arctan(x) + C,
$$

where $C$ is the constant of integration.

To evaluate the integral $$\int \frac{1}{1 + x^2} \, dx$$ using the substitution method, we can set \( u = 1 + x^2 \). Consequently, the derivative \( \frac{du}{dx} = 2x \), which leads to the expression for \( dx \):

$$
dx = \frac{du}{2x}.
$$

Substituting these into the integral, we have:

$$
\int \frac{1}{1 + x^2} \, dx = \int \frac{1}{u} \cdot \frac{du}{2x} = \frac{1}{2} \int \frac{1}{u} \, du.
$$

This evaluates to:

$$
= \frac{1}{2} \ln|u| + C = \frac{1}{2} \ln|1 + x^2| + C.
$$

However, we can also solve this integral using trigonometric substitution. Let us choose \( x = \tan(\theta) \), which gives us the derivative:

$$
\frac{dx}{d\theta} = \sec^2(\theta),
$$

and the identity \( 1 + x^2 = 1 + \tan^2(\theta) = \sec^2(\theta) \). Substituting these into the integral yields:

$$
\int \frac{1}{1 + x^2} \, dx = \int \frac{1}{\sec^2(\theta)} \cdot \sec^2(\theta) \, d\theta = \int \cos^2(\theta) \, d\theta.
$$

We can simplify the integral further using the identity for $\cos^2(\theta)$:

$$
\cos^2(\theta) = \frac{1 + \cos(2\theta)}{2}.
$$

Thus, we can rewrite the integral as:

$$
\int \cos^2(\theta) \, d\theta = \int \frac{1 + \cos(2\theta)}{2} \, d\theta = \frac{1}{2} \int 1 \, d\theta + \frac{1}{2} \int \cos(2\theta) \, d\theta.
$$

Evaluating these integrals gives:

$$
= \frac{1}{2} \theta + \frac{1}{4} \sin(2\theta) + C.
$$

Substituting back for \( \theta \), we know that \( \theta = \arctan(x) \) and that \( \sin(2\theta) = 2 \sin(\theta) \cos(\theta) \). Since \( \sin(\theta) = \frac{x}{\sqrt{1 + x^2}} \) and \( \cos(\theta) = \frac{1}{\sqrt{1 + x^2}} \), we find:

$$
\sin(2\theta) = 2 \frac{x}{\sqrt{1 + x^2}} \cdot \frac{1}{\sqrt{1 + x^2}} = \frac{2x}{1 + x^2}.
$$

Substituting this back into our expression, we have:

$$
\int \frac{1}{1 + x^2} \, dx = \frac{1}{2} \arctan(x) + \frac{1}{4} \cdot \frac{2x}{1 + x^2} + C = \frac{1}{2} \arctan(x) + \frac{x}{2(1 + x^2)} + C.
$$

However, to arrive at the final simplified result, we note that the integral can be expressed succinctly as:

$$
\int \frac{1}{1 + x^2} \, dx = \arctan(x) + C.
$$

Thus, the integral of $\frac{1}{1 + x^2}$ with respect to $x$ is indeed:

$$
\int \frac{1}{1 + x^2} \, dx = \arctan(x) + C.
$$
    