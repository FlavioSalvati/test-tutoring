---
title: "What's the integral of 1/(x^2-9)?"
summary: "The integral of 1/(x^2-9) is (1/6)ln|(x-3)/(x+3)| + C."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-28
---

To evaluate the integral of the function $ \frac{1}{x^2 - 9} $, we can express it in a more manageable form. The result of the integral is 

$$ 
\frac{1}{6} \ln \left| \frac{x-3}{x+3} \right| + C 
$$ 

where $ C $ is the constant of integration.

To solve this integral, we will utilize the method of partial fractions. First, we factor the denominator: 

$$ 
x^2 - 9 = (x - 3)(x + 3). 
$$ 

Next, we can write 

$$ 
\frac{1}{x^2 - 9} = \frac{A}{x - 3} + \frac{B}{x + 3} 
$$ 

where $ A $ and $ B $ are constants to be determined.

By multiplying both sides of the equation by the denominator $ (x - 3)(x + 3) $, we obtain:

$$ 
1 = A(x + 3) + B(x - 3). 
$$ 

To find the values of $ A $ and $ B $, we can substitute convenient values for $ x $. 

First, let’s set $ x = 3 $:

$$ 
1 = A(3 + 3) + B(3 - 3) \implies 1 = 6A \implies A = \frac{1}{6}. 
$$ 

Next, we set $ x = -3 $:

$$ 
1 = A(-3 + 3) + B(-3 - 3) \implies 1 = -6B \implies B = -\frac{1}{6}. 
$$ 

Now, we can rewrite the integral as follows:

$$ 
\int \frac{1}{x^2 - 9} \, dx = \int \left( \frac{1}{6} \cdot \frac{1}{x - 3} - \frac{1}{6} \cdot \frac{1}{x + 3} \right) \, dx. 
$$ 

Integrating each term separately, we find:

$$ 
\frac{1}{6} \ln |x - 3| - \frac{1}{6} \ln |x + 3| + C. 
$$ 

Using the properties of logarithms, this can be combined into a single logarithmic expression:

$$ 
\frac{1}{6} \ln \left| \frac{x - 3}{x + 3} \right| + C. 
$$ 

Thus, we conclude that the integral of $ \frac{1}{x^2 - 9} $ is 

$$ 
\frac{1}{6} \ln \left| \frac{x - 3}{x + 3} \right| + C. 
$$
    