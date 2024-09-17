---
title: "Explain how to find the nth term of a harmonic sequence"
summary: "The nth term of a harmonic sequence is calculated using the formula a(n) = 1/n."
author: "Dr. Sarah Wilson"
degree: "MSc in Physics, University College London"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-20
---

To determine the $n$th term of a harmonic sequence, we use the formula:

$$
a(n) = \frac{1}{n}.
$$

A harmonic sequence is characterized by each term being the reciprocal of a positive integer. For instance, the initial terms of a harmonic sequence are: 

$$
1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{5}, \ldots
$$

The formula $a(n) = \frac{1}{n}$ indicates that the $n$th term can be computed as one divided by $n$. For example, the 5th term of the harmonic sequence is given by:

$$
a(5) = \frac{1}{5}.
$$

To validate this formula, we can employ mathematical induction. We begin by demonstrating that the formula is true for the first term:

$$
a(1) = \frac{1}{1} = 1.
$$

Next, we assume that the formula holds for some arbitrary positive integer $n$, i.e., we assume that:

$$
a(n) = \frac{1}{n}.
$$

Our goal is to prove that it also holds for the next integer, $n+1$. This means we need to show that:

$$
a(n+1) = \frac{1}{n+1}.
$$

According to the definition of a harmonic sequence, $a(n+1)$ can be expressed in terms of the sums of the sequence. Specifically, we note that:

$$
a(n+1) = \frac{1}{n+1} \text{ if and only if } S(n+1) = S(n) + \frac{1}{n+1},
$$

where $S(n)$ represents the sum of the first $n$ terms of the sequence. The formula for this sum is:

$$
S(n) = 1 + \frac{1}{2} + \frac{1}{3} + \ldots + \frac{1}{n}.
$$

Thus, the sum of the first $n+1$ terms is:

$$
S(n+1) = S(n) + \frac{1}{n+1},
$$

which confirms that the sum of the first $n+1$ terms equals the sum of the first $n$ terms plus $\frac{1}{n+1}$. Consequently, we conclude that:

$$
a(n+1) = \frac{1}{n+1},
$$

which verifies that the formula is valid for all positive integers $n$.

In summary, to find the $n$th term of a harmonic sequence, you can use the formula:

$$
a(n) = \frac{1}{n}.
$$
    