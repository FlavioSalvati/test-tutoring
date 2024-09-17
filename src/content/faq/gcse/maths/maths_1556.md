---
title: "How do you find the conditional probability using Bayes' Theorem?"
summary: "To find conditional probability using Bayes' Theorem, use the formula; P(A|B) = [P(B|A) * P(A)] / P(B)."
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-03-01
---

To find conditional probability using Bayes' Theorem, we utilize the formula:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}.
$$

Bayes' Theorem allows us to update our predictions based on new evidence. Specifically, if we want to determine the probability of event $A$ occurring given that event $B$ has already happened, we denote this as $P(A|B)$. According to Bayes' Theorem, this probability can be calculated by multiplying the probability of $B$ given $A$ ($P(B|A)$) by the probability of $A$ ($P(A)$), and then dividing the result by the probability of $B$ ($P(B)$).

Let’s illustrate this with an example. Consider a bag containing $3$ red sweets and $2$ blue sweets. We want to find the probability of selecting a red sweet (event $A$) given that we have selected a sweet with a wrapper (event $B$). We know that $4$ out of the $5$ sweets have wrappers, and out of those, $3$ are red.

First, we calculate $P(B|A)$, the probability of picking a sweet with a wrapper given that it is red. Since all $3$ red sweets have wrappers, we have:

$$
P(B|A) = \frac{3}{3} = 1.
$$

Next, we determine $P(A)$, the probability of picking a red sweet, which is:

$$
P(A) = \frac{3}{5}.
$$

Finally, we find $P(B)$, the probability of picking a sweet with a wrapper, which is:

$$
P(B) = \frac{4}{5}.
$$

Now we can apply Bayes' Theorem:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)} = \frac{1 \cdot \left(\frac{3}{5}\right)}{\frac{4}{5}} = \frac{3}{4}.
$$

Thus, the probability of selecting a red sweet, given that it has a wrapper, is $\frac{3}{4}$.
    