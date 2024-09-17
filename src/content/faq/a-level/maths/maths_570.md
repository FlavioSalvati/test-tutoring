---
title: "Explain the Extended Euclidean Algorithm"
summary: "The Extended Euclidean Algorithm is a method for finding the greatest common divisor of two integers."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-28
---

The Extended Euclidean Algorithm is a powerful method for determining the greatest common divisor (GCD) of two integers.

This algorithm builds upon the foundational principles of the Euclidean Algorithm, which finds the GCD by repeatedly dividing the larger integer by the smaller one and taking the remainder. This process continues until the remainder reaches zero. The last non-zero remainder obtained during this sequence is the GCD of the two integers.

In addition to finding the GCD, the Extended Euclidean Algorithm also calculates the coefficients of Bézout's identity. These coefficients, denoted as integers $x$ and $y$, satisfy the equation:

$$
ax + by = \gcd(a, b)
$$

Here, $a$ and $b$ are the two integers whose GCD is being computed. The coefficients $x$ and $y$ can be instrumental in solving linear Diophantine equations, which are equations of the form:

$$
ax + by = c
$$

where $a$, $b$, and $c$ are integers.

To apply the Extended Euclidean Algorithm, we begin by executing the Euclidean Algorithm on the integers $a$ and $b$. We express the remainders as linear combinations of $a$ and $b$, and then manipulate these equations to eliminate the remainders. Ultimately, we will derive a linear combination of $a$ and $b$ that equals the GCD. We can then use back substitution to solve for the coefficients $x$ and $y$.

For instance, let us find the GCD of $54$ and $24$ using the Extended Euclidean Algorithm:

1. Start with the division:
   $$
   54 = 2(24) + 6
   $$
   $$
   24 = 4(6) + 0
   $$

Here, the last non-zero remainder is $6$, thus we have:

$$
\gcd(54, 24) = 6.
$$

Next, we work backwards to find the coefficients $x$ and $y$:

1. From the first equation, we can express $6$ as:
   $$
   6 = 54 - 2(24).
   $$

2. Substituting for $24$ from the equation $24 = 4(6) + 0$, we rewrite:
   $$
   6 = 54 - 2(54 - 2(24)).
   $$

3. Simplifying this gives us:
   $$
   6 = 3(54) - 6(24).
   $$

From this, we identify the coefficients of Bézout's identity as $x = 3$ and $y = -6$. 

In summary, the Extended Euclidean Algorithm not only provides the GCD, but also the integer coefficients that express the GCD as a linear combination of the two integers.
    