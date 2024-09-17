---
title: "How does the LIKE operator work in SQL?"
summary: "The LIKE operator in SQL is used to search for a specified pattern in a column."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-08-04
---

The 'LIKE' operator in SQL is a powerful tool used to search for specific patterns within a column.

As a logical operator, 'LIKE' determines whether a character string matches a defined pattern. This pattern can consist of regular characters as well as wildcard characters. The 'LIKE' operator is typically employed in the 'WHERE' clause of 'SELECT', 'UPDATE', and 'DELETE' statements.

There are two primary wildcards that can be used with the 'LIKE' operator:

- The percent sign '$%$': This wildcard represents zero, one, or multiple characters. For instance, the pattern ''a%'' will match any values that begin with the letter 'a'.
- The underscore '$_$': This wildcard represents a single character. For example, the pattern ''a_'' will match values that consist of two characters, with the first character being 'a'.

It's important to note that the 'LIKE' operator is case-sensitive by default. To conduct a case-insensitive search, you can use the 'UPPER' or 'LOWER' function to convert all relevant data to a single case.

Here's an example of how you might use the 'LIKE' operator in a SQL query:

$$
SELECT * FROM Customers
WHERE City LIKE 'london%';
$$

In this SQL statement, all customers whose city begins with 'london' will be selected. The '$%$' wildcard allows for a match with any city name that starts with 'london', regardless of the characters that follow.

It is also important to understand that the 'LIKE' operator is not restricted to matching patterns only at the beginning or the end of a string. You can use it to find matches anywhere within a string. For example, the pattern ''%don%'' will match any city name that contains 'don' at any position.

In summary, the 'LIKE' operator in SQL serves as an effective mechanism for pattern matching within strings. It is used in conjunction with the 'WHERE' clause and can leverage wildcard characters to either broaden or narrow the scope of the search.
    