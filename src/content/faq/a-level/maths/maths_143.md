---
title: "How to integrate (1+x)^3/(x^2+1)?"
summary: "To integrate the expression (1+x)^3/(x^2+1), apply partial fractions and substitution methods for simplification and calculation."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-22
---

To evaluate the integral 

$$ 
\int \frac{(1+x)^3}{x^2+1} \, dx, 
$$ 

we will use the method of partial fractions along with substitution.

First, we decompose the integrand into simpler fractions. We express 

$$ 
\frac{(1+x)^3}{x^2+1} 
$$ 

as a sum of fractions in the following form:

$$ 
\frac{(1+x)^3}{x^2+1} = A(x+1) + B(x^2+1) + C, 
$$ 

where $A$, $B$, and $C$ are constants to be determined.

To find these constants, we multiply both sides by $x^2 + 1$ and substitute appropriate values for $x$. By substituting $x = i$ and $x = -i$ (where $i$ is the imaginary unit), we obtain the following system of equations:

1. 

$$ 
A(i+1) + B(i^2+1) + C = 0 
$$ 

2. 

$$ 
A(-i+1) + B((-i)^2+1) + C = 0 
$$ 

By simplifying these equations, we can solve for the coefficients $A$, $B$, and $C$. After performing the calculations, we find:

$$ 
A = \frac{1}{2}, \quad B = \frac{3}{4}, \quad C = -\frac{1}{4}. 
$$ 

Next, we substitute the values of $A$, $B$, and $C$ back into the integral:

$$ 
\int \frac{(1+x)^3}{x^2+1} \, dx = \int \left( \frac{1}{2} \frac{x+1}{x^2+1} + \frac{3}{4} \frac{x^2+1}{x^2+1} - \frac{1}{4} \right) \, dx. 
$$ 

This simplifies to:

$$ 
\int \frac{1}{2} \frac{x+1}{x^2+1} \, dx + \int \frac{3}{4} \, dx - \int \frac{1}{4} \, dx. 
$$ 

Now, we can integrate each term separately:

1. For the first term, we perform the integration:

$$ 
\int \frac{x+1}{x^2+1} \, dx = \frac{1}{2} \ln(x^2+1) + \arctan(x). 
$$ 

Thus, 

$$ 
\frac{1}{2} \int \frac{x+1}{x^2+1} \, dx = \frac{1}{4} \ln(x^2+1) + \frac{1}{2} \arctan(x). 
$$ 

2. The second term integrates to:

$$ 
\int \frac{3}{4} \, dx = \frac{3}{4} x. 
$$ 

3. The last term integrates to:

$$ 
\int -\frac{1}{4} \, dx = -\frac{1}{4} x. 
$$ 

Combining all these results, we obtain:

$$ 
\int \frac{(1+x)^3}{x^2+1} \, dx = \frac{1}{4} \ln(x^2+1) + \frac{3}{4} x - \frac{1}{4} \arctan(x) + C, 
$$ 

where $C$ is the constant of integration.

Thus, the final result of the integral is:

$$ 
\frac{1}{4} \ln(x^2+1) + \frac{3}{4} x - \frac{1}{4} \arctan(x) + C. 
$$
    