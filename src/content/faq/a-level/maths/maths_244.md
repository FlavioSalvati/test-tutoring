---
title: "What's the integral of x*e^x?"
summary: "The integral of x*e^x is (x-1)*e^x + C, with C representing the constant of integration."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-02-09
---

Let's enhance the content for clarity and readability, while ensuring that mathematical expressions are properly formatted using LaTeX.

---

To find the integral of the function $x e^x$, we can apply the technique of integration by parts. The result of this integral is given by:

$$
\int x e^x \, dx = (x - 1)e^x + C
$$

where $C$ represents the constant of integration.

### Step-by-step Integration by Parts

We start by setting:
- \( u = x \)
- \( \frac{dv}{dx} = e^x \)

From these choices, we can derive:
- \( \frac{du}{dx} = 1 \) which implies \( du = dx \)
- \( v = e^x \)

Using the integration by parts formula:

$$
\int u \, dv = uv - \int v \, du
$$

we can substitute our values:

$$
\int x e^x \, dx = x e^x - \int e^x \, dx
$$

The integral of \( e^x \) is straightforward:

$$
\int e^x \, dx = e^x
$$

Substituting this back into our expression gives us:

$$
\int x e^x \, dx = x e^x - e^x + C
$$

We can further simplify this expression by factoring out \( e^x \):

$$
\int x e^x \, dx = (x - 1)e^x + C
$$

### Verification of the Result

To confirm that our result is correct, we can differentiate \( (x - 1)e^x \) and check if we obtain the original integrand \( x e^x \):

$$
\frac{d}{dx} \left[(x - 1)e^x\right] = e^x + (x - 1)e^x = e^x + x e^x - e^x = x e^x
$$

Thus, the derivative of \( (x - 1)e^x \) indeed yields \( x e^x \), confirming that our integral calculation is accurate.

### Conclusion

The final result for the integral of \( x e^x \) is:

$$
\int x e^x \, dx = (x - 1)e^x + C
$$

where $C$ is the constant of integration.
    