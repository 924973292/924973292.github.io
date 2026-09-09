---
layout: archive
title: "Experience & Timeline"
permalink: /experience/
author_profile: true
---

<div class="page-intro">
  <p class="eyebrow">EXPERIENCE / CONTEXT</p>
  <h1>Where the questions came from.</h1>
  <p class="page-intro__lead">A compact timeline of the places, collaborations, and milestones that have shaped my research practice.</p>
</div>

<div class="experience-timeline">
  {% for item in site.data.timeline %}
    <article class="experience-item">
      <div class="experience-item__date">{{ item.date }}</div>
      <div class="experience-item__marker" aria-hidden="true"></div>
      <div class="experience-item__content">
        <p class="eyebrow">{{ item.type }}</p>
        <h2>{{ item.title }}</h2>
        <p class="experience-item__organization">
          {% if item.logo %}<img src="{{ site.baseurl }}/images/{{ item.logo }}" alt="" loading="lazy">{% endif %}
          {{ item.organization }}
        </p>
        <p>{{ item.description }}</p>
      </div>
    </article>
  {% endfor %}
</div>
