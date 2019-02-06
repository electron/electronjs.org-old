# Basecoat sites

A set of SCSS partials that work with the existing [Primer](https://github.com/primer/primer) toolkit to create resuable code and design patterns for GitHub's marketing sites.

## Getting Started

[Read the docs for more information](http://github.github.io/basecoat)

### Install via Bower - Recommended

```
$ bower install git@github.com:github/basecoat.git --save
```

This will install Primer, Octicons, and Basecoat to `/bower_components`. Include them in your site's main `scss` file [as shown below](#import-scss files).

### Manual Install

#### Install Primer
[Download the latest release](https://github.com/primer/primer/releases) of Primer. Copy the files to your site's `scss` folder.

#### Install Basecoat

[Download the latest release](https://github.com/github/basecoat/releases/latest) of Basecoat. Copy the files to your site's `scss` folder.

#### Install Octicons

[Download the latest release](https://github.com/github/octicons/releases/latest) of the Octicons. Copy `octicons.scss` to your site's `scss` folder. Copy the Octicon font files (`ttf`, `woff`, `svg`, `eot`) to your site's `fonts` folder. Don't forget to update the `$octicons-font-path` in `octicons.scss` to the correct location of the font files in your project.


### Import SCSS files

`@import` the `scss` files into your project's main `scss` file in this order:

```scss
//
// Import Octicons
//

@import "bower_components/octicons/octicons/octicons.css";

//
// Import Primer & Basecoat overrides
//

// Global requirements
@import "bower_components/primer-css/scss/variables";
@import "bower_components/primer-css/scss/mixins";
@import "bower_components/basecoat/scss/variables"; // Basecoat override

// Basecoat
@import "bower_components/primer-css/scss/normalize";
@import "bower_components/primer-css/scss/base";
@import "bower_components/primer-css/scss/type";
@import "bower_components/primer-css/scss/layout";
@import "bower_components/primer-css/scss/forms";
@import "bower_components/primer-css/scss/utility";
@import "bower_components/basecoat/scss/layout"; // Basecoat override
@import "bower_components/basecoat/scss/type"; // Basecoat override

// Components
@import "bower_components/primer-css/scss/alerts";
@import "bower_components/primer-css/scss/avatars";
@import "bower_components/primer-css/scss/blankslate";
@import "bower_components/primer-css/scss/counter";
@import "bower_components/primer-css/scss/buttons";
@import "bower_components/primer-css/scss/menu";
@import "bower_components/primer-css/scss/tabnav";
@import "bower_components/primer-css/scss/filter-list";
@import "bower_components/primer-css/scss/states";
@import "bower_components/primer-css/scss/tooltips";
@import "bower_components/basecoat/scss/buttons";
@import "bower_components/basecoat/scss/animation";
@import "bower_components/basecoat/scss/cards";
@import "bower_components/basecoat/scss/code";
@import "bower_components/basecoat/scss/footer";
@import "bower_components/basecoat/scss/icons";
@import "bower_components/basecoat/scss/page-headers";
@import "bower_components/basecoat/scss/navigation";
@import "bower_components/basecoat/scss/section";
@import "bower_components/basecoat/scss/tables";

// Utilities
@import "bower_components/primer-css/scss/flex-table";
@import "bower_components/primer-css/scss/truncate";
@import "bower_components/basecoat/scss/utility"; // Basecoat override

//
// Your site specific css goes here.
//

```
