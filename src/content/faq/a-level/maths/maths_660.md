---
title: "What is probability distribution function?"
summary: "A probability distribution function (PDF) is a function that describes the likelihood of a random variable taking on a certain value."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-07
---

A probability distribution function (PDF) serves as a mathematical expression that outlines the likelihood of a random variable assuming a specific value.

In the realm of probability theory, a random variable is defined as a variable whose value is influenced by chance. The PDF of a random variable $X$ is represented as $f(x)$ and is mathematically expressed as the derivative of the cumulative distribution function (CDF) of $X$. Specifically, this relationship is given by 

$$
f(x) = \frac{d}{dx} F(x),
$$ 

where $F(x)$ denotes the CDF of $X$.

For a continuous random variable, the PDF is a non-negative function that integrates to 1 over the entire range of possible values. This is mathematically stated as 

$$
\int f(x) \, dx = 1. $$ 

The area under the PDF curve between two values $a$ and $b$ indicates the probability that the random variable $X$ falls within that interval. This is expressed as 

$$
P(a \leq X \leq b) = \int_a^b f(x) \, dx.
$$ 

In contrast, the PDF of a discrete random variable assigns a probability to each potential value of the variable. In this case, we can express it as 

$$
f(x) = P(X = x) \text{ for all possible values of } x. $$ 

The total sum of the probabilities for all possible values of $X$ equals 1, which can be represented as 

$$
\sum f(x) = 1.
$$ 

The PDF is a fundamental element of probability theory, providing essential insights into a wide variety of phenomena, from the distribution of heights within a population to the fluctuation of stock prices in financial markets. A thorough understanding of the PDF is crucial for numerous fields within mathematics and statistics, including hypothesis testing, estimation, and regression analysis.
    