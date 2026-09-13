---
layout: default
title: Contact 
permalink: /contact/
---

<h1>Contact </h1>

<p>
  Message me on LinkedIn: <a href="https://linkedin.com/in/{{ site.linkedin_username }}">linkedin.com/in/{{ site.linkedin_username }}</a>
</p>

<p>Or send a message directly! If you'd like a response, include your email in your message: </p>

<form class="contact-form" action="{{ site.formspree_endpoint }}" method="POST">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>

  <label for="title">Subject</label>
  <input type="text" id="title" name="title" required>

  <label for="content">Message</label>
  <textarea id="content" name="content" rows="6" required></textarea>

  <button type="submit">Send</button>
</form>
