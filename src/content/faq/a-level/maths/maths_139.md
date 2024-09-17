---
title: "How to integrate (e^x)*sin(x)?"
summary: To integrate $ e^x \sin(x) $, apply the method of integration by parts, a technique that simplifies the process by breaking the integral into manageable components.
author: "Dr. Sarah Wilson"
degree: "MSc in Physics, University College London"
tutor_type: "A-Level Physics Tutor"
date: 2024-07-15
---

To integrate the expression \( e^x \sin(x) \), we will use the technique known as integration by parts.

Integration by parts is a method for integrating the product of two functions. This technique requires us to select one function to differentiate and another to integrate. The formula for integration by parts is given as follows:

$$
\int u \, dv = uv - \int v \, du
$$

In this formula, \( u \) and \( v \) are functions of \( x \), while \( \frac{du}{dx} \) and \( \frac{dv}{dx} \) denote their respective derivatives.

For our integral, we will set:
- \( u = \sin(x) \)
- \( dv = e^x \, dx \)

This implies that:
- \( \frac{du}{dx} = \cos(x) \)
- \( v = e^x \)

Applying the integration by parts formula, we find:

$$
\int e^x \sin(x) \, dx = e^x \sin(x) - \int e^x \cos(x) \, dx
$$

Next, we need to compute the integral \( \int e^x \cos(x) \, dx \). We will again use integration by parts. This time, we set:
- \( u = \cos(x) \)
- \( dv = e^x \, dx \)

Thus, we have:
- \( \frac{du}{dx} = -\sin(x) \)
- \( v = e^x \)

Using the integration by parts formula once more, we get:

$$
\int e^x \cos(x) \, dx = e^x \cos(x) + \int e^x \sin(x) \, dx
$$

Now, we can substitute this result back into our earlier equation:

$$
\int e^x \sin(x) \, dx = e^x \sin(x) - \left( e^x \cos(x) + \int e^x \sin(x) \, dx \right)
$$

This simplifies to:

$$
\int e^x \sin(x) \, dx = e^x \sin(x) - e^x \cos(x) - \int e^x \sin(x) \, dx
$$

To isolate the integral \( \int e^x \sin(x) \, dx \), we can rearrange the equation:

$$
2 \int e^x \sin(x) \, dx = e^x (\sin(x) - \cos(x))
$$

Next, we divide both sides by \( 2 \):

$$
\int e^x \sin(x) \, dx = \frac{1}{2} e^x (\sin(x) - \cos(x)) + C
$$

where \( C \) is the constant of integration. 

Thus, the final result for the integral is:

$$
\int e^x \sin(x) \, dx = \frac{1}{2} e^x (\sin(x) - \cos(x)) + C
$$
    