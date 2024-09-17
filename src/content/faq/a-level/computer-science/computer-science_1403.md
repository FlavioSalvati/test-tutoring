---
title: "What is the difference between public and private IP addresses?"
summary: "Public IP addresses are globally unique and accessible over the internet, while private IP addresses are used within local networks and not directly accessible online."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-19
---

Public IP addresses are unique identifiers that are globally accessible over the internet, whereas private IP addresses are designated for use within local networks and are not directly reachable online.

Public IP addresses are allocated by Internet Service Providers (ISPs) and are essential for establishing a connection to the internet. Each public IP address is distinct across the entire web, ensuring that all devices connected to the internet can be accurately identified. This concept is analogous to a home address, which is also unique and allows for the correct delivery of mail. Public IP addresses are utilized by websites, servers, and any device that requires direct accessibility from the internet.

In contrast, private IP addresses are utilized within local networks, such as those found in homes, offices, or businesses. These addresses are not accessible from the internet; instead, they are concealed behind a router or another network device that employs Network Address Translation (NAT). This functionality allows multiple devices to share the same private IP address, as long as they operate on different networks. For instance, the IP address $192.168.1.1$ is a commonly used private IP address and can be implemented in numerous separate networks without conflict.

The primary purpose of private IP addresses is to conserve the limited pool of available public IP addresses. With the surge in the number of devices requiring internet access, the IPv4 addressing system (which still accounts for most public IP addresses) cannot provide a unique address for each device. By utilizing private IP addresses within local networks, only the router (or similar device) requires a public IP address. All other devices on the network operate with private IP addresses, while the router manages traffic and internet connections.

In conclusion, public IP addresses are unique identifiers that facilitate direct internet connectivity for devices, while private IP addresses function within local networks, are not directly accessible from the internet, and can be reused across different networks.
    