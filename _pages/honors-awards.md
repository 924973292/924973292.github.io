---
layout: archive
title: "Honors & Awards"
permalink: /honors-awards/
author_profile: true
---

<div class="page-intro">
  <p class="eyebrow">RECOGNITION</p>
  <h1>Milestones worth remembering.</h1>
  <p class="page-intro__lead">Academic honors, competition results, scholarships, and paper recognitions collected across my undergraduate and graduate work.</p>
</div>

<div class="honors-list">
  {% for item in site.data.honors %}
    <article class="honor-item">
      <time>{{ item.date }}</time>
      <div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.detail }}</p>
      </div>
    </article>
  {% endfor %}
</div>
