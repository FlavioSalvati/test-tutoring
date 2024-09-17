---
title: "Describe the Newton's theorem for polynomials"
summary: "Newton's theorem states that if a polynomial f(x) of degree n has n distinct roots, then:"
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-17
---

Newton's theorem articulates a relationship between the roots of a polynomial and its coefficients. Specifically, if a polynomial $ f(x) $ of degree $ n $ has $ n $ distinct roots, the following statements hold true:

1. The sum of the roots is equal to the negative of the coefficient of $ x^{n-1} $ divided by the coefficient of $ x^n $.
2. The sum of the products of every possible pair of roots is equal to the coefficient of $ x^{n-2} $ divided by the coefficient of $ x^n $.
3. The sum of the products of every possible triplet of roots corresponds to the coefficient of $ x^{n-3} $ divided by the coefficient of $ x^n $.
4. This pattern continues until the final statement:
   $ n $. The product of all the roots is equal to the constant term divided by the coefficient of $ x^n $.

This theorem can be substantiated using Vieta's formulas, which assert that the sum of the roots of a polynomial is the negative of the coefficient of the second-to-last term divided by the coefficient of the last term. Additionally, the product of the roots is given by the constant term divided by the coefficient of the last term.

To demonstrate the first statement of Newton's theorem, we can utilize Vieta's formulas. Let the roots of the polynomial be denoted as $ r_1, r_2, \ldots, r_n $. According to Vieta's formulas, we have:

$$
r_1 + r_2 + \ldots + r_n = -\frac{a_{n-1}}{a_n}
$$

By multiplying both sides by $ -a_n $, we obtain:

$$
-a_n(r_1 + r_2 + \ldots + r_n) = a_{n-1}
$$

Dividing both sides by $ -a_n $ yields:

$$
r_1 + r_2 + \ldots + r_n = \frac{a_{n-1}}{a_n}
$$

Thus, we have validated the first statement of Newton's theorem. The remaining statements can similarly be proven by applying Vieta's formulas. For instance, the sum of the products of every possible pair of roots corresponds to the negative of the coefficient of the third-to-last term divided by the coefficient of the last term, and this reasoning extends to the subsequent cases.
    