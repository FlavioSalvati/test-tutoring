---
title: "How to integrate sec^2(x)tan^2(x)?"
summary: "To integrate sec^2(x)tan^2(x), use the substitution u = tan(x)."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-11
---

To evaluate the integral of $\sec^2(x) \tan^2(x)$, we can utilize the substitution $u = \tan(x)$.

By using this substitution, we can express $\sec^2(x)$ in terms of $u$. Recall that:

$$
\sec^2(x) = 1 + \tan^2(x) = 1 + u^2.
$$

Additionally, we can express $\tan^2(x)$ as:

$$
\tan^2(x) = u^2.
$$

Substituting these expressions into the integral, we obtain:

$$
\int \sec^2(x) \tan^2(x) \, dx = \int (1 + u^2) u^2 \, du.
$$

Next, we expand the integrand:

$$
\int (1 + u^2) u^2 \, du = \int (u^2 + u^4) \, du.
$$

Now, we can integrate each term separately:

$$
\int u^2 \, du + \int u^4 \, du = \frac{u^3}{3} + \frac{u^5}{5} + C,
$$

where $C$ is the constant of integration.

Finally, we substitute back $u = \tan(x)$ to express our result in terms of $x$:

$$
\int \sec^2(x) \tan^2(x) \, dx = \frac{\tan^3(x)}{3} + \frac{\tan^5(x)}{5} + C.
$$

This provides the final answer for the integral.
    