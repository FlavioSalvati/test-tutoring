---
title: "How to integrate (x+1)/(x^2+1)?"
summary: "To integrate the function (x+1)/(x^2+1), apply the substitution method with u = x^2 + 1 to simplify the integration process."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-01-26
---

To compute the integral of the expression $\frac{x+1}{x^2+1}$, we can utilize the method of substitution. Let's set 

$$ u = x^2 + 1. $$

Next, we differentiate $u$ with respect to $x$:

$$ \frac{du}{dx} = 2x, $$ 

which allows us to express $dx$ in terms of $du$:

$$ dx = \frac{du}{2x}. $$

Now, substituting $u$ and $dx$ into the integral, we have:

$$ \int \frac{x+1}{x^2+1} \, dx = \int \frac{x+1}{u} \cdot \frac{du}{2x}. $$

This simplifies to:

$$ = \frac{1}{2} \int \left( \frac{x}{u} + \frac{1}{u} \right) du. $$

At this point, we can rewrite $x$ in terms of $u$. Since $u = x^2 + 1$, we have:

$$ x = \sqrt{u - 1}. $$

Thus, the integral becomes:

$$ = \frac{1}{2} \int \left( \frac{\sqrt{u - 1}}{u} + \frac{1}{u} \right) du. $$

However, to simplify our calculations, we can separate the terms:

$$ = \frac{1}{2} \int \frac{1}{u} \, du + \frac{1}{2} \int 1 \, du. $$

Calculating these integrals gives:

$$ = \frac{1}{2} \left( \ln |u| + u \right) + C. $$

Now substituting back $u = x^2 + 1$, we obtain:

$$ = \frac{1}{2} \left( x^2 + 1 + \ln |x^2 + 1| \right) + C. $$

Therefore, the integral of $\frac{x+1}{x^2+1}$ is:

$$ \frac{1}{2} \left( x^2 + 1 + \ln |x^2 + 1| \right) + C, $$ 

where $C$ is the constant of integration.
    