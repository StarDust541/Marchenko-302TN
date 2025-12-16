const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const del = require('del');

// Шляхи до файлів
const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    }
};

// 1. Очищення папки dist (delete)
function clean() {
    return del(['dist']);
}

// 2. Робота з SCSS (компіляція + мініфікація + перейменування)
function styles() {
    return src(paths.styles.src)
        .pipe(sass().on('error', sass.logError)) // Компіляція
        .pipe(concat('style.css')) // Конкатенація (якщо декілька файлів)
        .pipe(dest(paths.styles.dest)) // Збереження звичайного CSS
        .pipe(cssnano()) // Оптимізація CSS
        .pipe(rename({ suffix: '.min' })) // Перейменування
        .pipe(dest(paths.styles.dest)); // Збереження .min.css
}

// 3. Робота з JS (конкатенація + оптимізація)
function scripts() {
    return src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(uglify()) // Оптимізація JS
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(paths.scripts.dest));
}

// 4. Оптимізація зображень
function images() {
    return src(paths.images.src)
        .pipe(imagemin())
        .pipe(dest(paths.images.dest));
}

// 5. Копіювання HTML
function html() {
    return src(paths.html.src)
        .pipe(dest(paths.html.dest));
}

// 6. Автоматичний перегляд файлів (Watch)
function watcher() {
    watch(paths.styles.src, styles);
    watch(paths.scripts.src, scripts);
    watch(paths.images.src, images);
    watch(paths.html.src, html);
}

// Експорт завдань
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watcher;

// Головна задача (build)
exports.default = series(clean, parallel(html, styles, scripts, images), watcher);