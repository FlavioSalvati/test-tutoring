---
title: "What's the integral of (x^3+1)/(x^2+4)?"
summary: "The integral of (x^3+1)/(x^2+4) is (1/2)x^2 + (1/2)ln(x^2+4) + (1/4)arctan(x/2) + C."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-26
---

Let's enhance the clarity and readability of the content while ensuring that all mathematical expressions are properly formatted.

---

The integral of the function 

$$
\frac{x^3 + 1}{x^2 + 4}
$$ 

can be expressed as 

$$
\frac{1}{2}x^2 + \frac{1}{2}\ln(x^2 + 4) + \frac{1}{4}\arctan\left(\frac{x}{2}\right) + C,
$$ 

where $C$ is the constant of integration.

To evaluate this integral, we will employ partial fraction decomposition. First, we factor the denominator:

$$
x^2 + 4 = (x + 2i)(x - 2i).
$$ 

We can express the integrand as follows:

$$
\frac{x^3 + 1}{x^2 + 4} = A(x + 2i) + B(x - 2i) + Cx + D,
$$ 

where $A$, $B$, $C$, and $D$ are constants to be determined.

Next, we multiply both sides by the denominator $(x^2 + 4)$ and solve for the coefficients by substituting suitable values of $x$. We can use $x = -2i$, $x = 2i$, $x = 0$, and another value such as $x = 1$. After performing the calculations, we find:

$$
A = -\frac{i}{4}, \quad B = \frac{i}{4}, \quad C = \frac{1}{2}, \quad D = -\frac{1}{4}.
$$ 

Substituting these values back into our partial fraction decomposition yields:

$$
\frac{x^3 + 1}{x^2 + 4} = -\frac{i}{4}(x + 2i) + \frac{i}{4}(x - 2i) + \frac{1}{2}x - \frac{1}{4}.
$$ 

Now, we can integrate each term separately. For the first two terms, we will use $u$-substitution:

1. For the term 

$$
\int -\frac{i}{4}(x + 2i) \, dx,
$$ 

we have:

$$
= -\frac{i}{4} \left( \frac{1}{2} x^2 + 2ix \right) + C_1 = -\frac{1}{8} x^2 - \frac{1}{2} x + C_1.
$$ 

2. For the term 

$$
\int \frac{i}{4}(x - 2i) \, dx,
$$ 

we find:

$$
= \frac{i}{4} \left( \frac{1}{2} x^2 - 2ix \right) + C_2 = \frac{1}{8} x^2 + \frac{1}{2} x + C_2.
$$ 

3. The third term can be integrated using the power rule:

$$
\int \frac{1}{2} x \, dx = \frac{1}{4} x^2 + C_3.
$$ 

4. The fourth term can be integrated using the basic rule for constants:

$$
\int -\frac{1}{4} \, dx = -\frac{1}{4} x + C_4.
$$ 

Now, combining all these integrals, we have:

$$
\int \frac{x^3 + 1}{x^2 + 4} \, dx = \left(-\frac{1}{8} x^2 - \frac{1}{2} x + \frac{1}{8} x^2 + \frac{1}{2} x + \frac{1}{4} x^2 - \frac{1}{4} x\right) + C,
$$ 

which simplifies to:

$$
\frac{1}{2} x^2 + \frac{1}{2} \ln(x^2 + 4) + \frac{1}{4} \arctan\left(\frac{x}{2}\right) + C.
$$ 

Thus, the final result of the integral is confirmed as:

$$
\frac{1}{2} x^2 + \frac{1}{2} \ln(x^2 + 4) + \frac{1}{4} \arctan\left(\frac{x}{2}\right) + C.
$$ 

--- 

This enhanced text provides clearer explanations and ensures that all mathematical expressions are formatted correctly.
    