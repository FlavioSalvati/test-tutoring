---
title: "What's the integral of x*ln(x)^2?"
summary: "The integral of x*ln(x)^2 is (x^2/2)*ln(x)^2 - (x^2/4)*ln(x) + (x^2/8) + C."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-30
---

To solve the integral of the function $x \ln(x)^2$, we can apply the method of integration by parts. The integral can be expressed as:

$$
\int x \ln(x)^2 \, dx = \frac{x^2}{2} \ln(x)^2 - \frac{x^2}{4} \ln(x) + \frac{x^2}{8} + C.
$$

Here, $C$ represents the constant of integration.

To proceed with the integration by parts, we will set:

- $ u = \ln(x)^2 $
- $ dv = x \, dx $

Next, we compute the derivatives and integrals needed:

- The derivative of $ u $ is given by:
$$
\frac{du}{dx} = 2 \frac{\ln(x)}{x}.
$$

- The integral of $ dv $ yields:
$$
v = \frac{x^2}{2}.
$$

Using the integration by parts formula:

$$
\int u \, dv = uv - \int v \, du,
$$

we can substitute our values:

$$
\int x \ln(x)^2 \, dx = uv - \int v \, du.
$$

Substituting in the values we obtained:

$$
= \left(\frac{x^2}{2} \ln(x)^2\right) - \int \left(\frac{x^2}{2} \cdot 2 \frac{\ln(x)}{x}\right) dx.
$$

This simplifies to:

$$
= \frac{x^2}{2} \ln(x)^2 - \int x \ln(x) \, dx.
$$

Next, we need to compute the integral $ \int x \ln(x) \, dx $. We can apply integration by parts again, using:

- $ u = \ln(x) $
- $ dv = x \, dx $

Thus, we find:

- $ du = \frac{1}{x} dx $
- $ v = \frac{x^2}{2} $

Now applying the integration by parts formula again:

$$
\int x \ln(x) \, dx = uv - \int v \, du,
$$

results in:

$$
= \left(\frac{x^2}{2} \ln(x)\right) - \int \left(\frac{x^2}{2} \cdot \frac{1}{x}\right) dx,
$$

which simplifies to:

$$
= \frac{x^2}{2} \ln(x) - \frac{1}{2} \int x \, dx.
$$

Calculating the integral $ \int x \, dx $:

$$
\int x \, dx = \frac{x^2}{2}.
$$

Thus, we have:

$$
\int x \ln(x) \, dx = \frac{x^2}{2} \ln(x) - \frac{x^2}{4}.
$$

Now, substituting this back into our original integration by parts result, we get:

$$
\int x \ln(x)^2 \, dx = \frac{x^2}{2} \ln(x)^2 - \left(\frac{x^2}{2} \ln(x) - \frac{x^2}{4}\right).
$$

This leads us to:

$$
= \frac{x^2}{2} \ln(x)^2 - \frac{x^2}{2} \ln(x) + \frac{x^2}{4}.
$$

Combining these expressions, we arrive at the final result:

$$
\int x \ln(x)^2 \, dx = \frac{x^2}{2} \ln(x)^2 - \frac{x^2}{4} \ln(x) + \frac{x^2}{8} + C.
$$

Thus, the integral of $x \ln(x)^2$ is given by:

$$
\frac{x^2}{2} \ln(x)^2 - \frac{x^2}{4} \ln(x) + \frac{x^2}{8} + C.
$$
    