---
title: "How do you use the IN operator in an SQL query?"
summary: "The IN operator in SQL is used to compare a value with a list of values in a WHERE clause."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-05-04
---

The 'IN' operator in SQL is a logical operator that allows you to compare a value against a list of potential values within a 'WHERE' clause. This operator serves as a shorthand for multiple 'OR' conditions, effectively filtering query results based on whether a specified column's value matches any value in the provided list.

For instance, consider a table named 'Students'. If you want to retrieve all students who are studying either 'Maths', 'Physics', or 'Chemistry', you can utilize the 'IN' operator in your SQL query as follows:

'''sql
SELECT * FROM Students
WHERE Subject IN ('Maths', 'Physics', 'Chemistry');
'''

In this query, the 'IN' operator filters the results in the 'WHERE' clause. Consequently, the query will return all rows from the 'Students' table where the 'Subject' is either 'Maths', 'Physics', or 'Chemistry'.

Additionally, the 'IN' operator can be used in conjunction with subqueries. A subquery is a query nested within another query. For example, if you wish to find all students enrolled in subjects categorized as 'Science', you could implement a subquery with the 'IN' operator as follows:

'''sql
SELECT * FROM Students
WHERE Subject IN (SELECT Subject FROM Subjects WHERE Category = 'Science');
'''

In this example, the subquery '(SELECT Subject FROM Subjects WHERE Category = 'Science')' generates a list of subjects that fall under the 'Science' category. Subsequently, the main query retrieves all rows from the 'Students' table where the 'Subject' appears in this list of 'Science' subjects.

The 'IN' operator is a powerful feature in SQL that can enhance the conciseness and readability of your queries. It is particularly advantageous when you need to filter results based on a predefined list of values or when you wish to incorporate results from a subquery in your 'WHERE' clause.
    