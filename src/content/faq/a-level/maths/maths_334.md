---
title: "How to find the roots of a quintic polynomial?"
summary: "To find the roots of a quintic polynomial, we can use numerical methods or the Galois theory."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-07
---

To determine the roots of a quintic polynomial, we can utilize either numerical methods or Galois theory.

**Numerical Methods**

Numerical methods involve employing iterative algorithms to approximate the roots of the polynomial. One prominent technique is the Newton-Raphson method. This method begins with an initial guess and iteratively refines this guess using the following formula:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

In this expression, $x_n$ represents the $n$-th approximation of the root, $f(x_n)$ is the value of the polynomial evaluated at $x_n$, and $f'(x_n)$ denotes the derivative of the polynomial at that point. The iteration continues until the desired level of accuracy is achieved.

**Galois Theory**

Alternatively, Galois theory provides a framework for determining whether the roots of a quintic polynomial can be expressed using radicals (such as square roots or cube roots). If a polynomial is solvable by radicals, its roots can be represented as a combination of radicals and the four basic arithmetic operations (addition, subtraction, multiplication, and division). Conversely, if a polynomial is not solvable by radicals, its roots cannot be expressed in this manner.

To ascertain whether a quintic polynomial is solvable by radicals, we examine its Galois group, which is a collection of permutations of its roots. If the Galois group contains a subgroup isomorphic to the symmetric group $S_5$, the polynomial is deemed not solvable by radicals. Otherwise, it is considered solvable by radicals.

**Conclusion**

In summary, finding the roots of a quintic polynomial can be approached through numerical methods or Galois theory. Numerical methods use iterative algorithms for root approximation, while Galois theory assesses whether the roots can be expressed in terms of radicals.
    