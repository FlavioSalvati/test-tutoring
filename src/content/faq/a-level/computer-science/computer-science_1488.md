---
title: "How do you use the NOT IN operator in SQL?"
summary: "The NOT IN operator in SQL is used to exclude certain values in a WHERE clause of a query."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-04-13
---

The 'NOT IN' operator in SQL is utilized to exclude specific values from the results in the 'WHERE' clause of a query.

This logical operator enables you to select rows that do not match any values in a given list. It can be used in the 'WHERE' clause of 'SELECT', 'UPDATE', or 'DELETE' statements. The syntax for employing the 'NOT IN' operator is as follows:

$$
\text{column\_name NOT IN (value1, value2, \ldots, value\_n)}
$$

For example, consider a table named 'Students' that includes a column called 'Grade'. If you want to retrieve all students who are not in Grade $10$ or $11$, you would write the query like this:

$$
\text{SELECT * FROM Students WHERE Grade NOT IN (10, 11);}
$$

This query will return all rows from the 'Students' table where the 'Grade' is neither $10$ nor $11$.

The values within the parentheses following 'NOT IN' may consist of a comma-separated list of values or a subquery that generates a list of values. For instance, if you have another table named 'Teachers' and you want to select all students who are not taught by teachers with IDs $1$, $2$, or $3$, the query would be structured as follows:

$$
\text{SELECT * FROM Students WHERE TeacherID NOT IN (SELECT TeacherID FROM Teachers WHERE TeacherID IN (1, 2, 3));}
$$

This query retrieves all rows from the 'Students' table where the 'TeacherID' is not included in the list of 'TeacherID's produced by the subquery.

It is important to note that while the 'NOT IN' operator is a powerful feature in SQL, it should be used judiciously. Its usage can complicate your queries and potentially degrade performance, particularly when combined with subqueries. Always test your queries to confirm they yield the expected results and maintain optimal performance.
    