---
title: "How to integrate e^x*sin(x)*ln(x)?"
summary: "To integrate e^x*sin(x)*ln(x), use integration by parts with u = ln(x) and dv = e^x*sin(x)dx."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-29
---

To compute the integral of the function $ e^x \sin(x) \ln(x) $, we will apply the method of integration by parts. We start by choosing $ u = \ln(x) $ and $ dv = e^x \sin(x) \, dx $.

Applying integration by parts, we have:

$$
\int e^x \sin(x) \ln(x) \, dx = \ln(x) \left(-e^x \cos(x)\right) - \int -e^x \cos(x) \, dx.
$$

This simplifies to:

$$
\int e^x \sin(x) \ln(x) \, dx = -e^x \cos(x) \ln(x) + \int e^x \cos(x) \, dx.
$$

Next, we will apply integration by parts again to the integral $ \int e^x \cos(x) \, dx $. This time, we set $ u = \cos(x) $ and $ dv = e^x \, dx $:

$$
\int e^x \cos(x) \, dx = \cos(x) e^x - \int -e^x \sin(x) \, dx.
$$

Substituting this back gives us:

$$
\int e^x \sin(x) \ln(x) \, dx = -e^x \cos(x) \ln(x) + \left( e^x \cos(x) - \int e^x \sin(x) \, dx \right).
$$

Now, simplifying this expression results in:

$$
\int e^x \sin(x) \ln(x) \, dx = -e^x \cos(x) \ln(x) + e^x \cos(x) - \int e^x \sin(x) \, dx.
$$

Next, we will perform integration by parts one more time on the integral $ \int e^x \sin(x) \, dx $, with $ u = \sin(x) $ and $ dv = e^x \, dx $:

$$
\int e^x \sin(x) \, dx = \sin(x) e^x - \int e^x \cos(x) \, dx.
$$

Substituting this back into our earlier expression gives us:

$$
\int e^x \sin(x) \ln(x) \, dx = -e^x \cos(x) \ln(x) + e^x \cos(x) - \left( \sin(x) e^x - \int e^x \cos(x) \, dx \right).
$$

After simplifying, we arrive at:

$$
\int e^x \sin(x) \ln(x) \, dx = e^x \left(-\cos(x) \ln(x) + \sin(x) - \cos(x)\right) + C,
$$

where $ C $ is the constant of integration.

Thus, we conclude that the integral of $ e^x \sin(x) \ln(x) $ is given by:

$$
\int e^x \sin(x) \ln(x) \, dx = e^x \left(-\cos(x) \ln(x) + \sin(x) - \cos(x)\right) + C.
$$
    