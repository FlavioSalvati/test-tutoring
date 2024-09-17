---
title: "How does a Distributed Denial-of-Service (DDoS) attack work?"
summary: "A Distributed Denial-of-Service (DDoS) attack overwhelms a network, service, or server with traffic to cause disruption or unavailability."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-02-18
---

A Distributed Denial-of-Service (DDoS) attack is a malicious attempt to disrupt the normal operation of a network, service, or server by inundating it with excessive traffic, leading to disruption or unavailability.

In more detail, a DDoS attack involves overwhelming a target with a flood of internet traffic, effectively incapacitating it. These attacks typically utilize multiple computers or devices, which are often infected with malware and controlled by the attacker. This group of compromised devices is referred to as a botnet. By leveraging this network of bots, attackers can generate an enormous volume of traffic aimed at disrupting a specific service.

The main objective of a DDoS attack is not to gain unauthorized access or to steal sensitive information, but rather to cause operational disruption. The targeted service is bombarded with requests that far exceed its capacity, resulting in significant slowdowns or even complete crashes, which deny access to legitimate users.

There are several types of DDoS attacks, categorized primarily into three groups:

1. **Volume-based attacks**: These attacks aim to consume the bandwidth of the targeted site. Examples include ICMP floods and UDP floods.
  
2. **Protocol attacks**: These attacks are designed to exploit weaknesses in network protocols. Notable examples include SYN floods, Ping of Death, and Smurf DDoS attacks, which target server resources or the resources of intermediate devices like firewalls.
  
3. **Application layer attacks**: These attacks target the layer where web pages are generated on the server and delivered in response to HTTP requests. Examples include GET and POST floods.

Defending against DDoS attacks can be challenging due to the difficulty in distinguishing between legitimate traffic and malicious attack traffic. However, several mitigation strategies can be employed, including rate limiting, IP address filtering, and overprovisioning bandwidth to accommodate unexpected traffic spikes.

In summary, a DDoS attack poses a significant threat to online services, capable of causing major disruptions by overwhelming a service with traffic. Understanding the mechanisms behind these attacks is the first step toward developing effective defenses against them.
    