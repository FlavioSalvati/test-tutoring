---
title: "Since one satellite can see half of the earth, why do we need more than two satellites in a given network?"
summary: "Though a satellite can see a large portion of Earth, its field of view is limited by perspective. To cover the entire globe, a network needs multiple satellites due to limited coverage and the requirement for overlapping views, particularly for applications like GPS which use trilateration for accurate location finding."
author: "Dr. Thomas Walker"
degree: "PhD in Astrophysics, University of Cambridge"
tutor_type: "IB Physics Tutor"
date: 2024-05-06
---

## Understanding the Need for Multiple Satellites in a Network

The question of why more than two satellites are necessary in a given network, despite the fact that a single satellite can see a substantial portion of the Earth, hinges on several geometric and practical considerations. 

### The Geometric Perspective of Satellite Visibility

A satellite in orbit around Earth cannot see exactly half of the planet's surface due to the effects of perspective. When we observe a sphere (like Earth), our line of sight is tangential to the sphere, meaning that we can only view the area in front of where our line of sight meets the surface. This point of tangency defines what is known as the horizon. 

To explain this further, let's denote the radius of the sphere as $R$ and the distance of the observer from the sphere's surface as $d$. The relationship between the observable surface area $A$ and these parameters can be mathematically expressed. As $d$ increases significantly compared to $R$, the percentage of the sphere's surface that becomes visible approaches $50\%$. However, reaching this exact value would require the observer to be infinitely far away, a scenario that is not feasible in practical applications.

#### Example Calculation

For practical understanding, consider the following:
- The Earth's radius $R \approx 6370$ km.
- An observer on the surface of the Earth, standing at an elevation of approximately $0.002$ km (or 6 feet), can see about $0.000016\%$ of the Earth's surface. This translates to roughly $82$ square kilometers ($32$ square miles), corresponding to a visibility circle with a radius of approximately $5$ km ($3$ miles).

### The Limitations of a Single Satellite

Now, let's evaluate the visibility of satellites operating at greater altitudes. For instance, GPS satellites orbit at approximately $20,000$ km. Using the same geometric principles, we find that each GPS satellite can only "see" about $38\%$ of the Earth's surface at any one time. 

To provide full global coverage, we must consider the following:
- A minimum of $3$ GPS satellites would be necessary to collectively cover the entire globe.
- However, due to the irregularities of the Earth's surface (mountains, valleys) and the atmospheric effects that can bend light, a more realistic number would be $4$ satellites to ensure complete coverage.

### The Role of Multiple Satellites in GPS Networks

The functionality of GPS satellites extends beyond just providing visibility of the Earth's surface; they aid in determining a user's location through a process known as trilateration. For accurate location determination, the following is necessary:
- At least $8$ satellites must be in view to ensure precise calculation of a ground receiver's position.

Given the limited field of view for each satellite, and the need for overlapping coverage to increase reliability and accuracy, the GPS network currently comprises $32$ satellites. This redundancy is crucial for maintaining the integrity of global positioning systems, especially when some satellites may be blocked by geographical features or atmospheric conditions.

### Conclusion

In summary, while a single satellite can capture a significant portion of the Earth's surface, the geometric constraints, the need for overlapping coverage, and the requirements for accurate positioning necessitate the deployment of multiple satellites in a network. The complexities of our planet's geography and the limitations of satellite visibility make a robust network essential for reliable global navigation and communication.
    