---
title: "What is the derivative of y = e^x?"
summary: The derivative of $ y = e^x $ is $ \frac{dy}{dx} = e^x $.
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-02-25
---

The derivative of the function $ y = e^x $ is given by 

$$
\frac{dy}{dx} = e^x.
$$

In calculus, the derivative of a function quantifies how the function's output changes in response to changes in its input. For the function $ y = e^x $, where $ e $ denotes the base of the natural logarithm (approximately equal to $2.71828$), the behavior of its derivative is quite remarkable. Unlike many other functions, the derivative of $ e^x $ is identical to the original function itself. This implies that as $ x $ increases or decreases, the rate of change of $ e^x $ remains consistently equal to $ e^x $.

To understand why this unique property holds, we can refer to the formal definition of the derivative. The derivative of a function $ f(x) $ at a point $ x $ is defined by the limit:

$$
\frac{dy}{dx} = \lim_{{h \to 0}} \frac{f(x+h) - f(x)}{h}.
$$

Applying this to our function $ f(x) = e^x $, we find:

$$
\frac{dy}{dx} = \lim_{{h \to 0}} \frac{e^{x+h} - e^x}{h}.
$$

Utilizing the properties of exponents, we can express $ e^{x+h} $ as $ e^x \cdot e^h $:

$$
\frac{dy}{dx} = \lim_{{h \to 0}} \frac{e^x \cdot e^h - e^x}{h}.
$$

Next, we can factor out $ e^x $ from the expression:

$$
\frac{dy}{dx} = e^x \cdot \lim_{{h \to 0}} \frac{e^h - 1}{h}.
$$

The limit 

$$
\lim_{{h \to 0}} \frac{e^h - 1}{h}
$$ 

is a well-established limit that equals $1$. Therefore, we conclude:

$$
\frac{dy}{dx} = e^x \cdot 1 = e^x.
$$

This result confirms that the derivative of $ y = e^x $ is indeed $ e^x $. This distinctive feature of the exponential function $ e^x $ highlights its significance and utility in various fields of mathematics and science.
    