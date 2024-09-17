---
title: "How do you find the conditional probability from a given set of data?"
summary: "Conditional probability is calculated by dividing the probability of both events occurring by the probability of the given event."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-07-18
---

To determine conditional probability, you divide the probability of both events occurring by the probability of the specified event.

Conditional probability allows us to assess the likelihood of one event happening, given that another event has already taken place. For instance, consider two events: A and B. The conditional probability of A given B is denoted as $P(A|B)$. This can be computed using the following formula:

$$
P(A|B) = \frac{P(A \text{ and } B)}{P(B)}
$$

Here’s a step-by-step approach to calculating conditional probability:

1. **Identify the Events**: Start by determining the specific events of interest. For example, let event A represent "it rains" and event B represent "it is cloudy."

2. **Find the Joint Probability**: Calculate or obtain the probability that both events A and B occur simultaneously, denoted as $P(A \text{ and } B)$.

3. **Determine the Probability of the Given Event**: Ascertain the probability of the event that is given, which in this case is $P(B)$.

4. **Apply the Formula**: Use the formula $$ P(A|B) = \frac{P(A \text{ and } B)}{P(B)} $$ to compute the conditional probability.

For instance, suppose you have data indicating that it rains on $30$ out of $100$ days, it is cloudy on $50$ out of those $100$ days, and it both rains and is cloudy on $20$ out of those $100$ days. You can determine the conditional probability that it rains given that it is cloudy. Here, $P(A \text{ and } B)$ is $20/100$, and $P(B)$ is $50/100$. Thus, we can calculate:

$$
P(\text{Rain}|\text{Cloudy}) = \frac{20/100}{50/100} = \frac{20}{50} = 0.4
$$

This result indicates that there is a $40\%$ chance of rain given that it is cloudy.
    