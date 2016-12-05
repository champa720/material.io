[![Build Status](https://travis-ci.org/champa720/hse-materialize.svg?branch=master)](https://travis-ci.org/champa720/hse-materialize)

# Jason's Classroom

## Organization

Collections
  * Subject Area (Mathematics, Reading, Science, Social Studies...)

Categories
  * Content (CCA, CCB, GED, HiSET...)

Tags
  * Sub-Content (Number Sense, Algebra, Literary Text, Informational Text...)

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

# Tags

```
Mathematics: [Algebra, Data Analysis, Number Sense, Probability]
Reading: [Literary, Informational]
Science: [Life, Physical, Earth & Space]
Social Studies: [Civics & Government, History, Economics, Geography]
Writing: []

```