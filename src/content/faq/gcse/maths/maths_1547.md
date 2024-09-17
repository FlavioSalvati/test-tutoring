---
title: "What is the probability of drawing a diamond and then a club without replacement?"
summary: "The probability of drawing a diamond and then a club without replacement is 13/204 or approximately 0.0637."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-08-25
---

The probability of drawing a diamond followed by a club without replacement is given by $\frac{13}{204}$, which is approximately $0.0637$ or $6.37\%$.

To derive this probability, we need to consider the total number of cards in a standard deck and how the probabilities adjust after the first card is drawn. A standard deck contains $52$ cards, with $13$ cards in each suit: diamonds, clubs, hearts, and spades.

First, we calculate the probability of drawing a diamond. Since there are $13$ diamonds in the deck, the probability of drawing a diamond first is:

$$
P(\text{diamond}) = \frac{13}{52}.
$$

After successfully drawing a diamond, $51$ cards remain in the deck. Next, we need to determine the probability of drawing a club from these remaining cards. There are still $13$ clubs available, so the probability of drawing a club now is:

$$
P(\text{club | diamond}) = \frac{13}{51}.
$$

To find the overall probability of both events occurring—drawing a diamond first and then a club—we multiply the probabilities of each individual event:

$$
P(\text{diamond and club}) = P(\text{diamond}) \times P(\text{club | diamond}) = \frac{13}{52} \times \frac{13}{51}.
$$

Calculating this gives:

$$
\frac{13}{52} \times \frac{13}{51} = \frac{169}{2652}.
$$

Now, we can simplify this fraction by dividing both the numerator and the denominator by their greatest common divisor, which is $13$:

$$
\frac{169 \div 13}{2652 \div 13} = \frac{13}{204}.
$$

Thus, the probability of drawing a diamond followed by a club without replacement is $\frac{13}{204}$, which is approximately $0.0637$ or $6.37\%$.
    