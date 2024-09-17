---
title: "Prove the formula for the area of a triangle given two sides and the included angle"
summary: The area of a triangle can be calculated using the formula Area = $0.5 \times \text{side}_1 \times \text{side}_2 \times \sin(\text{included angle})$, where $\text{side}_1$ and $\text{side}_2$ are the lengths of the two sides.
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-05-05
---

The formula for the area of a triangle when given two sides and the included angle is expressed as:

$$
\text{Area} = \frac{1}{2} \cdot a \cdot b \cdot \sin(C)
$$

In this formula, $a$ and $b$ represent the lengths of the two sides, while $C$ denotes the included angle between them.

To derive this formula, we begin by considering triangle $ABC$, with sides of lengths $a$, $b$, and $c$, and corresponding angles $A$, $B$, and $C$. We can enhance our understanding by drawing a perpendicular line from vertex $A$ to side $BC$, effectively dividing the triangle into two right-angled triangles, as illustrated below:

[Insert diagram here]

Utilizing basic trigonometric principles, we can establish the following relationships:

$$
\sin(A) = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{h}{c}
$$

$$
\sin(B) = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{h}{a}
$$

Here, $h$ represents the height of the triangle, which is the length of the perpendicular line drawn from $A$ to $BC$.

By rearranging these equations, we derive the following expressions for $h$:

$$
h = c \cdot \sin(A)
$$

$$
h = a \cdot \sin(B)
$$

Equating these two expressions for $h$ gives us:

$$
c \cdot \sin(A) = a \cdot \sin(B)
$$

Next, we multiply both sides by $b$:

$$
b \cdot c \cdot \sin(A) = a \cdot b \cdot \sin(B)
$$

We can also use the identity $\sin(C) = \sin(180^\circ - A - B) = \sin(A + B)$, which allows us to rewrite the equation as:

$$
b \cdot c \cdot \sin(C) = a \cdot b \cdot \sin(B)
$$

Finally, dividing both sides by $2$ leads us to the desired expression for the area of triangle $ABC$:

$$
\text{Area} = \frac{1}{2} \cdot a \cdot b \cdot \sin(C)
$$

This concludes the proof of the area formula we set out to demonstrate.
    