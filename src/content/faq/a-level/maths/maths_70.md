---
title: "What's the integral of sin(x)/x^2?"
summary: The integral of $\sin(x)/x^2$ equals $-\cos(x)/x$ plus the integral of $\cos(x)/x$, highlighting a relationship between trigonometric functions and their integrals.
author: "Dr. Sarah Wilson"
degree: "MSc in Physics, University College London"
tutor_type: "A-Level Physics Tutor"
date: 2024-01-27
---

Let's enhance the clarity and readability of the content while ensuring that all mathematical expressions are properly formatted.

---

The integral of $\frac{\sin(x)}{x^2}$ can be expressed as:

$$
\int \frac{\sin(x)}{x^2} \, dx = -\frac{\cos(x)}{x} + \int \frac{\cos(x)}{x} \, dx.
$$

To solve this integral, we will employ the technique of integration by parts. We can set:

- \( u = \sin(x) \)
- \( dv = \frac{1}{x^2} \, dx \)

Calculating the derivatives, we find:

- \( \frac{du}{dx} = \cos(x) \)
- \( v = -\frac{1}{x} \)

Applying the integration by parts formula, we obtain:

$$
\int \frac{\sin(x)}{x^2} \, dx = -\frac{\cos(x)}{x} + \int \frac{\cos(x)}{x} \, dx.
$$

Next, we need to evaluate the integral $\int \frac{\cos(x)}{x} \, dx$. We will use integration by parts once more, this time letting:

- \( u = \cos(x) \)
- \( dv = \frac{1}{x} \, dx \)

Again, we calculate the derivatives:

- \( \frac{du}{dx} = -\sin(x) \)
- \( v = \ln|x| \)

Using the integration by parts formula again, we have:

$$
\int \frac{\cos(x)}{x} \, dx = \cos(x) \ln|x| + \int \frac{\sin(x)}{x} \, dx.
$$

Now, substituting this result back into our original integral gives us:

$$
\int \frac{\sin(x)}{x^2} \, dx = -\frac{\cos(x)}{x} + \cos(x) \ln|x| + \int \frac{\sin(x)}{x} \, dx.
$$

To finalize, we can simplify the equation by incorporating the constant of integration into the logarithmic term:

$$
\int \frac{\sin(x)}{x^2} \, dx = -\frac{\cos(x)}{x} + \cos(x) \ln|x| + C.
$$

Thus, the integral of $\frac{\sin(x)}{x^2}$ is:

$$
\int \frac{\sin(x)}{x^2} \, dx = -\frac{\cos(x)}{x} + \cos(x) \ln|x| + C.
$$

--- 

This enhanced explanation provides a clearer structure while maintaining mathematical rigor and proper formatting.
    