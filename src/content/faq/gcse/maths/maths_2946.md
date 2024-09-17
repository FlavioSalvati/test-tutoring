---
title: "What is the expected frequency of rolling a prime number 15 times out of 30 rolls?"
summary: "The expected frequency of rolling a prime number 15 times out of 30 rolls is approximately 0.144."
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-05-16
---

Here is the enhanced content for clarity and readability, incorporating the requested formatting:

The expected frequency of rolling a prime number exactly 15 times out of 30 rolls is approximately $0.144$.

When rolling a standard six-sided die, the prime numbers available are $2$, $3$, and $5$. This results in $3$ prime numbers among the $6$ possible outcomes. Consequently, the probability of rolling a prime number on any single roll is given by:

$$
p = \frac{3}{6} = \frac{1}{2} = 0.5.
$$

To calculate the expected frequency of rolling a prime number exactly $15$ times in $30$ rolls, we will utilize the binomial distribution formula. The binomial distribution allows us to determine the probability of achieving a specific number of successes (in this case, rolling a prime number) over a fixed number of trials (which is $30$ rolls), given the probability of success for each trial ($0.5$).

The formula for the binomial probability is expressed as:

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

where:
- $ n $ represents the total number of trials (in our scenario, $30$ rolls),
- $ k $ denotes the number of successes (which is $15$ prime rolls),
- $ p $ is the probability of success in each trial (which is $0.5$),
- $ \binom{n}{k} $ is the binomial coefficient, calculated as $ \frac{n!}{k!(n-k)!} $.

By substituting the values into the formula, we have:

$$
P(X = 15) = \binom{30}{15} (0.5)^{15} (0.5)^{15} 
$$

which simplifies to:

$$
P(X = 15) = \binom{30}{15} (0.5)^{30}.
$$

Using a calculator or a binomial probability table, we can determine that $ \binom{30}{15} $ is a large number, while $ (0.5)^{30} $ is a very small number. The product of these two values yields approximately $0.144$. This indicates that there is about a $14.4\%$ chance of rolling a prime number exactly $15$ times out of $30$ rolls.
    