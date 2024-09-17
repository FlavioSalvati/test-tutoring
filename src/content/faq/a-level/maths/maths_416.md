---
title: "What is the Frechet distribution?"
summary: "The Frechet distribution is a type of probability distribution used in extreme value theory."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-12
---

The Fréchet distribution is a specific type of probability distribution that plays a significant role in extreme value theory.

Also referred to as the Type II extreme value distribution, the Fréchet distribution is utilized to model the distribution of the maximum values derived from a large collection of independent and identically distributed random variables. This distribution is notably characterized by its shape parameter, denoted as $\alpha$, which influences the tail behavior of the distribution. A larger shape parameter results in a heavier tail.

The probability density function (PDF) of the Fréchet distribution is expressed as:

$$
f(x) = \frac{\alpha}{\sigma} \left( \frac{x}{\sigma} \right)^{-\alpha-1} e^{-\left( \frac{x}{\sigma} \right)^{-\alpha}}
$$

where $x > 0$, $\alpha > 0$ represents the shape parameter, and $\sigma > 0$ is the scale parameter. The cumulative distribution function (CDF) is defined as:

$$
F(x) = e^{-\left( \frac{x}{\sigma} \right)^{-\alpha}}
$$

The mean ($\mu$) and variance ($\sigma^2$) of the Fréchet distribution can be calculated using the following formulas:

$$
\mu = \sigma \Gamma\left(1 - \frac{1}{\alpha}\right)
$$

$$
\sigma^2 = \sigma^2 \Gamma\left(1 - \frac{2}{\alpha}\right) - \mu^2
$$

In these expressions, $\Gamma$ denotes the gamma function.

The Fréchet distribution finds application in various fields, including hydrology, finance, and engineering, where it is used to model extreme events such as floods, stock market crashes, and earthquakes.
    