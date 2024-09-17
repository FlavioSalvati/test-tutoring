---
title: "Define Poisson distribution"
summary: "The Poisson distribution models the occurrence of rare events within a fixed interval, providing a probability framework for predicting the frequency of such events."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-08-28
---

The Poisson distribution is a probability distribution that models the occurrence of rare events within a fixed interval of time or space. 

Named after the French mathematician Siméon Denis Poisson, who introduced it in 1837, the Poisson distribution is particularly useful for quantifying the number of rare events, such as the number of customers arriving at a store within an hour, the number of cars passing through a toll booth in a day, or the number of defects in a production batch.

This distribution is characterized by a single parameter, $\lambda$ (lambda), which denotes the average number of events expected to occur in the specified interval. The probability of observing exactly $k$ events is given by the Poisson probability mass function:

$$
P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}
$$

In this expression, $X$ is the random variable representing the number of events, $e$ is the mathematical constant approximately equal to $2.71828$, and $k!$ denotes the factorial of $k$.

Notably, both the mean and variance of the Poisson distribution are equal to $\lambda$. This implies that the distribution is symmetric and unimodal, with its peak occurring at $\lambda$. As $\lambda$ increases, the distribution becomes more spread out and exhibits a rightward skew.

The Poisson distribution finds extensive applications across various fields, including physics, biology, finance, and engineering, where it is employed to model rare events and estimate the probabilities of their occurrences.
    