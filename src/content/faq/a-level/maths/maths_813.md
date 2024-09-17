---
title: "How to integrate e^x*sin(2x)?"
summary: "To integrate e^x*sin(2x), use integration by parts."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-25
---

To integrate the function $ e^x \sin(2x) $, we will utilize the technique known as integration by parts.

Integration by parts is a method used to integrate the product of two functions. This technique involves selecting one function to differentiate and the other to integrate. For our integral, we set:

$$
u = \sin(2x) \quad \text{and} \quad \frac{dv}{dx} = e^x
$$

From this, we can compute the derivatives:

$$
\frac{du}{dx} = 2 \cos(2x) \quad \text{and} \quad v = e^x
$$

Applying the integration by parts formula, which states that 

$$
\int u \, dv = uv - \int v \, du,
$$ 

we can express our integral as follows:

$$
\int e^x \sin(2x) \, dx = e^x \sin(2x) - \int e^x (2 \cos(2x)) \, dx
$$

Next, we need to integrate the term $ \int e^x (2 \cos(2x)) \, dx $. We will apply integration by parts once more. This time, we choose:

$$
u = 2 \cos(2x) \quad \text{and} \quad \frac{dv}{dx} = e^x
$$

Calculating the derivatives again gives us:

$$
\frac{du}{dx} = -4 \sin(2x) \quad \text{and} \quad v = e^x
$$

Using the integration by parts formula again, we have:

$$
\int e^x (2 \cos(2x)) \, dx = 2 e^x \cos(2x) - \int e^x (-4 \sin(2x)) \, dx
$$

This simplifies to:

$$
\int e^x (2 \cos(2x)) \, dx = 2 e^x \cos(2x) + 4 \int e^x \sin(2x) \, dx
$$

Now, substituting this back into our earlier equation, we get:

$$
\int e^x \sin(2x) \, dx = e^x \sin(2x) - \left( 2 e^x \cos(2x) + 4 \int e^x \sin(2x) \, dx \right)
$$

Rearranging terms leads us to:

$$
\int e^x \sin(2x) \, dx + 4 \int e^x \sin(2x) \, dx = e^x \sin(2x) - 2 e^x \cos(2x)
$$

Combining the integrals on the left side gives us:

$$
5 \int e^x \sin(2x) \, dx = e^x \sin(2x) - 2 e^x \cos(2x)
$$

To isolate the integral, we divide both sides by 5:

$$
\int e^x \sin(2x) \, dx = \frac{1}{5} e^x \sin(2x) - \frac{2}{5} e^x \cos(2x) + C
$$

Thus, the integral of $ e^x \sin(2x) $ is given by:

$$
\int e^x \sin(2x) \, dx = \frac{1}{5} e^x \sin(2x) - \frac{2}{5} e^x \cos(2x) + C,
$$

where $ C $ represents the constant of integration.
    