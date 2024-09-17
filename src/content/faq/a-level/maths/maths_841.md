---
title: "What is the Pareto distribution?"
summary: "The Pareto distribution is a continuous probability distribution used to model power law phenomena."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-26
---

The Pareto distribution is a continuous probability distribution that effectively models phenomena characterized by power laws.

It is named after the Italian economist Vilfredo Pareto, who famously observed that approximately $80\%$ of the land in Italy was owned by just $20\%$ of the population. This observation gave rise to the Pareto principle, often referred to as the $80/20$ rule, which suggests that $80\%$ of the effects arise from $20\%$ of the causes.

As a power law distribution, the Pareto distribution features a long tail that extends indefinitely. The probability density function (PDF) for the Pareto distribution is expressed as:

$$
f(x) = \frac{\alpha x_{min}^\alpha}{x^{\alpha + 1}}
$$

In this formula, $x$ represents the random variable, $x_{min}$ is the minimum value that $x$ can take, and $\alpha$ is the shape parameter. The mean and variance of the Pareto distribution are calculated as follows:

$$
\mu = \frac{\alpha x_{min}}{\alpha - 1}
$$

$$
\sigma^2 = \frac{(\alpha x_{min})^2}{(\alpha - 1)^2 (\alpha - 2)}
$$

The Pareto distribution is frequently employed to model various phenomena, including income and wealth distributions, city sizes, earthquake magnitudes, and numerous other occurrences that demonstrate power law characteristics. It is crucial to note that the Pareto distribution is applicable only for values of $x$ that are greater than or equal to $x_{min}$.
    