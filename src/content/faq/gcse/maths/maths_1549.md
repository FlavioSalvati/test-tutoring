---
title: "What is the formula for conditional probability?"
summary: The formula for conditional probability is $P(A|B) = \frac{P(A \cap B)}{P(B)}$.
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-25
---

The formula for conditional probability is given by 

$$ P(A|B) = \frac{P(A \cap B)}{P(B)}. $$

Conditional probability allows us to determine the likelihood of an event occurring, given that another event has already taken place. In this formula, "$P$" represents probability, while "$A$" and "$B$" denote two distinct events. The vertical bar "$|$" signifies "given that", so $P(A|B)$ is read as "the probability of $A$ given $B$".

To elaborate, $P(A \cap B)$ represents the probability that both events $A$ and $B$ occur simultaneously, which is referred to as the joint probability. On the other hand, $P(B)$ is the probability that event $B$ occurs. By dividing the joint probability by the probability of $B$, we effectively adjust the probability of $A$ to reflect the condition that $B$ has already occurred.

For instance, consider a standard deck of 52 playing cards, and suppose you wish to calculate the probability of drawing a King, given that you have already drawn a face card (which includes Jacks, Queens, and Kings). In total, there are 12 face cards, and among these, 4 are Kings. Therefore, we can calculate the conditional probability as follows:

$$ P(\text{King}|\text{Face card}) = \frac{P(\text{King} \cap \text{Face card})}{P(\text{Face card})} = \frac{4/52}{12/52} = \frac{4}{12} = \frac{1}{3}. $$

Understanding conditional probability is valuable in various real-life contexts, including weather forecasting, medical diagnoses, and games of chance. It equips us with the tools to make more informed decisions based on the information we have at hand.
    