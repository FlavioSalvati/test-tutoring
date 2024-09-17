---
title: "Differentiate the function y = sec(x)"
summary: "The derivative of the function y = sec(x) is given by y' = sec(x)tan(x), highlighting the relationship between the secant and tangent functions in calculus."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-04-03
---

To find the derivative of the function \( y = \sec(x) \), we can express it as \( y' = \sec(x) \tan(x) \).

To differentiate \( y = \sec(x) \), we will apply the quotient rule. We define \( u = 1 \) and \( v = \cos(x) \). According to the quotient rule, the derivative is given by the formula:

$$
y' = \frac{u'v - v'u}{v^2}
$$

First, we calculate the derivatives of \( u \) and \( v \):
- The derivative \( u' = 0 \) because \( u \) is a constant.
- The derivative \( v' = -\sin(x) \).

Substituting these values into the quotient rule formula, we have:

$$
y' = \frac{0 \cdot \cos(x) - (-\sin(x) \cdot 1)}{\cos^2(x)}
$$

This simplifies to:

$$
y' = \frac{\sin(x)}{\cos^2(x)}
$$

Next, we can use the identity \( \sec(x) = \frac{1}{\cos(x)} \) to further simplify this expression:

$$
y' = \frac{\sin(x)}{\cos^2(x)} = \sin(x) \cdot \sec^2(x)
$$

Now, we can utilize the identity \( \tan(x) = \frac{\sin(x)}{\cos(x)} \) to express the derivative in terms of \( \sec(x) \) and \( \tan(x) \):

$$
y' = \sin(x) \cdot \sec^2(x) = \sec(x) \cdot \frac{\sin(x)}{\cos^2(x)} = \sec(x) \cdot \tan(x)
$$

Thus, we conclude that the derivative of \( y = \sec(x) \) is:

$$
y' = \sec(x) \tan(x)
$$
    