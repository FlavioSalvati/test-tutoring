---
title: "How do you convert a decimal number to its binary equivalent?"
summary: "To convert a decimal to binary, divide the number by 2 repeatedly, recording the remainders until the quotient reaches 0."
author: "Prof. Charles Hughes"
degree: "MSc in Economic Policy, University of Nottingham"
tutor_type: "A-Level Economics Tutor"
date: 2024-08-04
---

To convert a decimal number to its binary representation, you can follow a straightforward method that involves repeatedly dividing the number by $2$ and recording the remainder until the quotient reaches $0$.

In detail, this conversion process consists of a series of divisions by $2$, where each remainder corresponds to a binary digit (or bit) in the resulting binary number. This technique is often referred to as the "double dabble" method.

Let's go through an example to illustrate this process. Suppose we want to convert the decimal number $13$ to binary. Here’s how to do it step-by-step:

1. Divide $13$ by $2$. The quotient is $6$ and the remainder is $1$. Thus, the least significant bit (the rightmost bit) of the binary representation is $1$.
2. Take the quotient from the previous division ($6$) and divide it by $2$. The new quotient is $3$ and the remainder is $0$. Therefore, the next bit is $0$.
3. Next, divide the new quotient ($3$) by $2$. The quotient is $1$ and the remainder is $1$. This gives us the next bit, which is $1$.
4. Finally, divide the last quotient ($1$) by $2$. The quotient is $0$ and the remainder is $1$, which represents the most significant bit (the leftmost bit).

Collectively, the remainders give us the binary equivalent of the decimal number $13$, which is $1101$.

It is important to note that the binary digits are generated in reverse order, starting from the least significant bit to the most significant bit. Therefore, once all the bits have been determined, you should reverse the sequence to obtain the correct binary representation.

This method is applicable to any positive integer. For converting decimal fractions, a similar yet slightly more complex process is employed, which involves repeated multiplications by $2$ instead of divisions. In the case of negative integers, we utilize a technique known as "two's complement." This method involves inverting all the bits of the binary representation of the absolute value of the number and then adding $1$.

Understanding binary representation is fundamental in computer science, as all digital data is ultimately represented in binary form, with $0$s and $1$s symbolizing the off and on states in digital circuits.
    