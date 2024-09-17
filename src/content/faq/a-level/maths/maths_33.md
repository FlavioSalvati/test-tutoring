---
title: "How to integrate (e^x)/x?"
summary: "The integral of (e^x)/x is non-elementary, meaning it cannot be represented using basic functions like polynomials, exponentials, or trigonometric functions."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-01
---

The integral of the function \( \frac{e^x}{x} \) cannot be expressed in terms of elementary functions.

Unfortunately, there is no simple formula or method to determine the exact value of the integral \( \int \frac{e^x}{x} \, dx \) using elementary functions. However, we can approximate the value of this integral through numerical methods, such as Simpson's rule or the trapezoidal rule.

One technique to approach this integral is through integration by parts. We can set \( u = \frac{1}{x} \) and \( dv = e^x \, dx \), which gives us \( du = -\frac{1}{x^2} \, dx \) and \( v = e^x \). Applying the integration by parts formula, we have:

$$
\int \frac{e^x}{x} \, dx = \frac{e^x}{x} - \int e^x \left(-\frac{1}{x^2}\right) \, dx
$$

This simplifies to:

$$
\int \frac{e^x}{x} \, dx = \frac{e^x}{x} + \int \frac{e^x}{x^2} \, dx
$$

Next, we can tackle the new integral \( \int \frac{e^x}{x^2} \, dx \) using integration by parts again. This time, we let \( u = \frac{1}{x^2} \) and \( dv = e^x \, dx \), which yields \( du = -\frac{2}{x^3} \, dx \) and \( v = e^x \). Using the integration by parts formula once more, we obtain:

$$
\int \frac{e^x}{x^2} \, dx = -\frac{e^x}{x} - 2\int \frac{e^x}{x^3} \, dx
$$

This process can be repeated indefinitely, resulting in a series of integrals. However, it is important to note that this series does not converge to a finite value, which means it cannot be utilized to determine the exact value of the original integral \( \int \frac{e^x}{x} \, dx \).
    