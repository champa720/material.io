[![Build Status](https://travis-ci.org/champa720/hse-materialize.svg?branch=master)](https://travis-ci.org/champa720/hse-materialize)

# Jason's Classroom

How-to update CSS `assets/css/main.css`

[CHANGELOG: material-components-web](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md)

Check for outdated packages
```
npm update --save-dev
npm outdated
```

Update material-components-web
```
npm install material-components-web@latest --save-dev
npm start
```

Reset node_modules
```
rm -rf node_modules
npm install --save-dev
```

## Organization

Collections
  * Subject Area (HSE, Mathematics, Reading, Science, Social-Studies...)

Categories
  * Content (Common Core Achieve, Common Core Basics, High School Equivalency...)

Tags
  * Sub-Content (Number Sense, Algebra, Literary Text, Informational Text, GED, HiSET...)

## Structure

```
+-- _chapters
|   +-- subjects
|   |   +-- category
|   |   |   +-- chapter-1.md
|   |   |   +-- chapter-2.md
|   |   |   +-- chapter-3.md
```

```
+-- _sections
|   +-- subjects
|   |   +-- category
|   |   |   +-- chapter-1
|   |   |   |   +-- Section-1.1.md
|   |   |   |   +-- Section-1.2.md
|   |   |   +-- chapter-2
|   |   |   |   +-- Section-2.1.md
```
## Section front-matter:

```
---
title: Reading 1.1A

subject: Reading
category: Common Core Achieve
chapter: 1
section: 1.1
tag: Earth & Space
---
```

## Tags

```
Mathematics: [Algebra, Data Analysis, Number Sense, Probability]
Reading: [Literary, Informational]
Science: [Life Science, Physical Physical, Earth & Space Science]
Social Studies: [Civics & Government, US History, Economics, Geography]
Writing: []

HSE: [CDE, GED, HiSET, TASC]
```

## Lesson front-matter

```
title:
author:

subject:
category:
chapter:
section:
tag:

excerpt:

section_overview:
-
  title: Materials
  content:
  -
-
  title: Standards
  content:
    - CCR Anchor 4
    - CCR Anchor 5
-
  title: Objectives
  content:
    -
-
  title: Key Concept
  content:
-
  title: Vocabulary
  content:
    Tier 2:
      -
    Tier 3:
      -
-
  title: Evidence-Based Reading
  content:
-
  title: 21st Century Skill
  content:
-
  title: Writing Practice
  content:

```
