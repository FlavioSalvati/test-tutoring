---
title: "What is geometric distribution?"
summary: "The geometric distribution models the number of trials required to achieve the first success in a series of independent Bernoulli trials."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-17
---

The geometric distribution is a probability distribution that models the number of trials required to achieve the first success in a series of independent Bernoulli trials.

In this context, a Bernoulli trial is a random experiment that results in one of two outcomes: success or failure. The probability of success on each trial is denoted by $p$. The geometric distribution is particularly useful for scenarios where we want to determine how many trials we must conduct before obtaining a success—for example, counting the number of times we need to flip a coin until we get a head.

The probability mass function (PMF) of the geometric distribution is expressed as:

$$
P(X = k) = (1 - p)^{k-1} \cdot p
$$

In this equation, $X$ is the random variable that represents the number of trials needed to achieve the first success, $k$ is a positive integer indicating the specific trial number, and $p$ is the probability of success on each trial.

The mean and variance of the geometric distribution can be calculated using the following formulas:

$$
E(X) = \frac{1}{p}
$$

$$
Var(X) = \frac{1 - p}{p^2}
$$

One of the defining characteristics of the geometric distribution is its memoryless property. This means that the probability of achieving success on the next trial remains constant, regardless of how many trials have already been conducted. This unique feature makes the geometric distribution particularly applicable in situations where the probability of success is invariant over time, such as in modeling radioactive decay or the failure of machines.
    