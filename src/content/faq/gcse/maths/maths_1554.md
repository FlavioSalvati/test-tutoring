---
title: "How do you determine conditional probability using a tree diagram?"
summary: "You determine conditional probability using a tree diagram by following the branches and multiplying the probabilities along the path."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-06-03
---

Conditional probability can be determined using a tree diagram by tracing the branches and multiplying the probabilities along each path.

A tree diagram serves as a visual representation that maps out all possible outcomes of a sequence of events. Each branch in the diagram corresponds to a potential outcome, with the associated probability indicated along the branch. To calculate the conditional probability, you concentrate on the specific path that leads to the event of interest.

For instance, consider a bag containing $3$ red balls and $2$ blue balls. You draw one ball, note its color, and then draw a second ball without replacing the first. To create a tree diagram for this scenario, start by drawing branches for the first draw: one branch for drawing a red ball and another for drawing a blue ball. The probabilities for these outcomes are $\frac{3}{5}$ for red and $\frac{2}{5}$ for blue.

Next, draw branches for the second draw, taking into account the outcome of the first draw. If the first ball drawn is red, there will be $2$ red balls and $2$ blue balls remaining. Consequently, the probabilities for the second draw in this case are $\frac{2}{4}$ for red and $\frac{2}{4}$ for blue. Conversely, if the first ball drawn is blue, the probabilities for the second draw will be $\frac{3}{4}$ for red and $\frac{1}{4}$ for blue.

To determine the conditional probability of drawing a blue ball second, given that a red ball was drawn first, you follow the path: first red (with probability $\frac{3}{5}$) followed by blue (with probability $\frac{2}{4}$). You then multiply these probabilities together:

$$
\left(\frac{3}{5}\right) \times \left(\frac{2}{4}\right) = \frac{6}{20} = \frac{3}{10}.
$$

Thus, the conditional probability of drawing a blue ball second, given that the first ball drawn was red, is $\frac{3}{10}$.
    