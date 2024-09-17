---
title: "Define the characteristic polynomial of a matrix"
summary: "The characteristic polynomial of a matrix is derived by calculating the determinant of the matrix, resulting in a polynomial equation that encapsulates key properties of the matrix."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-07-23
---

The characteristic polynomial of a matrix is a vital polynomial equation derived from the determinant of that matrix.

Specifically, for a matrix \( A \), the characteristic polynomial is defined as \( \text{det}(A - \lambda I) \), where \( \lambda \) is a scalar and \( I \) is the identity matrix of the same dimensions as \( A \). In essence, the characteristic polynomial is formed by subtracting \( \lambda \) from each of the diagonal entries of \( A \) and then computing the determinant of the resulting matrix.

The roots of the characteristic polynomial correspond to the eigenvalues of the matrix \( A \). This relationship arises because the determinant \( \text{det}(A - \lambda I) \) equals zero if and only if the matrix \( A - \lambda I \) is not invertible. In such cases, there exists a non-zero vector \( x \) satisfying \( (A - \lambda I)x = 0 \). This vector \( x \) is known as an eigenvector of \( A \) associated with the eigenvalue \( \lambda \).

The characteristic polynomial proves to be extremely useful in various applications of linear algebra, including the determination of eigenvalues and eigenvectors, the diagonalization of matrices, and the resolution of differential equations. Additionally, it possesses significant theoretical properties: for instance, the sum of the eigenvalues of a matrix equals its trace, while the product of the eigenvalues equals its determinant.

In summary, the characteristic polynomial of a matrix arises from the determinant of the matrix, and its roots yield the eigenvalues of that matrix. As such, it serves as a powerful tool in linear algebra, with a wide array of applications and important theoretical implications.
    