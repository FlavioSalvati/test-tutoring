---
title: "How to integrate x^2/(x^2+1)?"
summary: "To integrate x^2/(x^2+1), use substitution with u = x^2+1 and du = 2x dx."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-21
---

To evaluate the integral of the function $\frac{x^2}{x^2 + 1}$, we will use the method of substitution. We start by letting 

$$
u = x^2 + 1
$$

From this substitution, we can find the differential $du$:

$$
du = 2x \, dx \quad \Rightarrow \quad dx = \frac{du}{2x}
$$

Next, we need to express $x^2$ in terms of $u$. Since $u = x^2 + 1$, we can rearrange this to find:

$$
x^2 = u - 1
$$

Now we can rewrite the integral $\int \frac{x^2}{x^2 + 1} \, dx$ in terms of $u$:

$$
\int \frac{x^2}{x^2 + 1} \, dx = \int \frac{u - 1}{u} \cdot \frac{du}{2x}
$$

However, we notice that we need to express $x$ in terms of $u$ as well. Since $u = x^2 + 1$, we can express $x$ as:

$$
x = \sqrt{u - 1}
$$

Thus, substituting into the integral gives us:

$$
\int \frac{u - 1}{u} \cdot \frac{du}{2\sqrt{u - 1}}
$$

Instead, let’s simplify the integral directly in terms of $u$:

$$
\int \frac{u - 1}{u} \, du = \int \left(1 - \frac{1}{u}\right) \, du
$$

We can now integrate each term separately:

$$
\int \left(1 - \frac{1}{u}\right) \, du = u - \ln|u| + C
$$

Finally, we substitute back the expression for $u$:

$$
u - \ln|u| + C = (x^2 + 1) - \ln|x^2 + 1| + C
$$

Thus, the integral of $\frac{x^2}{x^2 + 1}$ is:

$$
\int \frac{x^2}{x^2 + 1} \, dx = x^2 + 1 - \ln|x^2 + 1| + C
$$

In conclusion, the result of the integral is:

$$
x^2 + 1 - \ln|x^2 + 1| + C
$$
    