---
title: "What is the trace of a matrix?"
summary: "The trace of a matrix is defined as the sum of its diagonal entries, providing a key property used in various mathematical applications."
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-07
---

The trace of a matrix is defined as the sum of its diagonal entries.

More formally, the trace of a matrix is a scalar value calculated by summing all the entries along the main diagonal. For instance, consider the matrix $A$:

$$
A = \begin{pmatrix}
2 & 3 \\
4 & 1
\end{pmatrix}
$$

The trace of matrix $A$ can be computed as follows:

$$
\text{tr}(A) = 2 + 1 = 3.
$$

The trace possesses several significant properties. One key property is that it is invariant under similarity transformations. This means that if two matrices $A$ and $B$ are similar—i.e., there exists an invertible matrix $P$ such that $A = PBP^{-1}$—then they share the same trace. This invariance is particularly valuable in various fields of mathematics, including linear algebra and differential equations.

Another important property of the trace is its linearity. Specifically, if $A$ and $B$ are matrices and $c$ is a scalar, then the following relationship holds:

$$
\text{tr}(cA + B) = c \cdot \text{tr}(A) + \text{tr}(B).
$$

This property can be demonstrated using the definition of the trace alongside the fundamental properties of matrix addition and scalar multiplication.

Additionally, the trace has a geometric interpretation when considering linear transformations. If $T$ represents a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^n$, then the trace of $T$ corresponds to the sum of its eigenvalues. This interpretation enhances our understanding of the behavior of linear transformations and their connections to the geometry of the corresponding vector space.

In summary, the trace of a matrix is a scalar obtained by summing its diagonal entries. It exhibits important properties, including invariance under similarity transformations and linearity, along with a geometric interpretation related to the eigenvalues of linear transformations.
    