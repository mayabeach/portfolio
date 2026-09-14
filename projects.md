---
layout: default
title: Projects
permalink: /projects/
---

<h1>Projects </h1>

<p class="resume-updated">Last updated: {{ page.updated | default: "September 14th, 2026" }}</p>

<div class="filter-tabs" role="tablist">
  <button class="filter-tab is-active" data-filter="all" role="tab" aria-selected="true">All</button>
  <button class="filter-tab" data-filter="internship" role="tab" aria-selected="false">Internship</button>
  <button class="filter-tab" data-filter="education" role="tab" aria-selected="false">Education</button>
  <button class="filter-tab" data-filter="personal" role="tab" aria-selected="false">Personal</button>
</div>

<div class="gallery">
  {% assign sorted_projects = site.projects | sort: "order" %}
  {% for project in sorted_projects %}
  <a class="gallery-item" href="{{ project.url | relative_url }}" data-category="{{ project.category }}">
    <div class="gallery-thumb" style="background-image: url('{{ project.thumbnail | relative_url }}');">
      <span class="gallery-overlay"></span>
      <span class="gallery-caption">{{ project.title }}</span>
    </div>
  </a>
  {% endfor %}
</div>

<p class="gallery-empty" hidden>No projects in this category yet.</p>

<script src="{{ '/assets/js/filter.js' | relative_url }}"></script>
