---
title: "How to perform a likelihood ratio test?"
summary: "To perform a likelihood ratio test, calculate the likelihoods of two competing hypotheses and compare them using a test statistic."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-11
---

To conduct a likelihood ratio test, you need to calculate the likelihoods for two competing hypotheses and compare them using a test statistic.

A likelihood ratio test is typically used to evaluate two competing hypotheses: the null hypothesis and the alternative hypothesis. Generally, the null hypothesis is the simpler of the two, while the alternative hypothesis is more complex. This test involves determining the likelihoods associated with both hypotheses and comparing them through a test statistic.

To perform the test, begin by calculating the likelihood of the null hypothesis, denoted as $L(\theta_0)$, and the likelihood of the alternative hypothesis, denoted as $L(\theta_1)$. The test statistic is then computed as the ratio of these two likelihoods:

$$
\lambda = \frac{L(\theta_1)}{L(\theta_0)}
$$

Under the null hypothesis, this test statistic follows a chi-squared distribution with degrees of freedom equal to the difference in the number of parameters between the two hypotheses. You can then calculate the p-value using this distribution. If the p-value is less than the predetermined significance level, you reject the null hypothesis in favor of the alternative hypothesis.

For instance, consider a scenario where you have a sample of data and wish to determine if it originates from a normal distribution with mean $\mu$ and variance $\sigma^2$, or from a normal distribution with mean $\mu$ and variance $2\sigma^2$. In this case, the null hypothesis posits that the variance is $\sigma^2$, while the alternative hypothesis suggests that the variance is $2\sigma^2$. You would calculate the likelihoods for both hypotheses using your sample data, yielding $L(\theta_0) = f(x|\mu,\sigma^2)$ and $L(\theta_1) = f(x|\mu,2\sigma^2)$. Next, you would compute the test statistic:

$$
\lambda = \frac{L(\theta_1)}{L(\theta_0)}
$$

Finally, you would compare this statistic to the chi-squared distribution with one degree of freedom. If the resulting p-value is less than the chosen significance level, you would reject the null hypothesis in favor of the alternative hypothesis.
    