---
layout: portfolio
title: "Talks & Presentations"
description: "Selected talks, posters, and academic presentations by Yuhao Wang."
permalink: /talks/
author_profile: false
---

<div class="page-intro page-intro--wide">
  <p class="eyebrow">TALKS / POSTERS / EXCHANGE</p>
  <h1>Research is also a conversation.</h1>
  <p class="page-intro__lead">Selected presentations, posters, and research exchanges that helped me test ideas beyond the page.</p>
</div>

<div class="talk-list">
  {% for talk in site.data.talks %}
    <article class="talk-item">
      <div class="talk-item__date">{{ talk.date }}</div>
      <div>
        <span class="status-pill status-pill--published">{{ talk.type }}</span>
        <h2>{{ talk.title }}</h2>
        <p>{{ talk.venue }}</p>
        <p>{{ talk.description }}</p>
      </div>
    </article>
  {% endfor %}
</div>
