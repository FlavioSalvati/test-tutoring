---
title: "How does a network bridge function?"
summary: "A network bridge links multiple segments, enabling them to communicate seamlessly as a unified network."
author: "Dr. Sarah Collins"
degree: "MSc in Finance and Economics, University of Edinburgh"
tutor_type: "A-Level Economics Tutor"
date: 2024-06-26
---

A network bridge is a device that connects multiple network segments, enabling them to communicate as if they were a single cohesive network.

Also referred to as a bridging hub, switch, or switching hub, a network bridge operates at the data link layer (Layer 2) of the OSI model. Its primary function is to receive incoming network traffic and determine whether to forward or discard each frame based on the device's MAC address. This decision-making process is known as frame forwarding.

The bridge maintains a forwarding table, which serves as a database of MAC addresses and their corresponding network segments. When a frame arrives, the bridge checks the destination MAC address against its forwarding table. If the address is found in the table, the bridge forwards the frame to the appropriate network segment. Conversely, if the address is not listed, the bridge floods the frame to all segments except the one from which it originated.

Additionally, bridges possess a learning capability. When a frame is received, the bridge logs the MAC address of the sending device along with the segment it came from. If this information is not already present in the forwarding table, the bridge adds it. This allows the bridge to gradually build a comprehensive understanding of which devices are located on which segments, thereby enhancing its forwarding decisions over time.

To further enhance network efficiency, bridges can implement the Spanning Tree Protocol (STP) to prevent loops within the network. Network loops can lead to broadcast storms, where a single frame is continuously circulated around the network, consuming bandwidth and potentially causing a network failure. STP enables bridges to identify and block certain paths, effectively preventing these loops from occurring.

In summary, a network bridge is an essential component in networking that connects multiple segments, facilitating communication as if they were part of a single network. It accomplishes this by forwarding frames based on their destination MAC addresses, learning the locations of devices over time, and utilizing STP to mitigate the risk of network loops.
    