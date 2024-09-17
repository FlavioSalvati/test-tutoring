---
title: "What is the relationship between roots and discriminant of a polynomial?"
summary: "The discriminant of a polynomial indicates the nature and quantity of its roots, helping to determine whether they are real or complex and whether they are distinct or repeated."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-01-17
---

The discriminant of a polynomial provides valuable insights into the nature and number of its roots.

For a quadratic polynomial of the form $ax^2 + bx + c$, the discriminant is calculated using the expression $D = b^2 - 4ac$. This discriminant serves to classify the roots of the quadratic equation as follows:
- If $D > 0$, the quadratic has two distinct real roots.
- If $D = 0$, the quadratic has one real root, which has a multiplicity of 2.
- If $D < 0$, the quadratic has two complex conjugate roots.

For a polynomial of degree $n$, the discriminant is defined by the formula 

$$
\Delta = (-1)^{\frac{n(n-1)}{2}} a_1^{2n-2} \prod_{i<j} (r_i - r_j)^2,
$$

where $a_1$ denotes the leading coefficient of the polynomial and $r_1, r_2, \ldots, r_n$ represent its roots. Notably, the discriminant $\Delta$ is zero if and only if the polynomial has at least one multiple root.

The implications of the discriminant's value for a polynomial of degree $n$ are as follows:
- If $\Delta > 0$, the polynomial has $n$ distinct real roots.
- If $\Delta < 0$, the polynomial has $n$ complex conjugate roots.
- If $\Delta = 0$, the polynomial possesses at least one multiple root.

In conclusion, the discriminant is an essential tool for understanding the characteristics of a polynomial's roots. It indicates the presence of multiple roots when $\Delta = 0$, while its sign (positive or negative) reveals whether the roots are real or complex conjugates.
    