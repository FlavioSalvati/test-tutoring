---
title: "How to integrate x^4/(x^2+1)^2?"
summary: "To integrate x^4/(x^2+1)^2, use substitution with u = x^2+1."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-17
---

To evaluate the integral 

$$
\int \frac{x^4}{(x^2 + 1)^2} \, dx,
$$ 

we will use the substitution $ u = x^2 + 1 $. 

First, we compute the derivative of $ u $ with respect to $ x $:

$$
\frac{du}{dx} = 2x.
$$ 

This implies that 

$$
dx = \frac{du}{2x}.
$$ 

Next, we substitute $ u $ and $ dx $ into the integral. Notice that we can express $ x^4 $ in terms of $ u $:

$$
x^4 = (u - 1)^2,
$$ 

as $ x^2 = u - 1 $. The integral now transforms as follows:

$$
\int \frac{x^4}{(x^2 + 1)^2} \, dx = \int \frac{(u - 1)^2}{u^2} \cdot \frac{du}{2x}.
$$ 

Since $ x = \sqrt{u - 1} $, we can substitute $ x $ in the denominator:

$$
= \frac{1}{2} \int \frac{(u - 1)^2}{u^2} \cdot \frac{du}{\sqrt{u - 1}}.
$$ 

We can simplify the expression inside the integral:

$$
= \frac{1}{2} \int \left( \frac{u^2 - 2u + 1}{u^2} \right) du = \frac{1}{2} \int \left( 1 - \frac{2}{u} + \frac{1}{u^2} \right) du.
$$ 

Now, we can integrate each term separately:

$$
= \frac{1}{2} \left( u - 2 \ln |u| + \frac{1}{u} \right) + C.
$$ 

Substituting back $ u = x^2 + 1 $, we get:

$$
= \frac{1}{2} \left( x^2 + 1 - 2 \ln |x^2 + 1| + \frac{1}{x^2 + 1} \right) + C.
$$ 

Thus, the final result of the integral is:

$$
\int \frac{x^4}{(x^2 + 1)^2} \, dx = \frac{1}{2} \ln |x^2 + 1| + \frac{1}{x^2 + 1} - \frac{1}{2(x^2 + 1)^2} + C.
$$
    