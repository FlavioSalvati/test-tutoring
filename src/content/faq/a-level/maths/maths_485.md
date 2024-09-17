---
title: "Evaluate the integral of sin^4(x) dx"
summary: "The integral of sin^4(x) dx is (3x/8) - (1/4)sin(2x) + (1/32)sin(4x) + C."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-24
---

To evaluate the integral of $\sin^4(x) \, dx$, we start by applying the identity 

$$\sin^2(x) = \frac{1}{2}(1 - \cos(2x)).$$ 

Using this, we can rewrite $\sin^4(x)$ as follows:

$$\sin^4(x) = \left(\sin^2(x)\right)^2 = \left(\frac{1}{2}(1 - \cos(2x))\right)^2 = \frac{1}{4}(1 - \cos(2x))^2.$$

Next, we expand the square using the binomial formula:

$$\sin^4(x) = \frac{1}{4}(1 - 2\cos(2x) + \cos^2(2x)).$$

Now, we can integrate each term separately. The integral of $1 \, dx$ is simply $x$. 

To integrate $\cos^2(2x) \, dx$, we utilize the identity 

$$\cos^2(2x) = \frac{1}{2}(1 + \cos(4x)).$$ 

Thus, the integral of $\cos^2(2x) \, dx$ becomes:

$$\int \cos^2(2x) \, dx = \int \frac{1}{2}(1 + \cos(4x)) \, dx = \frac{1}{2}\left(\int 1 \, dx + \int \cos(4x) \, dx\right).$$

The integral of $1 \, dx$ is $x$, and the integral of $\cos(4x) \, dx$ can be computed using the substitution $u = 4x$, $du = 4 \, dx$, which gives:

$$\int \cos(4x) \, dx = \frac{1}{4}\sin(4x) + C.$$

Therefore, we have:

$$\int \cos^2(2x) \, dx = \frac{1}{2}\left(x + \frac{1}{4}\sin(4x)\right) = \frac{x}{2} + \frac{1}{8}\sin(4x).$$

For the integral of $\cos(2x) \, dx$, we can use the substitution $u = 2x$, $du = 2 \, dx$, which leads us to:

$$\int \cos(2x) \, dx = \frac{1}{2}\sin(2x) + C.$$

Now that we have all the necessary integrals, we can combine them:

$$\int \sin^4(x) \, dx = \int \frac{1}{4}(1 - 2\cos(2x) + \cos^2(2x)) \, dx$$

This can be expressed as:

$$= \frac{1}{4}\left(\int 1 \, dx - 2\int \cos(2x) \, dx + \int \cos^2(2x) \, dx\right).$$

Substituting the integrals we computed:

$$= \frac{1}{4}\left(x - 2\left(\frac{1}{2}\sin(2x)\right) + \left(\frac{x}{2} + \frac{1}{8}\sin(4x)\right)\right).$$

Simplifying this expression gives:

$$= \frac{1}{4}\left(x - \sin(2x) + \frac{x}{2} + \frac{1}{8}\sin(4x)\right).$$

Combining the terms inside the parentheses yields:

$$= \frac{1}{4}\left(\frac{3x}{2} - \sin(2x) + \frac{1}{8}\sin(4x)\right).$$

Finally, distributing the $\frac{1}{4}$ leads to:

$$= \frac{3x}{8} - \frac{1}{4}\sin(2x) + \frac{1}{32}\sin(4x) + C.$$

Thus, the integral of $\sin^4(x) \, dx$ is 

$$\frac{3x}{8} - \frac{1}{4}\sin(2x) + \frac{1}{32}\sin(4x) + C.$$
    