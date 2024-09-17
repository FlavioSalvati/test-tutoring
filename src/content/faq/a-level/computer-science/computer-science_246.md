---
title: "How do you use the COALESCE function in SQL?"
summary: "The COALESCE function in SQL returns the first non-null value from a list of expressions, making it useful for handling null values in queries."
author: "Prof. Richard Adams"
degree: "PhD in Macroeconomics, University College London"
tutor_type: "A-Level Economics Tutor"
date: 2024-03-03
---

The COALESCE function in SQL is a powerful tool that allows you to return the first non-null value from a list of expressions.

This function is especially beneficial when working with data that may contain null values. As a standard feature in SQL, it is supported by most SQL databases. The COALESCE function evaluates a series of expressions and returns the first non-null value it finds. If all expressions are null, the function will return null.

The syntax for the COALESCE function is:

$$
\text{COALESCE}(expression_1, expression_2, \ldots, expression_n)
$$

The expressions are evaluated in the order they are provided, and the function returns the first non-null value. If every expression evaluates to null, then the function returns null.

To illustrate the use of the COALESCE function, consider a scenario involving a table of customers, each with a primary and secondary phone number. It's possible that some customers may not have a secondary phone number, resulting in a null value for that field. To retrieve a phone number for each customer, you could use the COALESCE function to return the primary phone number if it exists; if the primary phone number is null, it would then return the secondary phone number.

The SQL query for this might look like the following:

$$
\text{SELECT COALESCE(primary\_phone, secondary\_phone) AS phone} 
\text{FROM customers;}
$$

This query will return the primary phone number for each customer when available; if the primary number is null, it will return the secondary number instead. If both numbers are null, the result will be null.

In summary, the COALESCE function is an invaluable tool for addressing null values in SQL. It enables you to specify a sequence of expressions and retrieves the first non-null value found. This functionality is particularly useful when dealing with multiple fields that may contain relevant information, some of which might be null.
    