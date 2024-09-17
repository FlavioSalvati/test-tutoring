---
title: "What is the double angle formula in polar coordinates?"
summary: "The double angle formula in polar coordinates is used to find the coordinates of a point that is twice the angle of another point."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-12
---

The double angle formula in polar coordinates is a useful tool for determining the coordinates of a point that corresponds to twice the angle of another point.

To derive this formula, we begin with the representation of a point in polar coordinates, given by:

$$
r = \sqrt{x^2 + y^2}
$$

$$
\theta = \arctan\left(\frac{y}{x}\right)
$$

To find the coordinates of a point whose angle is doubled, we utilize the following trigonometric identities:

$$
\cos(2\theta) = \cos^2(\theta) - \sin^2(\theta)
$$

$$
\sin(2\theta) = 2\sin(\theta)\cos(\theta)
$$

Using these identities, we can express the coordinates of the new point, denoted as $(x', y')$, in terms of the original point's coordinates $(x, y)$:

1. The radius remains the same:
   $$ 
   r' = r = \sqrt{x^2 + y^2} 
   $$

2. The new angle is given by:
   $$ 
   \theta' = 2\theta 
   $$

Now, we can calculate the new coordinates:

- For the x-coordinate:
$$
x' = r' \cos(\theta') = r \cos(2\theta) = r \left(\cos^2(\theta) - \sin^2(\theta)\right)
$$

- For the y-coordinate:
$$
y' = r' \sin(\theta') = r \sin(2\theta) = 2r \sin(\theta) \cos(\theta)
$$

Thus, the double angle formula in polar coordinates can be summarized as:

$$
x' = r \left(\cos^2(\theta) - \sin^2(\theta)\right)
$$

$$
y' = 2r \sin(\theta) \cos(\theta)
$$

This formula is particularly valuable for finding the coordinates of a point that has an angle that is double that of another point, and it has numerous applications in various fields of mathematics and physics.
    