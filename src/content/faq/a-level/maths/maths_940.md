---
title: "Solve the equation 2^x = 32"
summary: "The solution to the equation 2^x = 32 is x = 5."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-07
---

To solve the equation $ 2^x = 32 $, we find that $ x = 5 $.

To arrive at this solution, we will utilize logarithms. Specifically, we can take the logarithm of both sides of the equation with base $ 2 $ since we aim to express $ x $ in terms of powers of $ 2 $. This leads us to the following equation:

$$
\log_2(2^x) = \log_2(32).
$$

Using the logarithmic identity $ \log_a(b^c) = c \cdot \log_a(b) $, we can simplify the left-hand side:

$$
x \cdot \log_2(2) = \log_2(32).
$$

Since $ \log_2(2) = 1 $, we can further simplify this to:

$$
x = \log_2(32).
$$

Next, we need to evaluate $ \log_2(32) $. We can apply the change of base formula for logarithms, which states that 

$$
\log_a(b) = \frac{\log_c(b)}{\log_c(a)}. $$

In this instance, we can choose either natural logarithms ($ \ln $) or common logarithms ($ \log_{10} $) as our new base. For this example, let's use natural logarithms:

$$
x = \frac{\ln(32)}{\ln(2)}.
$$

Using a calculator, we find that:

- $ \ln(32) \approx 3.4657 $
- $ \ln(2) \approx 0.6931 $

Substituting these values into our equation gives us:

$$
x \approx \frac{3.4657}{0.6931} \approx 4.9999.
$$

Since $ x $ must be an integer (as it represents an exponent), we round $ 4.9999 $ to the nearest whole number, resulting in $ x = 5 $. Thus, we conclude that the solution to the equation $ 2^x = 32 $ is 

$$
x = 5.
$$
    