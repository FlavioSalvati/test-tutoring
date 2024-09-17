---
title: "Calculate the derivative of sin(x)"
summary: "The derivative of sin(x) is cos(x)."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-28
---

The derivative of the function $\sin(x)$ is $\cos(x)$.

To compute the derivative of $\sin(x)$, we apply the formula for the derivative of a trigonometric function:

$$\frac{d}{dx} \sin(x) = \cos(x)$$

This indicates that the derivative of $\sin(x)$ is indeed equal to $\cos(x)$. We can verify this result using the limit definition of the derivative:

$$\lim_{h \to 0} \frac{\sin(x + h) - \sin(x)}{h}$$

Utilizing the sine addition formula, we expand $\sin(x + h)$:

$$= \lim_{h \to 0} \frac{\sin(x) \cos(h) + \cos(x) \sin(h) - \sin(x)}{h}$$

This simplifies to:

$$= \lim_{h \to 0} \frac{\sin(x)(\cos(h) - 1) + \cos(x) \sin(h)}{h}$$

We can separate this limit into two parts:

$$= \lim_{h \to 0} \left( \sin(x) \frac{\cos(h) - 1}{h} \right) + \lim_{h \to 0} \left( \cos(x) \frac{\sin(h)}{h} \right)$$

As $h$ approaches $0$, we know that:

$$\lim_{h \to 0} \frac{\cos(h) - 1}{h} = 0$$

and 

$$\lim_{h \to 0} \frac{\sin(h)}{h} = 1$$

Thus, we find:

$$= 0 \cdot \sin(x) + \cos(x) \cdot 1$$

This results in:

$$= \cos(x)$$

Consequently, we conclude that the derivative of $\sin(x)$ is $\cos(x)$. This signifies that the slope of the graph of $\sin(x)$ at any point $x$ corresponds to the value of $\cos(x)$ at that point. For instance, at $x = 0$, the slope of the graph of $\sin(x)$ is equal to $\cos(0) = 1$. Similarly, at $x = \frac{\pi}{2}$, the slope of the graph of $\sin(x)$ is equal to $\cos\left(\frac{\pi}{2}\right) = 0$.
    