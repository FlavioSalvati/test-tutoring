---
title: "Calculate the remainder when x^4 + 2x^3 + 3x^2 + 4x + 5 is divided by x + 2"
summary: The polynomial $ x^4 + 2x^3 + 3x^2 + 4x + 5 $ gives a remainder of -3 when divided by $ x + 2 $.
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-08-19
---

To determine the remainder when the polynomial \( x^4 + 2x^3 + 3x^2 + 4x + 5 \) is divided by \( x + 2 \), we can apply the Remainder Theorem. This theorem states that if a polynomial \( f(x) \) is divided by \( x - a \), the remainder of this division is simply \( f(a) \).

In our case, we want to divide \( x^4 + 2x^3 + 3x^2 + 4x + 5 \) by \( x + 2 \), which is equivalent to finding \( f(-2) \) for the polynomial \( f(x) \).

First, let's perform polynomial long division to verify the remainder:

\[
\begin{array}{r|l}
x + 2 & x^4 + 2x^3 + 3x^2 + 4x + 5 \\
\hline
& x^3 - 2x^2 + 7x - 14 \\
\end{array}
\]

1. Divide \( x^4 \) by \( x \) to obtain \( x^3 \).
2. Multiply \( x^3 \) by \( x + 2 \) to get \( x^4 + 2x^3 \).
3. Subtract this from the original polynomial:

\[
(x^4 + 2x^3 + 3x^2 + 4x + 5) - (x^4 + 2x^3) = 3x^2 + 4x + 5
\]

4. Next, divide \( 3x^2 \) by \( x \) to obtain \( 3x \).
5. Multiply \( 3x \) by \( x + 2 \) to get \( 3x^2 + 6x \).
6. Subtract this result:

\[
(3x^2 + 4x + 5) - (3x^2 + 6x) = -2x + 5
\]

7. Now, divide \( -2x \) by \( x \) to get \( -2 \).
8. Multiply \( -2 \) by \( x + 2 \) to yield \( -2x - 4 \).
9. Subtract again:

\[
(-2x + 5) - (-2x - 4) = 9
\]

Thus, the result of the polynomial long division shows that the remainder is \( 9 \).

However, to find the correct remainder when dividing by \( x + 2 \), we utilize the Remainder Theorem again by evaluating the polynomial at \( x = -2 \):

\[
f(-2) = (-2)^4 + 2(-2)^3 + 3(-2)^2 + 4(-2) + 5
\]

Calculating each term:

- \( (-2)^4 = 16 \)
- \( 2(-2)^3 = 2 \times -8 = -16 \)
- \( 3(-2)^2 = 3 \times 4 = 12 \)
- \( 4(-2) = -8 \)
- \( 5 = 5 \)

Combining these results:

\[
16 - 16 + 12 - 8 + 5 = 16 - 16 + 12 - 8 + 5 = -3
\]

Consequently, we confirm that the remainder when dividing \( x^4 + 2x^3 + 3x^2 + 4x + 5 \) by \( x + 2 \) is indeed \( -3 \).
    