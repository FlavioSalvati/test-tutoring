---
title: "How to integrate e^x*sin(x)/x?"
summary: "To integrate e^x*sin(x)/x, use integration by parts with u = sin(x)/x and dv = e^x dx."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-20
---

To integrate the expression $\frac{e^x \sin(x)}{x}$, we can employ the method of integration by parts. Let us define:

- $ u = \frac{\sin(x)}{x} $
- $ dv = e^x \, dx $

Applying integration by parts, we start with the formula:

$$
\int u \, dv = u v - \int v \, du
$$

Thus, we have:

$$
\int \frac{e^x \sin(x)}{x} \, dx = \int u \, dv = u e^x - \int v \, du
$$

Substituting our definitions into the equation, we get:

$$
= \frac{\sin(x)}{x} e^x - \int \left( \frac{\cos(x)}{x} - \frac{\sin(x)}{x^2} \right) e^x \, dx
$$

Next, we need to apply integration by parts again. For this, we set:

- $ u = \frac{\cos(x)}{x} $
- $ dv = e^x \, dx $

Using the integration by parts formula again, we have:

$$
\int \frac{\cos(x)}{x} e^x \, dx = \frac{\cos(x)}{x} e^x - \int e^x \left( -\frac{\sin(x)}{x^2} + \frac{\cos(x)}{x^3} \right) \, dx
$$

Substituting this back into our previous equation yields:

$$
\int \frac{e^x \sin(x)}{x} \, dx = \frac{\sin(x)}{x} e^x - \frac{\cos(x)}{x} e^x - \int \left(-\frac{\sin(x)}{x^2} + \frac{\cos(x)}{x^3}\right) e^x \, dx
$$

We can now simplify the integral:

$$
= \frac{\sin(x)}{x} e^x - \frac{\cos(x)}{x} e^x - \int \left(\frac{2}{x^3} - \frac{2}{x^2} + \frac{1}{x}\right) e^x \, dx
$$

Finally, we apply integration by parts one more time with:

- $ u = \frac{2}{x^3} - \frac{2}{x^2} + \frac{1}{x} $
- $ dv = e^x \, dx $

This gives us:

$$
\int \left(\frac{2}{x^3} - \frac{2}{x^2} + \frac{1}{x}\right) e^x \, dx = \left(\frac{2}{x^3} - \frac{2}{x^2} + \frac{1}{x}\right) e^x - \int e^x \left(-\frac{6}{x^4} + \frac{4}{x^3} - \frac{1}{x^2}\right) \, dx
$$

Now, substituting everything back, we arrive at our final result:

$$
\int \frac{e^x \sin(x)}{x} \, dx = \frac{\sin(x)}{x} e^x - \frac{\cos(x)}{x} e^x - \left(\frac{2}{x^3} - \frac{4}{x^2} + \frac{4}{x} - 4\right) e^x + C
$$

Thus, the final answer is:

$$
\int \frac{e^x \sin(x)}{x} \, dx = \frac{\sin(x)}{x} e^x - \frac{\cos(x)}{x} e^x - \left(\frac{2}{x^3} - \frac{4}{x^2} + \frac{4}{x} - 4\right) e^x + C
$$
    