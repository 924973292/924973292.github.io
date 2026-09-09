---
layout: portfolio
title: "Honors & Awards — Yuhao Wang"
description: "Research awards, scholarships, competition results, and academic honors."
permalink: /honors-awards/
author_profile: false
---

<div class="honors-page">
  <section class="page-intro page-intro--wide">
    <p class="eyebrow">RECOGNITION / CONTEXT, NOT DECORATION</p>
    <h1>Milestones that mark<br>the research journey.</h1>
    <p class="page-intro__lead">Research recognition, academic honors, scholarships, and competition results—grouped by what they represent rather than reduced to a single list.</p>
  </section>

  {% assign categories = "Research,Academic,Scholarship,Competition" | split: "," %}
  <div class="honors-groups">
    {% for category in categories %}
      {% assign items = site.data.honors | where: "category", category %}
      <section class="honors-group">
        <div class="honors-group__heading">
          <p class="eyebrow">{{ forloop.index | prepend: "0" }} / {{ category }}</p>
          <h2>{{ category }}{% unless category == "Academic" %} recognition{% endunless %}</h2>
          <span>{{ items.size }} selected item{% unless items.size == 1 %}s{% endunless %}</span>
        </div>
        <div class="honors-list">
          {% for item in items %}
            <article class="honor-item">
              <time>{{ item.date }}</time>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.detail }}</p>
                {% if item.distinction %}<strong>{{ item.distinction }}</strong>{% endif %}
              </div>
            </article>
          {% endfor %}
        </div>
      </section>
    {% endfor %}
  </div>
</div>
