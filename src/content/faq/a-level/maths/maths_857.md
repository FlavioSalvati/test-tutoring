---
title: "Describe the process of the false position method for root finding"
summary: "The false position method is a numerical method used to find the root of an equation."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-05
---

The false position method, also known as the regula falsi method, is a numerical technique employed to approximate the root of an equation.

To begin applying the false position method, we need an equation of the form $f(x) = 0$, where we seek the value of $x$ that satisfies this equation.

Next, we select two initial guesses for $x$, denoted as $x_1$ and $x_2$. It is essential that the values of $f(x_1)$ and $f(x_2)$ have opposite signs. This condition ensures that there is at least one root between $x_1$ and $x_2$, as the false position method relies on the principle that a continuous function must cross the x-axis between two points of opposite signs.

Once we have our initial guesses, we calculate the new approximation, $x_3$, which is the point where the line connecting the points $(x_1, f(x_1))$ and $(x_2, f(x_2))$ intersects the x-axis. The formula for calculating $x_3$ is given by:

$$
x_3 = x_2 - \frac{(x_2 - x_1)}{(f(x_2) - f(x_1))} \cdot f(x_2)
$$

After computing $x_3$, we evaluate $f(x_3)$. If $f(x_3) = 0$, we have successfully found the root of the equation. If not, we update our guesses based on the signs of the function values:

- If $f(x_1)$ and $f(x_3)$ have opposite signs, we set $x_2 = x_3$ (thus, $x_1$ remains unchanged).
- Conversely, if $f(x_2)$ and $f(x_3)$ have opposite signs, we set $x_1 = x_3$ (with $x_2$ remaining unchanged).

This iterative process continues until we either find a value of $x$ such that $f(x) = 0$ or reach a predetermined maximum number of iterations.
    