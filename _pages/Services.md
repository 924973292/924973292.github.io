---
layout: archive
title: "Academic Services"
permalink: /services/
author_profile: true
---

<div class="page-intro">
  <p class="eyebrow">COMMUNITY / SERVICE</p>
  <h1>Contributing to the research community.</h1>
  <p class="page-intro__lead">Peer review across computer vision, machine learning, multimodal learning, and visual understanding.</p>
</div>

<div class="service-grid">
  <section class="service-card">
    <p class="eyebrow">CONFERENCES</p>
    <h2>Conference reviewer</h2>
    <ul>
      {% for item in site.data.services.conferences %}<li>{{ item }}</li>{% endfor %}
    </ul>
  </section>
  <section class="service-card">
    <p class="eyebrow">JOURNALS</p>
    <h2>Journal reviewer</h2>
    <ul>
      {% for item in site.data.services.journals %}<li>{{ item }}</li>{% endfor %}
    </ul>
  </section>
</div>
