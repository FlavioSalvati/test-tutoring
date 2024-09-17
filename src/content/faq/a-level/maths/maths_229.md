---
title: "How to integrate e^x*sin(x)?"
summary: "To integrate e^x*sin(x), apply integration by parts with u = sin(x) and dv/dx = e^x to find the solution effectively."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-01
---

To integrate the function \( e^x \sin(x) \), we can employ the method of integration by parts. We start by selecting:

- \( u = \sin(x) \)
- \( dv = e^x \, dx \)

From these choices, we can compute the derivatives and antiderivatives:

- \( du = \cos(x) \, dx \)
- \( v = e^x \)

Applying the integration by parts formula, which states that 

$$
\int u \, dv = uv - \int v \, du,
$$ 

we can express our integral as follows:

$$
\int e^x \sin(x) \, dx = e^x \sin(x) - \int e^x \cos(x) \, dx.
$$

Next, we need to evaluate the integral \( \int e^x \cos(x) \, dx \). We will again use integration by parts for this integral. Let’s set:

- \( u = \cos(x) \)
- \( dv = e^x \, dx \)

Thus, we find:

- \( du = -\sin(x) \, dx \)
- \( v = e^x \)

Using the integration by parts formula again, we get:

$$
\int e^x \cos(x) \, dx = e^x \cos(x) - \int e^x (-\sin(x)) \, dx,
$$

which simplifies to:

$$
\int e^x \cos(x) \, dx = e^x \cos(x) + \int e^x \sin(x) \, dx.
$$

Now, substituting this result back into our previous equation gives us:

$$
\int e^x \sin(x) \, dx = e^x \sin(x) - \left( e^x \cos(x) + \int e^x \sin(x) \, dx \right).
$$

This expands to:

$$
\int e^x \sin(x) \, dx = e^x \sin(x) - e^x \cos(x) - \int e^x \sin(x) \, dx.
$$

Next, we rearrange the equation to isolate the integral:

$$
\int e^x \sin(x) \, dx + \int e^x \sin(x) \, dx = e^x \sin(x) - e^x \cos(x).
$$

This simplifies to:

$$
2 \int e^x \sin(x) \, dx = e^x \sin(x) - e^x \cos(x).
$$

Dividing both sides by $2$ yields:

$$
\int e^x \sin(x) \, dx = \frac{1}{2} e^x \sin(x) - \frac{1}{2} e^x \cos(x) + C,
$$

where \( C \) is the constant of integration. Therefore, the integral of \( e^x \sin(x) \) is 

$$
\int e^x \sin(x) \, dx = \frac{1}{2} e^x \sin(x) - \frac{1}{2} e^x \cos(x) + C.
$$
    