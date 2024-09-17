---
title: "How to perform a Mann-Whitney U test?"
summary: "To perform a Mann-Whitney U test, first rank the data from lowest to highest."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-22
---

To conduct a Mann-Whitney U test, the first step is to rank the data from the lowest to the highest value.

The Mann-Whitney U test is a non-parametric statistical method used to compare two independent groups. It is particularly useful when the data do not satisfy the assumptions required for parametric tests, such as the t-test. The initial step in performing a Mann-Whitney U test involves ranking all the data points collectively, irrespective of their group affiliation. In cases where there are tied values, assign to each tied observation the average rank that they would have received had there been no ties.

Once the data is ranked, the next step is to calculate the U statistic. The U statistic is determined by taking the smaller of two values: $U_1$ and $U_2$. Here, $U_1$ represents the sum of the ranks in the first group, while $U_2$ is the sum of the ranks in the second group. If the sample sizes of the two groups are equal, $U_1$ and $U_2$ can be computed using the following formulas:

$$
U_1 = n_1 n_2 + \frac{n_1(n_1 + 1)}{2} - \Sigma R_1
$$

$$
U_2 = n_1 n_2 + \frac{n_2(n_2 + 1)}{2} - \Sigma R_2
$$

In these equations, $n_1$ and $n_2$ denote the sample sizes of the two groups, while $\Sigma R_1$ and $\Sigma R_2$ represent the sums of the ranks for the first and second groups, respectively.

The final step involves comparing the calculated U statistic to a critical value obtained from a Mann-Whitney U distribution table. The critical value is contingent upon the sample sizes and the desired significance level. If the calculated U statistic is less than or equal to the critical value, it suggests that there is no significant difference between the two groups. Conversely, if the calculated U statistic exceeds the critical value, this indicates a significant difference between the groups.

In summary, the Mann-Whitney U test serves as a valuable non-parametric method for comparing two independent groups. The process includes ranking the data, calculating the U statistic, and comparing it to a critical value from a relevant statistical table.
    