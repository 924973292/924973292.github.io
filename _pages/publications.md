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
    <p class="page-intro__lead">Browse three connected research areas separately, then refine by year, status, authorship, and publication type. Each entry is written at two levels: a fast plain-language takeaway and the technical record.</p>
    <div class="page-intro__links">
      <a class="button button--primary" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
      <a class="button button--quiet" href="{{ site.data.profile.cv_url | relative_url }}">Download CV <span aria-hidden="true">↗</span></a>
      <span class="data-note">25 verified records · 21 indexed by Scholar · 20 peer-reviewed · 5 clearly labeled non-final records.</span>
    </div>
  </section>

  <section class="publication-explorer" data-publication-filters aria-label="Explore publications">
    <div class="publication-view-toggle" role="group" aria-label="Publication scope">
      <button class="filter-button" type="button" data-scope-filter="selected" aria-pressed="false">Selected</button>
      <button class="filter-button" type="button" data-scope-filter="lead" aria-pressed="false">First / co-first</button>
      <button class="filter-button" type="button" data-scope-filter="peer-reviewed" aria-pressed="false">Peer-reviewed</button>
      <button class="filter-button" type="button" data-scope-filter="non-final" aria-pressed="false">Preprints / reports</button>
      <button class="filter-button is-active" type="button" data-scope-filter="all" aria-pressed="true">All works</button>
    </div>
    <div class="publication-area-toggle" role="group" aria-label="Research area">
      <button class="filter-button is-active" type="button" data-area-filter-button="all" aria-pressed="true">All areas</button>
      {% for research_area in site.data.research_areas %}
        <button class="filter-button" type="button" data-area-filter-button="{{ research_area.id }}" aria-pressed="false">{{ research_area.title }}</button>
      {% endfor %}
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
            <option value="co-corresponding-author">Co-corresponding author</option>
            <option value="contributor">Contributor</option>
          </select>
        </label>
        <label>
          <span class="filter-label">Type</span>
          <select data-type-filter>
            <option value="all">All types</option>
            {% assign publication_types = site.data.publications | map: "type" | compact | uniq | sort_natural %}
            {% for publication_type in publication_types %}
              <option value="{{ publication_type | slugify }}">{{ publication_type }}</option>
            {% endfor %}
          </select>
        </label>
        <label>
          <span class="filter-label">Research area</span>
          <select data-area-filter>
            <option value="all">All research areas</option>
            {% for research_area in site.data.research_areas %}
              <option value="{{ research_area.id }}">{{ research_area.title }}</option>
            {% endfor %}
          </select>
        </label>
        <label>
          <span class="filter-label">Sort</span>
          <select data-publication-sort>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Title A–Z</option>
            <option value="title-desc">Title Z–A</option>
          </select>
        </label>
      </div>

      <button class="filter-reset" type="button" data-filter-reset>Reset filters</button>
    </div>
  </section>

  <details class="live-publication-note" data-live-publications>
    <summary>
      <span>New Scholar records awaiting curation</span>
      <span data-live-publication-count>Checking Scholar snapshot…</span>
    </summary>
    <p class="publication-note__lead">Automatically indexed records are shown with minimal metadata until their venue, authorship, contribution, and public evidence are manually verified.</p>
    <div class="live-publication-list" data-live-publication-list></div>
  </details>

  <div class="publication-results-head">
    <p class="filter-result" data-filter-result aria-live="polite"></p>
    <p data-publication-filter-summary>Newest first · status shown explicitly</p>
  </div>
  <p class="active-filter-summary" data-active-filter-summary aria-live="polite"></p>

  <div class="publication-grid publication-grid--archive" data-publication-list>
    {% assign publications_by_order = site.data.publications | sort: "sort_order" | reverse %}
    {% for publication in publications_by_order %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>

  <section class="publication-note">
    <p><strong>Publication policy.</strong> Published work, work under review, and ongoing research are deliberately separated. Missing links are omitted rather than replaced with placeholders. Latest detailed metadata is verified against public records.</p>
  </section>
</div>
