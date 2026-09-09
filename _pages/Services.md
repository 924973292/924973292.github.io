---
layout: portfolio
title: "Academic Services"
description: "Conference and journal peer-review service by Yuhao Wang."
permalink: /services/
author_profile: false
---

<div class="page-intro page-intro--wide">
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
