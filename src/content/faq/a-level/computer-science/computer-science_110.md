---
title: "What are virtual and physical addresses in memory management?"
summary: "Virtual addresses are utilized by the CPU during program execution, whereas physical addresses correspond to the actual locations in hardware memory."
author: "Prof. John Matthews"
degree: "PhD in Economics, London School of Economics"
tutor_type: "A-Level Economics Tutor"
date: 2024-08-06
---

Virtual addresses are utilized by the CPU during the execution of a program, while physical addresses correspond to actual hardware memory locations.

To elaborate, a virtual address is a memory address generated by the CPU when a program is running. This address is relevant within the context of a specific process or task and must be translated into a physical address before any actual memory access occurs. The translation process is performed by the memory management unit (MMU) of the CPU, which employs a technique known as paging. By using virtual addresses, a program can operate as if it has exclusive access to the main memory, even though multiple processes are concurrently running and sharing the available memory. For a more comprehensive understanding of the CPU's role in this translation process, please refer to the relevant literature.

Conversely, a physical address refers to a location in the actual hardware memory, such as RAM. This address is used by the memory controller circuitry located on the motherboard to read from or write to specific memory cells. Typically, physical addresses are not visible to the software executing on the CPU; instead, they are utilized exclusively by the MMU and the memory controller.

The distinction between virtual and physical addresses is a fundamental aspect of modern operating systems and their memory management strategies. This distinction facilitates the implementation of features such as virtual memory, whereby disk storage is leveraged to extend the available memory, and memory protection, which ensures that each process is restricted from accessing the memory of other processes. Moreover, this separation allows for the efficient management of memory through techniques like swapping, enabling processes to be moved in and out of memory as needed. To delve deeper into how operating systems manage these functions, please refer to the appropriate resources.
    