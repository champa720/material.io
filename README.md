[![Build Status](https://travis-ci.org/champa720/hse-materialize.svg?branch=master)](https://travis-ci.org/champa720/hse-materialize)

# Jason's Classroom

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