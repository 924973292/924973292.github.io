---
layout: portfolio
title: "Open Source & Engineering"
description: "Research code, curated resources, and engineering artifacts maintained by Yuhao Wang."
permalink: /open-source/
author_profile: false
---

{% include base_path %}
{% assign github_metric = site.data.metrics | where: "id", "github-stars" | first %}

<div class="open-source-page">
  <section class="page-intro page-intro--wide">
    <p class="eyebrow">OPEN SOURCE / RESEARCH INFRASTRUCTURE</p>
    <h1>Make the work usable.</h1>
    <p class="page-intro__lead">Code releases make methods reproducible. Curated resources make fast-moving fields easier to navigate. Both are part of the research contribution.</p>
  </section>

  <section class="open-source-summary">
    <div>
      <strong data-live-metric="github-stars">{{ github_metric.value }}</strong>
      <span>stars across all public repositories</span>
      <small data-live-meta="github-stars">{{ github_metric.source }} · {{ github_metric.updated }}</small>
    </div>
    <p>Aggregate count follows the same GitHub snapshot used by the Research overview. Repository cards update when their repository is present in that public listing.</p>
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
          <span><strong data-live-repository-stars="{{ repository.name }}">{{ repository.stars }}</strong> stars</span>
          <span>{{ repository.language }}</span>
          <span>checked {{ repository.updated }}</span>
        </div>
        <a href="{{ repository.url }}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>
      </article>
    {% endfor %}
  </div>
</div>
