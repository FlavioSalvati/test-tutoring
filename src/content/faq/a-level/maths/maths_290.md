---
title: "Calculate the derivative of e^x"
summary: "The derivative of e^x is e^x."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-20
---

The derivative of the function $ e^x $ is $ e^x $.

In calculus, the derivative of a function measures the rate at which the function changes at a specific point. For the function $ e^x $, this rate of change is equal to the function itself. Consequently, the derivative of $ e^x $ is simply $ e^x $.

To demonstrate this, we can utilize the formal definition of the derivative:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

Let us define $ f(x) = e^x $. Then, we have:

$$
f'(x) = \lim_{h \to 0} \frac{e^{x+h} - e^x}{h}
$$

Applying the properties of exponents, we can rewrite this expression:

$$
f'(x) = \lim_{h \to 0} \frac{e^x \cdot e^h - e^x}{h}
$$

Factoring out $ e^x $ gives us:

$$
f'(x) = \lim_{h \to 0} \frac{e^x \cdot (e^h - 1)}{h}
$$

Next, we can apply L'Hôpital's rule to evaluate the limit. This technique is useful when we encounter an indeterminate form. Thus, we rewrite the limit as:

$$
f'(x) = e^x \cdot \lim_{h \to 0} \frac{e^h - 1}{h}
$$

Now we need to evaluate the limit $ \lim_{h \to 0} \frac{e^h - 1}{h} $. It is known that this limit equals $ 1 $, leading us to:

$$
f'(x) = e^x \cdot 1
$$

Therefore, we conclude:

$$
f'(x) = e^x
$$

In summary, the derivative of $ e^x $ is $ e^x $.
    