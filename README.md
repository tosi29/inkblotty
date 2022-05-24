# Inkblotty
Inkblotty is a Hugo theme based on [Inkblot](https://github.com/mgsisk/inkblot).  

[Demo](https://hugo-theme-inkblotty.netlify.com)

## Features

- Responsive Design
- Article
  - Share Button (Facebook, Twitter, Hatena Bookmark)
  - Comment form (Disqus)
  - Related Posts
  - Table of Contents by shortcode
- Article list
  - Summarize and Readmore
- Sidebar
  - Category list
  - Tag cloud
  - Recent Posts
  - Archives
- Others
  - Google Analytics
  - Sitemap XML
  - RSS
  - Opengraph / Twitter Card

## Requirements
- Hugo 0.81 or newer

## Installation
1. Put theme directory into `themes` of your hugo site.
   - Run git command in `themes` directory:
     ```
     git clone https://github.com/tosi29/inkblotty.git
     ```
   - Or, download and extract [zip file](https://github.com/tosi29/inkblotty/archive/master.zip), and put directory into `themes` directory as `inkblotty`.

2. Edit `config.toml` of your hugo site.

## Configuration
### Sample configuration file
[exampleSite/config.toml](https://github.com/tosi29/inkblotty/blob/master/exampleSite/config.toml) is for reference.

### Table of Contents
This theme has shortcode to create Table of Contents.  
To insert Table of Contents, write the following code in markdown.
```
{{< toc >}}
```

This is sample configuration of TOC in `config.toml`
```
[markup] 
  	[markup.tableOfContents] 
    	startLevel = 1
    	endLevel = 3
    	ordered = false
```
If you set `startLevel = 2`, `<h1>` tag is ignored.


### Favicon
Put `favicon.ico` file in `static` directory to set favicon.

### Code block with title
This theme provides the feature to display title in code block.


    ```toml { fn="config.toml" }
    title = "Inkblotty"
    author = "Author"
    theme = "inkblotty"
    paginate = 10
    ...
    ```

![Code](/images/codeblock.png)
