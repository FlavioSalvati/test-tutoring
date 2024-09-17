---
title: "How to calculate the work done by a variable force?"
summary: "To calculate the work done by a variable force, we need to integrate the force with respect to displacement."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-13
---

To determine the work done by a variable force, we must integrate the force with respect to displacement.

When a force is applied to an object, it can cause the object to move, thereby performing work. For a constant force, the work done is expressed by the formula 

$$
W = Fd 
$$ 

where $W$ represents the work done, $F$ is the applied force, and $d$ is the displacement of the object. However, when the force varies, we need to employ calculus to accurately calculate the work done.

Let’s consider a force $F(x)$ that changes with displacement $x$. To compute the work done by this force as the object moves from $x_1$ to $x_2$, we use the following integral:

$$
W = \int_{x_1}^{x_2} F(x) \, dx 
$$

This equation indicates that the work done is equivalent to the area under the force-displacement curve between the points $x_1$ and $x_2$. To solve this integral, we must know the functional form of $F(x)$. If $F(x)$ is provided as a mathematical expression, we can substitute it into the integral and evaluate it using appropriate integration techniques.

For instance, suppose we have a force described by the equation $F(x) = 2x + 3$, acting on an object over a displacement of $4$ meters. The work done by this force can be calculated as follows:

$$
W = \int_{0}^{4} (2x + 3) \, dx 
$$

Now, we compute the integral:

$$
W = \left[ x^2 + 3x \right]_{0}^{4}
$$

Calculating the limits gives us:

$$
W = (4^2 + 3 \cdot 4) - (0^2 + 3 \cdot 0) 
$$

This simplifies to:

$$
W = (16 + 12) - 0 = 28 \, \text{J}
$$

Thus, the total work done by the force is $28 \, \text{J}$.
    