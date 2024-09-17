---
title: "How is sin^2(x) integrated?"
summary: The integral of $\sin^2(x)$ is expressed as $\frac{1}{2}x - \frac{1}{4}\sin(2x) + C$, where $C$ represents the constant of integration.
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-14
---

To find the integral of $\sin^2(x)$, we can use the trigonometric identity:

$$\sin^2(x) = \frac{1}{2}(1 - \cos(2x)).$$

This allows us to express the integral as follows:

$$\int \sin^2(x) \, dx = \int \frac{1}{2}(1 - \cos(2x)) \, dx.$$

Next, we can separate this integral into two simpler parts:

$$\int \sin^2(x) \, dx = \int \frac{1}{2} \, dx - \int \frac{1}{2} \cos(2x) \, dx.$$

The first integral, $\int \frac{1}{2} \, dx$, is straightforward and yields:

$$\int \frac{1}{2} \, dx = \frac{1}{2} x + C_1,$$

where $C_1$ is a constant of integration.

For the second integral, we will use the substitution $u = 2x$, which gives us $du = 2 \, dx$, or equivalently, $dx = \frac{1}{2} \, du$. Thus, we have:

$$\int \frac{1}{2} \cos(2x) \, dx = \frac{1}{2} \int \cos(2x) \, dx = \frac{1}{2} \left(\frac{1}{2} \int \cos(u) \, du\right) = \frac{1}{4} \int \cos(u) \, du.$$

Using the result of the integral $\int \cos(u) \, du = \sin(u) + C_2$, we find:

$$\int \frac{1}{2} \cos(2x) \, dx = \frac{1}{4} \sin(2x) + C_2,$$

where $C_2$ is another constant of integration.

Now, combining both parts, we arrive at the final result for the integral of $\sin^2(x)$:

$$\int \sin^2(x) \, dx = \frac{1}{2} x - \frac{1}{4} \sin(2x) + C,$$

where $C$ is the overall constant of integration, which combines $C_1$ and $C_2$.
    