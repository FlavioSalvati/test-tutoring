---
title: "Define the concept of artificial variables in linear programming"
summary: "Artificial variables are introduced in linear programming to convert inequality constraints into equality constraints."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-01
---

Artificial variables play a crucial role in linear programming by facilitating the conversion of inequality constraints into equality constraints.

In linear programming, the primary goal is to either maximize or minimize a linear objective function, subject to a set of linear constraints. These constraints can be expressed as either equalities or inequalities. However, the simplex method, a widely used algorithm for solving linear programming problems, requires that all constraints be in the form of equalities.

To transform inequality constraints into equality constraints, we introduce artificial variables. These variables are incorporated into the problem as if they were decision variables; however, they do not represent any tangible quantity. Instead, their sole purpose is to facilitate the conversion of inequality constraints into equality constraints.

For illustration, consider the following linear programming problem:

Maximize: $$2x + 3y$$

Subject to:

$$x + y \leq 5$$

$$2x + y \geq 4$$

$$x, y \geq 0$$

In this case, the second constraint is an inequality. To convert it into an equality, we introduce an artificial variable, denoted as $s$, and rewrite the constraint as follows:

$$2x + y + s = 4$$

Consequently, the problem is reformulated as:

Maximize: $$2x + 3y$$

Subject to:

$$x + y \leq 5$$

$$2x + y + s = 4$$

$$x, y, s \geq 0$$

Here, the artificial variable $s$ is included in the formulation. Its role is to ensure that the constraint is satisfied as an equality. In the optimal solution, the value of the artificial variable $s$ will be set to zero, indicating that it does not contribute to the solution in a meaningful way. Understanding the function of these artificial variables enhances our comprehension of their application within the simplex method and linear programming in general.

In summary, artificial variables serve to convert inequality constraints—such as "less than" or "greater than"—into precise equality constraints. They are essential when employing the simplex method, which relies on equalities to function correctly. Although these variables do not represent any real-world quantities, they are instrumental in meeting the method's requirements and are eliminated from the final solution.
    