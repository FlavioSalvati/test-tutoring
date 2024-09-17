---
title: "Define the concept of feasible solution in linear programming"
summary: "A feasible solution in linear programming meets all the problem's constraints, ensuring that the proposed solution is viable within the defined parameters of the model."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-07-15
---

In linear programming, a feasible solution refers to a solution that satisfies all the constraints imposed by the problem. These constraints are typically expressed as linear inequalities or equations.

Consider the following example of a linear programming problem:

$$
\text{Maximize } 3x + 4y
$$

Subject to the constraints:

$$
2x + y \leq 10
$$

$$
x + 3y \leq 12
$$

$$
x, y \geq 0
$$

A feasible solution to this problem is any pair of non-negative values for $x$ and $y$ that comply with both constraints. For instance, the pair $(2, 4)$ is a feasible solution because it satisfies both constraints:

1. For the first constraint:
   $$2(2) + 4 = 8 \leq 10$$

2. For the second constraint:
   $$2 + 3(4) = 14 \leq 12 \quad (\text{not satisfied})$$

On the other hand, the pair $(3, 2)$ does not qualify as a feasible solution because it violates the second constraint:

1. For the first constraint:
   $$2(3) + 2 = 8 \leq 10$$

2. For the second constraint:
   $$3 + 3(2) = 9 \leq 12$$

Feasible solutions play a crucial role in linear programming, as they serve as the foundation for identifying the optimal solution. The optimal solution is defined as the feasible solution that either maximizes or minimizes the objective function—in this case, $3x + 4y$. By evaluating various feasible solutions, we can ascertain which one yields the optimal result. 

Understanding feasible solutions is essential for effectively solving linear programming problems, which frequently arise in various fields. These solutions are integral in achieving the best possible outcomes while adhering to specified constraints. Furthermore, feasible solutions are closely linked to the techniques employed in optimization, which can further analyze and resolve complex issues in linear programming.

### Summary for A-Level Maths Students:
In linear programming, a feasible solution is a set of values that satisfies all the constraints of the problem, expressed as linear inequalities or equations. For example, in a problem aimed at maximizing $3x + 4y$ under specific constraints, feasible solutions are pairs of $x$ and $y$ that do not violate any of the rules. These solutions are vital for determining the optimal outcome, which maximizes or minimizes the objective function.
    