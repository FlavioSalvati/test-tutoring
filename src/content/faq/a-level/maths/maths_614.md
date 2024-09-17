---
title: "Prove the addition formula for sine"
summary: "The addition formula for sine states that sin(a+b) = sin(a)cos(b) + cos(a)sin(b)."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-25
---

The addition formula for sine states that 

$$
\sin(a + b) = \sin(a) \cos(b) + \cos(a) \sin(b).
$$

To prove this formula, we begin with a diagram illustrating the angles $a$ and $b$. 

In this diagram, we consider two angles, $a$ and $b$, and our goal is to determine the sine of their sum, $a + b$. It is important to recall that $\sin(x)$ corresponds to the $y$-coordinate of a point on the unit circle that is located $x$ radians counterclockwise from the positive $x$-axis.

From this perspective, $\sin(a)$ represents the $y$-coordinate of point A, while $\sin(b)$ represents the $y$-coordinate of point B. Likewise, $\cos(a)$ denotes the $x$-coordinate of point A, and $\cos(b)$ denotes the $x$-coordinate of point B.

Next, consider point C, which marks the endpoint of a vector that originates from the origin, extends to point B, and then rotates counterclockwise by an angle of $a$. The coordinates of point C can be expressed as $(\cos(a + b), \sin(a + b))$, since the angle $a + b$ represents the angle this vector makes with the positive $x$-axis.

We can also describe the vector from the origin to point C as the combination of two vectors: one vector that extends from the origin to point A, and another that starts from point A and extends to point C. The first vector has a length of $\cos(a)$ and points in the direction of angle $a$, while the second vector has a length of $\sin(b)$ and points in the direction of angle $(a + b)$.

Applying vector addition, we can derive the coordinates of point C as follows:

$$
\cos(a + b) = \cos(a) \cos(b) - \sin(a) \sin(b)
$$

$$
\sin(a + b) = \sin(a) \cos(b) + \cos(a) \sin(b).
$$

These equations represent the addition formulas for cosine and sine, respectively. Thus, we have successfully proven the addition formula for sine.
    