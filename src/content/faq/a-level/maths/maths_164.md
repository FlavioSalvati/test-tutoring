---
title: "Describe the process of the fixed point iteration method for root finding"
summary: "The fixed point iteration method is a numerical technique employed to determine the root of a function by repeatedly applying a function to an initial guess until convergence is achieved."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-01-22
---

The fixed point iteration method is a numerical technique employed to locate the root of a function.

To implement the fixed point iteration method, we begin with an initial guess for the root, denoted as $x_0$. We then apply a specific formula to generate a sequence of approximations, $x_n$, that we hope will converge to the actual root. This formula is expressed as:

$$
x_{n+1} = g(x_n)
$$

Here, $g(x)$ is a function selected so that the sequence $x_n$ converges to the root of the function $f(x)$ we aim to solve. In other words, we seek a function $g(x)$ that satisfies:

$$
f(r) = 0 \quad \text{if and only if} \quad r = g(r)
$$

Once we identify such a function $g(x)$, we can proceed with the fixed point iteration method to find the root of $f(x)$ by following these steps:

1. Choose an initial guess $x_0$.
2. Utilize the formula $x_{n+1} = g(x_n)$ to generate a sequence of approximations $x_n$.
3. Repeat this process until the sequence $x_n$ converges to the root of $f(x)$.

The convergence of the fixed point iteration method is influenced by the choice of $g(x)$. If $g(x)$ is selected such that $|g'(r)| < 1$, where $r$ is the root of $f(x)$, then the sequence $x_n$ will converge to $r$. Conversely, if $|g'(r)| > 1$, the sequence $x_n$ will diverge. If $|g'(r)| = 1$, the convergence of the sequence $x_n$ becomes uncertain.

The fixed point iteration method is a straightforward and intuitive approach for finding the root of a function. However, it may exhibit slow convergence or fail to converge entirely for certain functions. Therefore, careful selection of the function $g(x)$ is crucial to ensure successful convergence.
    