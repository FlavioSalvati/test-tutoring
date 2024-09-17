---
title: "Prove the formula for the integral of x^n"
summary: "The integral of x^n is given by the formula (x^(n+1))/(n+1) + C, with C representing the constant of integration."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-20
---

The formula for the integral of $x^n$ is given by 

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C,
$$ 

where $C$ represents the constant of integration.

To validate this formula, we can apply the power rule of integration. According to this rule, the integral of $x^n$ is 

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C.
$$ 

To verify this result, we can differentiate the expression and check if we recover the original function.

Let’s differentiate 

$$
\frac{x^{n+1}}{n+1} + C 
$$ 

with respect to $x$. Utilizing the power rule of differentiation, we find:

$$
\frac{d}{dx} \left( \frac{x^{n+1}}{n+1} + C \right) = \frac{(n+1)x^n}{n+1} = x^n.
$$ 

This outcome is precisely the original function $x^n$, confirming that 

$$
\frac{x^{n+1}}{n+1} + C 
$$ 

is indeed the antiderivative of $x^n$.

Another method to establish this formula is through integration by substitution. Let us set 

$$
u = x^{n+1}.
$$ 

Then, the derivative of $u$ with respect to $x$ is 

$$
\frac{du}{dx} = (n+1)x^n.
$$ 

Rearranging this gives us 

$$
dx = \frac{du}{(n+1)x^n}.
$$ 

Now, substituting these expressions into the integral of $x^n$ yields:

$$
\int x^n \, dx = \int u \cdot \frac{du}{(n+1)x^n}.
$$ 

This simplifies to 

$$
\int x^n \, dx = \frac{1}{n+1} \int u^{-\frac{n}{n+1}} \, du.
$$ 

Integrating $u^{-\frac{n}{n+1}}$, we have:

$$
\int u^{-\frac{n}{n+1}} \, du = \frac{u^{\frac{n+1}{n+1}}}{\frac{n+1}{n+1}} + C = u + C.
$$ 

Substituting back for $u$ gives:

$$
= \frac{x^{n+1}}{n+1} + C.
$$ 

This result matches the formula we derived earlier using the power rule of integration. Thus, we have successfully proven the formula for the integral of $x^n$.
    