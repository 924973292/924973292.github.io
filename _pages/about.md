---
permalink: /
title: "Yuhao Wang — Research Homepage"
excerpt: "Yuhao Wang studies efficient multimodal vision systems for recognition, retrieval, and real-world understanding."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}
{% assign profile = site.data.profile %}
{% assign latest_project = site.data.projects | first %}

<div class="home-page">
  <section class="hero-panel" aria-labelledby="hero-title">
    <p class="eyebrow">RESEARCHER · BUILDER · VISUAL THINKER</p>
    <h1 id="hero-title">{{ profile.name }} <span>{{ profile.name_zh }}</span></h1>
    <p class="hero-panel__role">{{ profile.role }} · {{ profile.academic_role }} · {{ profile.affiliation }}</p>
    <p class="hero-panel__tagline">{{ profile.tagline }}</p>
    <p class="hero-panel__intro">{{ profile.intro }} I am currently part of the <a href="{{ profile.lab_url }}" target="_blank" rel="noopener noreferrer">IIAU Lab</a> at DLUT.</p>
    <details class="hero-panel__bilingual">
      <summary>中文研究简介</summary>
      <p>{{ profile.intro_zh }}</p>
    </details>
    <div class="hero-panel__actions">
      {% if profile.cv_url %}<a class="button button--primary" href="{{ profile.cv_url | relative_url }}">View CV <span aria-hidden="true">↗</span></a>{% endif %}
      <a class="button button--quiet" href="{{ profile.scholar_url }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
      <a class="button button--quiet" href="mailto:{{ profile.email }}">Start a conversation <span aria-hidden="true">↗</span></a>
    </div>
    <div class="hero-panel__focus" aria-label="Research focus">
      {% for focus in profile.focus %}<span>{{ focus }}</span>{% endfor %}
    </div>
  </section>

  <section class="metric-grid" aria-label="Research snapshot">
    {% for metric in site.data.metrics %}
      <div class="metric-card">
        <strong>{{ metric.value }}</strong>
        <span>{{ metric.label }}</span>
        <small>{{ metric.detail }}</small>
      </div>
    {% endfor %}
  </section>

  <section class="home-section" id="research">
    <div class="section-heading">
      <p class="eyebrow">RESEARCH AGENDA</p>
      <h2>From multimodal perception to autonomous action.</h2>
      <p>I study how models can connect heterogeneous signals, preserve semantic detail, and move from understanding to efficient decisions in real systems.</p>
    </div>
    <div class="research-grid">
      {% for theme in site.data.research %}
        <article class="research-card">
          <p class="research-card__eyebrow">{{ theme.eyebrow }}</p>
          <h3>{{ theme.title }}</h3>
          <p>{{ theme.description }}</p>
          <ul class="tag-list" aria-label="{{ theme.title }} topics">
            {% for tag in theme.tags %}<li>{{ tag }}</li>{% endfor %}
          </ul>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-section" id="featured-work">
    <div class="section-heading section-heading--inline">
      <div>
        <p class="eyebrow">SELECTED WORK</p>
        <h2>Research, made legible.</h2>
      </div>
      <a class="text-link" href="{{ base_path }}/publications/">View selected publications <span aria-hidden="true">↗</span></a>
    </div>
    <div class="publication-grid publication-grid--featured">
      {% for publication in site.data.publications %}
        {% if publication.featured %}
          {% include publication-card.html publication=publication %}
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="home-section latest-project" id="latest-work">
    <div class="latest-project__intro">
      <p class="eyebrow">{{ latest_project.eyebrow }}</p>
      <h2>{{ latest_project.title }}</h2>
      <p>{{ latest_project.description }}</p>
      <p class="latest-project__partner">{{ latest_project.partner }} · <strong>{{ latest_project.status }}</strong></p>
    </div>
    <div class="latest-project__outcomes">
      {% for outcome in latest_project.outcomes %}
        <div><strong>{{ outcome.metric }}</strong><span>{{ outcome.label }}</span></div>
      {% endfor %}
    </div>
  </section>

  <section class="home-section home-section--split">
    <div>
      <div class="section-heading">
        <p class="eyebrow">NOW / NEXT</p>
        <h2>Recent signals.</h2>
      </div>
      <div class="news-list">
        {% for item in site.data.news limit:6 %}
          <article class="news-item">
            <time datetime="{{ item.date }}">{{ item.date | date: "%b %Y" }}</time>
            <div>
              <span class="news-item__label">{{ item.label }}</span>
              <p>{% if item.link %}<a href="{{ item.link }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</p>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>

    <div id="timeline">
      <div class="section-heading">
        <p class="eyebrow">A SHORT TIMELINE</p>
        <h2>Places, questions, momentum.</h2>
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
    </div>
  </section>

  <section class="home-section beyond-research">
    <div>
      <p class="eyebrow">BEYOND RESEARCH</p>
      <h2>Curiosity needs a little room.</h2>
      <p>{{ profile.quote }}<br><span>{{ profile.quote_attribution }}</span></p>
    </div>
    <div class="beyond-research__links">
      <a href="{{ base_path }}/exhibition/">BearNoBugs / personal exhibition <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/924973292/Awesome-Multi-Modal-Object-Re-Identification" target="_blank" rel="noopener noreferrer">Curated multimodal ReID resources <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/924973292/Awesome-EfficientAI-for-MLLM" target="_blank" rel="noopener noreferrer">Efficient AI for MLLMs <span aria-hidden="true">↗</span></a>
    </div>
  </section>

  <section class="home-cta" id="contact">
    <p class="eyebrow">LET'S TALK</p>
    <h2>Interested in multimodal vision, efficient models, or a thoughtful exchange?</h2>
    <a class="button button--primary" href="mailto:{{ profile.email }}">{{ profile.email }} <span aria-hidden="true">↗</span></a>
  </section>
</div>
