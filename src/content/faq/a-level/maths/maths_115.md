---
title: "Evaluate the integral of ln(x) dx"
summary: "The integral of ln(x) dx is xln(x) - x + C, with C representing the constant of integration."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-06-06
---

To find the integral of $\ln(x) \, dx$, we apply the method of integration by parts. The result of this integral is given by:

$$
\int \ln(x) \, dx = x \ln(x) - x + C,
$$

where $C$ represents the constant of integration.

We start by letting \( u = \ln(x) \) and \( dv = dx \). Consequently, we compute the derivatives:

- The derivative of \( u \) is given by \( \frac{du}{dx} = \frac{1}{x} \), which implies that \( du = \frac{1}{x} \, dx \).
- The integral of \( dv \) gives us \( v = x \).

Using the integration by parts formula, which states that 

$$
\int u \, dv = uv - \int v \, du,
$$ 

we can substitute our values:

$$
\int \ln(x) \, dx = x \ln(x) - \int x \cdot \frac{1}{x} \, dx.
$$

This simplifies to:

$$
\int \ln(x) \, dx = x \ln(x) - \int dx.
$$

The integral of \( dx \) is simply \( x \), leading us to:

$$
\int \ln(x) \, dx = x \ln(x) - x + C.
$$

Thus, we conclude that the integral of \( \ln(x) \, dx \) is 

$$
x \ln(x) - x + C,
$$ 

where $C$ is the constant of integration. 

To verify our result, we can differentiate the expression \( x \ln(x) - x + C \) with respect to \( x \). The derivative is:

$$
\frac{d}{dx}(x \ln(x) - x + C) = \ln(x) + 1 - 1 = \ln(x).
$$

This confirms that the derivative of our result is indeed \( \ln(x) \), validating the correctness of our integral.
    