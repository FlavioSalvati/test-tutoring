---
title: "How does the BETWEEN operator function in SQL?"
summary: "The BETWEEN operator in SQL is used to filter results within a specific range in a WHERE clause."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-08
---

The 'BETWEEN' operator in SQL is a powerful tool used to filter results based on a specified range within a 'WHERE' clause.

The 'BETWEEN' operator is a logical operator designed to select values that fall within a defined range. It can be applied to any comparable data type, including numeric, date and time, and even text data types. The values used can be numbers, strings, or dates. The syntax for utilizing the 'BETWEEN' operator is as follows:

$$
\text{column\_name} \text{ BETWEEN value1 AND value2}
$$

In this syntax, 'value1' and 'value2' establish the range, and the 'BETWEEN' operator selects all values that lie within this range, including the endpoints.

For instance, if you have a table named 'students' and you want to find all students whose ages are between $16$ and $18$, you would write the following SQL statement:

$$
\text{SELECT * FROM students WHERE age BETWEEN 16 AND 18}
$$

This query would return all rows from the 'students' table where the age is between $16$ and $18$, inclusive.

It is essential to understand that the boundary values, 'value1' and 'value2', are included in the results. Thus, in the example provided, students who are exactly $16$ or $18$ years old will also be part of the results. If you prefer to exclude these ages, you would need to adjust the range to $17$ to $19$.

Moreover, the 'BETWEEN' operator can also be utilized with text values. In such cases, it selects records with values that are alphabetically situated between the specified range. For example:

$$
\text{SELECT * FROM students WHERE name BETWEEN 'A' AND 'M'}
$$

This query would return all students whose names begin with letters from 'A' to 'M'.

Additionally, the 'BETWEEN' operator can be paired with the 'NOT' operator to filter out records that fall within a specific range. For example:

$$
\text{SELECT * FROM students WHERE age NOT BETWEEN 16 AND 18}
$$

This query would yield all students whose ages are not between $16$ and $18$.

In summary, the 'BETWEEN' operator in SQL is a flexible and versatile tool that enables you to filter results within a defined range, whether that range pertains to numerical values, text, or dates.
    