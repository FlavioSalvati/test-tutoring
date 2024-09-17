---
title: "What is Weibull distribution?"
summary: "The Weibull distribution is a probability distribution used to model the time-to-failure of a system."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-08
---

The Weibull distribution is a probability distribution frequently employed to model the time-to-failure of various systems.

Named after the Swedish mathematician Waloddi Weibull, this continuous probability distribution is widely utilized in reliability engineering. It is defined by two key parameters: the shape parameter $k$ and the scale parameter $\lambda$. The shape parameter $k$ influences the form of the distribution curve, while the scale parameter $\lambda$ determines the curve's position along the x-axis.

The probability density function (PDF) of the Weibull distribution is expressed as:

$$
f(x) = \frac{k}{\lambda} \left( \frac{x}{\lambda} \right)^{k-1} e^{-\left( \frac{x}{\lambda} \right)^{k}}
$$

In this equation, $x$ represents the time-to-failure, $k$ is the shape parameter, and $\lambda$ is the scale parameter.

The cumulative distribution function (CDF) of the Weibull distribution is given by:

$$
F(x) = 1 - e^{-\left( \frac{x}{\lambda} \right)^{k}}
$$

The mean ($\mu$) and variance ($\sigma^2$) of the Weibull distribution can be calculated using the following formulas:

$$
\mu = \lambda \cdot \Gamma\left(1 + \frac{1}{k}\right)
$$

$$
\sigma^2 = \lambda^2 \left( \Gamma\left(1 + \frac{2}{k}\right) - \Gamma^2\left(1 + \frac{1}{k}\right) \right)
$$

In these expressions, $\Gamma$ denotes the gamma function.

The Weibull distribution is extensively applied in reliability engineering to model the time-to-failure of systems. Additionally, it finds applications in various fields, including finance, economics, and meteorology.
    