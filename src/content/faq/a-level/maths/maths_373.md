---
title: "What is the Rayleigh distribution?"
summary: "The Rayleigh distribution is a continuous probability distribution that models the magnitude of a random vector."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-16
---

The Rayleigh distribution is a continuous probability distribution that is commonly used to model the magnitude of a random vector. This distribution finds applications in various fields such as engineering and physics, where it can represent phenomena like wind speed or the amplitude of electromagnetic waves.

The probability density function (PDF) of the Rayleigh distribution is expressed as:

$$
f(x; \sigma) = \frac{x}{\sigma^2} \exp\left(-\frac{x^2}{2\sigma^2}\right)
$$

In this equation, $x$ represents the magnitude of the random vector, while $\sigma$ is a scale parameter that dictates the spread of the distribution. The term $\exp$ denotes the exponential function.

The mean ($\mu$) and variance ($\sigma^2$) of the Rayleigh distribution are calculated as follows:

$$
\mu = \sigma \sqrt{\frac{\pi}{2}}
$$

$$
\sigma^2 = \frac{4 - \pi}{2} \sigma^2
$$

The mode of the distribution is equal to $\sigma$, and the median can be computed as:

$$
\text{Median} = \sigma \sqrt{\ln(2)}
$$

The cumulative distribution function (CDF) of the Rayleigh distribution is given by:

$$
F(x; \sigma) = 1 - \exp\left(-\frac{x^2}{2\sigma^2}\right)
$$

Notably, the Rayleigh distribution is a specific case of the Weibull distribution when the shape parameter is set to $2$. Additionally, it is related to the chi distribution; specifically, if a random variable follows a chi distribution with two degrees of freedom, its square will be Rayleigh-distributed.
    