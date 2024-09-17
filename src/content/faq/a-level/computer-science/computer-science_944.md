---
title: "Explain the function of the ALTER TABLE command in SQL"
summary: "The ALTER TABLE command in SQL is used to add, delete/drop or modify columns in an existing table."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-01-30
---

The 'ALTER TABLE' command in SQL is a crucial tool for modifying the structure of existing tables. It falls under the category of Data Definition Language (DDL) operations and is primarily used to add, delete (or drop), or modify columns within a table. Additionally, it allows you to add or drop various constraints applied to a table, making it a powerful and versatile command.

### Adding a New Column

To add a new column to an existing table, you utilize the 'ADD COLUMN' clause. The syntax for this operation is as follows:

$$
\text{ALTER TABLE table\_name ADD COLUMN column\_name column\_type;}
$$

For instance, if you have a table named 'Students' and you wish to add a new column called 'Email', the command would be:

$$
\text{ALTER TABLE Students ADD COLUMN Email VARCHAR(255);}
$$

### Deleting a Column

If you need to remove a column from a table, you can do so using the 'DROP COLUMN' clause. The syntax is as follows:

$$
\text{ALTER TABLE table\_name DROP COLUMN column\_name;}
$$

For example, to delete the 'Email' column from the 'Students' table, you would execute:

$$
\text{ALTER TABLE Students DROP COLUMN Email;}
$$

### Modifying a Column's Data Type

To change the data type of an existing column, you should use the 'ALTER COLUMN' clause. The syntax for this operation is:

$$
\text{ALTER TABLE table\_name ALTER COLUMN column\_name column\_type;}
$$

As an example, if you want to change the data type of the 'Email' column in the 'Students' table to 'TEXT', you would write:

$$
\text{ALTER TABLE Students ALTER COLUMN Email TEXT;}
$$

### Adding and Dropping Constraints

The 'ALTER TABLE' command is also employed to manage constraints on a table. You can add constraints, such as a 'PRIMARY KEY', using the 'ADD CONSTRAINT' clause, or remove them using the 'DROP CONSTRAINT' clause.

### Conclusion

In summary, the 'ALTER TABLE' command in SQL is an essential tool for any SQL developer. It empowers you to adapt your database structure as your data requirements evolve. Mastery of this command is vital for effective database management and design.
    