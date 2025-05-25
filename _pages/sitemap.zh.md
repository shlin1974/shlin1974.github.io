---
layout: archive
title: "网站地图"
permalink: /sitemap-zh/
author_profile: true
---

{% include base_path %}

本网站上所有文章和页面的列表。对于机器人，还有一个[XML 版本]({{ base_path }}/sitemap.xml)可供解析。

<h2>页面</h2>
{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

<h2>文章</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}
---
