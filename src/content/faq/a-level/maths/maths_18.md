---
title: "What's the integral of x/(1+x^4)?"
summary: "The integral of x/(1+x^4) can be solved through methods such as partial fractions and substitution to simplify the expression for easier integration."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-17
---

To find the integral of the function \(\frac{x}{1+x^4}\), we can employ the techniques of partial fractions and substitution.

We start by expressing the integrand \(\frac{x}{1+x^4}\) as a sum of simpler fractions. We can write:

$$
\frac{x}{1+x^4} = \frac{A}{x^2+1} + \frac{B}{x^2-1}
$$

Next, we will eliminate the denominators by multiplying both sides by \(1+x^4\) and simplifying the equation:

$$
x = A(x^2-1) + B(x^2+1)
$$

To find the constants \(A\) and \(B\), we can substitute specific values for \(x\). First, let’s set \(x = 1\):

$$
1 = A(0) + B(2) \implies B = \frac{1}{2}
$$

Next, we substitute \(x = -1\):

$$
-1 = A(0) + B(0) \implies A = -\frac{1}{2}
$$

With \(A\) and \(B\) determined, we can rewrite the original expression as:

$$
\frac{x}{1+x^4} = -\frac{1}{2}\cdot\frac{1}{x^2+1} + \frac{1}{2}\cdot\frac{1}{x^2-1}
$$

Now we can integrate each term separately. For the first term, we will use the substitution \(u = x^2 + 1\) leading to \(du = 2x \, dx\):

$$
\int -\frac{1}{2}\cdot\frac{1}{x^2+1} \, dx = -\frac{1}{2} \int \frac{1}{u} \cdot \frac{du}{2} = -\frac{1}{4} \ln|u| + C = -\frac{1}{4} \ln|x^2 + 1| + C
$$

For the second term, we will use the substitution \(u = x^2 - 1\) with \(du = 2x \, dx\):

$$
\int \frac{1}{2}\cdot\frac{1}{x^2-1} \, dx = \frac{1}{2} \cdot \frac{1}{2} \int \frac{1}{u} \, du = \frac{1}{4} \ln|u| + C = \frac{1}{4} \ln|x^2 - 1| + C
$$

Combining both integrals, we arrive at the final result:

$$
\int \frac{x}{1+x^4} \, dx = -\frac{1}{4} \ln|x^2 + 1| + \frac{1}{4} \ln|x^2 - 1| + C
$$

Thus, we have successfully computed the integral of \(\frac{x}{1+x^4}\).
    