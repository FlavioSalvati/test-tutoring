---
title: "Prove the formula for the sum of an infinite geometric series"
summary: "The sum of an infinite geometric series is calculated using the formula S = a/(1-r), where 'a' represents the first term and 'r' is the common ratio."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-02-20
---

The formula for the sum of an infinite geometric series is given by 

$$ S = \frac{a}{1 - r}, $$ 

where $a$ represents the first term and $r$ denotes the common ratio of the series.

To prove this formula, we begin with the expression for the sum of a finite geometric series:

$$ S_n = \frac{a(1 - r^n)}{1 - r}, $$ 

where $S_n$ is the sum of the first $n$ terms of the series. Our goal is to find the sum of the infinite series, which we can achieve by taking the limit as $n$ approaches infinity:

$$ \lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{a(1 - r^n)}{1 - r}. $$

As $n$ approaches infinity, if $|r| < 1$, then $r^n$ approaches zero. This allows us to simplify the expression:

$$ \lim_{n \to \infty} S_n = \frac{a(1 - 0)}{1 - r} = \frac{a}{1 - r}. $$

Thus, we have shown that the sum of an infinite geometric series can be expressed as 

$$ S = \frac{a}{1 - r}, $$ 

as required.

We can also verify this formula using the series representation of the sum:

$$ S = \frac{a}{1 - r} + \frac{ar}{(1 - r)^2} + \frac{ar^2}{(1 - r)^3} + \ldots $$

To manipulate this expression, we multiply both sides by $(1 - r)$:

$$ S(1 - r) = a + \frac{ar}{(1 - r)^2} + \frac{ar^2}{(1 - r)^3} + \ldots $$

Next, we rearrange the terms to form the equation:

$$ S - Sr = a + \frac{ar}{(1 - r)^2} + \frac{ar^2}{(1 - r)^3} + \ldots $$

Now, when we subtract the second equation from the first, we get:

$$ S - Sr = a. $$

Solving for $S$, we derive:

$$ S = \frac{a}{1 - r}. $$

This result is consistent with our earlier derivation. Therefore, we have successfully proven that the formula for the sum of an infinite geometric series is 

$$ S = \frac{a}{1 - r}. $$
    