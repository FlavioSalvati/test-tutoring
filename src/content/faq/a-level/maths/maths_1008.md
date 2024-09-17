---
title: "What's the integral of x^3*cos(x)?"
summary: "The integral of x^3*cos(x) is x^3*sin(x) + 3x^2*cos(x) - 6x*sin(x) - 6cos(x) + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-04
---

Let's enhance the clarity and readability of the content while maintaining the mathematical expressions in LaTeX format.

---

The integral of the function $ x^3 \cos(x) $ can be expressed as:

$$
\int x^3 \cos(x) \, dx = x^3 \sin(x) + 3x^2 \cos(x) - 6x \sin(x) - 6 \cos(x) + C,
$$

where $ C $ is the constant of integration.

To evaluate this integral, we will employ the method of integration by parts. We start by letting:

- $ u = x^3 $
- $ dv = \cos(x) \, dx $

From this, we differentiate and integrate to find $ du $ and $ v $:

- $ du = 3x^2 \, dx $
- $ v = \sin(x) $

Applying the integration by parts formula, which is given by:

$$
\int u \, dv = uv - \int v \, du,
$$

we have:

$$
\int x^3 \cos(x) \, dx = x^3 \sin(x) - \int 3x^2 \sin(x) \, dx.
$$

Next, we need to evaluate the integral $ \int 3x^2 \sin(x) \, dx $. We will use integration by parts again, this time setting:

- $ u = 3x^2 $
- $ dv = \sin(x) \, dx $

Differentiating and integrating gives us:

- $ du = 6x \, dx $
- $ v = -\cos(x) $

Substituting into the integration by parts formula results in:

$$
\int 3x^2 \sin(x) \, dx = -3x^2 \cos(x) + \int 6x \cos(x) \, dx.
$$

Now, we turn our attention to the integral $ \int 6x \cos(x) \, dx $. We apply integration by parts once more, with:

- $ u = 6x $
- $ dv = \cos(x) \, dx $

This leads to:

- $ du = 6 \, dx $
- $ v = \sin(x) $

Using the integration by parts formula again, we obtain:

$$
\int 6x \cos(x) \, dx = 6x \sin(x) + \int 6 \sin(x) \, dx.
$$

The integral $ \int 6 \sin(x) \, dx $ is straightforward:

$$
\int 6 \sin(x) \, dx = -6 \cos(x).
$$

Now, we can combine all the parts together. Substituting back, we have:

$$
\int 6x \cos(x) \, dx = 6x \sin(x) - 6 \cos(x).
$$

Putting everything together, we find:

$$
\int x^3 \cos(x) \, dx = x^3 \sin(x) - 3x^2 \cos(x) + 6x \sin(x) - 6 \cos(x) + C.
$$

Thus, the final result is:

$$
\int x^3 \cos(x) \, dx = x^3 \sin(x) + 3x^2 \cos(x) - 6x \sin(x) - 6 \cos(x) + C.
$$

This concludes our evaluation of the integral.
    