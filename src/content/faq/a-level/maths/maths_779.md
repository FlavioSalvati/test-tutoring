---
title: "How to calculate the inverse of a matrix?"
summary: "To calculate the inverse of a matrix, use the formula A^-1 = 1/det(A) * adj(A), where det(A) is the determinant of A and adj(A) is the adjugate of A."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-15
---

To calculate the inverse of a matrix, you can use the formula:

$$ A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A) $$

where $\det(A)$ denotes the determinant of matrix $A$ and $\text{adj}(A)$ represents the adjugate of $A$.

To find the determinant of a $3 \times 3$ matrix, you can apply the following formula:

$$ \det(A) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31}) $$

In this expression, $a_{ij}$ refers to the element located in the $i$th row and $j$th column of matrix $A$.

To compute the adjugate of a matrix, you first need to find the matrix of cofactors. This involves calculating the determinant of each minor matrix (which is formed by removing the $i$th row and $j$th column from $A$) and then multiplying by $(-1)^{i+j}$. After obtaining the matrix of cofactors, you take the transpose to find the adjugate.

### Example:
Let's find the inverse of the matrix 

$$ A = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix} $$

First, we compute the determinant:

$$ \det(A) = 2(3) - 1(4) = 6 - 4 = 2 $$

Next, we calculate the adjugate of $A$. The matrix of cofactors is given by:

$$ \text{adj}(A) = \begin{pmatrix} 3 & -1 \\ -4 & 2 \end{pmatrix} $$

Now, we can find the inverse of the matrix:

$$ A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A) = \frac{1}{2} \begin{pmatrix} 3 & -4 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} \frac{3}{2} & -2 \\ -\frac{1}{2} & 1 \end{pmatrix} $$

Thus, the inverse of matrix $A$ is 

$$ A^{-1} = \begin{pmatrix} \frac{3}{2} & -2 \\ -\frac{1}{2} & 1 \end{pmatrix} $$
    