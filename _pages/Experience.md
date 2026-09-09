---
layout: portfolio
title: "Research Journey — Yuhao Wang"
description: "The education, research experiences, milestones, and evolving research direction behind Yuhao Wang's work."
permalink: /experience/
author_profile: false
---

{% include base_path %}

<div class="journey-page">
  <section class="page-intro page-intro--wide">
    <p class="eyebrow">RESEARCH JOURNEY / CONTINUITY</p>
    <h1>How the questions<br>became a research direction.</h1>
    <p class="page-intro__lead">This is not only a chronology of institutions. It is the progression from visual modeling to multimodal perception, efficient representation, and on-device agents.</p>
  </section>

  <section class="journey-narrative" aria-label="Research direction timeline">
    {% for item in site.data.research_journey %}
      <article class="journey-stage">
        <div class="journey-stage__rail">
          <span>{{ item.period }}</span>
          <i aria-hidden="true"></i>
        </div>
        <div class="journey-stage__content">
          <p class="eyebrow">{{ item.phase }}</p>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <ul>
            {% for evidence in item.evidence %}<li>{{ evidence }}</li>{% endfor %}
          </ul>
        </div>
      </article>
    {% endfor %}
  </section>

  <section class="home-section">
    <div class="section-heading">
      <p class="eyebrow">EDUCATION & RESEARCH EXPERIENCE</p>
      <h2>Where the work happened.</h2>
      <p>Formal education, research internships, industry collaboration, presentations, and selected milestones.</p>
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
              {% if item.logo %}<img src="{{ base_path }}/images/{{ item.logo }}" alt="" loading="lazy" width="48" height="48">{% endif %}
              {{ item.organization }}
            </p>
            <p>{{ item.description }}</p>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
</div>
