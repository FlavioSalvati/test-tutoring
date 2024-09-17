---
title: "How do domain names relate to IP addresses?"
summary: "Domain names are human-friendly identifiers that correspond to numerical IP addresses used by computers."
author: "Dr. Noah Taylor"
degree: "PhD in Data Science, University College London"
tutor_type: "IB Computer Science Tutor"
date: 2024-02-15
---

Domain names serve as human-readable identifiers that correspond to numerical IP addresses utilized by computers.

In the realm of the internet, each device connected to the network is assigned a unique Internet Protocol (IP) address. This IP address, represented as a series of numbers separated by periods (for IPv4) or colons (for IPv6), is essential for identifying and locating devices on the network. However, recalling and inputting these numerical addresses can be quite difficult for humans. This is where domain names become invaluable.

Domain names provide a more user-friendly alternative to IP addresses. They are significantly easier to remember and type compared to a string of numbers. For instance, it's much simpler to recall 'www.google.com' than the numerical address '172.217.14.238'. When you enter a domain name into your web browser, a process known as DNS (Domain Name System) lookup is initiated. Think of DNS as the internet's phonebook, translating human-friendly domain names into machine-readable IP addresses.

The DNS lookup process comprises several steps. First, your computer checks its local DNS cache, which retains information about websites you've recently visited. If the IP address associated with the requested domain name is not found in this local cache, the request is forwarded to your Internet Service Provider's (ISP) DNS server. If the ISP's DNS server also lacks the necessary information, the request is escalated to the root DNS servers. While these root servers do not possess the IP address, they can direct the request to the Top-Level Domain (TLD) servers, which maintain records for domains under specific extensions such as .com, .org, .net, and others. The TLD servers then forward the request to the authoritative DNS servers, which ultimately provide the corresponding IP address to your computer. Once your computer obtains the IP address, it can establish a connection with the server hosting the website and retrieve the web page.

In summary, domain names and IP addresses are two sides of the same coin. Both serve to identify and locate devices on the internet; however, IP addresses are tailored for machines, whereas domain names are designed for human users. The translation between these two systems is facilitated by the Domain Name System, which ensures that the internet remains user-friendly while maintaining efficient navigation for computers.
    