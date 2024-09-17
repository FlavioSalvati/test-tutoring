---
title: "How to calculate the cosine of a complex number?"
summary: "The cosine of a complex number can be calculated using the exponential form of the complex number."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-18
---

The cosine of a complex number can be computed using its exponential representation.

To find the cosine of a complex number, we first express it in exponential form. Let $ z = x + iy $ be a complex number, where $ x $ and $ y $ are real numbers. We can rewrite $ z $ in its exponential form as 

$$ 
z = re^{i\theta} 
$$ 

where $ r = |z| $ is the modulus of $ z $ and $ \theta $ is the argument of $ z $.

The cosine of $ z $ can be calculated using the formula 

$$ 
\cos(z) = \frac{e^{iz} + e^{-iz}}{2} 
$$ 

To understand why this formula is valid, we can refer to Euler's formula, which states that 

$$ 
e^{ix} = \cos(x) + i \sin(x) 
$$ 

for any real number $ x $.

Now, substituting $ z = x + iy $ into the formula for $ \cos(z) $, we obtain:

$$ 
\cos(z) = \frac{e^{i(x + iy)} + e^{-i(x + iy)}}{2} 
$$ 

This simplifies to:

$$ 
\cos(z) = \frac{e^{ix} e^{-y} + e^{-ix} e^{y}}{2} 
$$ 

Breaking this down further, we have:

$$ 
\cos(z) = \frac{\left( \cos(x) + i \sin(x) \right) e^{-y} + \left( \cos(x) - i \sin(x) \right) e^{y}}{2} 
$$ 

This leads to:

$$ 
\cos(z) = \frac{\cos(x)e^{-y} + \cos(x)e^{y}}{2} + i \frac{\sin(x)e^{-y} - \sin(x)e^{y}}{2} 
$$ 

Finally, we can combine the terms to arrive at the following expression for the cosine of the complex number $ z = x + iy $:

$$ 
\cos(z) = \cos(x) \cosh(y) + i \sin(x) \sinh(y) 
$$ 

Thus, the cosine of a complex number $ z = x + iy $ is given by 

$$ 
\cos(z) = \cos(x) \cosh(y) + i \sin(x) \sinh(y) 
$$ 

This formula elegantly combines the trigonometric and hyperbolic functions to yield the cosine of a complex argument.
    