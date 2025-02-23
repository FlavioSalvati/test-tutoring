---
title: "How does the BETWEEN operator function in SQL?"
summary: "The BETWEEN operator in SQL filters results within a specified range in a WHERE clause, allowing for effective data selection based on defined boundaries."
author: "Dr. Laura Benson"
degree: "PhD in Behavioral Economics, University of Leeds"
tutor_type: "A-Level Economics Tutor"
date: 2024-07-24
---

The 'BETWEEN' operator in SQL serves as a powerful tool for filtering results based on a specific range within a 'WHERE' clause.

The 'BETWEEN' operator is a logical operator that selects values falling within a defined range. It is compatible with any comparable data type, including numeric, date and time, as well as text data types. The values can be numbers, text strings, or dates. The syntax for employing the 'BETWEEN' operator is as follows:

$$
\text{column\_name BETWEEN value1 AND value2}
$$

In this syntax, '$value1$' and '$value2$' establish the boundaries of the range, and the 'BETWEEN' operator retrieves all values that lie within this range, including the endpoints.

For example, consider a table of students. If you want to find all students whose ages are between $16$ and $18$, you would use the 'BETWEEN' operator in the 'WHERE' clause of your SQL statement like this:

$$
\text{SELECT * FROM students WHERE age BETWEEN 16 AND 18}
$$

This query would return all rows from the 'students' table where the age is between $16$ and $18$, inclusive of both ages. 

It is crucial to understand that the boundary values defined by '$value1$' and '$value2$' are included in the results. Thus, in the example provided, students who are exactly $16$ or $18$ years old would also be part of the results. If you wish to exclude these ages, you would need to adjust the range to $17$ to $19$.

The 'BETWEEN' operator can also be applied to text values, which enables it to select records with values that fall alphabetically between the specified range. For instance, the following query:

$$
\text{SELECT * FROM students WHERE name BETWEEN 'A' AND 'M'}
$$

would return all students whose names begin with a letter from 'A' to 'M'.

Furthermore, the 'BETWEEN' operator can be combined with the 'NOT' operator to filter out records that do not fall within a specific range. For example, the query:

$$
\text{SELECT * FROM students WHERE age NOT BETWEEN 16 AND 18}
$$

would yield all students whose ages do not fall between $16$ and $18$.

In summary, the 'BETWEEN' operator in SQL is a versatile mechanism that allows you to filter results within a specified range, whether that range is based on numbers, text, or dates.
    