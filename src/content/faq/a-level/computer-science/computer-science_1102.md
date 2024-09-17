---
title: "How do you convert a decimal number to its binary equivalent?"
summary: "To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainder until the quotient is 0."
author: "Dr. Ava Johnson"
degree: "PhD in Software Development, University of Nottingham"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-07-23
---

To convert a decimal number to binary, you can employ a method that involves repeatedly dividing the number by $2$ and recording the remainder until the quotient reaches $0$.

In detail, the conversion process consists of a sequence of divisions by $2$, where each remainder becomes a binary digit (or bit) in the resulting binary representation. This technique is sometimes referred to as "double dabble."

Let’s illustrate this with an example: converting the decimal number $13$ to binary. Here’s how the process unfolds:

1. Divide $13$ by $2$. The quotient is $6$ and the remainder is $1$. Hence, the least significant bit (the rightmost bit) of the binary equivalent is $1$.
2. Next, take the quotient from the previous division ($6$) and divide it by $2$. The new quotient is $3$ and the remainder is $0$. Therefore, the next bit is $0$.
3. Continuing with the new quotient ($3$), divide again by $2$. The quotient now is $1$ and the remainder is $1$. So, the subsequent bit is $1$.
4. Finally, divide the last quotient ($1$) by $2$. The quotient is $0$ and the remainder is $1$. This means the most significant bit (the leftmost bit) is $1$.

Consequently, the binary equivalent of the decimal number $13$ is $1101$.

It is crucial to recognize that the binary digits are obtained in reverse order, starting from the least significant bit to the most significant bit. Therefore, once all bits are recorded, you should reverse the order to obtain the correct binary representation.

This method is applicable to any positive integer. For decimal fractions, a different but somewhat more complex process is used, which involves repeated multiplications by $2$ instead of divisions. When dealing with negative integers, the "two's complement" method is employed. This involves inverting all the bits of the binary representation of the absolute value of the number and then adding $1$ to the result.

Understanding binary is fundamental in computer science because all digital data is ultimately represented in binary form, where $0$s and $1$s correspond to the off and on states in digital circuits.
    