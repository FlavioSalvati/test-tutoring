---
title: "Calculate the derivative of the function y = 10^2x"
summary: "The derivative of y = 10^2x is y' = 100ln(10)10^2x."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-15
---

To find the derivative of the function given by $ y = 10^{2x} $, we can apply the rules of differentiation. The derivative $ y' $ is calculated as follows:

First, we'll use the power rule of differentiation, which states that if $ y = ax^n $, then the derivative $ y' = anx^{n-1} $. However, since our function involves an exponential base, we will instead leverage the properties of exponential functions.

We begin with the expression:

$$ y = 10^{2x}. $$

To differentiate this, we can express $ 10^{2x} $ in terms of the natural exponential function. Recall that:

$$ 10^{2x} = e^{2x \ln(10)}. $$

Now, applying the chain rule, we find the derivative:

1. Differentiate $ e^{2x \ln(10)} $:

   $$ y' = \frac{d}{dx}(e^{2x \ln(10)}) = e^{2x \ln(10)} \cdot \frac{d}{dx}(2x \ln(10)). $$

2. The derivative of $ 2x \ln(10) $ is $ 2 \ln(10) $.

Thus, we have:

$$ y' = e^{2x \ln(10)} \cdot 2 \ln(10). $$

3. Substituting back $ e^{2x \ln(10)} $ with $ 10^{2x} $:

$$ y' = 2 \ln(10) \cdot 10^{2x}. $$

4. To express it in a more standard form, we can factor out constants:

$$ y' = 100 \ln(10) \cdot 10^{2x}. $$

Therefore, the final result of the derivative of $ y = 10^{2x} $ is:

$$ y' = 100 \ln(10) \cdot 10^{2x}. $$

In conclusion, the derivative of $ y = 10^{2x} $ is:

$$ y' = 100 \ln(10) \cdot 10^{2x}. $$
    