---
title: "How to integrate x/(x^2+1)^2?"
summary: "To integrate x/(x^2+1)^2, use substitution with u = x^2 + 1."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-16
---

To evaluate the integral 

$$ 
\int \frac{x}{(x^2 + 1)^2} \, dx, 
$$ 

we can use the method of substitution. Let us define a new variable:

$$ 
u = x^2 + 1. 
$$ 

Next, we need to compute the derivative of $u$ with respect to $x$:

$$ 
\frac{du}{dx} = 2x. 
$$ 

From this, we can express $dx$ in terms of $du$:

$$ 
dx = \frac{du}{2x}. 
$$ 

Now, we can rewrite the integral in terms of $u$. Substituting $u$ and $dx$ into the integral gives:

$$ 
\int \frac{x}{(x^2 + 1)^2} \, dx = \int \frac{x}{u^2} \cdot \frac{du}{2x} = \int \frac{1}{2u^2} \, du. 
$$ 

Now, we apply the power rule for integration. The integral of $\frac{1}{2u^2}$ is:

$$ 
\int \frac{1}{2u^2} \, du = -\frac{1}{2u} + C, 
$$ 

where $C$ is the constant of integration. 

Finally, we substitute back for $u$ to express the result in terms of $x$:

$$ 
-\frac{1}{2(x^2 + 1)} + C. 
$$ 

Thus, the final result of the integral is:

$$ 
\int \frac{x}{(x^2 + 1)^2} \, dx = -\frac{1}{2(x^2 + 1)} + C. 
$$
    