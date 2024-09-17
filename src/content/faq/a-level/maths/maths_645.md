---
title: "How to perform a Breusch-Pagan test?"
summary: "To perform a Breusch-Pagan test, first run a regression model and obtain the residuals."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-25
---

To conduct a Breusch-Pagan test, you must first run a regression model and compute the residuals.

The Breusch-Pagan test is employed to assess whether heteroscedasticity exists in a regression model. Heteroscedasticity arises when the variance of the residuals is not constant across different levels of the independent variable(s). This condition violates one of the fundamental assumptions of linear regression, specifically that the variance of the residuals remains constant.

The steps to perform a Breusch-Pagan test are as follows:

1. Run your regression model to obtain the residuals.
2. Next, regress the squared residuals on the independent variables.

The null hypothesis of the test states that there is no heteroscedasticity, while the alternative hypothesis posits that heteroscedasticity is present.

The test statistic is calculated using the formula:

$$
BP = n \times R^2
$$

In this formula, $n$ represents the sample size, and $R^2$ denotes the coefficient of determination from the regression of the squared residuals against the independent variables.

The resulting test statistic follows a chi-squared distribution with $k$ degrees of freedom, where $k$ is the number of independent variables in the original regression model. The p-value can be derived from a chi-squared distribution table or calculated using statistical software.

If the p-value is less than the significance level (commonly set at $0.05$), we reject the null hypothesis, concluding that heteroscedasticity is present in the model. Conversely, if the p-value exceeds the significance level, we fail to reject the null hypothesis, suggesting that there is no evidence of heteroscedasticity in the model.
    