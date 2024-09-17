---
title: "What is the probability density function?"
summary: "The probability density function (PDF) describes the likelihood of a continuous random variable assuming specific values, providing a mathematical representation of probabilities for continuous outcomes."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-08-30
---

The probability density function (PDF) is a critical mathematical concept that quantifies the likelihood of a continuous random variable assuming a specific value.

In probability theory, a random variable is defined as a variable whose value can fluctuate due to randomness. Continuous random variables can take on any value within a specified range, unlike discrete random variables, which can only assume distinct, separate values. The PDF serves to characterize the probability distribution of a continuous random variable.

The PDF is mathematically defined as the derivative of the cumulative distribution function (CDF). The CDF represents the probability that a random variable takes on a value less than or equal to a certain threshold. This relationship can be expressed as:

$$
F(x) = P(X \leq x)
$$

Consequently, the PDF is articulated as:

$$
f(x) = \frac{dF(x)}{dx}
$$

In simpler terms, the PDF represents the rate of change of the CDF. To determine the probability that the random variable falls within a specific interval, we integrate the PDF over that range. This can be mathematically represented as:

$$
P(a \leq X \leq b) = \int_a^b f(x) \, dx
$$

The PDF is a fundamental concept in probability theory and finds applications across various fields, including statistics, finance, and engineering.
    