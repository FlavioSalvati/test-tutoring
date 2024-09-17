---
title: "How do you calculate the conditional probability using a probability tree?"
summary: "To calculate conditional probability with a probability tree, multiply the probabilities along the branches and then divide by the total probability."
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-07-30
---

To calculate conditional probability using a probability tree, you multiply along the branches and then divide by the total probability.

A probability tree serves as a visual representation that helps you outline all possible outcomes of a sequence of events. Each branch of the tree corresponds to a possible outcome and its associated probability. To determine the conditional probability, you begin by identifying the specific path that represents the event of interest. You then multiply the probabilities along this path to obtain the joint probability of the sequence of events.

For instance, consider a probability tree that illustrates two events: $ A $ and $ B $. Event $ A $ can occur in two ways: either it happens ($ A_1 $) or it does not happen ($ A_2 $). Similarly, event $ B $ can also occur in two ways: it happens ($ B_1 $) or it does not happen ($ B_2 $). The tree will have branches representing each combination of these events: $ A_1B_1 $, $ A_1B_2 $, $ A_2B_1 $, and $ A_2B_2 $. 

To find the conditional probability of $ B_1 $ given $ A_1 $, you first calculate the joint probability of $ A_1 $ and $ B_1 $ by multiplying the probabilities along the path $ A_1B_1 $.

Next, you need to determine the total probability of event $ A_1 $ occurring. This is done by summing the probabilities of all branches that originate with $ A_1 $, namely $ A_1B_1 $ and $ A_1B_2 $. 

Finally, the conditional probability $ P(B_1 | A_1) $ can be found by dividing the joint probability of $ A_1 $ and $ B_1 $ by the total probability of $ A_1 $:

$$
P(B_1 | A_1) = \frac{P(A_1 \cap B_1)}{P(A_1)}
$$

Using a probability tree simplifies the visualization and calculation of these probabilities, ensuring that you consider all possible outcomes and their corresponding probabilities.
    