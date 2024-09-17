---
title: "How does the DISTINCT keyword work in SQL?"
summary: "The DISTINCT keyword in SQL is used to return unique values in the output, eliminating all the duplicate records."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-03
---

The 'DISTINCT' keyword in SQL is a powerful tool used to return unique values in your query results, effectively removing any duplicate records.

When working with databases, it is common to encounter tables that contain duplicate rows, particularly in large datasets. The 'DISTINCT' keyword addresses this issue by filtering out duplicate rows, ensuring that only unique records are returned.

When you apply the 'DISTINCT' keyword, SQL examines each row in the specified columns of the table and discards any duplicates, retaining only the first unique instance of each record. It's essential to recognize that 'DISTINCT' operates on the combination of values in the columns listed in the 'SELECT' clause. If multiple columns are selected, 'DISTINCT' will evaluate the uniqueness based on the combination of values across those columns.

For instance, if you have a table named 'customers' and you wish to identify the different cities where your customers reside, you can use the 'DISTINCT' keyword in your query. An example SQL statement would be:

$$
\text{SELECT DISTINCT city FROM customers;}
$$

This query would return a list of unique cities, with each city appearing only once, regardless of how many customers live in each location.

On the other hand, if you select two columns, such as 'city' and 'country', using the 'DISTINCT' keyword like this:

$$
\text{SELECT DISTINCT city, country FROM customers;}
$$

the query will yield unique combinations of city and country. Therefore, if you have customers from London, UK, and London, Canada, both entries will be included in the result set, as they represent distinct combinations.

In summary, the 'DISTINCT' keyword in SQL is an invaluable tool for filtering out duplicate records from your query results. It functions by comparing the values in the specified columns and removing any duplicates, thereby leaving only unique records in the output.
    