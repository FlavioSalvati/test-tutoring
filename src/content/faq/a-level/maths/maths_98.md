---
title: "What is joint probability?"
summary: "Joint probability refers to the likelihood of two or more events happening at the same time. It is a key concept in probability theory and statistics."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-29
---

Joint probability refers to the likelihood of two or more events occurring simultaneously.

In the realm of probability theory, the joint probability of two events, denoted as $P(A \text{ and } B)$, quantifies the chance that both events $A$ and $B$ happen at the same time. This probability can be calculated using the following formula:

$$
P(A \text{ and } B) = P(A) \times P(B|A)
$$

In this equation, $P(A)$ represents the probability of event $A$ occurring, while $P(B|A)$ denotes the conditional probability of event $B$ occurring given that event $A$ has already occurred.

To illustrate this concept, consider the following example involving two events: let event $A$ be the act of rolling a 4 on a fair six-sided die, and let event $B$ be rolling an even number on the same die. The probability of event $A$ occurring is:

$$
P(A) = \frac{1}{6}
$$

This is because there is only one favorable outcome (rolling a 4) out of six possible outcomes. Now, if event $A$ has occurred (i.e., we have rolled a 4), the possible outcomes that are even are limited to 2 and 4. Therefore, the probability of event $B$ given that event $A$ has occurred is:

$$
P(B|A) = \frac{1}{3}
$$

This is because there are two even numbers (2 and 4) out of three possible outcomes (2, 4, and 6) when a 4 is rolled. Thus, we can now calculate the joint probability of events $A$ and $B$:

$$
P(A \text{ and } B) = P(A) \times P(B|A) = \left(\frac{1}{6}\right) \times \left(\frac{1}{3}\right) = \frac{1}{18}
$$

This calculation indicates that the probability of simultaneously rolling a 4 and an even number on a fair die is $\frac{1}{18}$.

Joint probability is a fundamental concept in probability theory, with wide-ranging applications in fields such as statistical inference, machine learning, and data analysis.
    