---
title: "What's the integral of ln(x)/x^2?"
summary: The integral of $\ln(x)/x^2$ is expressed as $-\frac{1}{x} + \frac{\ln(x)}{x} + C$, where $C$ is the constant of integration.
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-07-13
---

To evaluate the integral of \( \frac{\ln(x)}{x^2} \), we can utilize the method of integration by parts. The integral can be expressed as follows:

$$
\int \frac{\ln(x)}{x^2} \, dx
$$

We choose our variables for integration by parts:
- Let \( u = \ln(x) \), which implies \( du = \frac{1}{x} \, dx \).
- Let \( dv = \frac{1}{x^2} \, dx \), which gives us \( v = -\frac{1}{x} \).

Applying the integration by parts formula, which is given by 

$$
\int u \, dv = uv - \int v \, du,
$$

we can substitute our choices into the formula:

$$
\int \frac{\ln(x)}{x^2} \, dx = -\frac{\ln(x)}{x} - \int -\frac{1}{x} \, dx.
$$

The integral \( \int -\frac{1}{x} \, dx \) can be evaluated using the standard rule for the integral of \( \frac{1}{x} \):

$$
\int -\frac{1}{x} \, dx = -\ln(x) + C.
$$

Now substituting this back into our previous expression, we have:

$$
\int \frac{\ln(x)}{x^2} \, dx = -\frac{\ln(x)}{x} + \ln(x) + C.
$$

Next, we can simplify the expression:

$$
\int \frac{\ln(x)}{x^2} \, dx = -\frac{1}{x} + \frac{\ln(x)}{x} + C.
$$

Thus, the final result for the integral is:

$$
\int \frac{\ln(x)}{x^2} \, dx = -\frac{1}{x} + \frac{\ln(x)}{x} + C.
$$

In summary, the integral of \( \frac{\ln(x)}{x^2} \) is:

$$
-\frac{1}{x} + \frac{\ln(x)}{x} + C.
$$
    