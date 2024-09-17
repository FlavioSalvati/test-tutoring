---
title: "How to find mixed strategies in a game matrix?"
summary: "To find mixed strategies in a game matrix, we use the concept of expected payoffs."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-27
---

To determine mixed strategies in a game matrix, we utilize the concept of expected payoffs.

In a game matrix, a mixed strategy represents a probability distribution over the available pure strategies. To identify the mixed strategy for a player, we must calculate the expected payoff associated with each pure strategy and subsequently determine the probability distribution that maximizes this expected payoff.

Consider the following game matrix as an example:

$$
\begin{array}{c|c|c}
 & L & R \\
\hline
T & (2, 1) & (0, 0) \\
B & (0, 0) & (1, 2) \\
\end{array}
$$

To find the mixed strategy for Player 1, we will compute the expected payoff for each pure strategy:

- If Player 1 plays strategy $T$ with probability $p$ and Player 2 plays strategy $L$ with probability $q$, the expected payoff for Player 1 is given by:
  $$ 2p + 0(1-p) = 2p. $$
  
- If Player 1 plays strategy $B$ with probability $p$ and Player 2 plays strategy $L$ with probability $q$, the expected payoff for Player 1 is:
  $$ 0p + 1(1-p) = 1 - p. $$
  
- Therefore, the overall expected payoff for Player 1 when they mix their strategies $T$ and $B$ with probabilities $p$ and $1 - p$, respectively, is:
  $$ 2p + (1 - p)q. $$

To discover the optimal mixed strategy for Player 1, we aim to maximize the expected payoff. This maximization can be performed either using calculus or through inspection. In this particular scenario, we find that the optimal mixed strategy involves playing $T$ with probability $\frac{2}{3}$ and $B$ with probability $\frac{1}{3}$.

Similarly, we can derive the optimal mixed strategy for Player 2 by calculating the expected payoff for each of their pure strategies and identifying the probability distribution that maximizes their expected payoff.
    