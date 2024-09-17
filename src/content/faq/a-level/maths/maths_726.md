---
title: "What's the integral of x^4*cos(x)?"
summary: "The integral of x^4*cos(x) is x^4*sin(x) + 4x^3*cos(x) + 12x^2*sin(x) - 24x*cos(x) - 24*sin(x) + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-25
---

Here’s a revised version of your content, enhanced for clarity and readability:

---

The integral of the function $x^4 \cos(x)$ can be expressed as:

$$
\int x^4 \cos(x) \, dx = x^4 \sin(x) + 4x^3 \cos(x) + 12x^2 \sin(x) - 24x \cos(x) - 24 \sin(x) + C,
$$

where $C$ is the constant of integration.

To find this integral, we will apply the method of integration by parts. We start by letting:

- $ u = x^4 $
- $ dv = \cos(x) \, dx $

Next, we compute the derivatives and integrals:

- $ \frac{du}{dx} = 4x^3 $
- $ v = \sin(x) $

Using the integration by parts formula, which states that:

$$
\int u \, dv = uv - \int v \, du,
$$

we can express the integral as follows:

$$
\int x^4 \cos(x) \, dx = x^4 \sin(x) - \int 4x^3 \sin(x) \, dx.
$$

Now, we apply integration by parts again on the new integral $\int 4x^3 \sin(x) \, dx$. We set:

- $ u = 4x^3 $
- $ dv = \sin(x) \, dx $

Calculating the necessary derivatives and integrals gives us:

- $ \frac{du}{dx} = 12x^2 $
- $ v = -\cos(x) $

Substituting these back into the integration by parts formula yields:

$$
\int 4x^3 \sin(x) \, dx = 4x^3 (-\cos(x)) - \int -\cos(x) \, (12x^2) \, dx = -4x^3 \cos(x) + \int 12x^2 \cos(x) \, dx.
$$

Now substituting this back into our previous expression, we have:

$$
\int x^4 \cos(x) \, dx = x^4 \sin(x) - 4x^3 \cos(x) + \int 12x^2 \cos(x) \, dx.
$$

We repeat the integration by parts for $\int 12x^2 \cos(x) \, dx$. Let:

- $ u = 12x^2 $
- $ dv = \cos(x) \, dx $

Calculating gives us:

- $ \frac{du}{dx} = 24x $
- $ v = \sin(x) $

This leads to:

$$
\int 12x^2 \cos(x) \, dx = 12x^2 \sin(x) - \int 24x \sin(x) \, dx.
$$

Substituting this result back, we have:

$$
\int x^4 \cos(x) \, dx = x^4 \sin(x) - 4x^3 \cos(x) + 12x^2 \sin(x) - \int 24x \sin(x) \, dx.
$$

Now, we apply integration by parts one last time for $\int 24x \sin(x) \, dx$. We set:

- $ u = 24x $
- $ dv = \sin(x) \, dx $

Calculating gives us:

- $ \frac{du}{dx} = 24 $
- $ v = -\cos(x) $

Thus, we obtain:

$$
\int 24x \sin(x) \, dx = 24x (-\cos(x)) - \int -\cos(x) (24) \, dx = -24x \cos(x) + 24 \sin(x).
$$

Putting this back into our integral, we get:

$$
\int x^4 \cos(x) \, dx = x^4 \sin(x) - 4x^3 \cos(x) + 12x^2 \sin(x) - (-24x \cos(x) + 24 \sin(x)).
$$

After simplifying, we arrive at the final result:

$$
\int x^4 \cos(x) \, dx = x^4 \sin(x) + 4x^3 \cos(x) + 12x^2 \sin(x) - 24x \cos(x) - 24 \sin(x) + C.
$$

Here, $C$ is the constant of integration.
    