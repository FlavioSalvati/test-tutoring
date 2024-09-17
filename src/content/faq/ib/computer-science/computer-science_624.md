---
title: "How do neural networks learn from data?"
summary: "Neural networks learn from data through a process called training, which involves adjusting weights based on error minimisation."
author: "Dr. Ethan Mitchell"
degree: "PhD in Artificial Intelligence, University of Cambridge"
tutor_type: "IB Computer Science Tutor"
date: 2024-03-17
---

Neural networks learn from data through a process known as training, which involves adjusting weights to minimize prediction errors.

Neural networks, or artificial neural networks (ANNs), are a class of machine learning models inspired by the human brain's structure and function. They are composed of interconnected layers of nodes, referred to as "neurons," which communicate by transmitting signals. Each connection between neurons is assigned a weight that determines the strength of the signal transmitted. The primary objective of training a neural network is to adjust these weights so that the network can accurately map inputs to corresponding outputs.

The training process initiates with the random initialization of the weights. The network is then provided with a set of training data, which includes both inputs and their associated correct outputs. For each input, the network generates a prediction using the current weights, and the discrepancy between this prediction and the correct output is calculated. This discrepancy is termed the error.

Subsequently, the weights are adjusted to minimize this error using a method called backpropagation. During backpropagation, the error is propagated backward through the network, from the output layer back to the input layer. The weights are modified in proportion to their contribution to the error. This adjustment process is repeated for each training example in a cycle known as an epoch.

Key parameters in the training process include the number of epochs and the learning rate, which dictates the speed at which weights are adjusted. If the number of epochs is too low or the learning rate is insufficient, the network may encounter underfitting, failing to capture the underlying patterns in the data. Conversely, an excessive number of epochs or a high learning rate can lead to overfitting, where the network becomes overly tailored to the training data, resulting in poor performance on unseen data.

In conclusion, neural networks learn from data by iteratively adjusting their weights based on the errors made in predicting correct outputs. This training process requires careful tuning of parameters to ensure effective learning without succumbing to overfitting or underfitting issues.
    