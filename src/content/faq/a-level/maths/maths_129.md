---
title: "What's the integral of cos^3(x)sin^2(x)?"
summary: The integral of $ \cos^3(x) \sin^2(x) $ results in $ -\frac{1}{3} \cos^4(x) + \frac{1}{5} \cos^2(x) + C $, representing the antiderivative of the given trigonometric expression.
author: "Dr. Sarah Wilson"
degree: "MSc in Physics, University College London"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-16
---

Let's clarify and enhance the content for better readability and comprehension, while also formatting mathematical expressions appropriately using LaTeX.

---

The integral of $\cos^3(x) \sin^2(x)$ can be expressed as:

$$
\int \cos^3(x) \sin^2(x) \, dx = -\frac{1}{3} \cos^4(x) + \frac{1}{5} \cos^2(x) + C,
$$

where $C$ is the constant of integration.

To solve this integral, we will use the substitution $u = \cos(x)$. Therefore, we have:

$$
\frac{du}{dx} = -\sin(x) \quad \text{and thus} \quad dx = -\frac{du}{\sin(x)}.
$$

We can rewrite the integral as follows:

$$
\int \cos^3(x) \sin^2(x) \, dx = \int \cos^3(x) (1 - \cos^2(x)) \, dx.
$$

Using the substitution $u = \cos(x)$, the integral becomes:

$$
= \int u^3 (1 - u^2) \left(-\frac{du}{\sqrt{1 - u^2}}\right) \quad \text{(since } \sin^2(x) = 1 - \cos^2(x) \text{)}.
$$

This simplifies to:

$$
= -\int \frac{u^3 (1 - u^2)}{\sqrt{1 - u^2}} \, du.
$$

Next, we can simplify the integrand using partial fractions:

$$
-\int \frac{u^3 (1 - u^2)}{\sqrt{1 - u^2}} \, du = -\int \frac{u^2 - 1}{\sqrt{1 - u^2}} \, du + \int \frac{u^2}{\sqrt{1 - u^2}} \, du.
$$

This can be broken down further as:

$$
= -\frac{1}{2} \int d(1 - u^2)^{1/2} + \frac{1}{2} \int d(1 - u^2)^{1/2} - \frac{1}{2} \int d(1 - u^2)^{1/2}.
$$

After simplifying, we obtain:

$$
= -\frac{1}{2} (1 - u^2)^{1/2} - \frac{1}{6} (1 - u^2)^{3/2} + \frac{1}{2} (1 - u^2)^{1/2} + C.
$$

Combining like terms, we have:

$$
= -\frac{1}{3} (1 - u^2)^{3/2} + \frac{1}{5} (1 - u^2)^{1/2} + C.
$$

Finally, substituting back $u = \cos(x)$, we arrive at the final result:

$$
\int \cos^3(x) \sin^2(x) \, dx = -\frac{1}{3} \cos^4(x) + \frac{1}{5} \cos^2(x) + C.
$$

This concludes the integration process.
    