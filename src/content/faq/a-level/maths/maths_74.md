---
title: "What's the integral of x^3*ln(x)?"
summary: "The integral of x^3 multiplied by ln(x) is calculated as (x^4/4)*(ln(x) - 1/4)."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-02
---

To evaluate the integral of \( x^3 \ln(x) \), we find that the result is 

$$ 
\frac{x^4}{4} \left( \ln(x) - \frac{1}{4} \right) + C 
$$ 

where \( C \) represents the constant of integration.

To solve this integral, we will apply the method of integration by parts. We start by letting: 

- \( u = \ln(x) \)
- \( dv = x^3 \, dx \)

Next, we differentiate \( u \) and integrate \( dv \):

- \( du = \frac{1}{x} \, dx \)
- \( v = \frac{x^4}{4} \)

Using the integration by parts formula, which states 

$$ 
\int u \, dv = uv - \int v \, du, 
$$ 

we can substitute our values:

$$ 
\int x^3 \ln(x) \, dx = uv - \int v \, du 
= \left( \frac{x^4}{4} \ln(x) \right) - \int \left( \frac{x^4}{4} \cdot \frac{1}{x} \right) dx 
= \left( \frac{x^4}{4} \ln(x) \right) - \int \frac{x^3}{4} \, dx. 
$$ 

Now, we compute the integral \( \int \frac{x^3}{4} \, dx \):

$$ 
\int \frac{x^3}{4} \, dx = \frac{1}{4} \cdot \frac{x^4}{4} = \frac{x^4}{16}. 
$$ 

Substituting this back into our equation, we have:

$$ 
\int x^3 \ln(x) \, dx = \frac{x^4}{4} \ln(x) - \frac{x^4}{16} + C. 
$$ 

This can be simplified further:

$$ 
\int x^3 \ln(x) \, dx = \frac{x^4}{4} \left( \ln(x) - \frac{1}{4} \right) + C. 
$$ 

Thus, the final result for the integral of \( x^3 \ln(x) \) is given by:

$$ 
\frac{x^4}{4} \left( \ln(x) - \frac{1}{4} \right) + C. 
$$ 

Here, \( C \) is the constant of integration.
    