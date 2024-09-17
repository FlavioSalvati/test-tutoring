---
title: "What's the integral of 1/(x^2+1)^2?"
summary: The integral of $ \frac{1}{(x^2+1)^2} $ is $ \frac{1}{2} \arctan\left(\frac{x}{x^2+1}\right) + C $.
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-02-29
---

Let's enhance the clarity and readability of the content while ensuring proper formatting of mathematical expressions.

---

To evaluate the integral 

$$
\int \frac{1}{(x^2 + 1)^2} \, dx,
$$

we can use the substitution \( u = x^2 + 1 \). Calculating the derivative, we find 

$$
\frac{du}{dx} = 2x,
$$ 

which implies 

$$
dx = \frac{du}{2x}.
$$ 

Substituting these values into the integral, we obtain:

$$
\int \frac{1}{(x^2 + 1)^2} \, dx = \int \frac{1}{u^2} \cdot \frac{du}{2x} = \frac{1}{2} \int u^{-2} \, du.
$$ 

Next, we integrate \( u^{-2} \):

$$
\int u^{-2} \, du = -u^{-1} + C.
$$ 

Returning to our original variable by substituting back for \( u \), we have:

$$
\frac{1}{2} \int (x^2 + 1)^{-2} \, dx = \frac{1}{2} \left(-\frac{1}{x^2 + 1}\right) + C.
$$ 

Simplifying this expression, we arrive at:

$$
-\frac{1}{2(x^2 + 1)} + C.
$$ 

To express the final result in a more recognizable form, we can also relate this to the arctangent function. The integral simplifies to:

$$
\frac{1}{2} \arctan\left(\frac{x}{x^2 + 1}\right) + C.
$$ 

Thus, we conclude that the integral 

$$
\int \frac{1}{(x^2 + 1)^2} \, dx = \frac{1}{2} \arctan\left(\frac{x}{x^2 + 1}\right) + C.
$$ 

This is the final answer.
    