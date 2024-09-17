---
title: "How to integrate cos(x)/x?"
summary: "To integrate cos(x)/x, apply the integration by parts method, which involves selecting appropriate functions for differentiation and integration to simplify the process."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-21
---

To integrate the function $\frac{\cos(x)}{x}$, we will employ the method of integration by parts.

Integration by parts is a technique that allows us to break down the integrand into two components: one part is differentiated and the other part is integrated. The formula for integration by parts is given by:

$$
\int u \, dv = uv - \int v \, du
$$

where $u$ and $v$ are functions of $x$.

For our integral, we can choose:

- $u = \cos(x)$
- $dv = \frac{1}{x} \, dx$

From these choices, we can compute the derivatives and integrals:

- $du = -\sin(x) \, dx$
- $v = \ln|x|$

Now, applying the integration by parts formula, we have:

$$
\int \frac{\cos(x)}{x} \, dx = \int u \, dv = uv - \int v \, du
$$

This leads to:

$$
\int \frac{\cos(x)}{x} \, dx = \cos(x) \ln|x| - \int \sin(x) \ln|x| \, dx
$$

Next, we need to integrate the term $\int \sin(x) \ln|x| \, dx$. We will use integration by parts again. This time, we let:

- $u = \ln|x|$
- $dv = \sin(x) \, dx$

Calculating the derivatives and integrals gives us:

- $du = \frac{1}{x} \, dx$
- $v = -\cos(x)$

Now applying the integration by parts formula again:

$$
\int \sin(x) \ln|x| \, dx = \int u \, dv = uv - \int v \, du
$$

This results in:

$$
\int \sin(x) \ln|x| \, dx = -\cos(x) \ln|x| - \int -\cos(x) \frac{1}{x} \, dx
$$

Simplifying further, we have:

$$
\int \sin(x) \ln|x| \, dx = -\cos(x) \ln|x| + \int \frac{\cos(x)}{x} \, dx
$$

Now we can substitute this back into our earlier equation:

$$
\int \frac{\cos(x)}{x} \, dx = \cos(x) \ln|x| - \left(-\cos(x) \ln|x| + \int \frac{\cos(x)}{x} \, dx\right)
$$

This leads to a situation where we can isolate $\int \frac{\cos(x)}{x} \, dx$. However, let's also address the integral $\int \frac{-\cos(x)}{x} \, dx$ via integration by parts.

We will set:

- $u = \frac{1}{x}$
- $dv = -\cos(x) \, dx$

Then we find:

- $du = -\frac{1}{x^2} \, dx$
- $v = \sin(x)$

Applying the integration by parts formula once more gives:

$$
\int \frac{-\cos(x)}{x} \, dx = \int u \, dv = uv - \int v \, du
$$

This results in:

$$
\int \frac{-\cos(x)}{x} \, dx = -\frac{\sin(x)}{x} + \int \frac{\sin(x)}{x^2} \, dx
$$

Finally, we need to integrate $\int \frac{\sin(x)}{x^2} \, dx$. We can use integration by substitution again:

Let:

- $u = \frac{1}{x^2}$
- $dv = \sin(x) \, dx$

Then we have:

- $du = -\frac{2}{x^3} \, dx$
- $v = -\cos(x)$

Now applying the integration by parts formula one last time results in:

$$
\int \frac{\sin(x)}{x^2} \, dx = \int u \, dv = uv - \int v \, du
$$

This gives:

$$
\int \frac{\sin(x)}{x^2} \, dx = -\frac{\cos(x)}{x^2} + 2\int \frac{\cos(x)}{x^3} \, dx
$$

With this series of integration by parts and substitutions, we can continue to evaluate the integrals step by step, ultimately leading us to a solution for the integral of $\frac{\cos(x)}{x}$.
    