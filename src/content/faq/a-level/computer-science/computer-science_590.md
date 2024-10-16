---
title: "How does the LIKE operator work in SQL?"
summary: "The LIKE operator in SQL is used to search for a specified pattern in a column."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-03-05
---

The 'LIKE' operator in SQL is a powerful tool used to search for a specified pattern within a column.

As a logical operator, 'LIKE' evaluates whether a character string matches a given pattern. This pattern may consist of regular characters along with wildcard characters. You typically use the 'LIKE' operator in the 'WHERE' clause of 'SELECT', 'UPDATE', and 'DELETE' statements.

There are two primary wildcard characters that can be used with the 'LIKE' operator:

- The percent sign '$%$': This wildcard represents zero, one, or multiple characters. For instance, the pattern ''a%'' will match any values that begin with the character ''a''.
- The underscore '$_$': This wildcard signifies a single character. For example, the pattern ''a_'' will find values that consist of two characters, with the first character being ''a''.

It's important to note that the 'LIKE' operator is case-sensitive. If you need to perform a case-insensitive search, you can use the 'UPPER' or 'LOWER' functions to convert the data to a uniform case.

Here is an example of how the 'LIKE' operator can be applied in a SQL query:

$$
\text{SELECT * FROM Customers WHERE City LIKE 'london%';}
$$

This SQL statement retrieves all customers whose city names begin with ''london''. The '$%$' wildcard allows for any subsequent characters to follow after ''london'', thereby matching any customer city that starts with this term.

Additionally, the 'LIKE' operator is not confined to matching patterns solely at the beginning or end of a string. You can also utilize it to find matches within the middle of a string. For example, the pattern ''%don%'' would match any city name that contains the substring ''don'' at any position.

In summary, the 'LIKE' operator in SQL serves as a robust mechanism for pattern matching within strings. It is commonly used in conjunction with the 'WHERE' clause and can leverage wildcard characters to either broaden or narrow the search results effectively.
    