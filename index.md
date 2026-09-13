---
layout: default
title: Home
---

<section class="bio">
  <div class="bio-text">
    <h1>Hi, I'm Your Name.</h1>
    <p>
      I'm a mechanical engineering student focused on [design / mechatronics / thermofluids —
      whatever your focus is]. I like taking projects from a rough sketch to a working
      prototype, and I've picked up experience with CAD, manufacturing, and testing along
      the way. This site collects some of the projects I've worked on, both in school and
      on my own time.
    </p>
    <p>
      Outside of coursework, I [a sentence about what you do — clubs, hobbies, research].
      Take a look at the projects below, or head to the
      <a href="{{ '/projects/' | relative_url }}">Projects</a> page to see everything.
    </p>
  </div>
  <div class="bio-photo">
    <img src="{{ '/assets/images/headshot.jpg' | relative_url }}" alt="Headshot of Your Name">
  </div>
</section>

<section class="featured">
  <h2>Featured projects</h2>
  <div class="featured-grid">
    {% assign featured = site.projects | where: "featured", true %}
    {% for project in featured limit: 3 %}
    <a class="featured-card" href="{{ project.url | relative_url }}">
      <div class="featured-thumb" style="background-image: url('{{ project.thumbnail | relative_url }}');">
        <span class="featured-overlay"></span>
      </div>
      <span class="featured-caption">{{ project.title }}</span>
    </a>
    {% endfor %}
  </div>
</section>
