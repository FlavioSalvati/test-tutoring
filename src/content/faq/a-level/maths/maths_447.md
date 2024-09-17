---
title: "What is beta distribution?"
summary: "The beta distribution is a continuous probability distribution used to model random variables that are constrained to lie between 0 and 1."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-20
---

The beta distribution is a continuous probability distribution that is particularly useful for modeling random variables constrained to the interval $[0, 1]$.

This distribution is characterized by two positive real parameters, $\alpha$ and $\beta$. The probability density function (PDF) of the beta distribution is expressed as:

$$
f(x; \alpha, \beta) = \frac{x^{\alpha - 1} (1 - x)^{\beta - 1}}{B(\alpha, \beta)}
$$

In this equation, $x$ represents the random variable, while $B(\alpha, \beta)$ denotes the beta function. The beta function is defined as:

$$
B(\alpha, \beta) = \frac{\Gamma(\alpha) \Gamma(\beta)}{\Gamma(\alpha + \beta)}
$$

where $\Gamma$ is the gamma function.

The mean and variance of the beta distribution can be calculated using the following formulas:

$$
\mu = \frac{\alpha}{\alpha + \beta}
$$

$$
\sigma^2 = \frac{\alpha \beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)}
$$

The beta distribution is widely utilized in Bayesian statistics, where it serves as a prior distribution for probabilities. Additionally, it finds applications in fields such as reliability analysis, queuing theory, and the modeling of proportions and percentages.

In summary, the beta distribution is a flexible probability distribution ideal for modeling random variables confined to the interval $[0, 1]$. Defined by the shape parameters $\alpha$ and $\beta$, it features a probability density function that enables the calculation of probabilities and statistical moments.
    