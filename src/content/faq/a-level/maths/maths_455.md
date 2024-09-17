---
title: "What's the integral of x^5/2?"
summary: "The integral of x^5/2 is (2/7)x^7/2 + C, where C is the constant of integration."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-02
---

Let’s enhance the clarity and readability of the content while adhering to the specified formatting for mathematical expressions.

---

The integral of $ x^{5/2} $ is given by 

$$ 
\int x^{5/2} \, dx = \frac{2}{7} x^{7/2} + C 
$$ 

where $ C $ represents the constant of integration.

To compute the integral of $ x^{5/2} $, we can apply the power rule of integration. This rule states that the integral of $ x^n $ is 

$$ 
\int x^n \, dx = \frac{1}{n+1} x^{n+1} + C 
$$ 

for any real number $ n \neq -1 $. In our case, we rewrite $ x^{5/2} $ as $ x^{5/2} $ and then apply the power rule:

$$ 
\int x^{5/2} \, dx = \frac{1}{(5/2) + 1} x^{(5/2) + 1} + C = \frac{1}{(7/2)} x^{(7/2)} + C = \frac{2}{7} x^{7/2} + C 
$$

To verify our result, we differentiate $ \frac{2}{7} x^{7/2} + C $ with respect to $ x $ using the power rule of differentiation. According to this rule, the derivative of $ x^n $ is 

$$ 
\frac{d}{dx} (x^n) = n x^{n-1}. 
$$ 

Thus, differentiating $ \frac{2}{7} x^{7/2} + C $ yields:

$$ 
\frac{d}{dx} \left( \frac{2}{7} x^{7/2} + C \right) = \frac{2}{7} \cdot \frac{7}{2} x^{(7/2) - 1} + 0 = x^{5/2}. 
$$ 

This confirms that our original integral is indeed correct.
    