---
title: "How to integrate x^3/(x^2+4)?"
summary: "To integrate x^3/(x^2+4), substitute u = x^2 + 4, leading to du = 2xdx, simplifying the integration process."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-13
---

To integrate the expression \(\frac{x^3}{x^2+4}\), we will use substitution. We start by letting \(u = x^2 + 4\). Then, we differentiate \(u\) to find \(du\):

\[
du = 2x \, dx
\]

Rearranging this gives us:

\[
dx = \frac{du}{2x}
\]

Next, we substitute \(u\) and \(dx\) into the integral:

\[
\int \frac{x^3}{x^2+4} \, dx = \int \frac{x^3}{u} \cdot \frac{du}{2x}
\]

This simplifies to:

\[
\int \frac{x^2}{2} \cdot \frac{du}{u} = \int \frac{(u - 4)}{2u} \, du
\]

We can then break this integral into two separate integrals:

\[
\int \frac{u-4}{2u} \, du = \int \frac{u}{2u} \, du - \int \frac{4}{2u} \, du
\]

This simplifies further to:

\[
\int \frac{u-4}{2u} \, du = \frac{1}{2} \int 1 \, du - 2 \int \frac{1}{u} \, du
\]

Now, we can integrate each part:

\[
\int \frac{u-4}{2u} \, du = \frac{1}{2} u - 2 \ln|u| + C
\]

Finally, we substitute back in for \(u\):

\[
\int \frac{x^3}{x^2+4} \, dx = \frac{1}{2} (x^2 + 4) - 2 \ln|x^2 + 4| + C
\]

Thus, the integral of \(\frac{x^3}{x^2+4}\) is:

\[
\frac{1}{2} (x^2 + 4) - 2 \ln|x^2 + 4| + C
\] 

This provides a clear and structured solution for the integral.
    