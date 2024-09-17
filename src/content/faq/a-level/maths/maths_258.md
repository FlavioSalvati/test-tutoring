---
title: "Define the Skew-Hermitian matrix"
summary: "A skew-Hermitian matrix is a square matrix whose conjugate transpose is equal to its negative."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-03
---

A skew-Hermitian matrix is defined as a square matrix whose conjugate transpose equals its negative. 

Specifically, a skew-Hermitian matrix $A$ is a complex square matrix satisfying the condition 

$$
A^H = -A,
$$ 

where $A^H$ denotes the conjugate transpose of $A$. This means that the entries of $A$ adhere to the relation 

$$
a_{ij} = -\text{conj}(a_{ji})
$$ 

for all indices $i$ and $j$, with $\text{conj}$ representing the complex conjugate.

Skew-Hermitian matrices exhibit several intriguing properties. One such property is that the eigenvalues of a skew-Hermitian matrix are purely imaginary or zero. To understand why this is the case, let us assume that $\lambda$ is an eigenvalue of $A$ associated with the eigenvector $x$. We can express this relationship as 

$$
Ax = \lambda x.
$$ 

Taking the conjugate transpose of both sides, we obtain 

$$
x^H A^H = \text{conj}(\lambda) x^H.
$$ 

By substituting $A^H = -A$ into this equation and rearranging, we derive 

$$
x^H A x = -\text{conj}(\lambda) x^H x. 
$$ 

Since $x^H x$ is a positive real number, we can conclude that 

$$
\lambda = -\text{conj}(\lambda),
$$ 

which implies that $\lambda$ must be purely imaginary or zero. For further insights into complex numbers within this framework, one may consider delving into related topics.

Another significant property of skew-Hermitian matrices is that they are diagonalizable by a unitary matrix. This means there exists a unitary matrix $U$ such that 

$$
U^H A U = D,
$$ 

where $D$ is a diagonal matrix. The reasoning behind this result lies in the fact that the eigenvalues of $A$ are purely imaginary or zero, allowing us to express $A$ as 

$$
A = PDP^{-1},
$$ 

with $P$ being an invertible matrix and $D$ being diagonal with the eigenvalues of $A$ on its diagonal. We can then choose $U = P$ (or $U = P^H$, depending on the convention) to achieve the desired diagonalization. A deeper understanding of the diagonalization process is essential for comprehending related concepts in linear algebra and matrix theory.
    