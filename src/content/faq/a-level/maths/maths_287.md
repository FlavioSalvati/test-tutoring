---
title: "How to find the value of a game in game theory?"
summary: "To find the value of a game in game theory, we use the concept of expected value."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-25
---

To determine the value of a game in game theory, we utilize the concept of expected value.

The expected value serves as a statistical measure of the average outcome of a random event, appropriately weighted by its probability. In the context of game theory, expected value helps us ascertain the value of a game, which represents the average amount each player can anticipate winning or losing.

To compute the expected value of a game, we first identify the payoffs for each player across all possible outcomes. Next, we multiply each payoff by its corresponding probability and then sum these products. A solid understanding of probabilities is essential for accurately calculating these values.

Consider the following example of a two-player game:

$$
\begin{array}{|c|c|c|}
\hline
\text{Player 1 / Player 2} & A & B \\
\hline
C & (2, 1) & (0, 0) \\
\hline
D & (0, 0) & (1, 2) \\
\hline
\end{array}
$$

To find the value of this game, we first calculate the expected payoff for each player across all possible outcomes:

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{Player 1 / Player 2} & A-C & A-D & B-C & B-D \\
\hline
(2, 1) & \frac{2}{3} \cdot 2 + \frac{1}{3} \cdot 0 & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 1 & \frac{2}{3} \cdot 1 + \frac{1}{3} \cdot 0 & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 2 \\
\hline
(0, 0) & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 0 & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 0 & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 0 & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 0 \\
\hline
(1, 2) & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 1 & \frac{2}{3} \cdot 1 + \frac{1}{3} \cdot 0 & \frac{2}{3} \cdot 0 + \frac{1}{3} \cdot 2 & \frac{2}{3} \cdot 2 + \frac{1}{3} \cdot 0 \\
\hline
\end{array}
$$

Next, we compute the expected value of the game by summing the expected payoffs for each player across all outcomes and dividing by the total number of outcomes. 

The expected value can be calculated as follows:

$$
\text{Expected value} = \frac{(2 + 0 + 0 + 0 + 0 + 1 + 0 + 2)}{8} = 0.625
$$

Thus, the value of this game is $0.625$.
    