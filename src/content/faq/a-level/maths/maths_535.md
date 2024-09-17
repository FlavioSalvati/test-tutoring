---
title: "What is the formula for area in polar coordinates?"
summary: The formula for area in polar coordinates is given by $A = \frac{1}{2} \int_{a}^{b} r^{2} \, d\theta$.
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-12
---

The formula for calculating the area in polar coordinates is expressed as 

$$ A = \frac{1}{2} \int_{a}^{b} r^2 \, d\theta. $$

To determine the area enclosed by a polar curve, we need to integrate the function $r^2$ with respect to $\theta$ over the interval $[a, b]$. This formula is derived from the standard formula for the area of a sector of a circle, which is 

$$ \frac{1}{2} r^2 \theta. $$ 

In the context of polar coordinates, the angle $\theta$ serves as the variable of integration, while the radius $r$ is treated as a function of $\theta$.

Before applying this formula, we must identify the limits of integration, which are the values of $\theta$ corresponding to the starting and ending points of the polar curve. After establishing these limits, we can compute the integral using standard integration techniques. It is crucial to ensure that the function $r^2$ remains non-negative across the interval of integration; otherwise, the result may not be valid.

For instance, consider finding the area enclosed by the polar curve given by 

$$ r = 2 + 4\cos(\theta) $$ 

over the interval $[0, 2\pi]$. First, we need to square the function to obtain 

$$ r^2 = (2 + 4\cos(\theta))^2 = 4 + 16\cos(\theta) + 16\cos^2(\theta). $$

Next, we substitute this expression into the area formula for polar coordinates:

$$ A = \frac{1}{2} \int_{0}^{2\pi} (4 + 16\cos(\theta) + 16\cos^2(\theta)) \, d\theta. $$

Now, we can evaluate the integral:

$$ A = \frac{1}{2} \left[ 4\theta + 16\sin(\theta) + 8\sin(2\theta) \right]_{0}^{2\pi}. $$

Calculating the definite integral, we find:

$$ A = \frac{1}{2} \left( 4(2\pi) + 16\sin(2\pi) + 8\sin(4\pi) - (4(0) + 16\sin(0) + 8\sin(0)) \right). $$

This simplifies to:

$$ A = \frac{1}{2} \left( 8\pi \right) = 4\pi. $$

Thus, the area enclosed by the polar curve $r = 2 + 4\cos(\theta)$ over the interval $[0, 2\pi]$ is 

$$ 4\pi. $$
    