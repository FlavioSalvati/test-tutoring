---
title: "How to solve a two-person zero-sum game?"
summary: "To solve a two-person zero-sum game, apply the minimax theorem to determine the optimal strategy for both players, ensuring the best possible outcome against their opponent's moves."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-27
---

To solve a two-person zero-sum game, we can utilize the minimax theorem to determine the optimal strategies for each player.

A two-person zero-sum game is defined as a scenario in which one player's gain is exactly equal to the other player's loss. The minimax theorem plays a crucial role here; it asserts that in such games, the optimal strategy for one player is to minimize their maximum possible loss.

To effectively apply the minimax theorem, we begin by constructing a payoff matrix that outlines the potential outcomes based on the strategies selected by each player. Next, we compute the maximum payoff for each row in the matrix and the minimum payoff for each column. For Player 1, the optimal strategy involves selecting the row that yields the highest minimum payoff, while for Player 2, the goal is to choose the column that results in the lowest maximum payoff.

Consider the following example of a payoff matrix:

$$
\begin{array}{c|c|c|c}
   & A & B & C \\
\hline
X & 2 & 1 & 3 \\
Y & 4 & 0 & 2 \\
Z & 1 & 3 & 2 \\
\end{array}
$$

To determine Player 1's optimal strategy, we first identify the minimum payoff for each row:

- For Row $X$, the minimum payoff is $1$.
- For Row $Y$, the minimum payoff is $0$.
- For Row $Z$, the minimum payoff is $1$.

The highest minimum payoff among these rows is $1$, which occurs in both Row $X$ and Row $Z$. Consequently, Player 1's optimal strategy is to select either Row $X$ or Row $Z$ with equal probability.

Now, let's find Player 2's optimal strategy by calculating the maximum payoff for each column:

- For Column $A$, the maximum payoff is $4$.
- For Column $B$, the maximum payoff is $3$.
- For Column $C$, the maximum payoff is $3$.

The lowest maximum payoff across these columns is $3$, which is found in both Column $B$ and Column $C$. Thus, Player 2's optimal strategy is to choose either Column $B$ or Column $C$ with equal probability.

By applying the minimax theorem, we have successfully determined the optimal strategies for both players in this zero-sum game.
    