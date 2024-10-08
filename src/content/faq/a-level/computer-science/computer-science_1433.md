---
title: "What's the difference between explicit and implicit type conversion in programming?"
summary: "Explicit type conversion in programming is done manually by the programmer, while implicit conversion is handled automatically by the compiler."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-05-21
---

In programming, type conversion refers to changing a value's data type. There are two main types of type conversion: explicit and implicit. 

Explicit type conversion, often referred to as type casting, occurs when the programmer manually specifies the change of a value's data type. This is typically accomplished using specific functions or operators provided by the programming language. For instance, in Python, you can convert an integer to a string by using the 'str()' function, as shown below:

$$
\text{str}(123) \rightarrow '123'
$$

Here, the result ''123'' is the string representation of the integer $123$. Explicit type conversion is particularly useful when you need to ensure that a value is of a specific type, especially when performing operations that require certain data types.

In contrast, implicit type conversion, also known as type coercion, occurs automatically without the programmer's intervention. This typically happens during operations involving values of different types. The compiler or interpreter will convert one or both of the values to a common type that can accommodate the operation. For example, if you add a float and an integer in Python, like this:

$$
1.5 + 2
$$

the integer $2$ will be implicitly converted to a float, resulting in $3.5$. While implicit type conversion can simplify code writing, it may also lead to unexpected results if the programmer is not aware of the automatic conversions taking place.

In summary, explicit type conversion (type casting) requires the programmer to manually change a value's data type using defined language tools, such as converting an integer to a string with 'str()' in Python. Conversely, implicit conversion (type coercion) occurs automatically, such as when different types are mixed in operations, and the compiler adjusts them to work together. Explicit conversion requires your action, while implicit conversion takes place without much user involvement.
    