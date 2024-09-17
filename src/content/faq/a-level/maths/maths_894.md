---
title: "Differentiate the function y = csc(5x)"
summary: "The derivative of y = csc(5x) is -5csc(5x)cot(5x)."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-07
---

To find the derivative of the function $ y = \csc(5x) $, we can apply the chain rule along with the derivative of the cosecant function. The derivative of $ \csc(x) $ is given by $ -\csc(x) \cot(x) $.

First, let us define $ u = 5x $. Consequently, we can rewrite our function as $ y = \csc(u) $.

Using the chain rule, we have the following relationship for differentiation:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

Next, we calculate each part:

1. The derivative $ \frac{dy}{du} $:
   $$
   \frac{dy}{du} = -\csc(u) \cot(u) \quad \text{(since the derivative of } \csc(u) \text{ is } -\csc(u) \cot(u)\text{)}
   $$

2. The derivative $ \frac{du}{dx} $:
   $$
   \frac{du}{dx} = 5 \quad \text{(the derivative of } 5x\text{)}
   $$

Now, substituting these derivatives back into our chain rule expression, we get:

$$
\frac{dy}{dx} = -\csc(u) \cot(u) \cdot 5
$$

Substituting back $ u = 5x $:

$$
\frac{dy}{dx} = -5 \csc(5x) \cot(5x)
$$

Thus, the derivative of $ y = \csc(5x) $ is 

$$
\frac{dy}{dx} = -5 \csc(5x) \cot(5x).
$$
    