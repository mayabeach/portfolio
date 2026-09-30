---
title: "5 Person Mario Kart Controller"
category: education
order: 2
featured: true
thumbnail: /assets/images/projects/hihs.png
tools:
  - Electronics Packaging
  - Soldering 
  - Designing for Exam Setting
created_for:
  - "88230 Human Intelligence and Human Stupidity"
  - TA Developing Exam Tasks
  
carousel: false

date: 2025-12-01
---
Human Intelligence and Human Stupidity is a popular Social Decision Science course that explores the history of intelligence studies, intelligence testing, 
human vs artificial intelligence, and strategies for group intelligence. The final exam tests groups on their ability to apply group intelligence 
strategies through novel, creative tasks that target certain styles of intelligence. 

One of our "show stopper" tasks was Mario Kart, but with a controller split such that 4-6 people could play at once. As the engineering student in a 
group of humanities TAs, the responsibility of creating this task fell on me. I had done simple Arduino projects in class, but had never soldered, interacted
with firmware, or had any idea how this could work. 

Despite the logistics being unfamiliar, it was clear that the time constraint was the biggest challenge. 
I had a little less than 4 weeks to build this system twice. There are ~16 groups of students and two sets of exams that are taken simultaneously,
so a duplicate of each task must be built. I needed to design a system that was reliable, simple to build, and could be repaired on the fly if 
something happened in the middle of an exam.  

I went on a deep dive searching for a firmware or tutorials on 1) how to make a custom controller 2) how to connect a Nintendo Switch to said custom
controller. I stumbled across a great open source firmware, <a href="https://https://gp2040-ce.info/">GP2040-CE</a>, designed for enthusiasts to 
create their own controllers off of a Raspberry Pi Pico for a wide variety of gaming platforms. I dove into the documentation, messed with the wiring guide, and 
asked many questions in the community forum. 

<img src="{{ '/assets/images/projects/hihspins.jpg' | relative_url }}" alt="Laser cut process photo">


Hardware was on the simpler side, and I kept it barebones so that I could make quick adjustments. When I got a working version, I tested my split controller
out for the first time. My intial plan for splitting controls was to break the "left side" of the joystick and the "right side" of the joystick so if split,
they would overpower eachother. When played, it felt too "easy". For instance, when controlling the left side of the joystick, you could adjust the amount 
turned left when driving between 0 - 100%. Instead, I modified the left and right controls to be binary, so clicking a button left or right resulted in an 100%
turn. This introduced more difficulty, especially since left and right controls could not override eachother or be pressed simultaneously, requiring students
to communicate carefully to make turns.

<img src="{{ '/assets/images/projects/lasercutprocess.jpg' | relative_url }}" alt="Laser cut process photo">


I ended up with six total control buttons, with the rule that each person had to control at least one button and that the same person could not 
control both left and right. This amount of buttons accomodated groups that ranged from 4-6 students. Two additional buttons were required for bare minumum navigation in the game menu. 

- Left
- Right
- Accelerate Forwards
- Accelerate Backwards
- Use Item
- Drift

Completing it, playtesting with friends, and then bringing it into exam day was rewarding. I proctored for this task throughout the exam. Seeing the excitement of each group
as they entered the task room and realized "It's  Mario Kart!" put a smile on my face, and watching them learn and adapt their strategies on the fly was even better. 

<img src="{{ '/assets/images/projects/examsetup.jpg' | relative_url }}" alt="Exam set up">
Both setups survived the exam, with the only issue being that the Adafruit momentary buttons I selected were not designed to be held down for
~5 minutes continuously and occasionally bugged out. 

This was later presented at IDeATe's end of semester project showcase, Meet Me. 
<img src="{{ '/assets/images/projects/hihs.png' | relative_url }}" alt="Controller at Event">

