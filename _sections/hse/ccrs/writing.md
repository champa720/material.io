---
title: Writing Standards
author: Adult Education Initiatives

subject: HSE
category: High School Equivalency
chapter: 2
section: 2.3
tag: CCRS

excerpt: "To be college and career ready writers, students must take task, purpose, and audience into careful consideration, choosing words, information, structures, and formats deliberately. The Writing Standards cultivate the development of three mutually reinforcing writing capacities: crafting arguments, writing to inform and explain, and fashioning narratives about real or imagined experiences."

source: https://www.cde.state.co.us/cdeadult/ccrs
pdf: https://lincs.ed.gov/publications/pdf/CCRStandardsAdultEd.pdf

---
To be college and career ready writers, students must take task, purpose, and audience into careful consideration, choosing words, information, structures, and formats deliberately. The Writing Standards cultivate the development of three mutually reinforcing writing capacities: crafting arguments, writing to inform and explain, and fashioning narratives about real or imagined experiences. The overwhelming focus of writing throughout the levels is on arguments and informative/explanatory texts. Writing Standard 9 is a standout because it stresses the importance of the writing-reading connection by requiring students to draw upon and use evidence from literary and informational texts as they write arguments or inform/explain. Because of the centrality of writing to most forms of inquiry, research standards are prominently included in this strand as well.

### Writing Strand

**Key:** The citation at the end of each standard in the following chart identifies the CCSS
strand, grade, and number (or standard number and letter, where applicable).

*For example, W.5.1a stands for Writing, Grade 5, Standard 1a.*

- W: Writing
- WHST: Writing for History/Social Studies, Scientific and Technical Subjects

{% for standard in site.data.ccrs.writing %}
#### {{ standard.title }}

{{ standard.description }}

{% for level in standard.level-specific %}
##### {{ level[0] }}

{% for description in level[1] %}
- {{ description }}

{% endfor %} {% endfor %} {% endfor %}
