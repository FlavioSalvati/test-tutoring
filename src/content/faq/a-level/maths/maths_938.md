---
title: "Define the concept of feasible region in linear programming"
summary: "The feasible region in linear programming is the set of all possible solutions that satisfy the constraints."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-30
---

In linear programming, the feasible region is defined as the set of all possible solutions that meet the specified constraints.

The primary goal in linear programming is to either maximize or minimize a linear objective function while adhering to a series of linear constraints. Graphically, the feasible region is represented as the intersection of lines (or planes) corresponding to these constraints within the solution space.

For instance, consider the following linear programming problem:

Maximize: $$3x + 4y$$  
Subject to:  
$$2x + y \leq 10$$  
$$x + 3y \leq 15$$  
$$x, y \geq 0$$  

In this case, the feasible region is depicted as the shaded area in the graph below:

![feasible region graph](https://i.imgur.com/5JZJZJL.png)

The feasible region is enclosed by the constraint lines as well as the non-negativity constraints. Any point located within this region satisfies all the imposed constraints, whereas any point outside the region fails to comply with at least one constraint.

To determine the optimal solution to the linear programming problem, we evaluate the objective function at each vertex (corner point) of the feasible region and select the point that yields the maximum (or minimum) value. In this example, the optimal solution occurs at the corner point $(5, 0)$, resulting in a value of $15$.
    