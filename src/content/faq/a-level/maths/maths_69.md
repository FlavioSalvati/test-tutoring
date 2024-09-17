---
title: "Calculate the remainder when x^3 - 2x + 1 is divided by x - 1"
summary: The polynomial $ x^3 - 2x + 1 $ has a remainder of 0 when divided by $ x - 1 $, indicating that $ x - 1 $ is a factor of the polynomial.
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-09-15
---

To determine the remainder when the polynomial $x^3 - 2x + 1$ is divided by $x - 1$, we can utilize polynomial long division.

We start by dividing the leading term of the polynomial, $x^3$, by the leading term of the divisor, $x$. This gives us $x^2$. Next, we multiply the entire divisor, $x - 1$, by $x^2$, resulting in the expression $x^3 - x^2$. We then subtract this from the original polynomial:

$$
(x^3 - 2x + 1) - (x^3 - x^2) = -x^2 - 2x + 1.
$$

Now, we focus on the new polynomial $-x^2 - 2x + 1$. We repeat the division process by dividing the leading term $-x^2$ by $x$, yielding $-x$. We multiply the divisor $x - 1$ by $-x$, which gives us $-x^2 + x$. Subtracting this from $-x^2 - 2x + 1$, we have:

$$
(-x^2 - 2x + 1) - (-x^2 + x) = -3x + 1.
$$

Next, we take the polynomial $-3x + 1$ and divide the leading term $-3x$ by $x$, resulting in $-3$. We multiply the divisor $x - 1$ by $-3$, yielding $-3x + 3$. We subtract this from $-3x + 1$:

$$
(-3x + 1) - (-3x + 3) = 2.
$$

At this point, we have obtained a remainder of $2$. Since the degree of the remainder, which is $2$, is less than the degree of the divisor $x - 1$, we conclude that the remainder is simply the constant term.

Thus, the final result is that the remainder when $x^3 - 2x + 1$ is divided by $x - 1$ is:

$$
2.
$$
    