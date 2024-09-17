---
title: "Prove the formula for the sum of a finite geometric series"
summary: "The sum of a finite geometric series is calculated using the formula Sn = a(1-r^n)/(1-r), where 'a' is the first term, 'r' is the common ratio, and 'n' is the number of terms."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-19
---

Here is the enhanced content for clarity and readability:

The formula for the sum of a finite geometric series is given by:

$$ S_n = \frac{a(1 - r^n)}{1 - r} $$

where:
- $ S_n $ is the sum of the first $ n $ terms of the series,
- $ a $ is the first term,
- $ r $ is the common ratio, and
- $ n $ is the number of terms.

A geometric series is a sequence of numbers in which each term is obtained by multiplying the previous term by a constant factor, known as the common ratio. The sum of the first $ n $ terms of a finite geometric series can be expressed using the above formula.

To derive this formula, we can apply the method of partial sums. We define the following sums:
- $ S_1 $ as the sum of the first term,
- $ S_2 $ as the sum of the first two terms,
- $ S_3 $ as the sum of the first three terms,
- and so forth, up to $ S_n $, which represents the sum of the first $ n $ terms.

These sums can be expressed as follows:

$$
\begin{align*}
S_1 & = a \\
S_2 & = a + ar \\
S_3 & = a + ar + ar^2 \\
& \vdots \\
S_n & = a + ar + ar^2 + \ldots + ar^{n-1}
\end{align*}
$$

To derive a formula for $ S_n $, we can subtract $ S_{n-1} $ from $ S_n $:

$$ S_n - S_{n-1} = ar^{n-1} $$

Next, we can simplify this expression by multiplying both sides by $(1 - r)$:

$$ (S_n - S_{n-1})(1 - r) = ar^{n-1}(1 - r) $$

Now, using the expression for the sum of a geometric series, we can simplify the left-hand side:

$$ S_n(1 - r) - S_{n-1}(1 - r) = a(1 - r^n) $$

Dividing both sides by $(1 - r)$ yields:

$$ S_n = \frac{a(1 - r^n)}{1 - r} $$

This derivation confirms the formula for the sum of a finite geometric series.
    