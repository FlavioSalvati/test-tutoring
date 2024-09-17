---
title: "Calculate the derivative of tan(x)"
summary: The derivative of the tangent function, $\tan(x)$, is secant squared, represented as $\sec^2(x)$. This is a fundamental result in calculus related to the differentiation of trigonometric functions.
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-15
---

The derivative of the function $\tan(x)$ is given by $\sec^2(x)$.

To derive this result, we can utilize the quotient rule. We start by expressing $\tan(x)$ in terms of sine and cosine:

$$
\tan(x) = \frac{\sin(x)}{\cos(x)}.
$$

Applying the quotient rule, which states that if $f(x) = \frac{g(x)}{h(x)}$, then the derivative $f'(x)$ is given by:

$$
f'(x) = \frac{g'(x)h(x) - g(x)h'(x)}{[h(x)]^2},
$$

we identify $g(x) = \sin(x)$ and $h(x) = \cos(x)$. Thus, we have:

$$
\tan'(x) = \frac{\cos(x) \cdot \sin'(x) - \sin(x) \cdot \cos'(x)}{\cos^2(x)}.
$$

Next, we substitute the derivatives of $\sin(x)$ and $\cos(x)$, which are $\sin'(x) = \cos(x)$ and $\cos'(x) = -\sin(x)$, into the expression:

$$
\tan'(x) = \frac{\cos(x) \cdot \cos(x) - \sin(x) \cdot (-\sin(x))}{\cos^2(x)}.
$$

This simplifies to:

$$
\tan'(x) = \frac{\cos^2(x) + \sin^2(x)}{\cos^2(x)}.
$$

Utilizing the Pythagorean identity, which states that $\cos^2(x) + \sin^2(x) = 1$, we can further simplify:

$$
\tan'(x) = \frac{1}{\cos^2(x)}.
$$

Recall that the secant function is defined as $\sec(x) = \frac{1}{\cos(x)}$. Thus, we can express our result in terms of the secant function:

$$
\tan'(x) = \sec^2(x).
$$

In conclusion, we have demonstrated that the derivative of $\tan(x)$ is indeed $\sec^2(x)$.
    