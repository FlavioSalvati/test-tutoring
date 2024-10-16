---
title: "How do you use the CASE statement in SQL?"
summary: "The CASE statement in SQL is used to perform conditions in a query, similar to if-else statements in other programming languages."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-08-07
---

The CASE statement in SQL serves as a means to implement conditional logic within a query, akin to if-else statements found in other programming languages.

Essentially, the CASE statement provides a framework for establishing if-then-else logic within SQL commands. It is a versatile tool that enables the manipulation and return of different data based on specified conditions. You can utilize it in any SQL statement or clause that permits a valid expression, such as SELECT, UPDATE, DELETE, or SET.

The basic syntax of a CASE statement is structured as follows:

$$
CASE
  WHEN \text{condition1} \text{ THEN result1}
  WHEN \text{condition2} \text{ THEN result2}
  \ldots
  ELSE \text{result}
END;
$$

In this structure, each condition is evaluated sequentially. If 'condition1' evaluates to true, then 'result1' is returned. If 'condition1' is false, the system moves on to evaluate 'condition2'. If 'condition2' is true, 'result2' is returned, and this process continues until a true condition is found, or all conditions have been evaluated. If none of the conditions are true and an ELSE clause is provided, the result after ELSE is returned. If no ELSE clause is included and all conditions evaluate to false, then NULL is returned.

Here’s an example of a CASE statement used within a SELECT query:

$$
SELECT \text{OrderID}, \text{Quantity},
CASE
  WHEN \text{Quantity} > 30 \text{ THEN 'The quantity is greater than 30'}
  WHEN \text{Quantity} = 30 \text{ THEN 'The quantity is 30'}
  ELSE 'The quantity is under 30'
END \text{ AS QuantityText}
FROM \text{OrderDetails};
$$

In this example, the CASE statement generates a new column in the result set named 'QuantityText'. This column provides a textual description of the quantity for each row. If the quantity exceeds $30$, the statement returns 'The quantity is greater than 30'. If the quantity is exactly $30$, it returns 'The quantity is 30'. For all other quantities, it returns 'The quantity is under 30'.

It's important to note that the CASE statement is highly flexible and can be employed in various ways to assist you in manipulating and returning data based on specific criteria.
    