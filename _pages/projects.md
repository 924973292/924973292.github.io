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
    <p class="page-intro__lead">Two projects define the path from foundational multimodal research to current on-device AI work.</p>
  </section>

  <div class="project-toolbar" data-project-filters aria-label="Filter research projects">
    <span class="filter-label">Research lens</span>
    <button class="filter-button is-active" type="button" data-project-filter="all" aria-pressed="true">All projects</button>
    <button class="filter-button" type="button" data-project-filter="undergraduate-research" aria-pressed="false">Undergraduate research</button>
    <button class="filter-button" type="button" data-project-filter="oppo-edge-agents" aria-pressed="false">OPPO edge work</button>
  </div>

  <div class="project-list" data-project-list>
    {% assign ordered_projects = site.data.projects | sort: "order" %}
    {% for project in ordered_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>

  <section class="project-note">
    <p><strong>Evidence policy.</strong> Ongoing collaborative work is intentionally described at a high level.</p>
  </section>
</div>
