---
title: "What is link prediction in web graph theory?"
summary: "Link prediction in web graph theory is the process of predicting the existence of a link between two nodes in a network."
author: "Dr. Noah Taylor"
degree: "PhD in Data Science, University College London"
tutor_type: "IB Computer Science Tutor"
date: 2024-04-28
---

Link prediction in web graph theory refers to the process of forecasting the presence of a link between two nodes within a network.

In web graph theory, link prediction is a crucial task that estimates the probability of a connection between two nodes, which are typically represented as web pages or users. This capability is especially valuable in various applications, including social network analysis, recommendation systems, and web search.

The underlying principle of link prediction is that the likelihood of a link between two nodes is often determined by the characteristics of the nodes and the overall structure of the network. For example, in a social network, two individuals are more likely to be connected if they share mutual friends. Likewise, in a web graph, two web pages are more likely to be linked if they contain similar content or are hosted on the same website.

Several methods are employed for link prediction in web graph theory. These include:

1. **Common Neighbours**: This method predicts a link between two nodes based on the number of common neighbours they share. The more common neighbours, the higher the likelihood of a link.
   
2. **Jaccard's Coefficient**: This approach evaluates the number of common neighbours relative to the total number of neighbours of both nodes, providing a normalized measure of similarity.

3. **Adamic/Adar Index**: This method assigns greater weight to common neighbours that have fewer connections, under the assumption that they are more informative.

4. **Preferential Attachment**: This principle posits that nodes with a higher number of links are more likely to establish new links, reflecting a "the rich get richer" dynamic.

Additionally, machine learning techniques can be utilized for link prediction. These techniques involve training a model on a dataset of nodes with known links and then applying the model to predict links among nodes with unknown connections. Features used to train these models may include node attributes, the structure of the network, and other relevant data.

In summary, link prediction in web graph theory is a complex yet vital task that enhances our understanding of network structure and evolution. Its applications span numerous fields, including social network analysis, recommendation systems, and web search.
    