---
title: "Prove the half-angle formula for sine"
summary: The half-angle formula for sine is $ \sin\left(\frac{x}{2}\right) = \pm \sqrt{\frac{1 - \cos(x)}{2}} $.
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-01
---

The half-angle formula for sine is given by:

$$
\sin\left(\frac{x}{2}\right) = \pm \sqrt{\frac{1 - \cos(x)}{2}}.
$$

To derive this half-angle formula, we begin with the double-angle formula for sine:

$$
\sin(2x) = 2\sin(x)\cos(x).
$$

By rearranging this equation, we find:

$$
\sin(x)\cos(x) = \frac{1}{2}\sin(2x).
$$

Next, we substitute $\frac{x}{2}$ for $x$ in this rearranged formula:

$$
\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right) = \frac{1}{2}\sin(x).
$$

We can express $\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right)$ as:

$$
\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right) = \frac{1}{2}\sin(x) \cdot \frac{1}{\cos\left(\frac{x}{2}\right)}.
$$

To simplify further, we utilize the identity for the cosine of a half-angle:

$$
\cos\left(\frac{x}{2}\right) = \pm\sqrt{\frac{1 + \cos(x)}{2}}.
$$

This leads us to the expression:

$$
\sin\left(\frac{x}{2}\right) = \pm\sqrt{\frac{1 - \cos(x)}{2}}.
$$

This final expression is indeed the half-angle formula for sine. The $\pm$ sign indicates that the value of $\sin\left(\frac{x}{2}\right)$ depends on the quadrant in which $\frac{x}{2}$ is located. Specifically, if $\frac{x}{2}$ lies in the first or second quadrant, then $\sin\left(\frac{x}{2}\right)$ is positive. Conversely, if $\frac{x}{2}$ is in the third or fourth quadrant, then $\sin\left(\frac{x}{2}\right)$ is negative.
    