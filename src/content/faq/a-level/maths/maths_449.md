---
title: "How to perform a Kolmogorov-Smirnov test?"
summary: "To perform a Kolmogorov-Smirnov test, calculate the test statistic and compare it to the critical value."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-10
---

To conduct a Kolmogorov-Smirnov test, you need to calculate the test statistic and then compare it to the critical value.

The Kolmogorov-Smirnov test is a statistical method used to assess whether a sample originates from a specified distribution. The first step in this process is to formulate the null hypothesis, which posits that the sample is drawn from the specified distribution. 

Next, you will calculate the test statistic, defined as the maximum difference between the empirical distribution function (EDF) of the sample and the cumulative distribution function (CDF) of the specified distribution.

To compute the test statistic, follow these steps:

1. **Order the Sample Data**: Arrange the sample data in ascending order.
2. **Calculate the Empirical Distribution Function (EDF)**: For each data point, determine the proportion of observations that are less than or equal to that point by dividing the number of such observations by the total number of observations.
3. **Compute the Cumulative Distribution Function (CDF)**: Determine the CDF for the specified distribution at each data point.
4. **Find the Maximum Difference**: Identify the largest absolute difference between the EDF and the CDF across all data points.

Once the test statistic is computed, compare it against the critical value obtained from the Kolmogorov-Smirnov distribution table. 

- If the test statistic exceeds the critical value, you reject the null hypothesis, concluding that the sample does not come from the specified distribution.
- Conversely, if the test statistic is less than or equal to the critical value, you fail to reject the null hypothesis, suggesting that there is insufficient evidence to claim that the sample does not originate from the specified distribution.

In summary, to perform a Kolmogorov-Smirnov test, you should:
1. State the null hypothesis.
2. Calculate the test statistic.
3. Compare the test statistic to the critical value.
    