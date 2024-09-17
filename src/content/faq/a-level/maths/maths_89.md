---
title: "Evaluate the integral of e^2x dx"
summary: "The integral of e^2x dx is (1/2)e^2x + C, with C representing the constant of integration."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-25
---

Let’s enhance the clarity and readability of the content while ensuring proper formatting for mathematical expressions. Here is the revised version:

The integral of \( e^{2x} \, dx \) can be expressed as 

$$ 
\frac{1}{2} e^{2x} + C 
$$ 

where \( C \) represents the constant of integration.

To evaluate the integral \( \int e^{2x} \, dx \), we will apply the power rule of integration. The power rule states that the integral of \( x^n \, dx \) is given by 

$$ 
\frac{1}{n+1} x^{n+1} + C 
$$ 

However, in this case, we are dealing with the exponential function \( e^{2x} \), which can be rewritten as \( (e^2)^x \). 

To integrate \( e^{2x} \), we can utilize substitution. Let's proceed as follows:

1. **Set up the integral**:

$$ 
\int e^{2x} \, dx 
$$ 

2. **Use substitution**: Let \( u = e^{2x} \). Then, the derivative of \( u \) with respect to \( x \) is 

$$ 
\frac{du}{dx} = 2e^{2x} 
$$ 

This implies that 

$$ 
du = 2e^{2x} \, dx \quad \text{or} \quad dx = \frac{1}{2e^{2x}} \, du 
$$ 

3. **Substituting into the integral**:

Now substituting \( u \) and \( dx \) into the integral:

$$ 
\int e^{2x} \, dx = \int \frac{1}{2} u \, \frac{du}{2} = \frac{1}{2} \int u \, d(u) 
$$ 

4. **Integrate**:

The integral of \( u \) with respect to \( u \) is 

$$ 
\frac{u^2}{2} + C 
$$ 

So we have:

$$ 
\frac{1}{2} \left( \frac{u^2}{2} \right) + C = \frac{u^2}{4} + C 
$$ 

5. **Back-substituting**:

Now substituting back \( u = e^{2x} \):

$$ 
\frac{(e^{2x})^2}{4} + C = \frac{e^{4x}}{4} + C 
$$ 

Thus, our final expression for the integral is:

$$ 
\int e^{2x} \, dx = \frac{1}{2} e^{2x} + C 
$$ 

Therefore, the integral of \( e^{2x} \, dx \) is 

$$ 
\frac{1}{2} e^{2x} + C 
$$ 

where \( C \) is the constant of integration.
    