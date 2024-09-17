---
title: "Explain the concept of backward induction in sequential games"
summary: "Backward induction is a method used to solve sequential games by working backwards from the end."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-15
---

Backward induction is a systematic approach used to solve sequential games by analyzing the game in reverse order, starting from the end.

In sequential games, players take turns making decisions, and the outcome of each choice influences future decisions and potential payoffs. The backward induction process begins at the end of the game and works its way backwards to identify the optimal strategy for each player at every decision point.

To apply backward induction, we first pinpoint the final outcomes of the game along with their associated payoffs. Next, we analyze the second-to-last decision point, determining the optimal strategy for each player based on the payoffs from the final outcomes. This process continues, moving backwards through each decision point until we arrive at the beginning of the game.

Let’s illustrate this with an example:

- Player 1 can choose between $A$ or $B$.
- Player 2 can choose between $X$ or $Y$.

The payoffs for each combination of choices are as follows:

- $(A, X) = (5, 3)$ 
- $(A, Y) = (1, 1)$ 
- $(B, X) = (0, 0)$ 
- $(B, Y) = (4, 2)$ 

To implement backward induction, we start from the end of the game and examine the payoffs for each possible outcome. The highest payoff for Player 2 occurs when Player 1 chooses $A$ and Player 2 subsequently chooses $X$, yielding a payoff of $(5, 3)$. Consequently, we can dismiss the possibility of Player 1 choosing $B$, as it does not lead to a better outcome for Player 2.

Next, we focus on determining Player 2's optimal strategy, given that Player 1 will choose $A$. In this scenario, Player 2 maximizes their payoff by selecting $X$, resulting in the highest payoff of $(5, 3)$. Therefore, the optimal strategy for Player 2 is to choose $X$ when Player 1 selects $A$.

As a result, the optimal strategy for Player 1 is to choose $A$. The final outcome of this game is thus $(A, X)$ with corresponding payoffs of $(5, 3)$.
    