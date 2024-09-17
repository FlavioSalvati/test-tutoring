---
title: "Explain the process of synthetic division in polynomials"
summary: "Synthetic division is a method used to divide a polynomial by a linear factor."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-17
---

Synthetic division is a streamlined method for dividing a polynomial by a linear factor.

To execute synthetic division, we begin by expressing the divisor (the linear factor) in the form $(x - a)$, where $a$ is the constant that makes the factor equal to zero. We then list the coefficients of the polynomial in a row, ensuring that any missing terms are represented by a coefficient of zero. 

Here’s how the process works step-by-step:

1. **Set Up:** Write down the coefficients of the polynomial. For example, for the polynomial $2x^3 + 5x^2 - 3x - 2$, we list the coefficients as follows:

$$
\begin{array}{r|rrrr}
1 & 2 & 5 & -3 & -2 \\
\end{array}
$$

2. **Bring Down the First Coefficient:** The first coefficient ($2$) is brought down directly:

$$
\begin{array}{r|rrrr}
1 & 2 & 5 & -3 & -2 \\
  &   &   &   &   \\
  & 2 &   &   &   \\
\end{array}
$$

3. **Multiply and Add:** Next, we multiply the value we just brought down ($2$) by $a$ (which is $1$ in this case) and write the result ($2$) underneath the second coefficient ($5$):

$$
\begin{array}{r|rrrr}
1 & 2 & 5 & -3 & -2 \\
  &   & 2 &   &   \\
  & 2 &   &   &   \\
\end{array}
$$

Now, we add $5 + 2 = 7$ and write that below:

$$
\begin{array}{r|rrrr}
1 & 2 & 5 & -3 & -2 \\
  &   & 2 &   &   \\
  & 2 & 7 &   &   \\
\end{array}
$$

4. **Repeat the Process:** Continuing this process, we multiply $7$ by $1$ (resulting in $7$), and write it below the third coefficient ($-3$), then add:

$$
\begin{array}{r|rrrr}
1 & 2 & 5 & -3 & -2 \\
  &   & 2 & 7 &   \\
  & 2 & 7 &   &   \\
\end{array}
$$

Adding gives $-3 + 7 = 4$:

$$
\begin{array}{r|rrrr}
1 & 2 & 5 & -3 & -2 \\
  &   & 2 & 7 &   \\
  & 2 & 7 & 4 &   \\
\end{array}
$$

Finally, we multiply $4$ by $1$ (resulting in $4$) and add it to the last coefficient ($-2$):

$$
\begin{array}{r|rrrr}
1 & 2 & 5 & -3 & -2 \\
  &   & 2 & 7 & 4 \\
  & 2 & 7 & 4 &   \\
\end{array}
$$

This gives us $-2 + 4 = 2$. 

5. **Final Result:** The last row now contains the coefficients of the quotient polynomial along with the remainder. The coefficients $2$, $7$, and $4$ correspond to the polynomial $2x^2 + 7x + 4$. The final number in the row is the remainder, which is $2$. Thus, we can represent the division as follows:

$$
2x^3 + 5x^2 - 3x - 2 = (x - 1)(2x^2 + 7x + 4) + 2
$$

In conclusion, synthetic division provides an efficient way to divide polynomials, revealing both the quotient and the remainder clearly.
    