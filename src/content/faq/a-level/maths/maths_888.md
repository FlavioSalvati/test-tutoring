---
title: "What is the concept of independence in probability?"
summary: "Independence in probability means that the occurrence of one event does not affect the probability of another event."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-03
---

Independence in probability refers to a situation where the occurrence of one event does not influence the probability of another event taking place.

When we say that two events, $A$ and $B$, are independent, the probability of both events occurring simultaneously is simply the product of their individual probabilities. This relationship is articulated by the multiplication rule of probability:

$$ P(A \text{ and } B) = P(A) \times P(B) $$

For instance, consider the scenario of tossing a fair coin twice. The probability of getting heads on the first toss is $\frac{1}{2}$, and the probability of getting heads on the second toss is also $\frac{1}{2}$. Given that these two events are independent, the probability of getting heads on both tosses can be calculated as follows:

$$ P(\text{heads on first toss and heads on second toss}) = P(\text{heads on first toss}) \times P(\text{heads on second toss}) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4} $$

Conversely, when two events, $A$ and $B$, are dependent, the probability of both events occurring is determined by conditional probability. In such cases, we express the joint probability as:

$$ P(A \text{ and } B) = P(A | B) \times P(B) $$

Here, $P(A | B)$ represents the probability of event $A$ occurring given that event $B$ has already taken place. In this context, the multiplication rule for independent events does not apply.

For example, let’s consider drawing two cards from a standard deck of 52 cards without replacement. The probability of drawing a king on the first card is $\frac{4}{52}$. If the first card drawn is indeed a king, the probability of drawing a king on the second card becomes $\frac{3}{51}$, as only 3 kings remain in the deck of 51 cards. Thus, the probability of drawing two kings in succession is given by:

$$ P(\text{king on first draw and king on second draw}) = P(\text{king on first draw}) \times P(\text{king on second draw | first card was a king}) = \frac{4}{52} \times \frac{3}{51} = \frac{1}{221} $$

This illustrates how dependent events require the use of conditional probabilities to accurately calculate their joint likelihood.
    