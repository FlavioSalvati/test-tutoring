---
title: "What is conditional probability formula?"
summary: "The conditional probability formula is P(A|B) = P(A and B) / P(B), where A and B are events."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-18
---

The formula for conditional probability is expressed as:

$$
P(A|B) = \frac{P(A \text{ and } B)}{P(B)}
$$

where $A$ and $B$ are two events.

Conditional probability quantifies the likelihood of event $A$ occurring given that event $B$ has already taken place. In this context, $P(A \text{ and } B)$ denotes the probability of both events $A$ and $B$ happening simultaneously, while $P(B)$ represents the probability of event $B$ occurring. By dividing the joint probability of events $A$ and $B$ by the probability of event $B$, we obtain the probability of event $A$ occurring under the condition that event $B$ has occurred.

To illustrate this concept, consider a bag containing $10$ marbles, of which $6$ are red and $4$ are blue. If we randomly select one marble from the bag, the probability of selecting a red marble is:

$$
P(\text{Red}) = \frac{6}{10} = 0.6.
$$

Now, suppose we randomly select a marble and it turns out to be blue. We want to find the probability that the next marble we choose will be red.

Using the conditional probability formula, we express this as:

$$
P(\text{Red | Blue}) = \frac{P(\text{Red and Blue})}{P(\text{Blue})}.
$$

The probability of selecting a blue marble is:

$$
P(\text{Blue}) = \frac{4}{10} = 0.4.
$$

Assuming we do not replace the blue marble back into the bag, the total number of marbles left is $9$, with $6$ still being red. Therefore, the probability of selecting a red marble after having selected a blue one is:

$$
P(\text{Red after Blue}) = \frac{6}{9} \approx 0.67.
$$

To find $P(\text{Red | Blue})$, we can compute it as follows:

$$
P(\text{Red | Blue}) = \frac{P(\text{Red and Blue})}{P(\text{Blue})} = \frac{\left( \frac{4}{10} \right) \left( \frac{6}{9} \right)}{\frac{4}{10}} = \frac{6}{9} \approx 0.67.
$$

In summary, the conditional probability formula is a powerful tool for determining the likelihood of an event occurring given that another event has already occurred. It finds applications across various fields in mathematics and statistics.
    