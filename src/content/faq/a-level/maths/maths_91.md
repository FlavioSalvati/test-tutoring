---
title: "What's the integral of ln(x)?"
summary: "The integral of ln(x) is expressed as xln(x) - x + C, with C representing the constant of integration."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-22
---

The integral of the natural logarithm function, $\ln(x)$, can be expressed as:

$$
\int \ln(x) \, dx = x \ln(x) - x + C
$$

where $C$ represents the constant of integration.

To derive this integral, we apply the technique of integration by parts. We start by letting:

- $u = \ln(x)$
- $dv = dx$

Next, we compute the derivatives:

- The derivative of $u$ with respect to $x$ is given by $du/dx = \frac{1}{x}$, which implies that $du = \frac{1}{x} \, dx$.
- The integral of $dv$ yields $v = x$.

Using the integration by parts formula, which states that:

$$
\int u \, dv = uv - \int v \, du,
$$

we can substitute our values:

$$
\int \ln(x) \, dx = x \ln(x) - \int x \left(\frac{1}{x}\right) \, dx.
$$

This simplifies to:

$$
\int \ln(x) \, dx = x \ln(x) - \int 1 \, dx,
$$

which further simplifies to:

$$
\int \ln(x) \, dx = x \ln(x) - x + C.
$$

To verify our result, we can differentiate the expression $y = x \ln(x) - x + C$. We apply the product rule to differentiate $x \ln(x)$:

$$
\frac{dy}{dx} = \frac{d}{dx}(x \ln(x)) - \frac{d}{dx}(x) + \frac{d}{dx}(C).
$$

Calculating each derivative, we have:

$$
\frac{dy}{dx} = \left(x \cdot \frac{d}{dx}(\ln(x)) + \ln(x)\right) - 1 + 0.
$$

This yields:

$$
\frac{dy}{dx} = \left(x \cdot \frac{1}{x}\right) + \ln(x) - 1 = \ln(x) + 1 - 1 = \ln(x).
$$

Thus, the derivative correctly returns the original integrand, confirming that our integration is accurate.

It is important to note that the integral of $\ln(x)$ is only defined for $x > 0$, as $\ln(x)$ is not defined for $x \leq 0$.
    