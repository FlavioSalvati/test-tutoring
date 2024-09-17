---
title: "Find the roots of the equation x^3 - 2x^2 - 3x + 4 = 0"
summary: "The roots of x^3 - 2x^2 - 3x + 4 = 0 are to be found."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-05
---

To find the roots of the equation 

$$
x^3 - 2x^2 - 3x + 4 = 0,
$$ 

we can apply the Rational Root Theorem. This theorem states that for a polynomial with integer coefficients, any potential rational root must have a numerator that divides the constant term and a denominator that divides the leading coefficient.

In our case, the constant term is $4$, and the leading coefficient is $1$. Therefore, the possible rational roots are $\pm 1$, $\pm 2$, and $\pm 4$. We will test these candidates by substituting them into the polynomial to see if they yield a result of zero.

Let's evaluate each candidate:

1. For $x = 1$:
   $$
   1^3 - 2(1)^2 - 3(1) + 4 = 1 - 2 - 3 + 4 = 0.
   $$
   Thus, $x = 1$ is a root.

2. For $x = -1$:
   $$
   (-1)^3 - 2(-1)^2 - 3(-1) + 4 = -1 - 2 + 3 + 4 = 4 \neq 0.
   $$
   Hence, $x = -1$ is not a root.

3. For $x = 4$:
   $$
   4^3 - 2(4)^2 - 3(4) + 4 = 64 - 32 - 12 + 4 = 24 \neq 0.
   $$
   Therefore, $x = 4$ is not a root.

4. For $x = -4$:
   $$
   (-4)^3 - 2(-4)^2 - 3(-4) + 4 = -64 - 32 + 12 + 4 = -80 \neq 0.
   $$
   So, $x = -4$ is not a root.

5. For $x = 2$:
   $$
   2^3 - 2(2)^2 - 3(2) + 4 = 8 - 8 - 6 + 4 = -2 \neq 0.
   $$
   Thus, $x = 2$ is not a root.

6. For $x = -2$:
   $$
   (-2)^3 - 2(-2)^2 - 3(-2) + 4 = -8 - 8 + 6 + 4 = -6 \neq 0.
   $$
   Hence, $x = -2$ is not a root.

From our tests, we found that $x = 1$ is indeed a root. However, it appears there was an error in the initial assertion that $x = -1$ is a root: it does not satisfy the polynomial equation.

To summarize, the only rational root we found is $x = 1$. 

Next, we can factor the polynomial using synthetic division or polynomial long division. Dividing 

$$
x^3 - 2x^2 - 3x + 4 
$$ 

by 

$$
x - 1
$$ 

yields 

$$
x^2 - x - 4.
$$ 

Now, we can set this quadratic equation to zero:

$$
x^2 - x - 4 = 0.
$$ 

To find the remaining roots, we apply the quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{1 \pm \sqrt{(-1)^2 - 4(1)(-4)}}{2(1)} = \frac{1 \pm \sqrt{1 + 16}}{2} = \frac{1 \pm \sqrt{17}}{2}.
$$ 

Thus, the complete set of roots for the equation 

$$
x^3 - 2x^2 - 3x + 4 = 0 
$$ 

is 

$$
x = 1, \quad x = \frac{1 + \sqrt{17}}{2}, \quad \text{and} \quad x = \frac{1 - \sqrt{17}}{2}. 
$$
    