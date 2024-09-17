---
title: "Evaluate the integral of 1/(1+x^2) dx"
summary: "The integral of 1/(1+x^2) with respect to x equals arctan(x) plus a constant C."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-06
---

To evaluate the integral 

$$
\int \frac{1}{1+x^2} \, dx,
$$ 

we can use the substitution method. We start by letting \( u = x^2 + 1 \). Then, we can find \( \frac{du}{dx} = 2x \), which means 

$$
dx = \frac{du}{2x}.
$$ 

Substituting these expressions into the integral, we have:

$$
\int \frac{1}{1+x^2} \, dx = \int \frac{1}{u} \cdot \frac{du}{2x} = \frac{1}{2} \int \frac{1}{u} \, du.
$$ 

The integral of \( \frac{1}{u} \) is 

$$
\ln |u| + C,
$$ 

so we get:

$$
\frac{1}{2} \ln |u| + C = \frac{1}{2} \ln |x^2 + 1| + C.
$$ 

However, we can simplify this integral further by utilizing the inverse trigonometric function \( \arctan \). Recall the identity:

$$
\tan(\arctan(x)) = x.
$$ 

From this, we can derive:

$$
\frac{1}{1 + \tan^2(\arctan(x))} = \frac{1}{1 + x^2}.
$$ 

Thus, we can express the integral as:

$$
\int \frac{1}{1+x^2} \, dx = \int \cos^2(\arctan(x)) \, dx.
$$ 

Next, using the identity \( \tan^2(\arctan(x)) = x^2 \), we find:

$$
\int \frac{1+x^2}{1+x^2} \, dx = \int 1 \, dx + \int \frac{\tan^2(\arctan(x))}{1+x^2} \, dx.
$$ 

This simplifies to:

$$
x + \int (1 - \frac{1}{1+x^2}) \, dx = x + \ln |x^2 + 1| + C.
$$ 

Ultimately, the integral of 

$$
\int \frac{1}{1+x^2} \, dx
$$ 

is 

$$
\arctan(x) + C.
$$ 

In conclusion, we have:

$$
\int \frac{1}{1+x^2} \, dx = \arctan(x) + C.
$$
    