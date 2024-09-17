---
title: "Define the null space of a matrix"
summary: "The null space of a matrix is the set of all solutions to the homogeneous equation Ax=0."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-13
---

The null space of a matrix is defined as the set of all solutions to the homogeneous equation $ A\mathbf{x} = \mathbf{0} $.

When we multiply a matrix $ A $ by a vector $ \mathbf{x} $, we obtain a new vector $ A\mathbf{x} $. The null space of $ A $ comprises all vectors $ \mathbf{x} $ that fulfill the equation $ A\mathbf{x} = \mathbf{0} $. In simpler terms, the null space is the collection of all solutions to the equation $ A\mathbf{x} = \mathbf{0} $.

To determine the null space of a matrix, we can utilize Gaussian elimination to row-reduce the augmented matrix $ [A | \mathbf{0}] $. The resulting system of linear equations will provide the solutions that make up the null space. Additionally, it is worth noting that the null space is the orthogonal complement of the row space of $ A $.

The null space is also referred to as the kernel of $ A $. It forms a subspace of the vector space $ \mathbb{R}^n $, where $ n $ denotes the number of columns in $ A $. The dimension of the null space is termed the nullity of $ A $, which can be ascertained by counting the number of free variables in the row-reduced form of $ [A | \mathbf{0}] $.

Understanding the null space is crucial in linear algebra, as it provides insight into the structure of solutions for systems of linear equations. Furthermore, it finds applications in various fields, including image compression and data analysis.
    