---
title: "What's the integral of sec(x)tan^4(x)?"
summary: "The integral of sec(x)tan^4(x) is (1/3)sec(x)tan^2(x) + (1/3)ln|sec(x) + tan(x)| + C."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-15
---

The integral of $\sec(x) \tan^4(x)$ can be expressed as:

$$
\int \sec(x) \tan^4(x) \, dx = \frac{1}{3} \sec(x) \tan^2(x) + \frac{1}{3} \ln | \sec(x) + \tan(x) | + C.
$$

To evaluate this integral, we can use the substitution $u = \tan(x)$. Consequently, we find that:

$$
\frac{du}{dx} = \sec^2(x), \quad \text{which implies} \quad dx = \frac{du}{\sec^2(x)}.
$$

Substituting these expressions into the integral, we obtain:

$$
\int \sec(x) \tan^4(x) \, dx = \int \frac{u^4}{1 + u^2} \, du.
$$

Next, we can apply partial fraction decomposition to express the integrand in a more manageable form:

$$
\frac{u^4}{1 + u^2} = u^2 - \frac{u^2}{1 + u^2}.
$$

This allows us to split the integral into two simpler parts:

$$
\int \sec(x) \tan^4(x) \, dx = \int u^2 \, du - \int \frac{u^2}{1 + u^2} \, du.
$$

The first integral can be easily computed using the power rule:

$$
\int u^2 \, du = \frac{u^3}{3} = \frac{\tan^3(x)}{3}.
$$

For the second integral, we can use the substitution $v = 1 + u^2$. Thus, we have:

$$
\frac{dv}{du} = 2u \quad \Rightarrow \quad du = \frac{dv}{2u}.
$$

Substituting this into the integral gives us:

$$
-\int \frac{1}{2v} \, dv = -\frac{1}{2} \ln |v| = -\frac{1}{2} \ln |1 + u^2|.
$$

Now, substituting back $u = \tan(x)$, we have:

$$
\int \sec(x) \tan^4(x) \, dx = \frac{\tan^3(x)}{3} - \frac{1}{2} \ln |1 + \tan^2(x)| + C.
$$

Using the identity $1 + \tan^2(x) = \sec^2(x)$, we can simplify this expression further:

$$
\int \sec(x) \tan^4(x) \, dx = \frac{1}{3} \sec(x) \tan^2(x) + \frac{1}{3} \ln | \sec(x) + \tan(x) | + C.
$$

This concludes the evaluation of the integral.
    