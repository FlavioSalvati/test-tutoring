---
title: "Formulate a dual linear programming problem"
summary: "What is a dual linear programming problem?"
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-13
---

### What is a Dual Linear Programming Problem?

A dual linear programming problem is a mathematical optimization challenge that is derived from a given primal linear programming problem. The dual problem is formulated by swapping the roles of the objective function and the constraints of the primal problem.

The dual problem can be expressed as follows:

**Maximize:**
$$ z = \sum_{i=1}^{n} b_i y_i $$

**Subject to:**
$$ \sum_{i=1}^{n} a_{i,j} y_i \leq c_j \quad \text{for } j = 1, 2, \ldots, m $$
$$ y_i \geq 0 \quad \text{for } i = 1, 2, \ldots, n $$

In this formulation:
- $b_i$ and $c_j$ are the coefficients from the primal problem.
- $a_{i,j}$ represents the coefficients associated with the constraints.
- The variables $y_i$ are the dual variables that correspond to the constraints of the primal problem.

Notably, the dual problem maintains the same number of variables as the primal problem; however, the number of constraints in the dual problem equals the number of variables in the primal problem. The objective function of the dual problem reflects the minimum value of the primal problem, while the constraints of the dual problem illustrate the maximum values that the primal problem can achieve.

The dual problem plays a significant role in solving the primal problem. It offers insights into the sensitivity of the primal problem with respect to changes in the coefficients of the constraints. Additionally, the dual problem provides a lower bound on the optimal value of the primal problem.

In summary, a dual linear programming problem is a mathematical optimization problem that emerges from a given primal linear programming problem by interchanging the objective function and the constraints. It is a valuable tool in addressing the primal problem and in understanding how sensitive the primal problem is to variations in the coefficients of the constraints.
    