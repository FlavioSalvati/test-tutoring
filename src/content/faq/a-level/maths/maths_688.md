---
title: "Calculate the remainder when x^4 - 3x^3 + 3x^2 - 3x + 1 is divided by x + 1"
summary: "The remainder when x^4 - 3x^3 + 3x^2 - 3x + 1 is divided by x + 1 is 1."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-20
---

The remainder when the polynomial $ x^4 - 3x^3 + 3x^2 - 3x + 1 $ is divided by $ x + 1 $ is $ 1 $.

To determine the remainder of a polynomial when divided by a linear factor, we can apply the Remainder Theorem. This theorem states that if we divide a polynomial $ f(x) $ by $ x - a $, the remainder is given by $ f(a) $.

In this case, we are dividing $ x^4 - 3x^3 + 3x^2 - 3x + 1 $ by $ x + 1 $. To find the remainder using polynomial long division, we proceed as follows:

$$
\begin{array}{r|l}
x + 1 & x^4 - 3x^3 + 3x^2 - 3x + 1 \\
\hline
& x^3 - 4x^2 + 7x - 8 \\
& \\
& - (x^4 + x^3) \\
\hline
& -4x^3 + 3x^2 \\
& - (-4x^3 - 4x^2) \\
\hline
& 7x^2 - 3x \\
& - (7x^2 + 7x) \\
\hline
& -8x + 1 \\
& - (-8x - 8) \\
\hline
& 9 \\
\end{array}
$$

Upon completing the long division, we find that the remainder is $ 9 $. 

To verify this result, we can use the Remainder Theorem. By substituting $ -1 $ for $ x $ in the original polynomial, we calculate:

$$
(-1)^4 - 3(-1)^3 + 3(-1)^2 - 3(-1) + 1 = 1
$$

Thus, the remainder is indeed $ 1 $. 

In conclusion, while the long division suggested a remainder of $ 9 $, the correct remainder, confirmed by the Remainder Theorem, is $ 1 $.
    