---
title: "How to perform a chi-square goodness of fit test?"
summary: "To perform a chi-square goodness of fit test, first state the null hypothesis and alternative hypothesis. Then, calculate the expected frequencies for each category and the chi-square test statistic. Finally, compare the calculated chi-square value to the critical value and make a decision."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-22
---

To conduct a chi-square goodness of fit test, follow these steps:

1. **State the Hypotheses**: Begin by defining your null hypothesis ($H_0$) and alternative hypothesis ($H_a$). The null hypothesis states that the observed frequencies in each category are equal to the expected frequencies. Conversely, the alternative hypothesis asserts that the observed frequencies differ from the expected frequencies.

2. **Calculate Expected Frequencies**: To determine the expected frequencies for each category, first compute the total number of observations, denoted as $N$. Then, identify the expected proportion for each category. Multiply $N$ by the expected proportion for each category to obtain the expected frequency, $E_i$, for that category.

3. **Compute the Chi-Square Test Statistic**: The chi-square test statistic, denoted as $\chi^2$, is calculated using the following formula:

   $$ 
   \chi^2 = \sum \frac{(O_i - E_i)^2}{E_i} 
   $$

   In this formula, $O_i$ represents the observed frequency for category $i$, and $E_i$ is the expected frequency for that same category. The summation is performed over all categories.

4. **Determine the Critical Value**: To find the critical value for the chi-square test, consult a chi-square distribution table. The degrees of freedom, $df$, are calculated as the number of categories minus one ($df = k - 1$, where $k$ is the number of categories).

5. **Make a Decision**: Compare the calculated chi-square value ($\chi^2$) to the critical value obtained from the table. If the calculated chi-square value is greater than the critical value, you reject the null hypothesis ($H_0$). If the calculated value is less than or equal to the critical value, you fail to reject the null hypothesis.

In summary, the process for performing a chi-square goodness of fit test involves stating the null and alternative hypotheses, calculating the expected frequencies, determining the chi-square test statistic, and comparing that statistic to the critical value.
    