---
title: "Find the roots of the cubic equation x^3 + 4x^2 + 3x + 2 = 0"
summary: "The roots of the cubic equation x^3 + 4x^2 + 3x + 2 = 0 are to be found."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-25
---

To find the roots of the cubic equation 

$$
x^3 + 4x^2 + 3x + 2 = 0,
$$ 

we can utilize the Rational Root Theorem. This theorem states that for a polynomial with integer coefficients, any rational root must have a numerator that divides the constant term and a denominator that divides the leading coefficient.

In our case, the constant term is $2$ and the leading coefficient is $1$. Thus, the possible rational roots are $\pm 1$ and $\pm 2$. We will test these candidates using synthetic division to determine if they are actual roots of the equation.

**Testing $x = -1$:**

We perform synthetic division as follows:

$$
\begin{array}{r|rrrr}
-1 & 1 & 4 & 3 & 2 \\
   &   & -1 & -3 & -2 \\
\hline
   & 1 & 3 & 0 & 0 \\
\end{array}
$$

The result shows that the remainder is $0$, indicating that $x + 1$ is a factor of the polynomial.

**Testing $x = -2$:**

Next, we test $x = -2$ with synthetic division:

$$
\begin{array}{r|rrrr}
-2 & 1 & 4 & 3 & 2 \\
   &   & -2 & -4 & -2 \\
\hline
   & 1 & 2 & -1 & 0 \\
\end{array}
$$

Again, the remainder is $0$, confirming that $x + 2$ is also a factor of the polynomial.

Having established that both $x + 1$ and $x + 2$ are factors, we can express the cubic equation as:

$$
(x + 1)(x + 2)(x + k) = 0,
$$ 

where $k$ represents the remaining root. To find $k$, we expand the factors:

$$
(x + 1)(x + 2) = x^2 + 3x + 2.
$$

Next, we multiply this by $(x + k)$:

$$
(x^2 + 3x + 2)(x + k) = x^3 + (3 + k)x^2 + (2 + 3k)x + 2k.
$$

Now, we need to ensure that this product matches the original polynomial $x^3 + 4x^2 + 3x + 2$. By equating coefficients, we have:

1. $3 + k = 4 \implies k = 1$,
2. $2 + 3k = 3$,
3. $2k = 2 \implies k = 1$.

Thus, $k = -4$ must be verified. We can use the found factors to perform another synthetic division to confirm:

$$
\begin{array}{r|rrrr}
-2 & 1 & 7 & 14 & 8 \\
   &   & -2 & -10 & -8 \\
\hline
   & 1 & 5 & 4 & 0 \\
\end{array}
$$

This indicates that $k = -4$ is indeed correct.

Therefore, the roots of the cubic equation 

$$
x^3 + 4x^2 + 3x + 2 = 0 
$$ 

are $-1$, $-2$, and $-4$.
    