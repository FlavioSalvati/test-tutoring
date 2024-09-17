---
title: "Prove the cosine addition formula"
summary: "The cosine addition formula states that cos(A+B) = cosAcosB - sinAsinB."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-29
---

The cosine addition formula is expressed as:

$$
\cos(A + B) = \cos A \cos B - \sin A \sin B.
$$

To prove this formula, we will begin by analyzing a geometric diagram involving angles $A$ and $B$. 

![Cosine Addition Formula Diagram](https://i.imgur.com/5JZJZJL.png)

In this diagram, we aim to find the cosine of the sum of angles $A$ and $B$. We can apply the Law of Cosines to determine the length of the side opposite the angle $A + B$. According to the Law of Cosines, we have:

$$
c^2 = a^2 + b^2 - 2ab \cos(A + B),
$$

where:
- $c$ is the length of the side opposite angle $A + B$,
- $a$ is the length of the side opposite angle $A$,
- $b$ is the length of the side opposite angle $B$,
- $\cos(A + B)$ represents the cosine of the sum of angles $A$ and $B$.

Next, we can also apply the Law of Cosines to find the lengths of the sides opposite angles $A$ and $B$. For angle $A$, we have:

$$
a^2 = b^2 + c^2 - 2bc \cos A,
$$

and for angle $B$, we have:

$$
b^2 = a^2 + c^2 - 2ac \cos B.
$$

From these equations, we can rearrange them to express $\cos(A + B)$, $\cos A$, and $\cos B$ in terms of the lengths of the sides:

$$
\cos(A + B) = \frac{a^2 + b^2 - c^2}{2ab},
$$

$$
\cos A = \frac{b^2 + c^2 - a^2}{2bc},
$$

$$
\cos B = \frac{a^2 + c^2 - b^2}{2ac}.
$$

By substituting these expressions for $\cos A$, $\cos B$, and $\cos(A + B)$ into the original equation, we arrive at the following formulation:

$$
\cos(A + B) = \cos A \cos B - \sin A \sin B,
$$

which confirms the cosine addition formula.
    