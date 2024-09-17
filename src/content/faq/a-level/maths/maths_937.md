---
title: "Evaluate the integral of tan^4(x) dx"
summary: "The integral of tan^4(x) dx is (1/3)tan^3(x) - tan(x) + x + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-22
---

Let's enhance the clarity and readability of the content while ensuring the mathematical expressions are properly formatted.

---

The integral of $\tan^4(x) \, dx$ can be expressed as:

$$
\int \tan^4(x) \, dx = \frac{1}{3} \tan^3(x) - \tan(x) + x + C
$$

To evaluate the integral $\int \tan^4(x) \, dx$, we can utilize the trigonometric identity:

$$
\tan^2(x) = \sec^2(x) - 1.
$$

This allows us to rewrite the integral as follows:

$$
\int \tan^4(x) \, dx = \int \tan^2(x) \cdot \tan^2(x) \, dx = \int (\sec^2(x) - 1) \tan^2(x) \, dx.
$$

Next, we perform a substitution. Let:

$$
u = \tan(x), \quad \text{then} \quad \frac{du}{dx} = \sec^2(x) \quad \text{and} \quad dx = \frac{du}{\sec^2(x)}.
$$

Substituting these expressions into the integral, we have:

$$
\int (\sec^2(x) - 1) \tan^2(x) \, dx = \int (u^2 - 1) \, du.
$$

Now, we can evaluate the integral:

$$
\int (u^2 - 1) \, du = \frac{1}{3} u^3 - u + C.
$$

Substituting back for $u$, we get:

$$
\frac{1}{3} \tan^3(x) - \tan(x) + C.
$$

Finally, including the $x$ term that we initially omitted gives us the complete result:

$$
\int \tan^4(x) \, dx = \frac{1}{3} \tan^3(x) - \tan(x) + x + C.
$$

Thus, the integral of $\tan^4(x) \, dx$ is:

$$
\frac{1}{3} \tan^3(x) - \tan(x) + x + C.
$$
    