---
title: "Determine the sum of an infinite harmonic series"
summary: "An infinite harmonic series does not converge to a finite value; instead, it diverges, meaning its sum increases indefinitely without approaching a limit."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-05-23
---

The sum of an infinite harmonic series diverges to infinity.

An infinite harmonic series is defined as follows:

$$
1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \ldots
$$

To investigate whether this series converges or diverges, we can utilize the harmonic series test. This test asserts that if the terms of a series are structured as $\frac{1}{n}$, where $n$ is a positive integer, then the series diverges.

To understand why this is true, we can apply the integral test. This test states that if $f(x)$ is a positive, decreasing function, then the series $\sum f(n)$ converges if and only if the integral $\int f(x) \, dx$ converges.

For the harmonic series, we can define the function:

$$
f(x) = \frac{1}{x}
$$

This function is both positive and decreasing for $x > 0$, allowing us to apply the integral test. Evaluating the integral, we have:

$$
\int \frac{1}{x} \, dx = \ln(x) + C
$$

As $x$ approaches infinity, $\ln(x)$ diverges, indicating that the integral diverges. Consequently, the series also diverges. Thus, we conclude that the sum of the infinite harmonic series diverges to infinity.

In simpler terms, the sum of the series:

$$
1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \ldots
$$

is infinite. This implies that no matter how many terms we add together, the total will continue to grow larger and larger without bound.
    