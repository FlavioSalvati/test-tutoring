---
title: "Define the kernel of a matrix"
summary: "The kernel of a matrix is the set of all vectors that are mapped to the zero vector."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-20
---

The kernel of a matrix refers to the collection of all vectors that are mapped to the zero vector when the matrix is applied to them.

In the context of linear algebra, a matrix is defined as a rectangular arrangement of numbers organized into rows and columns. The kernel of a matrix, often termed the null space, consists of all vectors that satisfy the equation $Ax = 0$, where $A$ represents the matrix and $x$ is a vector. This means the kernel is the set of solutions to the homogeneous equation associated with the matrix.

To determine the kernel of a given matrix, we can utilize Gaussian elimination to row-reduce the augmented matrix $[A|0]$. The kernel is then identified as the set of solutions to the resulting system of linear equations. 

For instance, consider the matrix 

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}.
$$

We can start by forming the augmented matrix:

$$
\begin{bmatrix}
1 & 2 & 3 & | & 0 \\
4 & 5 & 6 & | & 0 \\
7 & 8 & 9 & | & 0
\end{bmatrix}.
$$

Next, we will apply row operations to simplify this matrix:

1. Replace $R_2$ with $R_2 - 4R_1$.
2. Replace $R_3$ with $R_3 - 7R_1$.

After performing these operations, we have:

$$
\begin{bmatrix}
1 & 2 & 3 & | & 0 \\
0 & -3 & -6 & | & 0 \\
0 & -6 & -12 & | & 0
\end{bmatrix}.
$$

Next, we continue simplifying by replacing $R_3$ with $R_3 - 2R_2$:

$$
\begin{bmatrix}
1 & 2 & 3 & | & 0 \\
0 & -3 & -6 & | & 0 \\
0 & 0 & 0 & | & 0
\end{bmatrix}.
$$

The last row indicates the equation $0x_1 + 0x_2 + 0x_3 = 0$, which implies that there are infinitely many solutions. Thus, the kernel of matrix $A$ can be expressed as the set of all vectors of the form 

$$
x = \begin{bmatrix}
-2s \\
s \\
t
\end{bmatrix},
$$ 

where $s$ and $t$ are arbitrary constants.
    