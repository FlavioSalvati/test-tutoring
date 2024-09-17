---
title: "What is the Erlang distribution?"
summary: "The Erlang distribution is a probability distribution used to model the time between events in a Poisson process."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-31
---

The Erlang distribution is a probability distribution commonly used to model the time intervals between events in a Poisson process.

Named after the Danish mathematician Agner Krarup Erlang, who introduced it in the early 1900s to analyze the arrival patterns of telephone calls at a switchboard, the Erlang distribution is a continuous probability distribution. It effectively represents the timing of events that occur randomly over time, as described by a Poisson process—a stochastic process that models the occurrence of random events.

The Erlang distribution is actually a specific case of the more general gamma distribution, which can also be utilized to model the timing of events in a Poisson process. The Erlang distribution is defined by two parameters: the shape parameter $k$, which indicates the number of events that must occur for the distribution to be deemed complete, and the rate parameter $\lambda$, which reflects the average rate at which events occur.

The probability density function (PDF) of the Erlang distribution is expressed as:

$$
f(x; k, \lambda) = \frac{\lambda^k \cdot x^{k-1} \cdot e^{-\lambda x}}{(k-1)!}
$$

In this equation, $x$ represents the time between events, $k$ is the shape parameter, $\lambda$ is the rate parameter, and $(k-1)!$ denotes the factorial of $(k-1)$.

The cumulative distribution function (CDF) of the Erlang distribution is given by:

$$
F(x; k, \lambda) = 1 - \sum_{i=0}^{k-1} \frac{(\lambda x)^i}{i!} \cdot e^{-\lambda x}
$$

Here, $\sum$ indicates the summation from $i=0$ to $k-1$.

The mean and variance of the Erlang distribution can be calculated using the following formulas:

$$
\mu = \frac{k}{\lambda}
$$

$$
\sigma^2 = \frac{k}{\lambda^2}
$$

In these equations, $\mu$ represents the mean of the distribution, while $\sigma^2$ denotes its variance.
    