---
title: "How to find the solution of a system of linear equations using matrices?"
summary: "To find the solution of a system of linear equations using matrices, we can use matrix algebra."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-03
---

To solve a system of linear equations using matrices, we can apply matrix algebra effectively.

First, we need to express the system of equations in matrix form. Consider the following system:

$$
2x + 3y = 7 \\
4x - 5y = -1
$$

We can represent this system as a matrix equation:

$$
\begin{bmatrix} 2 & 3 \\ 4 & -5 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 7 \\ -1 \end{bmatrix}
$$

Next, we will solve for the variables by utilizing matrix algebra. Our first step is to find the inverse of the coefficient matrix:

$$
\begin{bmatrix} 2 & 3 \\ 4 & -5 \end{bmatrix}^{-1} = \frac{1}{2 \times (-5) - 3 \times 4} \begin{bmatrix} -5 & -3 \\ -4 & 2 \end{bmatrix}
$$

Calculating the determinant, we have:

$$
2 \times (-5) - 3 \times 4 = -10 - 12 = -22
$$

Thus, the inverse matrix is:

$$
\begin{bmatrix} 2 & 3 \\ 4 & -5 \end{bmatrix}^{-1} = \frac{1}{-22} \begin{bmatrix} -5 & -3 \\ -4 & 2 \end{bmatrix} = \begin{bmatrix} \frac{5}{22} & \frac{3}{22} \\ \frac{2}{11} & -\frac{1}{11} \end{bmatrix}
$$

Now, we can multiply both sides of the matrix equation by the inverse of the coefficient matrix:

$$
\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \frac{5}{22} & \frac{3}{22} \\ \frac{2}{11} & -\frac{1}{11} \end{bmatrix} \begin{bmatrix} 7 \\ -1 \end{bmatrix}
$$

Performing the multiplication yields:

$$
\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \frac{5 \cdot 7 + 3 \cdot (-1)}{22} \\ \frac{2 \cdot 7 + (-1) \cdot (-1)}{11} \end{bmatrix} = \begin{bmatrix} \frac{35 - 3}{22} \\ \frac{14 + 1}{11} \end{bmatrix} = \begin{bmatrix} \frac{32}{22} \\ \frac{15}{11} \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}
$$

Therefore, the solution to the system of equations is $ x = 1 $ and $ y = 2 $. We can verify our solution by substituting these values back into the original equations to ensure that they hold true.
    