---
title: "What is the probability of picking two green marbles without replacement?"
summary: "The probability of picking two green marbles without replacement depends on the number of green marbles and total marbles."
author: "Dr. Sarah Wilson"
degree: "MSc in Physics, University College London"
tutor_type: "GCSE Physics Tutor"
date: 2024-06-17
---

The probability of selecting two green marbles without replacement is influenced by the number of green marbles and the total number of marbles in the bag.

To determine this probability, you must know the total number of marbles, denoted as $T$, and the number of green marbles, denoted as $G$. When you draw the first marble, the probability that it is green can be expressed as:

$$
P(\text{first green}) = \frac{G}{T}
$$

Once you have drawn one green marble, there will be $G-1$ green marbles remaining and $T-1$ total marbles left in the bag. The probability that the second marble you draw is also green is:

$$
P(\text{second green | first green}) = \frac{G-1}{T-1}
$$

To compute the overall probability of both events occurring (i.e., drawing two green marbles consecutively), you multiply the probabilities of each individual event. Therefore, the probability of selecting two green marbles without replacement can be calculated as follows:

$$
P(\text{two greens}) = \frac{G}{T} \times \frac{G-1}{T-1}
$$

For illustration, consider a scenario where there are 5 green marbles and a total of 10 marbles in the bag. The probability of drawing the first green marble is:

$$
P(\text{first green}) = \frac{5}{10} = \frac{1}{2}
$$

After removing one green marble, there are 4 green marbles remaining out of a total of 9 marbles. The probability of drawing a second green marble is:

$$
P(\text{second green | first green}) = \frac{4}{9}
$$

Thus, the combined probability of drawing two green marbles in succession is:

$$
P(\text{two greens}) = \frac{1}{2} \times \frac{4}{9} = \frac{4}{18} = \frac{2}{9}
$$

Consequently, in this example, the probability of picking two green marbles without replacement is $\frac{2}{9}$.
    