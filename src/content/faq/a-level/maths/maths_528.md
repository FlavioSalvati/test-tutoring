---
title: "What's the integral of x*sqrt(x^2+1)?"
summary: "The integral of x*sqrt(x^2+1) is (x^2+1)^(3/2)/3 + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-01
---

To find the integral of the function $ x \sqrt{x^2 + 1} $, we can express it as:

$$
\int x \sqrt{x^2 + 1} \, dx = \frac{(x^2 + 1)^{3/2}}{3} + C,
$$

where $ C $ is the constant of integration.

To solve this integral, we will use the substitution method. Let us set 

$$
u = x^2 + 1.
$$

Next, we differentiate $ u $ with respect to $ x $:

$$
\frac{du}{dx} = 2x \implies du = 2x \, dx \implies dx = \frac{du}{2x}.
$$

Now, substituting these expressions into the integral, we have:

$$
\int x \sqrt{x^2 + 1} \, dx = \int x \sqrt{u} \cdot \frac{du}{2x}.
$$

The $ x $ in the numerator and denominator cancel out, yielding:

$$
\int x \sqrt{u} \cdot \frac{du}{2x} = \frac{1}{2} \int \sqrt{u} \, du.
$$

Now, we can rewrite $ \sqrt{u} $ as $ u^{1/2} $:

$$
\frac{1}{2} \int u^{1/2} \, du.
$$

We can now integrate $ u^{1/2} $:

$$
\frac{1}{2} \cdot \frac{2}{3} u^{3/2} + C = \frac{u^{3/2}}{3} + C.
$$

Finally, we substitute back $ u = x^2 + 1 $:

$$
\frac{(x^2 + 1)^{3/2}}{3} + C.
$$

Thus, we conclude that the integral of $ x \sqrt{x^2 + 1} $ is 

$$
\frac{(x^2 + 1)^{3/2}}{3} + C.
$$
    