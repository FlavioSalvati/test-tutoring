---
title: "What's the integral of e^x*cos(2x)?"
summary: "The integral of e^x*cos(2x) is (1/5)*e^x*(cos(2x)+0.5*sin(2x))+C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-28
---

The integral of $ e^x \cos(2x) $ can be expressed as:

$$
\int e^x \cos(2x) \, dx = \frac{1}{5} e^x \left( \cos(2x) + 0.5 \sin(2x) \right) + C
$$

To solve this integral, we utilize the method of integration by parts. We start by letting:

- $ u = e^x $
- $ dv = \cos(2x) \, dx $

From this, we can find the derivatives:

- $ du = e^x \, dx $
- $ v = \frac{1}{2} \sin(2x) $

Applying the integration by parts formula, we have:

$$
\int e^x \cos(2x) \, dx = e^x \cdot \frac{1}{2} \sin(2x) - \int \frac{1}{2} \sin(2x) e^x \, dx
$$

Next, we need to apply integration by parts again on the remaining integral $ \int \frac{1}{2} \sin(2x) e^x \, dx $. We set:

- $ u = e^x $
- $ dv = \sin(2x) \, dx $

Calculating the derivatives again gives us:

- $ du = e^x \, dx $
- $ v = -\frac{1}{2} \cos(2x) $

Using the integration by parts formula once more, we find:

$$
\int e^x \sin(2x) \, dx = -\frac{1}{2} e^x \cos(2x) - \int -\frac{1}{2} \cos(2x) e^x \, dx
$$

This allows us to rewrite our previous expression as:

$$
\int e^x \cos(2x) \, dx = e^x \cdot \frac{1}{2} \sin(2x) + \frac{1}{4} e^x \cos(2x) - \int \frac{1}{4} \cos(2x) e^x \, dx
$$

Next, we can apply integration by parts once more to $ \int \frac{1}{4} \cos(2x) e^x \, dx $:

- Let $ u = e^x $
- Let $ dv = \cos(2x) \, dx $

We find the same derivatives as before:

- $ du = e^x \, dx $
- $ v = \frac{1}{2} \sin(2x) $

Thus, we can express the integral again:

$$
\int e^x \cos(2x) \, dx = e^x \cdot \frac{1}{2} \sin(2x) + \frac{1}{4} e^x \cos(2x) - \left( e^x \cdot \frac{1}{8} \sin(2x) - \int \frac{1}{8} \sin(2x) e^x \, dx \right)
$$

Simplifying our expression leads us to:

$$
\int e^x \cos(2x) \, dx = \frac{1}{2} e^x \sin(2x) - \frac{1}{4} e^x \cos(2x) + \frac{1}{8} \int e^x \sin(2x) \, dx
$$

To find $ \int e^x \sin(2x) \, dx $, we can again apply integration by parts as before, ultimately leading to:

$$
\int e^x \sin(2x) \, dx = -\frac{1}{2} e^x \cos(2x) + \text{(integral terms)}
$$

By solving the integrals systematically, we will arrive at the final expression for $ \int e^x \cos(2x) \, dx $.
    