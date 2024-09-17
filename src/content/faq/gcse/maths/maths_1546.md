---
title: "How do you find the probability of two events happening without replacement?"
summary: "To find the probability of two events happening without replacement, multiply the probabilities of each event occurring sequentially."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-07-28
---

To determine the probability of two events occurring sequentially without replacement, you multiply the probabilities of each event as they happen.

When calculating probabilities without replacement, it is crucial to recognize that the total number of possible outcomes decreases after each event. Let's illustrate this with an example involving a standard deck of cards. Imagine you want to compute the probability of drawing two aces consecutively without replacement from a deck of $52$ cards.

First, we calculate the probability of drawing an ace on the first attempt. There are $4$ aces in a deck of $52$ cards, so the probability for the first draw is:

$$
P(\text{first ace}) = \frac{4}{52} = \frac{1}{13}.
$$

Next, since one ace has already been drawn, there are now only $51$ cards remaining in the deck, with $3$ aces left. Thus, the probability of drawing a second ace is:

$$
P(\text{second ace}) = \frac{3}{51}.
$$

To find the overall probability of both events occurring (drawing two aces in succession), we multiply the probabilities of each event:

$$
P(\text{two aces}) = P(\text{first ace}) \times P(\text{second ace}) = \frac{1}{13} \times \frac{3}{51}.
$$

Simplifying this expression yields:

$$
P(\text{two aces}) = \frac{3}{663},
$$

which can be reduced to:

$$
P(\text{two aces}) = \frac{1}{221}.
$$

This methodology can be applied to any situation where events occur without replacement. Always remember to adjust the total number of outcomes after each event to accurately reflect the new circumstances. This approach ensures that you correctly compute the probability of sequential events happening without replacement.
    