---
title: "Evaluate the integral of e^x dx"
summary: "The integral of e^x dx is e^x + C, where C is the constant of integration."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-16
---

Let's enhance the clarity and readability of the content while properly formatting the mathematical expressions.

The integral of $ e^x \, dx $ is given by:

$$
\int e^x \, dx = e^x + C,
$$

where $ C $ represents the constant of integration.

To evaluate the integral $ \int e^x \, dx $, we might initially consider using the power rule of integration, which states that for any integer $ n \neq -1 $:

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C.
$$

However, since $ e^x $ is not a polynomial, we cannot apply this rule directly. Instead, we can utilize the property that the derivative of $ e^x $ is itself, $ e^x $. This allows us to apply the reverse chain rule of integration.

We start by letting $ u = x $, which leads to the differential $ \frac{du}{dx} = 1 $. Consequently, we can express $ e^x \, dx $ in terms of $ u $:

$$
e^x \, dx = e^u \, du.
$$

Now, we can integrate $ e^u \, du $:

$$
\int e^u \, du = e^u + C.
$$

Finally, substituting back $ u = x $ gives us:

$$
\int e^x \, dx = e^u + C = e^x + C.
$$

Thus, we conclude that the integral of $ e^x \, dx $ is 

$$
\int e^x \, dx = e^x + C,
$$

where $ C $ is the constant of integration. This result can be verified by differentiating $ e^x + C $, which yields:

$$
\frac{d}{dx}(e^x + C) = e^x,
$$

confirming that our integration is correct.
    