---
title: "How to derive the formulas for hyperbolic sine?"
summary: "The formula for hyperbolic sine is derived from the exponential function."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-30
---

The formula for the hyperbolic sine function is derived from the exponential function.

To derive the formula for hyperbolic sine, we begin with the definition of the exponential function:

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots
$$

We can express the exponential function in terms of both $e^x$ and $e^{-x}$:

$$
e^x = \frac{1}{2} (e^x + e^{-x}) + \frac{1}{2} (e^x - e^{-x}).
$$

Let us define $ y = e^x - e^{-x} $. From this definition, we can rearrange to find expressions for $ e^x $ and $ e^{-x} $:

$$
e^x = \frac{y + \sqrt{y^2 + 4}}{2}
$$

$$
e^{-x} = \frac{\sqrt{y^2 + 4} - y}{2}.
$$

Next, substituting these expressions back into our definition of $ y $, we have:

$$
y = e^x - e^{-x} = \frac{y + \sqrt{y^2 + 4}}{2} - \frac{\sqrt{y^2 + 4} - y}{2}.
$$

Upon simplifying this equation, we arrive at:

$$
y^2 = (e^x - e^{-x})^2 = (y + \sqrt{y^2 + 4})\left(\sqrt{y^2 + 4} - y\right).
$$

Expanding and further simplifying yields:

$$
y^2 = 4 \sinh^2(x).
$$

Thus, we can conclude that the formula for hyperbolic sine is given by:

$$
\sinh(x) = \frac{e^x - e^{-x}}{2}.
$$
    