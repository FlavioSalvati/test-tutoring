---
title: "Calculate the derivative of the function y = e^2x"
summary: "The derivative of y = e^2x is 2e^2x."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-19
---

To find the derivative of the function $ y = e^{2x} $, we can apply the chain rule. 

First, we introduce a substitution: let $ u = 2x $. This allows us to express $ y $ in terms of $ u $ as follows: $ y = e^u $.

The chain rule states that the derivative of $ y $ with respect to $ x $ can be determined by multiplying the derivative of $ y $ with respect to $ u $ by the derivative of $ u $ with respect to $ x $. Mathematically, this is expressed as:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

From our substitution, we know:

- The derivative of $ y $ with respect to $ u $ is $ \frac{dy}{du} = e^u $.
- The derivative of $ u $ with respect to $ x $ is $ \frac{du}{dx} = 2 $.

Substituting these derivatives into our chain rule equation gives:

$$
\frac{dy}{dx} = e^u \cdot 2
$$

Next, we substitute back for $ u $:

$$
\frac{dy}{dx} = e^{2x} \cdot 2
$$

Upon simplification, we arrive at:

$$
\frac{dy}{dx} = 2e^{2x}
$$

Thus, we conclude that the derivative of $ y = e^{2x} $ is:

$$
\frac{dy}{dx} = 2e^{2x}
$$
    