---
layout: portfolio
title: "Publications — Yuhao Wang"
description: "Selected and complete research record in multimodal perception, efficient vision-language models, and on-device agents."
permalink: /publications/
author_profile: false
---

{% include base_path %}

<div class="publications-page">
  <section class="page-intro page-intro--wide">
    <p class="eyebrow">PUBLICATIONS / RESEARCH RECORD</p>
    <h1>Ideas, methods,<br>and the evidence behind them.</h1>
    <p class="page-intro__lead">Browse the research by topic, year, status, and authorship. Each entry is written at two levels: a fast plain-language takeaway and the technical record.</p>
    <div class="page-intro__links">
      <a class="button button--primary" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
      <a class="button button--quiet" href="{{ site.data.profile.cv_url | relative_url }}">Download CV <span aria-hidden="true">↗</span></a>
      <span class="data-note">25 verified records · 21 indexed by Scholar · 20 peer-reviewed · 5 clearly labeled non-final records.</span>
    </div>
  </section>

  <section class="publication-explorer" data-publication-filters aria-label="Explore publications">
    <div class="publication-view-toggle" role="group" aria-label="Publication scope">
      <button class="filter-button" type="button" data-scope-filter="selected" aria-pressed="false">Selected</button>
      <button class="filter-button is-active" type="button" data-scope-filter="all" aria-pressed="true">Full record</button>
    </div>

    <div class="publication-toolbar">
      <label class="publication-search" for="publication-search">
        <span class="sr-only">Search publications by title, author, venue, or topic</span>
        <span aria-hidden="true">⌕</span>
        <input id="publication-search" type="search" data-publication-search placeholder="Search title, author, venue, or topic">
      </label>

      <div class="publication-toolbar__selects">
        <label>
          <span class="filter-label">Year</span>
          <select data-year-filter>
            <option value="all">All years</option>
          </select>
        </label>
        <label>
          <span class="filter-label">Status</span>
          <select data-status-select>
            <option value="all">All statuses</option>
            <option value="published">Published / accepted</option>
            <option value="ongoing">Preprint / technical / ongoing</option>
          </select>
        </label>
        <label>
          <span class="filter-label">Role</span>
          <select data-role-filter>
            <option value="all">All roles</option>
            <option value="first-author">First author</option>
            <option value="co-first-author">Co-first author</option>
            <option value="contributor">Contributor</option>
          </select>
        </label>
        <label>
          <span class="filter-label">Topic</span>
          <select data-topic-filter>
            <option value="all">All topics</option>
            <option value="multimodal reid">Multimodal ReID</option>
            <option value="gui agents">GUI Agents</option>
            <option value="vision-language">Vision-Language</option>
            <option value="benchmark">Benchmarks</option>
            <option value="rgbt tracking">RGBT Tracking</option>
            <option value="segmentation">Segmentation</option>
            <option value="mamba">Mamba</option>
            <option value="aerial–ground reid">Aerial–Ground</option>
            <option value="medical vision">Medical Vision</option>
          </select>
        </label>
      </div>

      <button class="filter-reset" type="button" data-filter-reset>Reset filters</button>
    </div>
  </section>

  <div class="publication-results-head">
    <p class="filter-result" data-filter-result aria-live="polite"></p>
    <p>Newest first · status shown explicitly</p>
  </div>

  <div class="publication-grid publication-grid--archive" data-publication-list>
    {% assign publications_by_year = site.data.publications | sort: "year" | reverse %}
    {% for publication in publications_by_year %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>

  <section class="publication-note">
    <p><strong>Publication policy.</strong> Published work, work under review, and ongoing research are deliberately separated. Missing links are omitted rather than replaced with placeholders. Latest detailed metadata is verified against public records.</p>
  </section>
</div>
