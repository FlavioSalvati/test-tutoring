---
title: "Prove the tangent addition formula"
summary: "The tangent addition formula expresses the tangent of the sum of two angles, stating that tan(x+y) equals the sum of their tangents divided by one minus the product of their tangents."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-28
---

The tangent addition formula is expressed as:

$$
\tan(x+y) = \frac{\tan(x) + \tan(y)}{1 - \tan(x)\tan(y)}.
$$

To prove this formula, we begin with the well-known trigonometric identity for the sine of a sum:

$$
\sin(x+y) = \sin(x)\cos(y) + \cos(x)\sin(y).
$$

Next, we divide both sides of this identity by $\cos(x)\cos(y)$, which yields:

$$
\tan(x+y) = \frac{\sin(x+y)}{\cos(x)\cos(y)}.
$$

Substituting the sine addition formula into the equation, we have:

$$
\tan(x+y) = \frac{\sin(x)\cos(y) + \cos(x)\sin(y)}{\cos(x)\cos(y)}.
$$

Now, we can split the right-hand side into two fractions:

$$
\tan(x+y) = \frac{\sin(x)}{\cos(x)} \cdot \frac{1}{\cos(y)} + \frac{\sin(y)}{\cos(y)} \cdot \frac{1}{\cos(x)}.
$$

This simplifies to:

$$
\tan(x+y) = \tan(x)\cdot\frac{1}{\cos(y)} + \tan(y)\cdot\frac{1}{\cos(x)}.
$$

Recognizing that the product of sine and cosine can be expressed as:

$$
\frac{\sin(x)\sin(y)}{\cos(x)\cos(y)} = \tan(x)\tan(y),
$$

we can rewrite the expression as follows:

$$
\tan(x+y) = \frac{\tan(x) + \tan(y)}{1 - \tan(x)\tan(y)}.
$$

Thus, we have successfully proven the tangent addition formula:

$$
\tan(x+y) = \frac{\tan(x) + \tan(y)}{1 - \tan(x)\tan(y)}.
$$
    