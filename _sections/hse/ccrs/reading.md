---
title: Reading Standards
author: Adult Education Initiatives

subject: HSE
category: High School Equivalency
chapter: 2
section: 2.2
tag: CCRS

excerpt: "To become college and career ready, students need to grapple with works of exceptional craft and thought whose range extends across genres, cultures, and centuries. By engaging with increasingly complex readings, students gain the ability to evaluate intricate arguments and the capacity to surmount the challenges posed by complex texts."

source: https://www.cde.state.co.us/cdeadult/ccrs
pdf: https://lincs.ed.gov/publications/pdf/CCRStandardsAdultEd.pdf

---
To become college and career ready, students need to grapple with works of exceptional craft and thought whose range extends across genres, cultures, and centuries. By engaging with increasingly complex readings, students gain the ability to evaluate intricate arguments and the capacity to surmount the challenges posed by complex texts. Standards 1 and 10 play a special role since they operate whenever students are reading: Standard 1 outlines the command of evidence required to support any analysis of text (e.g., analyzing structure, ideas, or the meaning of word as defined by Standards 2-9); Standard 10 defines the range and complexity of what students need to read.

### Reading Strand

**Key:** The citation at the end of each standard in the following chart identifies the CCSS
strand, grade, and number (or standard number and letter, where applicable).

*For example, RI.4.3 stands for Reading, Informational Text, Grade 4, Standard 3.*

- RI: Reading Informational Text
- RL: Reading Literature
- RH: Reading Historical/Social Studies Text
- RST: Reading Scientific and Technical Text

{% for standard in site.data.ccrs.reading %}
#### {{ standard.title }}

{{ standard.description }}

{% for level in standard.level-specific %}
##### {{ level[0] }}

{% for description in level[1] %}
- {{ description }}

{% endfor %} {% endfor %} {% endfor %}
