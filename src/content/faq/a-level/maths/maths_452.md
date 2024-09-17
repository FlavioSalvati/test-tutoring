---
title: "What's the integral of csc^3(x)cot^2(x)?"
summary: "The integral of csc^3(x)cot^2(x) is -csc(x) - ln|csc(x) + cot(x)| + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-03
---

The integral of $\csc^3(x) \cot^2(x)$ can be expressed as:

$$
\int \csc^3(x) \cot^2(x) \, dx = -\csc(x) - \ln|\csc(x) + \cot(x)| + C.
$$

To evaluate this integral, we will utilize the substitution $ u = \csc(x) $. The derivative of $ u $ with respect to $ x $ is given by:

$$
\frac{du}{dx} = -\csc(x) \cot(x).
$$

This implies that:

$$
du = -\csc(x) \cot(x) \, dx.
$$

Rearranging this, we can express $ dx $ as:

$$
dx = -\frac{du}{\csc(x) \cot(x)}.
$$

Now, we can rewrite the integral in terms of $ u $:

$$
\int \csc^3(x) \cot^2(x) \, dx = \int -u^3 \, du.
$$

Applying the power rule of integration, we find:

$$
\int -u^3 \, du = -\frac{1}{4} u^4 + C.
$$

Substituting back $ u = \csc(x) $, we obtain:

$$
-\frac{1}{4} \csc^4(x) + C.
$$

Next, we aim to express our result in terms of both $ \csc(x) $ and $ \cot(x) $. We can utilize the identity $ \csc^2(x) = \cot^2(x) + 1 $ to rewrite $ \csc^4(x) $ as:

$$
\csc^4(x) = (\cot^2(x) + 1)^2.
$$

Substituting this back into our expression gives:

$$
-\frac{1}{4} (\cot^2(x) + 1)^2 + C.
$$

After simplifying the expression, we arrive at our final result:

$$
-\csc(x) - \ln|\csc(x) + \cot(x)| + C.
$$

Thus, the integral of $\csc^3(x) \cot^2(x)$ evaluates to:

$$
-\csc(x) - \ln|\csc(x) + \cot(x)| + C.
$$
    