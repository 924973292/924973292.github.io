---
layout: portfolio
title: "Research"
description: "Yuhao Wang's research in multimodal perception, efficient multimodal models, and on-device GUI agents."
permalink: /research/
author_profile: false
---

{% include base_path %}

<div class="research-page">
  <section class="page-intro page-intro--wide">
    <p class="eyebrow">RESEARCH / ONE CONNECTED PROGRAM</p>
    <h1>Perceive broadly.<br>Compute deliberately.<br>Act reliably.</h1>
    <p class="page-intro__lead">My research begins with a simple systems question: how can multimodal intelligence preserve the right evidence, spend computation where it matters, and remain useful under real-world constraints?</p>
  </section>

  <section class="research-page__map" aria-labelledby="research-map-title">
    <div class="section-heading section-heading--inline">
      <div>
        <p class="eyebrow">INTERACTIVE RESEARCH MAP</p>
        <h2 id="research-map-title">A research system, not a keyword list.</h2>
      </div>
      <p>Select a node to trace its questions, methods, papers, and projects.</p>
    </div>
    {% include research-map.html %}
  </section>

  <section class="home-section">
    <div class="section-heading">
      <p class="eyebrow">RESEARCH PHILOSOPHY</p>
      <h2>Four principles behind the work.</h2>
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

  <section class="home-section future-section">
    <div class="section-heading">
      <p class="eyebrow">WHERE I’M GOING</p>
      <h2>From efficient models to reliable agent systems.</h2>
      <p>The next research questions build directly on the same through-line: multimodal evidence, efficient computation, and deployment-aware decisions.</p>
    </div>
    <div class="future-roadmap">
      {% for item in site.data.future %}
        <article class="future-step">
          <div class="future-step__marker"><span>{{ forloop.index }}</span></div>
          <div>
            <p class="eyebrow">{{ item.stage }} · {{ item.horizon }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <ul class="tag-list">
              {% for keyword in item.keywords %}<li>{{ keyword }}</li>{% endfor %}
            </ul>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-cta">
    <div>
      <p class="eyebrow">COLLABORATE</p>
      <h2>Working on multimodal models, efficient inference, or intelligent interfaces?</h2>
    </div>
    <a class="button button--primary" href="mailto:{{ site.data.profile.email }}">Start a conversation <span aria-hidden="true">↗</span></a>
  </section>
</div>
