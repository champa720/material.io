---
title: Mathematics Standards

subject: Lessons
category: College and Career Readiness Standards
chapter: 2
section: 2.0
tag: CCRS

excerpt: "Standards for Mathematical Practice, MP.1 - MP.8"

source: https://www.cde.state.co.us/cdeadult/ccrs
pdf: https://lincs.ed.gov/publications/pdf/CCRStandardsAdultEd.pdf

---
### Standards for Mathematical Practice

{% for standard in site.data.ccrs.mathematics %}
#### {{ standard.title }}

{{ standard.description }}

<ul class="collapsible popout" data-collapsible="accordion">

  {% for level in standard.level-specific %}
  <li>
    <div class="collapsible-header waves-effect"><i class="material-icons rotate">expand_more</i>{{ level[0] }}</div>
    <div class="collapsible-body flow-text casper">
      <ul>

        {% for description in level[1] %}
        <li>{{ description }}</li>
        {% endfor %}

      </ul>
    </div>
  </li>
  {% endfor %}

</ul>
{% endfor %}
