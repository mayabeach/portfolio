---
layout: default
title: Home
---


<section class="bio">
  <div class="bio-text">
    <h1>Hi, I'm Maya!</h1>
    <p>
      I'm a Mechanical Engineering undergrad at Carnegie Mellon
      University graduating in December 2026. I have a minor in Soft Technologies through
      IDeATe (<a href="https://ideate.cmu.edu/">Integrative Design, Arts, and Technology</a>) and love combining engineering and
      art. I have previously interned at <a href="https://www.symbotic.com/">Symbotic</a>, <a href="https://locusrobotics.com/">Locus Robotics</a>, and <a href="https://www.neb.com/en-us">New England Biolabs</a>.
    </p>
    <p>
      This website contains my professional and personal projects. Take a look at the projects below, or head to the
      <a href="{{ '/projects/' | relative_url }}">Projects</a> page to see everything.
    </p>
    <p>
      You can also check out my <a href="{{ '/resume/' | relative_url }}">resume</a> or <a href="{{ '/contact/' | relative_url }}">get in touch</a>.
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
