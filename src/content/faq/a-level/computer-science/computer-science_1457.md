---
title: "How does the DISTINCT keyword work in SQL?"
summary: "The DISTINCT keyword in SQL is used to return unique values in the output, eliminating all the duplicate records."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-03-19
---

The 'DISTINCT' keyword in SQL is a powerful tool used to retrieve unique values from a query result, effectively removing any duplicate records.

When working with databases, especially large datasets, you may frequently encounter tables that contain duplicate rows. The 'DISTINCT' keyword addresses this issue by ensuring that only unique records are returned, eliminating any repetitions.

When you employ the 'DISTINCT' keyword, SQL evaluates each row in the specified columns of the table and removes duplicates, retaining only the first occurrence of each unique record. It is important to understand that the 'DISTINCT' keyword applies to the combination of values across the columns listed in the 'SELECT' clause. If you select multiple columns, the uniqueness is determined by the entire combination of values in those columns.

For instance, if you have a table of customers and wish to find the different cities they come from, you could use the 'DISTINCT' keyword as follows: 

$$
\text{SELECT DISTINCT city FROM customers;}
$$

This query would return a list of cities with each city appearing only once, regardless of how many customers reside in each city.

Conversely, if you select two columns, such as 'city' and 'country', using the 'DISTINCT' keyword like this:

$$
\text{SELECT DISTINCT city, country FROM customers;}
$$

the query will return unique combinations of 'city' and 'country'. For example, if you have customers from London, UK, and London, Canada, both combinations will appear in the result set because they are considered distinct.

In conclusion, the 'DISTINCT' keyword in SQL is an invaluable asset for filtering out duplicate records in your query results. It achieves this by comparing the values in the specified columns and omitting duplicates, thereby providing a clean set of unique records in the output.
    