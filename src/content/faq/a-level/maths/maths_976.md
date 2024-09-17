---
title: "How to integrate (e^x)*cos(x)?"
summary: "To integrate (e^x)*cos(x), use integration by parts."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-15
---

To integrate the function $ e^x \cos(x) $, we can apply the technique of integration by parts.

Integration by parts is a method used to integrate the product of two functions. It involves selecting one function to differentiate and another to integrate. For this integration, let us define:

$$
u = \cos(x) \quad \text{and} \quad \frac{dv}{dx} = e^x
$$

Then, we can compute the derivatives:

$$
\frac{du}{dx} = -\sin(x) \quad \text{and} \quad v = e^x
$$

Using the integration by parts formula:

$$
\int u \, dv = uv - \int v \, du,
$$

we can express our integral as follows:

$$
\int e^x \cos(x) \, dx = e^x \cos(x) - \int e^x (-\sin(x)) \, dx.
$$

This simplifies to:

$$
\int e^x \cos(x) \, dx = e^x \cos(x) + \int e^x \sin(x) \, dx.
$$

Next, we need to evaluate the integral $ \int e^x \sin(x) \, dx $. We will apply integration by parts once again. This time, let:

$$
u = \sin(x) \quad \text{and} \quad \frac{dv}{dx} = e^x.
$$

Calculating the derivatives gives us:

$$
\frac{du}{dx} = \cos(x) \quad \text{and} \quad v = e^x.
$$

Applying the integration by parts formula again, we have:

$$
\int e^x \sin(x) \, dx = e^x \sin(x) - \int e^x \cos(x) \, dx.
$$

Now, substituting this back into our earlier expression yields:

$$
\int e^x \cos(x) \, dx = e^x \cos(x) + \left( e^x \sin(x) - \int e^x \cos(x) \, dx \right).
$$

This leads to:

$$
\int e^x \cos(x) \, dx = e^x \cos(x) + e^x \sin(x) - \int e^x \cos(x) \, dx.
$$

To isolate $ \int e^x \cos(x) \, dx $, we can add $ \int e^x \cos(x) \, dx $ to both sides:

$$
2 \int e^x \cos(x) \, dx = e^x \cos(x) + e^x \sin(x).
$$

Dividing both sides by 2 gives us:

$$
\int e^x \cos(x) \, dx = \frac{1}{2} \left( e^x \cos(x) + e^x \sin(x) \right) + C,
$$

where $ C $ is the constant of integration.

Thus, the final result for the integral of $ e^x \cos(x) $ is:

$$
\int e^x \cos(x) \, dx = \frac{1}{2} e^x (\cos(x) + \sin(x)) + C.
$$
    