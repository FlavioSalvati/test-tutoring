---
title: "How do you find the combined probability of drawing two different coloured balls without replacement?"
summary: "To find the combined probability, multiply the probability of drawing each ball in sequence without replacement."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "GCSE Maths Tutor"
date: 2024-03-19
---

To calculate the combined probability of drawing two different colored balls without replacement, you need to multiply the probability of drawing each ball in sequence.

Consider a scenario where you have a bag containing red and blue balls. The first step is to determine the probability of drawing one color, followed by the probability of drawing the other color, given that the first ball has already been removed.

For instance, suppose you have $3$ red balls and $2$ blue balls in a bag, making the total number of balls $5$. The probability of drawing a red ball first is given by:

$$
P(\text{Red first}) = \frac{3}{5}.
$$

After removing a red ball, there are now $4$ balls left in the bag (which consist of $2$ red balls and $2$ blue balls). The probability of subsequently drawing a blue ball is:

$$
P(\text{Blue second} \mid \text{Red first}) = \frac{2}{4} = \frac{1}{2}.
$$

To find the joint probability of these two events occurring in sequence, you multiply the individual probabilities:

$$
P(\text{Red first, Blue second}) = P(\text{Red first}) \times P(\text{Blue second} \mid \text{Red first}) = \frac{3}{5} \times \frac{1}{2} = \frac{3}{10}.
$$

Next, consider the reverse scenario: drawing a blue ball first and then a red ball. The probability of drawing a blue ball first is:

$$
P(\text{Blue first}) = \frac{2}{5}.
$$

After drawing a blue ball, there are still $4$ balls left (this time consisting of $3$ red balls and $1$ blue ball). The probability of then drawing a red ball is:

$$
P(\text{Red second} \mid \text{Blue first}) = \frac{3}{4}.
$$

Again, we find the joint probability of these two events occurring in sequence:

$$
P(\text{Blue first, Red second}) = P(\text{Blue first}) \times P(\text{Red second} \mid \text{Blue first}) = \frac{2}{5} \times \frac{3}{4} = \frac{6}{20} = \frac{3}{10}.
$$

Finally, to find the overall probability of drawing two different colored balls without replacement, we add the probabilities from both scenarios:

$$
P(\text{Two different colors}) = P(\text{Red first, Blue second}) + P(\text{Blue first, Red second}) = \frac{3}{10} + \frac{3}{10} = \frac{6}{10} = \frac{3}{5}.
$$

Thus, the combined probability of drawing two different colored balls without replacement is $\frac{3}{5}$.
    