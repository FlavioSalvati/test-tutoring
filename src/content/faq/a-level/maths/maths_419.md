---
title: "How to integrate e^x*cos(x)/x?"
summary: "To integrate e^x*cos(x)/x, use integration by parts with u = cos(x)/x and dv = e^x dx."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-17
---

To integrate the expression $\frac{e^x \cos(x)}{x}$, we can apply the method of integration by parts. We will set:

- $ u = \frac{\cos(x)}{x} $
- $ dv = e^x \, dx $

Next, we find the derivatives and antiderivatives needed for integration by parts:

- The derivative $ du $ is given by:

$$
du = \left(-\frac{\cos(x)}{x^2} - \frac{\sin(x)}{x^2}\right) \, dx
$$

- The antiderivative $ v $ is:

$$
v = e^x
$$

Using the integration by parts formula, which states:

$$
\int u \, dv = uv - \int v \, du
$$

we can substitute our values into the formula:

$$
\int \frac{e^x \cos(x)}{x} \, dx = u v - \int v \, du
$$

This expands to:

$$
\int \frac{e^x \cos(x)}{x} \, dx = \frac{e^x \cos(x)}{x} - \int e^x \left(-\frac{\cos(x)}{x^2} - \frac{\sin(x)}{x^2}\right) \, dx
$$

This simplifies to:

$$
\int \frac{e^x \cos(x)}{x} \, dx = \frac{e^x \cos(x)}{x} + \int \frac{e^x \cos(x)}{x^2} \, dx + \int \frac{e^x \sin(x)}{x^2} \, dx
$$

Now, we need to evaluate the integrals $ \int \frac{e^x \cos(x)}{x^2} \, dx $ and $ \int \frac{e^x \sin(x)}{x^2} \, dx $. We will apply integration by parts again for each of these integrals.

For the first integral, let us set:

- $ u = \frac{1}{x^2} $
- $ dv = e^x \cos(x) \, dx $

Then, we find:

- The derivative $ du $ is:

$$
du = -\frac{2}{x^3} \, dx
$$

- The antiderivative $ v $ can be computed using integration by parts again, but we will simplify the expression for now. Continuing with the formula:

$$
\int \frac{e^x \cos(x)}{x^2} \, dx = u v - \int v \, du
$$

This yields:

$$
\int \frac{e^x \cos(x)}{x^2} \, dx = -\frac{e^x \cos(x)}{x} + \int \frac{e^x \sin(x)}{x} \, dx - 2 \int \frac{e^x \cos(x)}{x^3} \, dx
$$

For the second integral, we also set:

- $ u = \frac{1}{x^2} $
- $ dv = e^x \sin(x) \, dx $

Then, similarly, we find:

$$
\int \frac{e^x \sin(x)}{x^2} \, dx = -\frac{e^x \sin(x)}{x} - \int \frac{e^x \cos(x)}{x} \, dx + 2 \int \frac{e^x \sin(x)}{x^3} \, dx
$$

Now, substituting these results back into our expression for the original integral, we obtain:

$$
\int \frac{e^x \cos(x)}{x} \, dx = \frac{e^x \cos(x)}{x} + \left(-\frac{e^x \cos(x)}{x} + \int \frac{e^x \sin(x)}{x} \, dx - 2 \int \frac{e^x \cos(x)}{x^3} \, dx\right) - \left(-\frac{e^x \sin(x)}{x} - \int \frac{e^x \cos(x)}{x} \, dx + 2 \int \frac{e^x \sin(x)}{x^3} \, dx\right)
$$

This leads to a complex expression, and we can further simplify or analyze as needed. The above steps illustrate the use of integration by parts multiple times to handle the integrals involving exponential and trigonometric functions divided by a polynomial.
    