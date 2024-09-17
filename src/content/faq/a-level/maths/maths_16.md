---
title: "What is log-normal distribution?"
summary: "The log-normal distribution describes a random variable whose logarithm follows a normal distribution, highlighting its unique characteristics in probability theory and statistical analysis."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-03-20
---

The log-normal distribution is a continuous probability distribution that describes a random variable whose logarithm follows a normal distribution. This type of distribution is particularly useful for modeling positive and skewed variables, such as income, stock prices, and population sizes. The log-normal distribution is defined by two parameters: the mean ($\mu$) and the standard deviation ($\sigma$) of the logarithm of the variable.

The probability density function (PDF) of the log-normal distribution is expressed as:

$$
f(x) = \frac{1}{x \sigma \sqrt{2\pi}} e^{-\frac{(\ln(x) - \mu)^2}{2\sigma^2}}
$$

In this equation, $x$ represents the value of the random variable, $\mu$ denotes the mean of the logarithm of the variable, $\sigma$ signifies the standard deviation of the logarithm, and $e$ is the base of the natural logarithm.

The cumulative distribution function (CDF) for the log-normal distribution can be represented as:

$$
F(x) = \Phi\left(\frac{\ln(x) - \mu}{\sigma}\right)
$$

Here, $\Phi$ indicates the cumulative distribution function of the standard normal distribution.

The expected value (mean) of a log-normally distributed random variable is given by:

$$
E(X) = e^{\mu + \frac{\sigma^2}{2}}
$$

Meanwhile, the variance of this distribution is calculated using the formula:

$$
\text{Var}(X) = \left(e^{\sigma^2} - 1\right) e^{2\mu + \sigma^2}
$$

The log-normal distribution is widely applied in various fields, particularly in finance and economics, to model asset prices and returns. It is also utilized in biology for modeling population sizes and growth rates.
    