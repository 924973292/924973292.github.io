---
layout: portfolio
permalink: /
title: "Yuhao Wang — Multimodal Intelligence & On-device Agents"
description: "Yuhao Wang researches multimodal perception, efficient multimodal models, and on-device GUI agents."
excerpt: "Building efficient multimodal intelligence for perception, foundation models, and on-device agents."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}
{% assign profile = site.data.profile %}

<div class="home-page">
  <section class="portfolio-hero" aria-labelledby="hero-title">
    <div class="portfolio-hero__content">
      <div class="portfolio-hero__status">
        <span class="signal-dot" aria-hidden="true"></span>
        {{ profile.availability }}
      </div>
      <p class="eyebrow">MULTIMODAL INTELLIGENCE · EFFICIENT AI · GUI AGENTS</p>
      <h1 id="hero-title">{{ profile.name }}<span>{{ profile.name_zh }}</span></h1>
      <p class="portfolio-hero__position">{{ profile.role }}</p>
      <p class="portfolio-hero__tagline">{{ profile.tagline }}</p>
      <p class="portfolio-hero__intro">{{ profile.intro }}</p>

      <div class="portfolio-hero__context">
        <span>{{ profile.academic_role }}</span>
        <a href="{{ profile.lab_url }}" target="_blank" rel="noopener noreferrer">{{ profile.affiliation_short }} <span aria-hidden="true">↗</span></a>
        <span>{{ profile.location }}</span>
      </div>

      <div class="portfolio-hero__actions">
        <a class="button button--primary" href="{{ base_path }}/research/">Explore my research <span aria-hidden="true">↗</span></a>
        <a class="button button--quiet" href="{{ profile.cv_url | relative_url }}">CV <span aria-hidden="true">↗</span></a>
        <a class="button button--quiet" href="{{ profile.scholar_url }}" target="_blank" rel="noopener noreferrer">Scholar <span aria-hidden="true">↗</span></a>
        <a class="button button--quiet" href="{{ profile.github_url }}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a class="button button--quiet" href="{{ profile.orcid_url }}" target="_blank" rel="noopener noreferrer">ORCID <span aria-hidden="true">↗</span></a>
      </div>

      <details class="hero-panel__bilingual">
        <summary>中文研究简介</summary>
        <p>{{ profile.intro_zh }}</p>
      </details>
    </div>

    <aside class="portfolio-hero__portrait">
      <div class="portrait-frame">
        <picture>
          <source srcset="{{ base_path }}/images/optimized/WangYuhao.webp" type="image/webp">
          <img src="{{ base_path }}/images/{{ profile.avatar }}" alt="Portrait of {{ profile.name }}" width="414" height="559">
        </picture>
        <div class="portrait-frame__caption">
          <span>Research focus</span>
          <strong>Perception → Efficiency → Agency</strong>
        </div>
      </div>
    </aside>
  </section>

  <section class="metric-grid" aria-label="Research at a glance">
    {% for metric in site.data.metrics %}
      <article class="metric-card" data-live-metric-card="{{ metric.id }}">
        <strong data-live-metric="{{ metric.id }}">{{ metric.value }}</strong>
        <span>{{ metric.label }}</span>
        <small>{{ metric.detail }}</small>
        <em data-live-meta="{{ metric.id }}">{{ metric.source }} · {{ metric.updated }}</em>
      </article>
    {% endfor %}
  </section>

  <section class="home-section home-section--atlas" id="research">
    <div class="section-heading section-heading--inline">
      <div>
        <p class="eyebrow">01 / RESEARCH IDENTITY</p>
        <h2>One connected research program.</h2>
      </div>
      <p>My work follows a continuous path from multimodal evidence to efficient representation and deployable agents.</p>
    </div>
    {% include research-map.html %}
    <a class="section-link" href="{{ base_path }}/research/">Read the full research agenda <span aria-hidden="true">↗</span></a>
  </section>

  <section class="home-section">
    <div class="section-heading">
      <p class="eyebrow">02 / RESEARCH PHILOSOPHY</p>
      <h2>Less redundant compute.<br>More useful intelligence.</h2>
    </div>
    <div class="philosophy-grid">
      {% for item in site.data.philosophy %}
        <article class="philosophy-card">
          <span>{{ item.index }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-section" id="latest-work">
    <div class="section-heading section-heading--inline">
      <div>
        <p class="eyebrow">03 / LATEST WORK</p>
        <h2>The newest paper, read closely.</h2>
      </div>
      <p>A dedicated reading of the current work: the constraint, the method, and why it sits at the edge of the research program.</p>
    </div>
    {% include featured-work.html work=site.data.featured_work %}
  </section>

  <section class="home-section" id="publications">
    <div class="section-heading section-heading--inline">
      <div>
        <p class="eyebrow">04 / SELECTED PUBLICATIONS</p>
        <h2>Methods that build on one another.</h2>
      </div>
      <a class="section-link" href="{{ base_path }}/publications/">Search the full record <span aria-hidden="true">↗</span></a>
    </div>
    <div class="publication-grid publication-grid--featured">
      {% for publication in site.data.publications %}
        {% if publication.featured %}
          {% include publication-card.html publication=publication compact=true %}
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="home-section home-section--split">
    <div>
      <div class="section-heading">
        <p class="eyebrow">05 / NOW</p>
        <h2>Recent signals.</h2>
      </div>
      <div class="news-list">
        {% for item in site.data.news limit:6 %}
          <article class="news-item">
            <time datetime="{{ item.date }}">{{ item.date | date: "%b %Y" }}</time>
            <div>
              <span class="news-item__label">{{ item.label }}</span>
              <p>{% if item.link and item.link != empty %}<a href="{{ item.link }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</p>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>

    <div>
      <div class="section-heading">
        <p class="eyebrow">06 / RESEARCH JOURNEY</p>
        <h2>How the direction formed.</h2>
      </div>
      <div class="timeline">
        {% for item in site.data.timeline limit:5 %}
          <article class="timeline-item">
            <span class="timeline-item__dot" aria-hidden="true"></span>
            <time>{{ item.date }}</time>
            <h3>{{ item.title }}</h3>
            <p>{{ item.organization }}</p>
          </article>
        {% endfor %}
      </div>
      <a class="section-link" href="{{ base_path }}/experience/">View the complete journey <span aria-hidden="true">↗</span></a>
    </div>
  </section>

  <section class="home-section community-panel">
    <div class="community-panel__intro">
      <p class="eyebrow">07 / COMMUNITY & OPEN WORK</p>
      <h2>Research also means reviewing, sharing, and maintaining.</h2>
      <p>Beyond papers, I contribute through peer review, talks, released implementations, and curated research resources.</p>
    </div>
    <div class="community-panel__links">
      <a href="{{ base_path }}/open-source/"><span>Open Source</span><strong>Code & curated resources</strong><i aria-hidden="true">↗</i></a>
      <a href="{{ base_path }}/services/"><span>Academic Service</span><strong>Conferences & journals</strong><i aria-hidden="true">↗</i></a>
      <a href="{{ base_path }}/talks/"><span>Talks</span><strong>Posters & presentations</strong><i aria-hidden="true">↗</i></a>
      <a href="{{ base_path }}/honors-awards/"><span>Recognition</span><strong>Awards & scholarships</strong><i aria-hidden="true">↗</i></a>
    </div>
  </section>

  <section class="home-section future-section">
    <div class="section-heading">
      <p class="eyebrow">08 / WHERE I’M GOING</p>
      <h2>From efficient models to reliable agent systems.</h2>
    </div>
    <div class="future-roadmap">
      {% for item in site.data.future %}
        <article class="future-step">
          <div class="future-step__marker"><span>{{ forloop.index }}</span></div>
          <div>
            <p class="eyebrow">{{ item.stage }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-section beyond-research">
    <div>
      <p class="eyebrow">09 / BEYOND RESEARCH</p>
      <h2>Curiosity needs a little room.</h2>
      <p>{{ profile.quote }}<br><span>{{ profile.quote_attribution }}</span></p>
    </div>
    <a class="section-link" href="{{ base_path }}/exhibition/">Visit BearNoBugs <span aria-hidden="true">↗</span></a>
  </section>

  <section class="home-cta" id="contact">
    <div>
      <p class="eyebrow">LET’S TALK</p>
      <h2>Interested in multimodal intelligence, efficient models, or on-device agents?</h2>
    </div>
    <div class="home-cta__actions">
      <a class="button button--primary" href="mailto:{{ profile.email }}">{{ profile.email }} <span aria-hidden="true">↗</span></a>
      <span>WeChat · {{ profile.wechat }}</span>
    </div>
  </section>
</div>
