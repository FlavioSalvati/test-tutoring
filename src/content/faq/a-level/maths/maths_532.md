---
title: "Evaluate the integral of x^3 dx"
summary: "The integral of x^3 dx is (1/4)x^4 + C, where C is the constant of integration."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-07
---

To find the integral of $x^3 \, dx$, we use the power rule of integration. This rule states that the integral of $x^n \, dx$ is given by 

$$ 
\int x^n \, dx = \frac{1}{n+1} x^{n+1} + C 
$$ 

where $C$ is the constant of integration. For our case, with $n = 3$, we apply this rule as follows:

$$ 
\int x^3 \, dx = \frac{1}{4} x^4 + C 
$$ 

To verify our result, we differentiate $\frac{1}{4} x^4 + C$ with respect to $x$. According to the power rule of differentiation, the derivative of $x^n$ is given by 

$$ 
\frac{d}{dx} (x^n) = n x^{n-1} 
$$ 

Applying this differentiation rule to $\frac{1}{4} x^4 + C$, we have:

$$ 
\frac{d}{dx} \left( \frac{1}{4} x^4 + C \right) = \frac{1}{4} \frac{d}{dx} (x^4) + \frac{d}{dx} (C) 
= \frac{1}{4} (4x^3) + 0 
= x^3 
$$ 

Thus, the derivative of $\frac{1}{4} x^4 + C$ is indeed $x^3$, confirming that our original integral is correct.
    