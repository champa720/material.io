---
title: Mathematics Standards
author: Adult Education Initiatives

subject: HSE
category: High School Equivalency
chapter: 2
section: 2.1
tag: CCRS

excerpt: "Standards for Mathematical Practice, MP.1 - MP.8"

source: https://www.cde.state.co.us/cdeadult/ccrs
pdf: https://lincs.ed.gov/publications/pdf/CCRStandardsAdultEd.pdf

---
### Standards for Mathematical Practice

{% for standard in site.data.ccrs.mathematics %}
#### {{ standard.title }}

{{ standard.description }}

{% for level in standard.level-specific %}
##### {{ level[0] }}

{% for description in level[1] %}
- {{ description }}

{% endfor %} {% endfor %} {% endfor %}
