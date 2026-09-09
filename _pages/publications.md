---
layout: archive
title: "Publications & Research"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<div class="publications-page">
  <section class="page-intro">
    <p class="eyebrow">PUBLICATIONS / RESEARCH OUTPUT</p>
    <h1>Work that moves between modalities.</h1>
    <p class="page-intro__lead">A curated record of published papers, manuscripts in review, and ongoing collaborations across multimodal recognition, efficient vision-language models, and structured visual representation.</p>
    <div class="page-intro__links">
      <a class="button button--primary" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Open Google Scholar <span aria-hidden="true">↗</span></a>
      <span class="data-note">Profile metrics are maintained externally by Google Scholar.</span>
    </div>
  </section>

  <section class="publication-toolbar" data-publication-filters aria-label="Filter publications">
    <div class="publication-toolbar__group">
      <span class="filter-label">Status</span>
      <button class="filter-button is-active" type="button" data-status-filter="all" aria-pressed="true">All</button>
      <button class="filter-button" type="button" data-status-filter="published" aria-pressed="false">Published</button>
      <button class="filter-button" type="button" data-status-filter="under-review" aria-pressed="false">Under Review</button>
      <button class="filter-button" type="button" data-status-filter="ongoing" aria-pressed="false">Ongoing</button>
    </div>
    <div class="publication-toolbar__group">
      <label class="filter-label" for="publication-year">Year</label>
      <select id="publication-year" data-year-filter>
        <option value="all">All years</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
      </select>
    </div>
    <label class="publication-search" for="publication-search">
      <span class="sr-only">Search publications by title, author, or topic</span>
      <input id="publication-search" type="search" data-publication-search placeholder="Search title or topic">
    </label>
  </section>

  <p class="filter-result" data-filter-result aria-live="polite"></p>

  <div class="publication-grid publication-grid--archive" data-publication-list>
    {% for publication in site.data.publications %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>

  <section class="publication-note">
    <p><strong>Status note.</strong> “Under Review” and “Ongoing” entries are included for transparency and are not presented as accepted publications. Publication metadata and availability may change.</p>
  </section>
</div>
