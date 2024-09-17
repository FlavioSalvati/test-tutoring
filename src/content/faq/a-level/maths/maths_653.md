---
title: "Define the orthogonal matrix"
summary: "An orthogonal matrix is a square matrix whose columns and rows are orthonormal vectors."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-10
---

An orthogonal matrix is a square matrix in which both the columns and the rows consist of orthonormal vectors.

Orthonormal vectors are defined as vectors that are orthogonal (perpendicular) to each other and normalized (having a length of 1). In the context of an orthogonal matrix, this means that the dot product of any two different columns or rows is equal to $0$, while the dot product of a column or row with itself is equal to $1$.

A key property of orthogonal matrices is that the inverse of an orthogonal matrix is equal to its transpose. Specifically, if $A$ is an orthogonal matrix, then its transpose $A^T$ is also orthogonal, and it holds that $A^{-1} = A^T$. This characteristic makes orthogonal matrices particularly valuable in various applications, including linear transformations, where they preserve both distances and angles between vectors.

Another significant property of orthogonal matrices is their effect on the determinant of a matrix. If $A$ is an orthogonal matrix, then the determinant satisfies $|A| = \pm 1$. This is due to the fact that the determinant of a matrix is equal to the product of its eigenvalues, and the eigenvalues of an orthogonal matrix can only be $1$ or $-1$.

Orthogonal matrices also play a crucial role in solving systems of linear equations, as they can simplify the transformation of a system into a more manageable form. For instance, consider the linear equation $Ax = b$, where $A$ is an orthogonal matrix. By multiplying both sides of the equation by $A^T$, we derive:

$$
A^T Ax = A^T b.
$$

Since $A^T A = I$ (the identity matrix), we can simplify this to:

$$
x = A^T b,
$$

which presents a simpler form of the original equation.

In summary, orthogonal matrices possess numerous valuable properties and applications across mathematics and related fields, making them an essential concept to grasp in linear algebra.
    