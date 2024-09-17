---
title: "What is the rank of a matrix?"
summary: "The rank of a matrix is the maximum number of linearly independent rows or columns."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-19
---

The rank of a matrix represents the maximum number of linearly independent rows or columns within that matrix.

In the realm of linear algebra, the rank is a crucial concept that indicates the dimension of the vector space spanned by the matrix's rows or columns. It is formally defined as the highest number of linearly independent rows or columns present in the matrix.

To determine the rank of a matrix, one can apply row operations to transform the matrix into either row echelon form or reduced row echelon form. The rank of the original matrix corresponds to the number of non-zero rows in this transformed version. For instance, consider the following matrix:

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{bmatrix}
$$

By performing row operations, we can reduce matrix $A$ to its row echelon form:

$$
\begin{bmatrix}
1 & 2 & 3 \\
0 & -3 & -6 \\
0 & 0 & 0 \\
\end{bmatrix}
$$

In this transformed matrix, there are 2 non-zero rows, indicating that the rank of matrix $A$ is $2$.

Alternatively, the rank of a matrix can also be assessed by analyzing the determinants of its submatrices. Specifically, the rank is equal to the number of non-zero determinants among these submatrices. Let us examine the following matrix:

$$
B = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{bmatrix}
$$

The submatrices of matrix $B$ include:

$$
\begin{bmatrix}
1 & 2 \\
4 & 5 \\
\end{bmatrix}, \quad
\begin{bmatrix}
1 & 3 \\
4 & 6 \\
\end{bmatrix}, \quad
\begin{bmatrix}
2 & 3 \\
5 & 6 \\
\end{bmatrix}, \quad
\begin{bmatrix}
4 & 5 \\
7 & 8 \\
\end{bmatrix}, \quad
\begin{bmatrix}
4 & 6 \\
7 & 9 \\
\end{bmatrix}, \quad
\begin{bmatrix}
5 & 6 \\
8 & 9 \\
\end{bmatrix}
$$

The determinants of these submatrices are calculated as follows: $1$, $-2$, $-3$, $-3$, $6$, and $0$, respectively. Among these, there are $4$ submatrices with non-zero determinants, which implies that the rank of matrix $B$ is $4$.
    