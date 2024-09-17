---
title: "Describe the process of the secant method for root finding"
summary: "The secant method is a numerical method used to find the root of a function."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-26
---

The secant method is a numerical technique used to find the roots of a function. It is particularly useful when we cannot find the root analytically.

To implement the secant method, we begin with two initial guesses, $x_0$ and $x_1$, which should bracket the root we are trying to locate. The next approximation, $x_{n+1}$, is calculated using the following formula:

$$
x_{n+1} = x_n - f(x_n) \cdot \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}
$$

We continue this iterative process until we achieve the desired level of accuracy.

Let’s consider a practical example. Suppose we want to find the root of the function $f(x) = x^3 - 2x - 5$. We can start with the initial guesses $x_0 = 2$ and $x_1 = 3$, since we know the root lies between these two values. Using the secant method formula, we can calculate the next approximation:

$$
x_2 = x_1 - f(x_1) \cdot \frac{x_1 - x_0}{f(x_1) - f(x_0)}
$$

Substituting the values, we have:

$$
x_2 = 3 - \frac{(3^3 - 2 \cdot 3 - 5) \cdot (3 - 2)}{(3^3 - 2 \cdot 3 - 5) - (2^3 - 2 \cdot 2 - 5)}
$$

Calculating this gives:

$$
x_2 \approx 2.454545...
$$

We will continue applying the secant method until we reach our desired accuracy. For instance, if we wish to find the root to within $0.001$, we might compute further approximations, resulting in:

$$
x_5 \approx 2.094551...
$$
$$
x_6 \approx 2.094551...
$$
$$
x_7 \approx 2.094551...
$$

From these results, we observe that the approximation has converged to the root, which is approximately $2.094551$.
    