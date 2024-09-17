---
title: "Define the adjoint of a matrix"
summary: "The adjoint of a matrix is the transpose of its cofactor matrix."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-14
---

The adjoint of a matrix is defined as the transpose of its cofactor matrix.

For a given matrix $ A $, the adjoint, denoted as $ \text{adj}(A) $, is derived from the cofactor matrix of $ A $. The cofactor matrix, denoted as $ C $, is obtained by first computing the matrix of cofactors of $ A $ and then transposing that result. The matrix of cofactors, denoted as $ \text{Cof}(A) $, is constructed by calculating the matrix of minors for $ A $ and then applying a sign change for each entry based on the formula $ (-1)^{i+j} $, where $ i $ and $ j $ are the respective row and column indices of the entry.

To elaborate, if $ A = [a_{ij}] $ is an $ n \times n $ matrix, the entry in the $ (i,j) $ position of $ \text{Cof}(A) $ is determined by the expression:

$$
\text{Cof}(A)_{ij} = (-1)^{i+j} \cdot \text{det}(M_{ij}),
$$

where $ \text{det}(M_{ij}) $ is the determinant of the $ (n-1) \times (n-1) $ matrix $ M_{ij} $ formed by deleting the $ i $-th row and $ j $-th column from $ A $. Subsequently, the entry in the $ (i,j) $ position of the cofactor matrix $ C $ is given by:

$$
C_{ij} = \text{Cof}(A)_{ji},
$$

and thus the entry in the adjoint matrix $ \text{adj}(A) $ is expressed as:

$$
\text{adj}(A)_{ij} = C_{ji}.
$$

The adjoint of a matrix plays a significant role in various fields of mathematics, including linear algebra, differential equations, and calculus. A key application of the adjoint is in calculating the inverse of a matrix. Specifically, if $ A $ is an invertible matrix, its inverse can be computed using the formula:

$$
A^{-1} = \frac{1}{\text{det}(A)} \text{adj}(A),
$$

where $ \text{det}(A) $ represents the determinant of $ A $. This formula allows us to find the inverse of a matrix by first determining both its adjoint and its determinant.
    