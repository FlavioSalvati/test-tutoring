---
title: "Prove the formula for the derivative of e^x"
summary: "The derivative of e^x is e^x."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-08
---

The derivative of the function $ e^x $ is $ e^x $.

To demonstrate this formula, we begin with the definition of the derivative:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

Let $ f(x) = e^x $. Then we can write:

$$
f'(x) = \lim_{h \to 0} \frac{e^{x+h} - e^x}{h}
$$

Using the properties of exponents, we can simplify the expression:

$$
f'(x) = \lim_{h \to 0} \frac{e^x \cdot e^h - e^x}{h}
$$

Factoring out $ e^x $ gives us:

$$
f'(x) = \lim_{h \to 0} \frac{e^x (e^h - 1)}{h}
$$

Next, we apply L'Hôpital's rule to evaluate the limit. This is appropriate since both the numerator and the denominator approach $ 0 $ as $ h \to 0 $:

$$
f'(x) = e^x \cdot \lim_{h \to 0} \frac{e^h - 1}{h}
$$

To find this limit, we note that:

$$
\lim_{h \to 0} \frac{e^h - 1}{h} = 1
$$

Thus, we have:

$$
f'(x) = e^x \cdot 1 = e^x
$$

In conclusion, the derivative of $ e^x $ is indeed $ e^x $.
    