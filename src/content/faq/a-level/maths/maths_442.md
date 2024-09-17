---
title: "How to perform a Fisher's exact test?"
summary: "To perform a Fisher's exact test, first create a contingency table with the observed frequencies."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-07
---

To conduct a Fisher's exact test, the first step is to create a contingency table that displays the observed frequencies of the two categorical variables.

Fisher's exact test is a statistical method used to assess whether there is a significant association between two categorical variables. This test is especially valuable when dealing with small sample sizes and low expected frequencies. To illustrate this process, consider the following example data organized in a contingency table:

$$
\begin{array}{|c|c|c|}
\hline
 & \text{Group A} & \text{Group B} \\
\hline
\text{Outcome 1} & 10 & 5 \\
\text{Outcome 2} & 5 & 10 \\
\hline
\end{array}
$$

The null hypothesis for this test posits that there is no association between the two categorical variables. To compute the p-value, we must determine the probability of obtaining a contingency table that is as extreme or more extreme than the observed table, under the assumption that the null hypothesis holds true. This calculation involves evaluating the probability of all possible tables that maintain the same row and column totals as the observed table.

To achieve this, we utilize the hypergeometric distribution. The probability of obtaining a table with $x_1$ in cell $(1,1)$, $x_2$ in cell $(1,2)$, $x_3$ in cell $(2,1)$, and $x_4$ in cell $(2,2)$, given the row and column totals, is expressed as follows:

$$
P(x_1, x_2, x_3, x_4) = \frac{{\binom{n_1}{x_1} \cdot \binom{n_2}{x_2} \cdot \binom{n_1+n_2}{x_1+x_2}}}{{\binom{N}{n_1}}}
$$

In this equation, $n_1$ and $n_2$ denote the row totals, $N$ represents the total sample size, and it follows that $n_1 + n_2 = N$. We calculate the probability for all tables that are as extreme or more extreme than our observed table and sum these probabilities to derive the p-value.

In our example, the computed p-value is $0.0286$, which is less than the conventional significance level of $0.05$. Consequently, we reject the null hypothesis and conclude that there is a statistically significant association between the two categorical variables.
    