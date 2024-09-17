---
title: "Formulate a linear programming problem"
summary: "What is a linear programming problem?"
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-11
---

### What is a Linear Programming Problem?

A linear programming problem is a type of mathematical optimization problem in which both the objective function and the constraints are linear. The primary aim is to either maximize or minimize the objective function while adhering to the specified constraints.

The general formulation of a linear programming problem is expressed as follows:

$$
\text{Maximize or Minimize } Z = c_1 x_1 + c_2 x_2 + \ldots + c_n x_n
$$

**Subject to:**

$$
\begin{align*}
a_{11} x_1 + a_{12} x_2 + \ldots + a_{1n} x_n & \leq b_1 \\
a_{21} x_1 + a_{22} x_2 + \ldots + a_{2n} x_n & \leq b_2 \\
& \vdots \\
a_{m1} x_1 + a_{m2} x_2 + \ldots + a_{mn} x_n & \leq b_m \\
x_1, x_2, \ldots, x_n & \geq 0
\end{align*}
$$

In this formulation:

- $Z$ denotes the objective function to be optimized (either maximized or minimized).
- $c_1, c_2, \ldots, c_n$ are the coefficients associated with the decision variables $x_1, x_2, \ldots, x_n$ in the objective function.
- $a_{ij}$ represents the coefficients of the decision variables in the $i^{th}$ constraint.
- $b_i$ is the right-hand side value of the $i^{th}$ constraint.
- $x_1, x_2, \ldots, x_n$ are the decision variables, which must meet the non-negativity constraints, ensuring that they cannot take on negative values.

The constraints define the limitations or restrictions imposed on the decision variables, while the non-negativity constraints ensure that all decision variables remain non-negative.

Linear programming problems can be solved using various methods, including graphical techniques for simpler cases and algebraic methods such as the simplex method for more complex scenarios. The optimal solution is defined as the set of values for the decision variables that either maximizes or minimizes the objective function while satisfying all the constraints.
    