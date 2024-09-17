---
title: "How to integrate cos^3(x)?"
summary: "To integrate cos^3(x), use the substitution u = sin(x) and the identity cos^2(x) = 1 - sin^2(x)."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-25
---

To integrate $\cos^3(x)$, we can utilize the substitution $u = \sin(x)$ along with the identity $\cos^2(x) = 1 - \sin^2(x)$.

First, we can express $\cos^3(x)$ in a different form:
$$
\cos^3(x) = \cos^2(x) \cdot \cos(x).
$$
Next, applying the identity $\cos^2(x) = 1 - \sin^2(x)$, we rewrite it as follows:
$$
\cos^3(x) = (1 - \sin^2(x)) \cdot \cos(x).
$$

Now, substituting $u = \sin(x)$, we note that the derivative is given by $\frac{du}{dx} = \cos(x)$, which allows us to rewrite the differential $dx$ as $dx = \frac{du}{\cos(x)}$. Thus, we can express the integral as:
$$
\int \cos^3(x) \, dx = \int (1 - u^2) \, du.
$$

Next, we proceed to integrate both sides with respect to $u$:
$$
\int (1 - u^2) \, du = u - \frac{1}{3}u^3 + C,
$$
where $C$ represents the constant of integration.

Finally, we substitute back the original variable $u = \sin(x)$ to obtain the final result:
$$
\int \cos^3(x) \, dx = \sin(x) - \frac{1}{3}\sin^3(x) + C.
$$
    