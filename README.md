# Starter Theme for Timber & Foundation 6

This is a basic starter theme for using [Foundation for Sites 6](http://foundation.zurb.com/sites) and [Timber](https://github.com/jarednova/timber) together.

It's the [timber-starter-theme](https://github.com/upstatement/timber-starter-theme), and [foundation-sites-template](https://github.com/zurb/foundation-sites-template), with some of [foundation-zurb-template](https://github.com/zurb/foundation-zurb-template) mixed in. Please look at those repos for more detailed information.

Features:
- Sass compilation and prefixing
- Sass sourcemaps
- JavaScript concatenation
- For production builds:
    - CSS compression
    - JavaScript compression

## Installation

Download it into your themes directory with Git:

```bash
git clone https://github.com/hbrok/timber-foundation-starter-theme.git theme-name
```

Open the folder in your command line, and install the needed dependencies:
```bash
cd theme-name
npm install
bower install
```
Run `gulp watch` to run gulp. It will re-run every time you save a Sass or JavaScript file.
