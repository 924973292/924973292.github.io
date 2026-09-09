---
layout: portfolio
title: "Open Source & Engineering"
description: "Research code, curated resources, and engineering artifacts maintained by Yuhao Wang."
permalink: /open-source/
author_profile: false
---

{% include base_path %}

<div class="open-source-page">
  <section class="page-intro page-intro--wide">
    <p class="eyebrow">OPEN SOURCE / RESEARCH INFRASTRUCTURE</p>
    <h1>Make the work usable.</h1>
    <p class="page-intro__lead">Code releases make methods reproducible. Curated resources make fast-moving fields easier to navigate. Both are part of the research contribution.</p>
  </section>

  <section class="open-source-summary">
    <div>
      <strong>800+</strong>
      <span>stars across released research repositories</span>
      <small>Personal and collaborative repositories · Sep 2026</small>
    </div>
    <p>Repository-level counts below are snapshots, not live counters. They are intentionally dated so the page remains honest when GitHub data changes.</p>
  </section>

  <div class="repository-grid">
    {% for repository in site.data.open_source %}
      <article class="repository-card">
        <div class="repository-card__meta">
          <span>{{ repository.type }}</span>
          <span>{{ repository.related }}</span>
        </div>
        <h2>{{ repository.name }}</h2>
        <p>{{ repository.description }}</p>
        <div class="repository-card__stats">
          <span><strong>{{ repository.stars }}</strong> stars</span>
          <span>{{ repository.language }}</span>
          <span>checked {{ repository.updated }}</span>
        </div>
        <a href="{{ repository.url }}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>
      </article>
    {% endfor %}
  </div>
</div>
