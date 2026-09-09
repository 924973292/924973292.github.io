---
layout: portfolio
title: "Research Projects"
description: "Case studies connecting Yuhao Wang's research questions, methods, results, papers, and open-source work."
permalink: /projects/
author_profile: false
---

{% include base_path %}

<div class="projects-page">
  <section class="page-intro page-intro--wide">
    <p class="eyebrow">PROJECTS / FROM QUESTION TO EVIDENCE</p>
    <h1>Research is more than a paper title.</h1>
    <p class="page-intro__lead">These case studies connect the problem, technical idea, contribution, result, and artifact behind each research thread.</p>
  </section>

  <div class="project-toolbar" data-project-filters aria-label="Filter research projects">
    <span class="filter-label">Research lens</span>
    <button class="filter-button is-active" type="button" data-project-filter="all" aria-pressed="true">All projects</button>
    <button class="filter-button" type="button" data-project-filter="multimodal-perception" aria-pressed="false">Perception</button>
    <button class="filter-button" type="button" data-project-filter="multimodal-foundation-models" aria-pressed="false">Foundation models</button>
    <button class="filter-button" type="button" data-project-filter="efficient-intelligence" aria-pressed="false">Efficiency</button>
    <button class="filter-button" type="button" data-project-filter="on-device-agents" aria-pressed="false">GUI agents</button>
  </div>

  <div class="project-list" data-project-list>
    {% assign ordered_projects = site.data.projects | sort: "order" %}
    {% for project in ordered_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>

  <section class="project-note">
    <p><strong>Evidence policy.</strong> Links and detailed claims are shown only when the corresponding material is public. Ongoing collaborative work is intentionally described at a higher level.</p>
  </section>
</div>
