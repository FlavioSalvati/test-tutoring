---
title: "Prove the binomial theorem"
summary: The binomial theorem states that $ (a+b)^n = \sum_{k=0}^{n} \binom{n}{k} \cdot a^{(n-k)} \cdot b^k $.
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-15
---

The binomial theorem provides a powerful formula for expanding expressions of the form $(a+b)^n$, where $n$ is a non-negative integer. The theorem can be expressed mathematically as:

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

In this equation, $\sum$ denotes the summation over all integer values of $k$ from $0$ to $n$, and the term $\binom{n}{k}$ represents the binomial coefficient, which is defined as:

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

To establish the validity of the binomial theorem, we can use a method known as mathematical induction. We begin with the base case, where $n=1$:

$$(a+b)^1 = a + b$$

This statement is evidently true. Now, we assume that the theorem holds for some arbitrary positive integer $n$, such that:

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

Our goal is to demonstrate that the theorem also holds for $n+1$, specifically that:

$$(a+b)^{n+1} = \sum_{k=0}^{n+1} \binom{n+1}{k} a^{(n+1)-k} b^k$$

To achieve this, we can rewrite $(a+b)^{n+1}$ as the product of $(a+b)$ and $(a+b)^n$:

$$(a+b)^{n+1} = (a+b)(a+b)^n = a(a+b)^n + b(a+b)^n$$

Next, we apply the induction hypothesis to expand both terms:

1. For the first term:
   $$a(a+b)^n = a \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k = \sum_{k=0}^{n} \binom{n}{k} a^{n-k+1} b^k$$

2. For the second term:
   $$b(a+b)^n = b \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k+1}$$

Now, we can combine these two expansions to find $(a+b)^{n+1}$:

$$(a+b)^{n+1} = \sum_{k=0}^{n} \binom{n}{k} a^{n-k+1} b^k + \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k+1}$$

At this point, we recognize that we need to adjust the indices in the second summation. We can achieve this by changing the index of summation in the second term, letting $j = k + 1$. When $k$ runs from $0$ to $n$, $j$ will run from $1$ to $n + 1$. Thus, we can rewrite the second summation:

$$\sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k+1} = \sum_{j=1}^{n+1} \binom{n}{j-1} a^{n-(j-1)} b^j$$

Now we combine both summations:

$$(a+b)^{n+1} = \sum_{k=0}^{n} \binom{n}{k} a^{n-k+1} b^k + \sum_{j=1}^{n+1} \binom{n}{j-1} a^{n-(j-1)} b^j$$

By merging these two sums, we can express the result as:

$$(a+b)^{n+1} = \sum_{k=0}^{n+1} \left( \binom{n}{k} + \binom{n}{k-1} \right) a^{n+1-k} b^k$$

By the properties of binomial coefficients, we have:

$$\binom{n+1}{k} = \binom{n}{k} + \binom{n}{k-1}$$

Thus, we conclude that:

$$(a+b)^{n+1} = \sum_{k=0}^{n+1} \binom{n+1}{k} a^{(n+1)-k} b^k$$

This completes the inductive step, confirming that the binomial theorem is indeed valid for all positive integers $n$.
    