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

<section class="awards">
  <h2>Awards &amp; press</h2>
  <div class="awards-list">
    <div class="awards-item">
      <img class="awards-thumb" src="{{ '/assets/images/awards/award.jpg' | relative_url }}" alt="">
      <a href="https://www.meche.engineering.cmu.edu/" class="awards-text">Emerging Scholar in Mechanics and Design — CMU MechE, September 2026</a>
    </div>
    <div class="awards-item">
      <img class="awards-thumb" src="{{ '/assets/images/awards/shellgroup.png' | relative_url }}" alt="">
      <a href="https://ideate.cmu.edu/news-and-announcements/2026/05_may/quiet-edges-dissolve.html" class="awards-text">Quiet Edges Dissolve — IDeATe, May 2026</a>
    </div>
    <div class="awards-item">
      <img class="awards-thumb" src="{{ '/assets/images/awards/hihs.png' | relative_url }}" alt="">
      <a href="https://ideate.cmu.edu/news-and-announcements/2026/05_may/meet-me-@-spring-26.html" class="awards-text">Meet Me Spring 2026 — IDeATe, May 2026</a>
    </div>
    <div class="awards-item">
      <img class="awards-thumb" src="{{ '/assets/images/awards/shellfloor.png' | relative_url }}" alt="">
      <a href="https://ideate.cmu.edu/news-and-announcements/2026/05_may/spring-2026-project-roundup.html" class="awards-text">Spring 2026 Final Project Roundup — IDeATe, April 2026</a>
    </div>
    <div class="awards-item">
      <img class="awards-thumb" src="{{ '/assets/images/awards/shellfloor.png' | relative_url }}" alt="">
      <a href="https://www.meche.engineering.cmu.edu/news/2025/04/09-ideate.html" class="awards-text">A creative home on campus (Reposted Interview w/ Maya) — CMU MechE, April 2025</a>
    </div>
    <div class="awards-item">
      <img class="awards-thumb" src="{{ '/assets/images/awards/walle.jpg' | relative_url }}" alt="">
      <a href="https://ideate.cmu.edu/news-and-announcements/2025/april/maya-beach-feature.html" class="awards-text">A creative home on campus (Original Interview w/ Maya) — IDeATe, April 2025</a>
    </div>
  </div>
</section>