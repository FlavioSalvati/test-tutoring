---
title: "How to calculate the eigenvalues of a matrix?"
summary: To find the eigenvalues of a matrix, determine the values of $\lambda$ that solve the equation $det(A - \lambda I) = 0$.
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-26
---

To calculate the eigenvalues of a matrix, we must find the values of $\lambda$ that satisfy the equation 

$$
\text{det}(A - \lambda I) = 0.
$$

The first step is to subtract $\lambda$ from the diagonal elements of the matrix $A$ to form a new matrix, $A - \lambda I$. Next, we compute the determinant of this new matrix using any preferred method, such as expansion by minors or row reduction. The resulting equation will yield a polynomial of degree $n$, where $n$ is the size of the matrix.

After obtaining the polynomial, we solve it to find the values of $\lambda$ that satisfy 

$$
\text{det}(A - \lambda I) = 0.
$$ 

These values are the eigenvalues of the matrix $A$.

As an illustrative example, let's find the eigenvalues of the matrix 

$$
A = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}.
$$ 

First, we compute the determinant:

$$
\text{det}(A - \lambda I) = \text{det}\left(\begin{bmatrix} 2 - \lambda & 1 \\ 1 & 2 - \lambda \end{bmatrix}\right).
$$ 

Calculating the determinant, we have:

$$
= (2 - \lambda)(2 - \lambda) - 1 \cdot 1 
= (2 - \lambda)^2 - 1 
= \lambda^2 - 4\lambda + 3 
= (\lambda - 1)(\lambda - 3).
$$ 

Thus, the eigenvalues of matrix $A$ are $\lambda = 1$ and $\lambda = 3$.

It is important to note that eigenvalues of a matrix are not always real numbers; they can also be complex. Furthermore, if the matrix is not diagonalizable, it may lack sufficient eigenvectors to form a basis for the vector space.
    