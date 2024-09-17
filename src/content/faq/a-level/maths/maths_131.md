---
title: "How to integrate sec(x)tan(x)?"
summary: "To integrate sec(x)tan(x), apply u-substitution by letting u = sec(x) + tan(x) to simplify the process."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-03-13
---

To integrate the function $\sec(x) \tan(x)$, we can utilize the method of u-substitution. We start by letting 

$$ u = \sec(x) + \tan(x). $$

Next, we compute the derivative of $u$ with respect to $x$:

$$ \frac{du}{dx} = \sec(x) \tan(x) + \sec^2(x). $$

From this expression, we can isolate $\sec(x) \tan(x)$:

$$ \sec(x) \tan(x) = \frac{du}{dx} - \sec^2(x). $$

Now, we substitute this result into the integral:

$$ 
\int \sec(x) \tan(x) \, dx = \int \left( \frac{du}{dx} - \sec^2(x) \right) \, dx.
$$

The first term, $\int \frac{du}{dx} \, dx$, simplifies easily since it is simply $u$ with respect to $x$. For the second term, we can apply the trigonometric identity 

$$ 1 + \tan^2(x) = \sec^2(x) $$ 

to rewrite the integral:

$$ 
\int \sec(x) \tan(x) \, dx = \ln |\sec(x) + \tan(x)| - \int \frac{dx}{1 + \tan^2(x)}.
$$

To evaluate the second integral, we can use the substitution 

$$ u = \tan(x) $$ 

with 

$$ \frac{du}{dx} = \sec^2(x). $$ 

This allows us to express the integral as follows:

$$ 
\int \frac{dx}{1 + \tan^2(x)} = \int \frac{du}{u^2 + 1} = \arctan(u) + C = \arctan(\tan(x)) + C.
$$

Now, combining all parts, we have:

$$ 
\int \sec(x) \tan(x) \, dx = \ln |\sec(x) + \tan(x)| - \arctan(\tan(x)) + C.
$$

Finally, we can simplify the term $\arctan(\tan(x))$:

$$ 
\int \sec(x) \tan(x) \, dx = \ln |\sec(x) + \tan(x)| - x + C.
$$

This gives us the final result for the integral of $\sec(x) \tan(x)$.
    