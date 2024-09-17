---
title: "How to integrate tan^3(x)sec(x)?"
summary: "To integrate tan^3(x)sec(x), use substitution and integration by parts."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-22
---

To evaluate the integral of $\tan^3(x) \sec(x)$, we can employ a combination of substitution and integration by parts.

We begin by making the substitution $u = \tan(x)$, which implies that $du = \sec^2(x) \, dx$. This transforms the integral as follows:

$$
\int \tan^3(x) \sec(x) \, dx = \int u^3 \, du.
$$

Next, we apply the power rule to integrate $u^3$:

$$
\int u^3 \, du = \frac{1}{4} u^4 + C.
$$

Substituting back for $u$, we obtain:

$$
\int \tan^3(x) \sec(x) \, dx = \frac{1}{4} \tan^4(x) + C.
$$

However, we must ensure that our substitution is valid across the entire domain of the original function. The function $\tan(x)$ is undefined at $x = (n + \frac{1}{2})\pi$ for any integer $n$. Therefore, we need to restrict the domain of our final result to exclude these points.

Consequently, the final expression for the integral is:

$$
\int \tan^3(x) \sec(x) \, dx = \frac{1}{4} \tan^4(x) + C, \quad x \neq (n + \frac{1}{2})\pi.
$$
    