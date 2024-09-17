---
title: "What's the integral of e^x*ln(x)?"
summary: "The integral of e^x*ln(x) is e^x*(ln(x)-1) + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-31
---

The integral of the function $e^x \ln(x)$ can be expressed as:

$$
\int e^x \ln(x) \, dx = e^x (\ln(x) - 1) + C,
$$

where $C$ is the constant of integration.

To evaluate this integral, we will apply the method of integration by parts. We start by setting:

- $ u = \ln(x) $
- $ dv = e^x \, dx $

Next, we compute the derivatives and integrals:

- $ du = \frac{1}{x} \, dx $
- $ v = e^x $

According to the integration by parts formula:

$$
\int u \, dv = uv - \int v \, du,
$$

we can substitute our values:

$$
\int e^x \ln(x) \, dx = e^x \ln(x) - \int e^x \left( \frac{1}{x} \right) \, dx.
$$

Now, we need to evaluate the second integral, which is:

$$
\int e^x \left( \frac{1}{x} \right) \, dx.
$$

To solve this, we will use a substitution. Let:

- $ u = x $
- Thus, $ du = dx $

This allows us to rewrite the integral as:

$$
\int e^x \left( \frac{1}{x} \right) \, dx = \int e^u \, du = e^u + C = e^x + C.
$$

Now, substituting this result back into our earlier equation, we have:

$$
\int e^x \ln(x) \, dx = e^x \ln(x) - (e^x + C).
$$

This simplifies to:

$$
\int e^x \ln(x) \, dx = e^x \ln(x) - e^x + C.
$$

Finally, we can factor out $e^x$ from the expression:

$$
\int e^x \ln(x) \, dx = e^x (\ln(x) - 1) + C.
$$

Thus, we conclude that the integral of $e^x \ln(x)$ is:

$$
\int e^x \ln(x) \, dx = e^x (\ln(x) - 1) + C.
$$
    