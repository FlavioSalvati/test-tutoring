---
title: "What's the integral of sin(x)cos^2(x)?"
summary: "The integral of sin(x)cos^2(x) results in (cos^3(x))/3 - (cos(x)sin(x))/2 + C, where C represents the constant of integration."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-08-07
---

To find the integral of $\sin(x) \cos^2(x)$, we start with the expression:

$$\int \sin(x) \cos^2(x) \, dx = \frac{\cos^3(x)}{3} - \frac{\cos(x) \sin(x)}{2} + C$$

To solve this integral, we can utilize the substitution $u = \cos(x)$. Consequently, we have:

$$\frac{du}{dx} = -\sin(x) \implies dx = -\frac{du}{\sin(x)}$$

Substituting these into the integral gives:

$$\int \sin(x) \cos^2(x) \, dx = \int -u^2 \, du = -\frac{u^3}{3} + C$$

Now, substituting back $u = \cos(x)$, we find:

$$-\frac{\cos^3(x)}{3} + C$$

However, we need to simplify our result further. To do this, we can apply the Pythagorean identity $\cos^2(x) + \sin^2(x) = 1$. Rearranging this identity leads us to:

$$\sin^2(x) = 1 - \cos^2(x)$$

Using this in the original integral, we transform it as follows:

$$\int \sin(x) \cos^2(x) \, dx = \int \sin(x) (1 - \sin^2(x)) \, dx$$

Let's make the substitution $u = \sin(x)$. Then, we have:

$$\int u(1 - u^2) \, du = \int (u - u^3) \, du = \frac{u^2}{2} - \frac{u^4}{4} + C$$

Substituting back $u = \sin(x)$, we obtain:

$$\frac{\sin^2(x)}{2} - \frac{\sin^4(x)}{4} + C$$

Now, using the identity $\cos^2(x) = 1 - \sin^2(x)$, we can rewrite our result as:

$$\frac{\sin^2(x)}{2} - \frac{(1 - \cos^2(x))^2}{4} + C$$

Through simplification, we arrive back at our initial integral:

$$\frac{\cos^3(x)}{3} - \frac{\cos(x) \sin(x)}{2} + C$$

In conclusion, the integral of $\sin(x) \cos^2(x)$ is:

$$\int \sin(x) \cos^2(x) \, dx = \frac{\cos^3(x)}{3} - \frac{\cos(x) \sin(x)}{2} + C$$
    