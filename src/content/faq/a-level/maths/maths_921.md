---
title: "Differentiate the function y = cot(x)"
summary: "The derivative of y = cot(x) is -csc^2(x)."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-18
---

To find the derivative of the function $ y = \cot(x) $, we start with the known result that the derivative is given by 

$$
y' = -\csc^2(x).
$$

To derive this result, we can apply the quotient rule for differentiation. We rewrite $ y = \cot(x) $ as a quotient of two functions. Letting $ u = 1 $ and $ v = \sin(x) $, we have:

$$
y = \frac{u}{v} = \frac{1}{\sin(x)}.
$$

Now, we apply the quotient rule, which states that if $ y = \frac{u}{v} $, then 

$$
y' = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}.
$$

Calculating the necessary derivatives, we find:

- $ \frac{du}{dx} = 0 $ (since $ u = 1 $),
- $ \frac{dv}{dx} = \cos(x) $ (since $ v = \sin(x) $).

Substituting these into the quotient rule formula, we get:

$$
y' = \frac{\sin(x) \cdot 0 - 1 \cdot \cos(x)}{\sin^2(x)} = \frac{-\cos(x)}{\sin^2(x)}.
$$

This simplifies to:

$$
y' = -\frac{\cos(x)}{\sin^2(x)}.
$$

Next, we can express this derivative in terms of the cotangent and cosecant functions. Recall that:

$$
\cot(x) = \frac{\cos(x)}{\sin(x)} \quad \text{and} \quad \csc(x) = \frac{1}{\sin(x)}.
$$

Using these identities, we can rewrite $ y' $:

$$
y' = -\frac{\cos(x)}{\sin^2(x)} = -\cot(x) \cdot \csc^2(x).
$$

Thus, we arrive at the conclusion that the derivative of $ y = \cot(x) $ is 

$$
y' = -\csc^2(x).
$$
    