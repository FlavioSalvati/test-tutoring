---
title: "What are the functions of the LEFT JOIN and RIGHT JOIN in SQL?"
summary: "LEFT JOIN returns all records from the left table and matched records from the right table, while RIGHT JOIN does the opposite."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-07-31
---

The 'LEFT JOIN' operation retrieves all records from the left table while returning matched records from the right table. Conversely, the 'RIGHT JOIN' operation does the opposite, fetching all records from the right table along with matched records from the left table.

In SQL, both 'LEFT JOIN' and 'RIGHT JOIN' are methods used to combine rows from two or more tables based on a related column. These operations fall under the broader category of SQL JOINs, which also includes 'INNER JOIN' and 'FULL JOIN'. 

The 'LEFT JOIN' function yields all records from the left table (denoted as table1) and the corresponding matched records from the right table (denoted as table2). If no match exists, the result will show 'NULL' for the right side.

For instance, consider two tables: 'Customers' and 'Orders'. If you want to retrieve a list of all customers along with any orders they may have placed, you would use a 'LEFT JOIN'. This query would return every customer in the 'Customers' table, along with any associated order details. If a customer has not placed any orders, their details would still appear, but the order information would be 'NULL'.

Conversely, the 'RIGHT JOIN' operation retrieves all records from the right table (table2) and the corresponding matched records from the left table (table1). If no match is found, the result will display 'NULL' for the left side.

Using the same example with the 'Customers' and 'Orders' tables, if your goal is to list all orders alongside the customer information for each order, you would utilize a 'RIGHT JOIN'. This would return every order from the 'Orders' table along with any matching customer details. If an order does not have a corresponding customer, the order would still be included in the results, but the customer information would be 'NULL'.

In summary, the decision to use a 'LEFT JOIN' or a 'RIGHT JOIN' is based on which table you want to ensure is fully represented in your results. You should select the 'LEFT JOIN' if you wish all records from the left table and only matched records from the right table. Conversely, choose the 'RIGHT JOIN' if you want all records from the right table and only matched records from the left. Additionally, it's worth noting that not all database systems support 'RIGHT JOIN'. However, you can always achieve the same outcome by reversing the order of the tables and applying a 'LEFT JOIN'.
    