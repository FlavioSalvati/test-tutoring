---
title: "How to integrate ln(x)^2*cos(x)?"
summary: "To integrate ln(x)^2*cos(x), apply integration by parts, selecting u = ln(x)^2 and dv = cos(x)dx for effective calculation."
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-06-25
---

To compute the integral of $ \ln(x)^2 \cos(x) $, we will employ the technique of integration by parts. We will set:

$$
u = \ln(x)^2 \quad \text{and} \quad dv = \cos(x) \, dx.
$$

First, we need to determine the derivative of $ u $:

$$
\frac{du}{dx} = 2 \ln(x) \cdot \frac{1}{x} = \frac{2 \ln(x)}{x}.
$$

Next, we find the antiderivative of $ dv $:

$$
\int \cos(x) \, dx = \sin(x).
$$

Applying the integration by parts formula, we have:

$$
\int \ln(x)^2 \cos(x) \, dx = \ln(x)^2 \sin(x) - \int \frac{2 \ln(x)}{x} \sin(x) \, dx.
$$

Now, we need to evaluate the second integral, $ \int \frac{2 \ln(x)}{x} \sin(x) \, dx $. We will use integration by parts again, setting:

$$
u = \ln(x) \quad \text{and} \quad dv = \sin(x) \, dx.
$$

Calculating the derivative of $ u $ gives:

$$
\frac{du}{dx} = \frac{1}{x}.
$$

The antiderivative of $ dv $ is:

$$
\int \sin(x) \, dx = -\cos(x).
$$

Using the integration by parts formula again, we have:

$$
\int \frac{2 \ln(x)}{x} \sin(x) \, dx = -2 \ln(x) \cos(x) + 2 \int \frac{\cos(x)}{x} \, dx.
$$

Next, we need to evaluate the integral $ \int \frac{\cos(x)}{x} \, dx $. We will apply integration by parts one more time, with:

$$
u = \frac{1}{x} \quad \text{and} \quad dv = \cos(x) \, dx.
$$

Finding the derivative of $ u $ yields:

$$
\frac{du}{dx} = -\frac{1}{x^2}.
$$

The antiderivative of $ dv $ is again:

$$
\int \cos(x) \, dx = \sin(x).
$$

Thus, we apply the integration by parts formula:

$$
\int \frac{\cos(x)}{x} \, dx = \frac{1}{x} \sin(x) + \int \frac{\sin(x)}{x^2} \, dx.
$$

Substituting this result back into our previous integral, we have:

$$
\int \frac{2 \ln(x)}{x} \sin(x) \, dx = -2 \ln(x) \cos(x) + 2 \left( \frac{1}{x} \sin(x) + \int \frac{\sin(x)}{x^2} \, dx \right).
$$

Now we substitute both results back into the original equation for the integral of $ \ln(x)^2 \cos(x) $:

$$
\int \ln(x)^2 \cos(x) \, dx = \ln(x)^2 \sin(x) + 2 \left( -\ln(x) \cos(x) + \frac{1}{x} \sin(x) + \int \frac{\sin(x)}{x^2} \, dx \right).
$$

Finally, we can simplify the expression:

$$
\int \ln(x)^2 \cos(x) \, dx = \ln(x)^2 \sin(x) + 2 \left( \ln(x) \cos(x) - \frac{1}{x} \sin(x) - \int \frac{\sin(x)}{x^2} \, dx \right) + C.
$$

It is important to note that the integral $ \int \ln(x)^2 \cos(x) \, dx $ does not have a solution in terms of elementary functions. Therefore, the final result is:

$$
\int \ln(x)^2 \cos(x) \, dx = \ln(x)^2 \sin(x) + 2 \left( \ln(x) \cos(x) - \frac{1}{x} \sin(x) - \int \frac{\sin(x)}{x^2} \, dx \right) + C.
$$
    