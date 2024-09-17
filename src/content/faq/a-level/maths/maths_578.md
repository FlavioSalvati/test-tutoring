---
title: "Calculate the remainder when x^3 - 3x^2 + 3x - 1 is divided by x - 1"
summary: "The remainder when x^3 - 3x^2 + 3x - 1 is divided by x - 1 is 0."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-25
---

To determine the remainder when the polynomial $x^3 - 3x^2 + 3x - 1$ is divided by $x - 1$, we will utilize polynomial long division.

We start by setting up our division, with $x - 1$ as the divisor and $x^3 - 3x^2 + 3x - 1$ as the dividend:

$$
\begin{array}{r|l}
x^2 - 2x + 1 \\
\hline
x - 1 \quad | \quad x^3 - 3x^2 + 3x - 1
\end{array}
$$

First, we divide $x$ into $x^3$ to obtain $x^2$. We place this result above the dividend. Next, we multiply the divisor $x - 1$ by $x^2$, resulting in $x^3 - x^2$, which we write beneath the dividend. We then perform the subtraction:

$$
\begin{array}{r|l}
x^2 - 2x + 1 \\
\hline
x - 1 \quad | \quad x^3 - 3x^2 + 3x - 1 \\
 & - (x^3 - x^2) \\
\hline
 & -2x^2 + 3x - 1
\end{array}
$$

Continuing with the process, we now divide $x$ into $-2x^2$, yielding $-2x$. We write this above the dividend as well. We then multiply $x - 1$ by $-2x$, giving us $-2x^2 + 2x$. We write this result below the current remainder and subtract:

$$
\begin{array}{r|l}
x^2 - 2x + 1 \\
\hline
x - 1 \quad | \quad x^3 - 3x^2 + 3x - 1 \\
 & - (x^3 - x^2) \\
\hline
 & -2x^2 + 3x - 1 \\
 & - (-2x^2 + 2x) \\
\hline
 & x - 1
\end{array}
$$

Now, we repeat this process with $x - 1$. We divide $x$ into $x$, which gives us $1$. We place this above the dividend. We then multiply $x - 1$ by $1$, resulting in $x - 1$, which we write below the current remainder. Performing the subtraction yields:

$$
\begin{array}{r|l}
x^2 - 2x + 1 \\
\hline
x - 1 \quad | \quad x^3 - 3x^2 + 3x - 1 \\
 & - (x^3 - x^2) \\
\hline
 & -2x^2 + 3x - 1 \\
 & - (-2x^2 + 2x) \\
\hline
 & x - 1 \\
 & - (x - 1) \\
\hline
 & 0
\end{array}
$$

At this stage, we find that the remainder, $0$, is of lower degree than the divisor $x - 1$. Thus, we conclude that the remainder when dividing the polynomial $x^3 - 3x^2 + 3x - 1$ by $x - 1$ is indeed $0$.
    