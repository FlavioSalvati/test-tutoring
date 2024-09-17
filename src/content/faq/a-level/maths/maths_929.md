---
title: "How to integrate sec(x)tan^3(x)?"
summary: "To integrate sec(x)tan^3(x), use substitution u = tan(x) and convert the integral to a rational function."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-23
---

To evaluate the integral of $\sec(x) \tan^3(x)$, we will use the substitution $u = \tan(x)$, which allows us to convert the integral into a rational function.

Starting with the substitution, we have:

$$
u = \tan(x) \quad \Rightarrow \quad \frac{du}{dx} = \sec^2(x) \quad \Rightarrow \quad dx = \frac{du}{\sec^2(x)}.
$$

Substituting these into the integral, we obtain:

$$
\int \sec(x) \tan^3(x) \, dx = \int \frac{u^3 \, du}{1 + u^2}.
$$

Next, we can simplify the integrand using partial fractions:

$$
\frac{u^3}{1 + u^2} = u - \frac{u}{1 + u^2}.
$$

This allows us to rewrite the integral as:

$$
\int \sec(x) \tan^3(x) \, dx = \int \left( u - \frac{u}{1 + u^2} \right) du.
$$

We can now integrate the two terms separately. The first term integrates to:

$$
\int u \, du = \frac{u^2}{2} + C_1.
$$

For the second term, we apply another substitution. Let $v = 1 + u^2$, which gives us:

$$
\frac{dv}{du} = 2u \quad \Rightarrow \quad du = \frac{dv}{2u}.
$$

Thus, the integral becomes:

$$
\int -\frac{u}{1 + u^2} \, du = -\frac{1}{2} \int \frac{1}{v} \, dv = -\frac{1}{2} \ln|v| + C_2 = -\frac{1}{2} \ln|1 + u^2| + C_2.
$$

Combining these results, we have:

$$
\int \sec(x) \tan^3(x) \, dx = \frac{u^2}{2} - \frac{1}{2} \ln|1 + u^2| + C,
$$

where $C = C_1 + C_2$ is a constant of integration.

Finally, substituting back $u = \tan(x)$, we arrive at the final result:

$$
\int \sec(x) \tan^3(x) \, dx = \frac{\tan^2(x)}{2} - \frac{1}{2} \ln|1 + \tan^2(x)| + C.
$$

Hence, the solution to the integral is:

$$
\int \sec(x) \tan^3(x) \, dx = \frac{\tan^2(x)}{2} - \frac{1}{2} \ln(1 + \tan^2(x)) + C.
$$
    