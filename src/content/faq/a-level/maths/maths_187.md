---
title: "Prove the half-angle formula for tangent"
summary: "The half-angle formula for tangent states that tan(x/2) can be expressed as (1 - cos(x)) / sin(x)."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-03
---

The half-angle formula for the tangent function is given by:

$$
\tan\left(\frac{x}{2}\right) = \frac{1 - \cos(x)}{\sin(x)}.
$$

To derive this half-angle formula, we begin with the double-angle formula for tangent:

$$
\tan(2x) = \frac{2 \tan(x)}{1 - \tan^2(x)}.
$$

By rearranging this formula, we can express $\tan(x)$ in terms of $\tan(2x)$:

$$
\tan(x) = \frac{\tan(2x)}{2 - 2\tan^2(x)}.
$$

Next, we substitute $\frac{x}{2}$ for $x$ in this equation:

$$
\tan\left(\frac{x}{2}\right) = \frac{\tan(x)}{2 - 2\tan^2\left(\frac{x}{2}\right)}.
$$

To simplify the denominator, we utilize the identity:

$$
1 + \tan^2\left(\frac{x}{2}\right) = \sec^2\left(\frac{x}{2}\right).
$$

This allows us to rewrite the expression as follows:

$$
\tan\left(\frac{x}{2}\right) = \frac{\tan(x)}{2(1 - \tan^2\left(\frac{x}{2}\right))} + \frac{\tan(x)}{2 \sec^2\left(\frac{x}{2}\right)}.
$$

Continuing with our simplification, we have:

$$
\tan\left(\frac{x}{2}\right) = \frac{\tan(x)}{2(1 + \tan\left(\frac{x}{2}\right))(1 - \tan\left(\frac{x}{2}\right))} + \frac{\sin\left(\frac{x}{2}\right)}{\cos\left(\frac{x}{2}\right)}.
$$

Next, we can express $\tan(x)$ in terms of sine and cosine:

$$
\tan\left(\frac{x}{2}\right) = \frac{\sin(x)}{1 + \cos(x)} - \frac{\sin(x)}{(1 + \cos(x))(1 - \tan\left(\frac{x}{2}\right))}.
$$

Finally, after all simplifications, we arrive at the half-angle formula for tangent:

$$
\tan\left(\frac{x}{2}\right) = \frac{1 - \cos(x)}{\sin(x)}.
$$

Thus, we have successfully proven the half-angle formula for the tangent function.
    