---
title: "Solve a linear programming problem with non-negativity constraints"
summary: "To solve a linear programming problem with non-negativity constraints, identify the objective function, define constraints, use graphical or simplex methods, and ensure all variable values are non-negative."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-02-14
---

**Question**: Solve a linear programming problem with non-negativity constraints.

**Answer**: Linear programming is a mathematical technique used to optimize a linear objective function while adhering to a set of linear constraints. One essential aspect of linear programming is the non-negativity constraints, which stipulate that all decision variables must be greater than or equal to zero.

Let's examine an example involving a company that produces two products, denoted as A and B. The company has limited resources: 100 units of labor and 80 units of raw material. The production requirements for each product are as follows: 

- Product A requires 2 units of labor and 1 unit of raw material.
- Product B requires 1 unit of labor and 2 units of raw material.

The profit generated from each unit of product A is £5, while each unit of product B yields a profit of £4. The company's objective is to maximize its overall profit.

Let \( x \) represent the number of units of product A produced, and \( y \) denote the number of units of product B produced. The objective function to maximize is given by:

$$
\text{Maximize } Z = 5x + 4y
$$

The constraints for this problem can be formulated as follows:

$$
\begin{align*}
2x + y & \leq 100 \quad \text{(Labor constraint)} \\
x + 2y & \leq 80 \quad \text{(Raw material constraint)} \\
x & \geq 0, \quad y \geq 0 \quad \text{(Non-negativity constraints)}
\end{align*}
$$

To visualize the feasible region, we can graph these constraints on a coordinate plane. The feasible region is the area that satisfies all of the constraints, as illustrated in the graph below:

![Linear Programming Graph](https://i.imgur.com/5JZJZJL.png)

The optimal solution can be found at the corner point of the feasible region that results in the highest value of the objective function. We can determine this optimal point by evaluating the objective function at each corner point of the feasible region:

- At \( (0, 0) \): 
  $$ 
  Z = 5(0) + 4(0) = 0 
  $$
  
- At \( (0, 40) \): 
  $$ 
  Z = 5(0) + 4(40) = 160 
  $$
  
- At \( (50, 0) \): 
  $$ 
  Z = 5(50) + 4(0) = 250 
  $$
  
- At \( (20, 30) \): 
  $$ 
  Z = 5(20) + 4(30) = 190 
  $$

By comparing these values, we observe that the maximum profit occurs at the point \( (50, 0) \), yielding a maximum profit of £250.
    