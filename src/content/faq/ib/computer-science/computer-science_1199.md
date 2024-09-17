---
title: "What structure would you use for undo functionality in an application?"
summary: "For undo functionality in an application, you would typically use a data structure known as a stack."
author: "Dr. Noah Taylor"
degree: "PhD in Data Science, University College London"
tutor_type: "IB Computer Science Tutor"
date: 2024-08-07
---

To implement undo functionality in an application, a commonly used data structure is the stack.

A stack is a linear data structure that operates based on a specific order for processing operations. This order can be described as LIFO (Last In, First Out) or FILO (First In, Last Out). The primary operations associated with a stack include:

1. **Push**: This operation adds an element to the top of the stack.
2. **Pop**: This operation removes the element from the top of the stack.
3. **Peek** (or **Top**): This operation retrieves the top element of the stack without removing it.

In the context of undo functionality, every action performed by a user is 'pushed' onto the stack. When a user wants to undo an action, the most recent action is 'popped' from the stack and reversed. The LIFO order is essential here, as it enables quick access to the most recent action, which is the one that needs to be undone.

For instance, consider a text editor application. Each time a user types a character, deletes a character, or performs any other editable action, that action is pushed onto the stack. If the user decides to undo their last action, the application pops that action from the stack and reverses it, effectively undoing the action.

Additionally, stacks can be used to implement redo functionality. When an action is undone, rather than being discarded, it can be pushed onto a second stack. If the user chooses to redo the action, it can be popped from this second stack and reapplied.

In summary, a stack is a straightforward yet powerful data structure that facilitates the implementation of undo and redo functionality in applications. Its LIFO order makes it perfect for storing a sequence of actions in the order they were performed, allowing for quick access to the most recent action when needed.
    