---
title: "Explain the process of synthetic division"
summary: "Synthetic division is a method used to divide a polynomial by a linear factor."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-25
---

Synthetic division is a streamlined method for dividing a polynomial by a linear factor. 

To begin the process of synthetic division, we must first arrange the polynomial in descending order of its powers. Next, we express the divisor in the form $(x - a)$, where $a$ represents the root of the divisor. We place the root $a$ outside the division symbol and write the coefficients of the polynomial inside the symbol. A horizontal line is then drawn beneath the coefficients.

Once we have set up the division, we start by bringing down the first coefficient. We then multiply this coefficient by the root $a$ and write the result underneath the second coefficient. This value is added to the second coefficient. This procedure is repeated until we reach the last coefficient of the polynomial. The final output consists of the quotient of the division, with any remainder expressed as a fraction over the divisor.

For instance, let’s consider dividing the polynomial $2x^3 + 5x^2 - 3x - 2$ by the linear factor $(x - 1)$. We first ensure the polynomial is in descending order, which it already is:

$$
2x^3 + 5x^2 - 3x - 2
$$

Next, we note the divisor $(x - 1)$ and place the root $1$ outside the division symbol:

$$
1 | \quad 2 \quad 5 \quad -3 \quad -2
$$

We begin by bringing down the first coefficient, which is $2$. We multiply this coefficient by the root $1$ to obtain $2$. This value is then placed beneath the second coefficient, and we add it to the second coefficient:

$$
1 | \quad 2 \quad 5 \quad -3 \quad -2 \\
  | \quad 2 \\
  | \underline{7}
$$

Continuing the process, we multiply $7$ (the result from the previous step) by the root $1$ to get $7$, and add this to the next coefficient $-3$:

$$
1 | \quad 2 \quad 5 \quad -3 \quad -2 \\
  | \quad 2 \quad 7 \\
  | \underline{4}
$$

Next, we multiply $4$ by the root $1$ to obtain $4$, and finally, we add this to the last coefficient $-2$:

$$
1 | \quad 2 \quad 5 \quad -3 \quad -2 \\
  | \quad 2 \quad 7 \quad 4 \\
  | \underline{2}
$$

The final result reveals that the quotient is $2x^2 + 7x + 4$, with a remainder of $\frac{2}{x - 1}$. Thus, the complete expression for the division is:

$$
\frac{2x^3 + 5x^2 - 3x - 2}{x - 1} = 2x^2 + 7x + 4 + \frac{2}{x - 1}
$$
    