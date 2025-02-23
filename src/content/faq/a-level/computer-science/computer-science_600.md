---
title: "How does the REPLACE function work in SQL?"
summary: "The REPLACE function in SQL is used to replace all occurrences of a specified string value with another value."
author: "Dr. Isabella Harris"
degree: "PhD in Computational Theory, University of Sheffield"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-04-05
---

The 'REPLACE' function in SQL is a powerful utility that allows you to substitute all instances of a specified substring within a string with another substring.

### Syntax of the REPLACE Function

The syntax for the 'REPLACE' function is as follows:

$$
\text{REPLACE}(\text{string\_expression}, \text{string\_pattern}, \text{string\_replacement})
$$

- **'string_expression'**: This is the original string in which you want to perform the replacements.
- **'string_pattern'**: This refers to the substring that you wish to replace.
- **'string_replacement'**: This is the substring that will replace every occurrence of 'string_pattern'.

### Example Usage

For instance, consider a table named 'Students' with a column called 'Name'. If you want to replace all occurrences of the substring 'John' with 'Jon', you would execute the following SQL statement:

$$
\text{UPDATE Students SET Name = REPLACE(Name, 'John', 'Jon')}
$$

After running this command, every instance of 'John' in the 'Name' column will be replaced with 'Jon'.

### Case Sensitivity

It is crucial to understand that the 'REPLACE' function is case-sensitive. This means that it distinguishes between 'John' and 'john' as different strings. To perform a case-insensitive replacement, you must convert both the original string and the substring to be replaced to the same case, using either the 'UPPER' or 'LOWER' function.

### Return Value

The 'REPLACE' function does not modify the original string. Instead, it generates a new string reflecting the specified replacements. Therefore, if you wish to retain the results of the replacement, you need to either store them in a variable or update the relevant column in your table.

### Conclusion

In summary, the 'REPLACE' function in SQL is an effective tool for replacing all occurrences of a designated substring with another value. Remember that it is case-sensitive and that it returns a new string rather than modifying the original.
    