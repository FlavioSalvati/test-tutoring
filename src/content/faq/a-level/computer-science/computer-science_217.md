---
title: "Explain the function of the ALTER TABLE command in SQL"
summary: "The ALTER TABLE command in SQL allows users to add, delete, or modify columns in an existing table."
author: "Prof. Charles Hughes"
degree: "MSc in Economic Policy, University of Nottingham"
tutor_type: "A-Level Economics Tutor"
date: 2024-06-17
---

The 'ALTER TABLE' command in SQL is an essential tool used to modify the structure of an existing table by adding, deleting (or dropping), and modifying its columns.

As a Data Definition Language (DDL) operation, the 'ALTER TABLE' command provides a versatile way to change various aspects of a table's structure. This includes not only the names and data types of columns but also the addition and removal of constraints.

### Adding a New Column

To add a new column to a table, the 'ALTER TABLE' command is followed by the 'ADD COLUMN' clause. The syntax is as follows:

$$
\text{ALTER TABLE table\_name ADD COLUMN column\_name column\_type;}
$$

For instance, if you have a table named 'Students' and you wish to add a new column titled 'Email', the command would be:

$$
\text{ALTER TABLE Students ADD COLUMN Email VARCHAR(255);}
$$

### Deleting a Column

To remove a column from a table, use the 'DROP COLUMN' clause. The syntax is:

$$
\text{ALTER TABLE table\_name DROP COLUMN column\_name;}
$$

For example, to delete the 'Email' column from the 'Students' table, the command would be:

$$
\text{ALTER TABLE Students DROP COLUMN Email;}
$$

### Modifying a Column's Data Type

If you need to change the data type of an existing column, you can use the 'ALTER COLUMN' clause. The syntax is:

$$
\text{ALTER TABLE table\_name ALTER COLUMN column\_name column\_type;}
$$

For example, to alter the data type of the 'Email' column in the 'Students' table to 'TEXT', you would use the following command:

$$
\text{ALTER TABLE Students ALTER COLUMN Email TEXT;}
$$

### Adding and Dropping Constraints

The 'ALTER TABLE' command can also be utilized to manage constraints on a table. For instance, you can add a 'PRIMARY KEY' constraint using the 'ADD CONSTRAINT' clause, or remove it with the 'DROP CONSTRAINT' clause.

### Conclusion

In summary, the 'ALTER TABLE' command in SQL is a powerful and flexible tool that enables you to adapt your database schema as your data requirements evolve. Mastering this command is crucial for any SQL developer, as it plays a vital role in the management of database structures.
    