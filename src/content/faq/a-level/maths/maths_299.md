---
title: "Calculate the derivative of the function y = log(2x) base 10"
summary: "The derivative of y = log(2x) base 10 is 1/(xln10)."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-10
---

To find the derivative of the function $ y = \log_{10}(2x) $, we can apply the chain rule. We start by letting $ u = 2x $, which allows us to rewrite the function as $ y = \log_{10}(u) $. 

By applying the chain rule, we get:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

Next, we need to determine $ \frac{dy}{du} $. The derivative of a logarithmic function is given by the formula:

$$
\frac{d}{du} \log_a(u) = \frac{1}{u \ln a}
$$

In this case, since $ a = 10 $, we have:

$$
\frac{dy}{du} = \frac{1}{u \ln 10}
$$

Now, substituting back for $ u $, we find:

$$
\frac{dy}{du} = \frac{1}{(2x) \ln 10}
$$

Next, we compute $ \frac{du}{dx} $:

$$
\frac{du}{dx} = \frac{d}{dx}(2x) = 2
$$

Now, substituting $ \frac{dy}{du} $ and $ \frac{du}{dx} $ back into our chain rule equation, we have:

$$
\frac{dy}{dx} = \frac{1}{(2x) \ln 10} \cdot 2
$$

Simplifying this expression, we find:

$$
\frac{dy}{dx} = \frac{2}{(2x) \ln 10} = \frac{1}{x \ln 10}
$$

Thus, the derivative of $ y = \log_{10}(2x) $ is:

$$
\frac{dy}{dx} = \frac{1}{x \ln 10}
$$
    