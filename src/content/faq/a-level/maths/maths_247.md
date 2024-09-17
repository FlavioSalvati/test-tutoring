---
title: "What's the integral of cos^2(x)sin^4(x)?"
summary: The integral of $ \cos^2(x) \sin^4(x) $ is expressed as $ \frac{3x}{8} - \frac{1}{32} \sin(4x) + C $, highlighting the relationship between trigonometric functions and their integrals.
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-21
---

The integral of $\cos^2(x) \sin^4(x)$ can be expressed as:

$$\int \cos^2(x) \sin^4(x) \, dx = \frac{3x}{8} - \frac{1}{32} \sin(4x) + C,$$

where $C$ is the constant of integration.

To solve this integral, we utilize the trigonometric identities:

$$\cos^2(x) = \frac{1 + \cos(2x)}{2}$$ 

and 

$$\sin^4(x) = \left(\frac{1 - \cos(2x)}{2}\right)^2.$$

By substituting these identities into the integral, we have:

$$\int \cos^2(x) \sin^4(x) \, dx = \int \left(\frac{1 + \cos(2x)}{2}\right) \left(\frac{(1 - \cos(2x))^2}{4}\right) \, dx.$$

This simplifies to:

$$\int \frac{(1 + \cos(2x))(1 - 2\cos(2x) + \cos^2(2x))}{8} \, dx.$$

Expanding the numerator gives us:

$$\int \left(\frac{1}{16} - \frac{3}{16} \cos(2x) + \frac{1}{8} \cos^2(2x)\right) \, dx.$$

Next, we apply the identity for $\cos^2(2x)$:

$$\cos^2(2x) = \frac{1 + \cos(4x)}{2}.$$

Substituting this into the integral, we obtain:

$$\int \left(\frac{1}{16} - \frac{3}{16} \cos(2x) + \frac{1}{16} + \frac{1}{16} \cos(4x)\right) \, dx.$$

Combining like terms results in:

$$\int \left(\frac{3}{32} - \frac{3}{16} \cos(2x) + \frac{1}{16} \cos(4x)\right) \, dx.$$

Now, we can integrate each term separately:

1. The integral of $\frac{3}{32}$ is $\frac{3x}{32}$.
2. The integral of $-\frac{3}{16} \cos(2x)$ is $-\frac{3}{32} \sin(2x)$.
3. The integral of $\frac{1}{16} \cos(4x)$ is $\frac{1}{64} \sin(4x)$.

Putting it all together, we get:

$$\frac{3x}{32} - \frac{3}{32} \sin(2x) + \frac{1}{64} \sin(4x) + C.$$

After simplifying, we arrive at the final result:

$$\int \cos^2(x) \sin^4(x) \, dx = \frac{3x}{8} - \frac{1}{32} \sin(4x) + C.$$

To fully grasp this solution process, it can be beneficial to review the relevant identities and techniques. Additionally, for those interested in enhancing their skills in solving integrals involving trigonometric functions, exploring various methods and applications can be particularly advantageous.
    