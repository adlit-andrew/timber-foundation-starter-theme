var $        = require('gulp-load-plugins')();
var gulp     = require('gulp');
var sequence = require('run-sequence');

// Set if in production
var isProduction = false;

// Browsers to target when prefixing CSS.
var COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// File paths to various assets are defined here.
var PATHS = {
    sass: [
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src/',
        'src/scss'
    ],
    javascript: [
        // 'bower_components/jquery/dist/jquery.js',
        // 'bower_components/what-input/what-input.js',
        'bower_components/foundation-sites/js/foundation.core.js',
        'bower_components/foundation-sites/js/foundation.util.*.js',
        // Paths to individual JS components defined below
        // 'bower_components/foundation-sites/js/foundation.abide.js',
        // 'bower_components/foundation-sites/js/foundation.accordion.js',
        // 'bower_components/foundation-sites/js/foundation.accordionMenu.js',
        // 'bower_components/foundation-sites/js/foundation.drilldown.js',
        // 'bower_components/foundation-sites/js/foundation.dropdown.js',
        // 'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
        // 'bower_components/foundation-sites/js/foundation.equalizer.js',
        // 'bower_components/foundation-sites/js/foundation.interchange.js',
        // 'bower_components/foundation-sites/js/foundation.magellan.js',
        // 'bower_components/foundation-sites/js/foundation.offcanvas.js',
        // 'bower_components/foundation-sites/js/foundation.orbit.js',
        // 'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
        // 'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
        // 'bower_components/foundation-sites/js/foundation.reveal.js',
        // 'bower_components/foundation-sites/js/foundation.slider.js',
        // 'bower_components/foundation-sites/js/foundation.sticky.js',
        // 'bower_components/foundation-sites/js/foundation.tabs.js',
        // 'bower_components/foundation-sites/js/foundation.toggler.js',
        // 'bower_components/foundation-sites/js/foundation.tooltip.js',
        'src/js/app.js'
    ]
};

// Compile Sass into CSS
// In production, the CSS is compressed
gulp.task('sass', function() {
    var minifycss = $.if(isProduction, $.minifyCss());

    return gulp.src('src/scss/app.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
                includePaths: PATHS.sass
            })
            .on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: COMPATIBILITY
        }))
        .pipe(minifycss)
        .pipe($.if(!isProduction, $.sourcemaps.write()))
        .pipe(gulp.dest('css'));
});

// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', function() {
    var uglify = $.if(isProduction, $.uglify()
        .on('error', function (e) {
            console.log(e);
        }));

    return gulp.src(PATHS.javascript)
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.concat('app.js'))
        .pipe(uglify)
        .pipe($.if(!isProduction, $.sourcemaps.write()))
        .pipe(gulp.dest('js'));
});

// Build the site and watch for file changes, including changes to this gulpfile
gulp.task('watch', ['default'], function() {
    gulp.watch('gulpfile.js', ['default']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['javascript']);
});

// Build the "dist" folder by running all of the above tasks
gulp.task('default', function(done) {
    sequence(['sass',  'javascript'], done);
});
