---
title: "How do you use the NOT IN operator in SQL?"
summary: "The NOT IN operator in SQL is used to exclude certain values in a WHERE clause of a query."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-08-23
---

The 'NOT IN' operator in SQL is employed to exclude specific values within the 'WHERE' clause of a query.

The 'NOT IN' operator is a logical operator that enables you to select only those rows that do not match any values in a specified list. It can be utilized in the 'WHERE' clause of 'SELECT', 'UPDATE', or 'DELETE' statements. The syntax for using the 'NOT IN' operator is as follows:

$$
\text{column\_name NOT IN (value1, value2, \ldots, value_n)}
$$

For example, if you have a table named 'Students' with a column 'Grade', and you wish to select all students who are not in grades $10$ or $11$, you would write the query as follows:

$$
\text{SELECT * FROM Students WHERE Grade NOT IN (10, 11);}
$$

This query will return all rows from the 'Students' table where the 'Grade' is neither $10$ nor $11$.

The values within the parentheses following 'NOT IN' can either be a list of values separated by commas or a subquery that yields a list of values. For instance, if you have another table called 'Teachers' and you want to select all students who are not taught by teachers with IDs $1$, $2$, or $3$, you could structure your query like this:

$$
\text{SELECT * FROM Students WHERE TeacherID NOT IN (SELECT TeacherID FROM Teachers WHERE TeacherID IN (1, 2, 3));}
$$

This query will return all rows from the 'Students' table where the 'TeacherID' does not match any of the 'TeacherID's returned by the subquery.

It is important to remember that while the 'NOT IN' operator is a powerful tool in SQL, it should be used judiciously. It can complicate your queries and may lead to performance issues, particularly when used with subqueries. Always test your queries to ensure they yield the expected results and execute efficiently.
    