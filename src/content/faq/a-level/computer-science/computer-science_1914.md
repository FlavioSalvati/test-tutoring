---
title: "How do you determine the binary equivalent of a decimal fraction?"
summary: "To determine the binary equivalent of a decimal fraction, you multiply the fraction by 2 and record the integer part."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-02-01
---

To convert a decimal fraction to its binary equivalent, you can use a method known as the 'double and record' approach. This method involves multiplying the fraction by $2$ and noting the integer part of the result. Here’s a clearer breakdown of the process:

1. **Start by multiplying the decimal fraction by $2$**. The integer part of the result (which will be either $0$ or $1$) becomes the first digit after the binary point in the binary representation. The remaining fractional part will be used for the next calculation.

2. **Repeat the process**: Take the fractional part obtained from the previous multiplication, multiply it by $2$, and again record the integer part. This integer will be the next digit in the binary equivalent. Continue this procedure until you reach the desired level of precision or until the fractional part becomes zero.

Let’s illustrate this with an example by converting the decimal fraction $0.375$ into binary:

1. First, multiply $0.375$ by $2$:
   $$ 0.375 \times 2 = 0.75 $$
   The integer part is $0$, and the fractional part is $0.75$.

2. Next, multiply $0.75$ by $2$:
   $$ 0.75 \times 2 = 1.5 $$
   The integer part is $1$, and the fractional part is $0.5$.

3. Finally, multiply $0.5$ by $2$:
   $$ 0.5 \times 2 = 1.0 $$
   The integer part is $1$, and the fractional part is $0$.

Putting it all together, the binary equivalent of $0.375$ is $0.011$.

It's crucial to recognize that not all decimal fractions can be accurately represented in binary form. For instance, the decimal fraction $0.1$ cannot be precisely expressed in binary, resulting in an approximate representation.

Lastly, keep in mind that this method is specifically for converting decimal fractions. The conversion of whole numbers follows a different approach, typically involving division by $2$ instead of multiplication.
    