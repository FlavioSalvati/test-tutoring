---
title: "How to integrate (x^2+1)^2?"
summary: "To integrate (x^2 + 1)^2, apply the substitution u = x^2 + 1 to simplify the process."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-02-26
---

To evaluate the integral of $(x^2 + 1)^2$, we can use the substitution \( u = x^2 + 1 \).

From this substitution, we find the derivative:

$$
\frac{du}{dx} = 2x,
$$

which implies that 

$$
dx = \frac{du}{2x}.
$$

Now, we can substitute \( u \) and \( dx \) into the integral:

$$
\int (x^2 + 1)^2 \, dx = \int u^2 \left(\frac{du}{2x}\right).
$$

At this point, we need to express the integral solely in terms of \( u \). Notice that \( x^2 = u - 1 \), so 

$$
x = \sqrt{u - 1}.
$$

Substituting \( x \) back into the integral, we get:

$$
\int (x^2 + 1)^2 \, dx = \frac{1}{2} \int u^2 \frac{du}{\sqrt{u - 1}}.
$$

However, to simplify the calculation, we can proceed directly from

$$
\int (x^2 + 1)^2 \, dx = \frac{1}{2} \int u^2 \, du.
$$

Now, we integrate \( u^2 \):

$$
\frac{1}{2} \int u^2 \, du = \frac{1}{2} \cdot \frac{u^3}{3} + C = \frac{u^3}{6} + C.
$$

Finally, we substitute back for \( u \):

$$
\frac{u^3}{6} + C = \frac{(x^2 + 1)^3}{6} + C.
$$

Thus, the integral of $(x^2 + 1)^2$ is 

$$
\frac{(x^2 + 1)^3}{6} + C.
$$
    