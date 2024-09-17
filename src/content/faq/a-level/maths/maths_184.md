---
title: "How to perform a Kruskal-Wallis test?"
summary: "To conduct a Kruskal-Wallis test, rank the data, calculate each group's sum of ranks, and apply the formula to determine the test statistic."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-01-28
---

To conduct a Kruskal-Wallis test, follow these steps carefully. This non-parametric test assesses whether there are significant differences among three or more independent groups. It serves as an alternative to the one-way ANOVA, particularly when the data do not fulfill the assumptions of normality or equal variances.

### Steps to Perform the Kruskal-Wallis Test

1. **Rank the Data**: Start by ranking all data points from lowest to highest across all groups. Assign ranks such that the smallest value receives the rank of $1$, the second smallest receives $2$, and so on.

2. **Calculate the Sum of Ranks**: For each group, compute the sum of the ranks assigned to the observations within that group. For instance, suppose you have four groups with the following number of observations: 
   - Group 1: $10$ observations
   - Group 2: $8$ observations
   - Group 3: $12$ observations
   - Group 4: $9$ observations

   The sums of ranks for each group would be calculated as follows:
   - **Group 1**: $$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55$$
   - **Group 2**: $$11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 = 116$$
   - **Group 3**: $$19 + 20 + 21 + 22 + 23 + 24 + 25 + 26 + 27 + 28 + 29 + 30 = 271$$
   - **Group 4**: $$31 + 32 + 33 + 34 + 35 + 36 + 37 + 38 + 39 = 315$$

3. **Calculate the Test Statistic**: Use the following formula to compute the Kruskal-Wallis test statistic, denoted as $H$:

   $$
   H = \left( \frac{12}{N(N + 1)} \sum (R_j - \frac{N + 1}{2})^2 \right) - 3(N + 1)
   $$

   In this formula:
   - $N$ represents the total number of observations.
   - $R_j$ denotes the sum of ranks for each group.

   The test statistic $H$ follows a chi-squared distribution, with degrees of freedom equal to the number of groups minus one.

4. **Compare with Critical Value**: Finally, compare the calculated test statistic $H$ to the critical value from the chi-squared distribution table. If $H$ exceeds the critical value, you can reject the null hypothesis, indicating that there is a statistically significant difference among the groups.

By following these steps, you can effectively use the Kruskal-Wallis test to analyze your data when the assumptions for parametric tests are not met.
    