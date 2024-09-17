---
title: "Solve a linear programming problem with unbounded feasible region"
summary: "Linear programming problems can have unbounded feasible regions, meaning solutions can extend indefinitely. However, such problems may still have optimal solutions depending on the objective function's direction and constraints."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-05-17
---

**Question:** Can you solve a linear programming problem with an unbounded feasible region?

Yes, it is indeed possible to solve a linear programming problem that features an unbounded feasible region. An unbounded feasible region arises when the constraints do not sufficiently limit the values of the decision variables. Consequently, this allows the objective function to be maximized or minimized indefinitely in one or more directions.

To address a linear programming problem with an unbounded feasible region, the first step is to identify the direction(s) in which the objective function can be extended infinitely. This can be achieved by graphing the constraints alongside the objective function on a coordinate plane and analyzing the slope of the objective function.

Once the direction(s) have been identified, we can employ the simplex method to ascertain the optimal solution. However, due to the nature of the unbounded feasible region, the standard simplex method cannot be applied directly. Instead, we must utilize the two-phase simplex method. This approach involves adding artificial variables to the problem and subsequently removing them once the optimal solution has been determined.

**Example:** Consider a scenario where we aim to maximize the objective function \( z = 2x + 3y \) subject to the constraints \( x + y \leq 5 \) and \( x \geq 0, y \geq 0 \). In this case, the feasible region is unbounded since there are no constraints limiting the values of \( x \) and \( y \). By graphing the constraints and the objective function, we observe that the objective function can be maximized indefinitely in the direction of the vector \( (2, 3) \). For a more detailed understanding of the simplex method's application in this context, you may explore comprehensive resources on the simplex method.

To implement the two-phase simplex method, we start by introducing artificial variables to the problem: 

$$ 
z = 2x + 3y + 0a + 0b 
$$ 

with constraints: 

$$ 
x + y + a = 5, \quad x \geq 0, \quad y \geq 0, \quad a \geq 0, \quad b \geq 0. 
$$ 

We then apply the simplex method to find the optimal solution while initially ignoring the artificial variables. In this instance, the optimal solution yields \( x = 5 \), \( y = 0 \), and \( z = 10 \).

Following this, we remove the artificial variables and apply the simplex method again to determine the optimal solution. Given that the feasible region is unbounded, we can continue to increase the value of \( z \) indefinitely in the direction of the vector \( (2, 3) \).

**Summary for A-Level Maths Tutors:** Solving a linear programming problem with an unbounded feasible region is certainly feasible. By graphing the constraints alongside the objective function, we can pinpoint the directions in which the function may increase or decrease without limit. The two-phase simplex method, which involves the addition and subsequent removal of artificial variables, facilitates the identification of the solution. Even within an unbounded region, this method empowers us to explore optimal solution directions. For further insights into the application of these principles in real-world contexts, additional resources can be consulted. This methodology is a vital component of broader mathematical studies.
    