# Timber Foundation Starter Theme

This is a basic starter theme for using [Foundation for Sites 6](http://foundation.zurb.com/sites) and [Timber](https://github.com/jarednova/timber) together.

It is the [timber-starter-theme](https://github.com/upstatement/timber-starter-theme), and the [foundation-sites-template](https://github.com/zurb/foundation-sites-template), with some of the [foundation-zurb-template](https://github.com/zurb/foundation-zurb-template) mixed in. Please look at those repos for more detailed information.

Features:
- Sass compilation and prefixing
- Sass sourcemaps
- JavaScript concatenation
- For production builds:
	- CSS compression
	- JavaScript compression

## Installation

1. Download it into your themes directory with Git:

```bash
git clone https://github.com/zurb/foundation-sites-template themeame
```

2. pen the folder in your command line, and install the needed dependencies:
```bash
cd themename
npm install
bower install
```
Run `gulp watch` to run gulp. It will re-run every time you save a Sass or JavaScript file.

3. Activate the theme in Appearance > Themes.
4. Do your thing! And read [the Timber docs](https://github.com/jarednova/timber/wiki).



