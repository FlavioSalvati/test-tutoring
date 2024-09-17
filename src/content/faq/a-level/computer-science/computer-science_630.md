---
title: "How do you determine the binary equivalent of a decimal fraction?"
summary: "To determine the binary equivalent of a decimal fraction, you multiply the fraction by 2 and record the integer part."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-04-28
---

To convert a decimal fraction into its binary equivalent, you can use a method known as the 'double and record' technique. This involves multiplying the fraction by $2$ and recording the integer part of the result. Here’s a step-by-step explanation of the process:

1. **Initial Multiplication**: Begin by multiplying the decimal fraction by $2$. The integer part of this product (which will be either $0$ or $1$) represents the first digit (to the right of the binary point) of the binary equivalent. The remaining fractional part will be used for the next step.

2. **Repeating the Process**: Continue this process by taking the fractional part obtained from the previous multiplication, multiplying it by $2$, and again recording the integer part. This integer becomes the next digit of the binary equivalent. 

3. **Termination Criteria**: Repeat these steps until you reach the desired level of precision or until the fractional part becomes zero.

### Example: Converting the Decimal Fraction $0.375$ to Binary

Let's convert the decimal fraction $0.375$ into binary step by step:

1. **First Step**: Multiply $0.375$ by $2$:
   $$0.375 \times 2 = 0.75$$
   The integer part is $0$, and the fractional part is $0.75$.

2. **Second Step**: Now take the fractional part $0.75$ and multiply by $2$:
   $$0.75 \times 2 = 1.5$$
   The integer part is $1$, and the fractional part is $0.5$.

3. **Third Step**: Next, take $0.5$ and multiply it by $2$:
   $$0.5 \times 2 = 1.0$$
   The integer part is $1$, and the fractional part is $0$.

At this point, since the fractional part is $0$, we can stop. The binary equivalent of $0.375$ is thus represented as $0.011$.

### Important Considerations

It is essential to understand that not all decimal fractions can be represented precisely in binary form. For instance, the decimal fraction $0.1$ cannot be expressed exactly in binary; therefore, its binary equivalent will be an approximation.

Additionally, keep in mind that this method is specifically designed for converting decimal fractions. The conversion process for whole numbers is different and involves division by $2$, rather than multiplication.
    