---
title: "Solve a linear programming problem with bounded variables"
summary: "Question: Solve a linear programming problem with bounded variables."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-23
---

**Question:** How do we solve a linear programming problem with bounded variables?

**Answer:** To solve a linear programming problem with bounded variables, we can apply the steps of the simplex method.

Linear programming is a mathematical approach used to optimize a linear objective function while adhering to a set of linear constraints. The simplex method is a widely-used algorithm that solves such problems. It begins by converting the problem into standard form, ensuring that all variables are non-negative and that the objective function is structured for maximization. The simplex method then iteratively refines the solution by transitioning from one feasible solution to another until the optimal solution is reached.

Let's consider the following linear programming problem as an example:

$$
\text{Maximize } Z = 3x + 2y
$$
Subject to:
$$
\begin{align*}
x + y & \leq 4 \\
2x + y & \leq 5 \\
x, y & \geq 0
\end{align*}
$$

To convert this problem into standard form, we introduce slack variables. The revised problem is:

$$
\text{Maximize } Z = 3x + 2y
$$
Subject to:
$$
\begin{align*}
x + y + s_1 & = 4 \\
2x + y + s_2 & = 5 \\
x, y, s_1, s_2 & \geq 0
\end{align*}
$$

Next, we construct the initial simplex tableau:

$$
\begin{array}{|c|c|c|c|c|}
\hline
3 & 2 & 0 & 0 & 0 \\
\hline
1 & 1 & 1 & 0 & 4 \\
\hline
2 & 1 & 0 & 1 & 5 \\
\hline
\end{array}
$$

In this tableau, the first row represents the coefficients of the objective function, while the last column contains the constants from the constraints. The remaining rows correspond to the constraints with the slack variables included. 

To identify the pivot element, we look for the smallest positive coefficient in the objective function row, which in this case is $2$. We designate the column of this coefficient as the pivot column. Next, we determine the pivot row by calculating the smallest non-negative ratio of the constant term to the pivot column coefficient. Here, the second row has a ratio of $5/1 = 5$, and the first row has a ratio of $4/2 = 2$. Thus, the pivot row is the first row, and the pivot element is $1$.

We now perform row operations to convert the pivot element to $1$ and adjust all other elements in the pivot column to $0$. This results in the updated tableau:

$$
\begin{array}{|c|c|c|c|c|}
\hline
3 & 0 & 2 & 0 & 2 \\
\hline
1 & 0 & 1 & 0 & 3 \\
\hline
0 & 1 & -2 & 1 & 1 \\
\hline
\end{array}
$$

We repeat this process, continuing to iterate until all coefficients in the objective function row are non-negative. 

In this specific case, the optimal solution is found to be:

$$
Z = 10, \quad x = 2, \quad y = 2.
$$

This concludes the solution of the linear programming problem using the simplex method.
    