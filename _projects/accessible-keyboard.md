---
title: "Accessible Keyboard and Mouse Interface"
category: education
order: 2
featured: true
thumbnail: /assets/images/projects/accessiblethumbnail.JPEG
tools:
  - Patterning
  - Hand Sewing, Sewing Machine
  - Soldering 
created_for:
  - "24370 Mechanical Design: Methods and Applications"
  - Accessibility Design Challenge

carousel: false
video: https://www.youtube.com/embed/nJYrNuapt4Y
video_vertical: true

date: 2025-12-01
---
For this project, my group designed an alternative keyboard and mouse system comprised of a gesture-detecting glove and customizable joystick for under $200.
This system is designed for users with severe fine motor control and speech impairment. It enables users to independently interact with a computer exclusively using large motions comfortable to them.

Although I worked on all subsystems of the project, my primary role revolved around the wearable glove and creating soft sensors. 
The wearable glove serves some primary
keyboard functions and as mouse buttons. It
senses orientation of the palm, bend of the wrist,
and bend of the fingers, and can be calibrated to a
specific user.
<img src="{{ '/assets/images/projects/glove.JPG' | relative_url }}" alt="Glove">

I selected materials and adapted an approach described by the open-source collective KOBAKANT (https://www.kobakant.at/DIY/?p=20). Creating 
working sensors required an iterative approach and experimentation, since the materials we used had different qualities and resistiveness. 
I patterned and constructed a glove to fit a range of adult hand sizes, then interfaced the electronic components and with the glove. When integrating the bend
sensors with the gloves, we found that the placement of sensors on the back of the hand resulted in more inconsistent sensing between users of different hand sizes.
As a test, we tried wearing the right sided glove on the left hand, flipping the bend sensors to the palm side of the hand. This allowed for more accurate and 
consistent sensing. Combining a stretchy spandex base, with a stretch/bend sensitive sensor, and rigid electronics was challenging, but rewarding to achieve.

<img src="{{ '/assets/images/projects/sensor.jpg' | relative_url }}" alt="Bend sensor">

The joystick is one of two modular components of the system. It has easily
swapable hand or foot controlled attachments. Its use is to act primarily as a mouse for cursor and scroll control.

<img src="{{ '/assets/images/projects/joystick.JPG' | relative_url }}" alt="Joystick">

The controls were designed to be accessible for a wide variety of individuals, but can be re-assigned for
specific user needs. Sensitivities can also be adjusted, and so can intent-based features such as cursor
velocity versus joystick position, as well as noise and stray-hand-movement filtering.

<img src="{{ '/assets/images/projects/commands.JPG' | relative_url }}" alt="Accessible Keyboard Commands">

For our demo, we created a series of actions to demonstrate the capabilities of the system. 
1. Launch Chrome
2. Launch Accessibility Keyboard
3. Search “Snake Game”
4. Click on Wikipedia Page and Scroll
5. Close Wikipedia, and Play Snake
6. Open a Solidworks Part
7. Click, Drag, and Rotate Solidworks Part

We were able to achieve our demo, and found that mouse navigation and clicking was smooth and easy to use. This project was also
extremely cost effective compared to existing accessibility or wearable products. 

If we were to iterate on this project, we would improve typing efficiency, target customizeability (more joystick caps, wearable locations, and joystick force feedback via motors)
and accessibility (joystick and wearable require initial assistance from another person to be set up). 
