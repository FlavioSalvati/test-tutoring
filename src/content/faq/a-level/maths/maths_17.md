---
title: "How to integrate 1/(1+e^x)?"
summary: "To integrate 1/(1+e^x), substitute u = 1+e^x, then simplify the expression using partial fractions for easier integration."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-23
---

To integrate the function \(\frac{1}{1 + e^x}\), we can start with a substitution. Let \(u = 1 + e^x\). 

Calculating the derivative, we have:

$$
\frac{du}{dx} = e^x \quad \Rightarrow \quad dx = \frac{du}{e^x}.
$$

By substituting these values into the integral, we rewrite it as follows:

$$
\int \frac{1}{1 + e^x} \, dx = \int \frac{1}{u} \cdot \frac{du}{e^x} = \int \frac{1}{u} \cdot e^{-x} \, du.
$$

Next, we need to simplify the integrand using partial fractions. We can express \(\frac{1}{u}\) in terms of two fractions:

$$
\frac{1}{u} = \frac{A}{1 + e^x} + \frac{B}{1 + e^{-x}}.
$$

Multiplying through by \(u\) gives us:

$$
1 = A(1 + e^{-x}) + B(1 + e^x).
$$

To find the constants \(A\) and \(B\), we can substitute convenient values for \(x\).

1. Let \(x = 0\):

$$
1 = A(2) + B(2) \quad \Rightarrow \quad A + B = \frac{1}{2}.
$$

2. Let \(x = \ln(2)\):

$$
1 = A\left(1 + \frac{1}{2}\right) + B\left(1 + 2\right) \quad \Rightarrow \quad 1 = \frac{3}{2}A + 3B.
$$

Now, we have the system of equations:

1. \(A + B = \frac{1}{2}\)
2. \(\frac{3}{2}A + 3B = 1\)

From the first equation, we can express \(B\) in terms of \(A\):

$$
B = \frac{1}{2} - A.
$$

Substituting this expression into the second equation gives:

$$
\frac{3}{2}A + 3\left(\frac{1}{2} - A\right) = 1.
$$

Simplifying this, we have:

$$
\frac{3}{2}A + \frac{3}{2} - 3A = 1 \quad \Rightarrow \quad -\frac{3}{2}A + \frac{3}{2} = 1 \quad \Rightarrow \quad -\frac{3}{2}A = -\frac{1}{2} \quad \Rightarrow \quad A = \frac{1}{3}.
$$

Now substituting \(A\) back into the first equation to find \(B\):

$$
\frac{1}{3} + B = \frac{1}{2} \quad \Rightarrow \quad B = \frac{1}{2} - \frac{1}{3} = \frac{3}{6} - \frac{2}{6} = \frac{1}{6}.
$$

Now we have \(A = \frac{1}{3}\) and \(B = \frac{1}{6}\). 

Substituting these values back into the integral, we obtain:

$$
\int \left(\frac{1/3}{1 + e^x} + \frac{1/6}{1 + e^{-x}}\right) e^{-x} \, du.
$$

This simplifies to:

$$
\int \left(\frac{1/3}{1 + e^x} + \frac{1/6}{1 + e^{-x}}\right) \, dx.
$$

Carrying out the integration yields:

$$
= \frac{1}{3} \ln(1 + e^x) + \frac{1}{6} \ln(1 + e^{-x}) + C.
$$

Thus, the final result for the integral of \(\frac{1}{1 + e^x}\) is:

$$
\int \frac{1}{1 + e^x} \, dx = \frac{1}{3} \ln(1 + e^x) + \frac{1}{6} \ln(1 + e^{-x}) + C.
$$
    