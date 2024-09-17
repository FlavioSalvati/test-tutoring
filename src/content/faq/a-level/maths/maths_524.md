---
title: "How to perform a Durbin-Watson test?"
summary: "To perform a Durbin-Watson test, calculate the test statistic and compare it to the critical values."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-14
---

To conduct a Durbin-Watson test, you need to calculate the test statistic and compare it to the appropriate critical values.

The Durbin-Watson test is designed to detect autocorrelation in a regression model. Autocorrelation arises when the residuals (errors) of a regression model are correlated with one another. This correlation violates the assumption of independence among errors, which is crucial for making valid inferences in regression analysis.

To perform the Durbin-Watson test, follow these steps:

1. **Calculate the Test Statistic**: Use the formula:

$$
DW = \frac{\sum (e_i - e_{i-1})^2}{\sum e_i^2}
$$

In this formula, $e_i$ represents the residual at time $i$, and $e_{i-1}$ is the residual at the previous time point. The resulting test statistic, $DW$, ranges from 0 to 4. Values close to 2 suggest no autocorrelation, while values below 2 indicate positive autocorrelation, and values above 2 signify negative autocorrelation.

2. **Compare with Critical Values**: Next, you will compare the calculated test statistic to the critical values found in a Durbin-Watson table. These critical values depend on your sample size, the number of regressors, and the significance level. For example, with a sample size of 20 and 2 regressors at the 5% significance level, the critical values are approximately $0.95$ and $1.65$.

3. **Interpret the Results**:
   - If the test statistic is less than the lower critical value, this suggests the presence of positive autocorrelation.
   - If the test statistic exceeds the upper critical value, it indicates the presence of negative autocorrelation.
   - If the test statistic falls between the two critical values, there is no evidence of autocorrelation.

In summary, the Durbin-Watson test is a valuable method for identifying autocorrelation in regression models. By calculating the test statistic and comparing it to the relevant critical values, we can determine the presence of autocorrelation and make necessary adjustments to our analysis.
    