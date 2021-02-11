+++
author = "Hugo Authors"
title = "Custom Shortcode provided by Inkblotty"
date = "2021-02-11"
description = "Sample article insert table of contents."
tags = [
    "custom shortcodes",
]
categories = [
    "themes",
    "syntax",
]
archives = "2021/02"
#series = ["Themes Guide"]
+++
Inkblotty provides custom shortcode.

<!--more-->

## Table Of Contents
### Configuration
config.toml:
``` toml
[markup]
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 3
    ordered = false
```

- **startLevel**: The heading level, values starting at 2 (h2), to start render the table of contents.
- **endLevel**: The heading level, inclusive, to stop render the table of contents.

**c.f.** https://gohugo.io/getting-started/configuration-markup/#table-of-contents

### Markdown Sample
CODE:
```
{{</* toc */>}}
```

PREVIEW:
{{< toc >}}