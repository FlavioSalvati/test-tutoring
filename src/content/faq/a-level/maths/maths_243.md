---
title: "Solve a linear programming problem with inequality constraints"
summary: "To solve a linear programming problem with inequality constraints, identify the objective function, define the constraints, graph the feasible region, and find the optimal solution at the vertices of this region."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-12
---

**Question:** How do you solve a linear programming problem with inequality constraints?

**Answer:** Linear programming is a mathematical technique employed to find the optimal solution for a given problem by maximizing or minimizing a linear objective function while adhering to linear inequality constraints.

In linear programming, the objective function represents the quantity we aim to optimize, either by finding its maximum or minimum value. The inequality constraints define the conditions that must be satisfied in order for the solution to be feasible.

To effectively solve a linear programming problem, we start by identifying both the objective function and the associated constraints. Let’s consider the following example:

Maximize 
$$ 
Z = 3x + 4y 
$$
Subject to:
$$ 
2x + y \leq 10 
$$
$$ 
x + 2y \leq 8 
$$
$$ 
x, y \geq 0 
$$

In this example, the objective function to be maximized is given by $Z = 3x + 4y$. The constraints include $2x + y \leq 10$ and $x + 2y \leq 8$, with the additional non-negativity constraints $x, y \geq 0$.

To solve this problem, we can utilize the graphical method. First, we plot the two inequality constraints on a graph and shade the feasible region, which represents the area that satisfies both constraints.

The feasible region is depicted as the shaded area in the graph. Next, we identify the corner points of this region, which are defined by the intersections of the lines representing the constraints.

The corner points we find are $(0, 0)$, $(0, 5)$, and $(4, 2)$. We will now substitute these corner points into the objective function to determine the maximum value of $Z$.

Calculating $Z$ for each corner point:
- For $(0, 0)$:
$$ 
Z(0, 0) = 3(0) + 4(0) = 0 
$$
- For $(0, 5)$:
$$ 
Z(0, 5) = 3(0) + 4(5) = 20 
$$
- For $(4, 2)$:
$$ 
Z(4, 2) = 3(4) + 4(2) = 12 + 8 = 20 
$$

After evaluating these points, we find that the maximum value of $Z$ is $20$, which occurs at both the points $(0, 5)$ and $(4, 2)$. 

Thus, the optimal solution to this linear programming problem yields a maximum value of $Z = 20$ at the points $(0, 5)$ and $(4, 2)$.
    