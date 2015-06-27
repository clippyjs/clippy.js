/**
 * Gulp Build
 * https://www.smore.com/clippy-js
 */

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    minify = require("gulp-minify-css"),
    concat = require("gulp-concat"),
    pngquant = require("imagemin-pngquant"),
    rename = require("gulp-rename"),
    imagemin = require("gulp-imagemin");

gulp.task("build-mapfile-image", function () {
    return gulp.src("agents/**/*.png")
        .pipe(imagemin({progressive: true, use: [pngquant()]}))
        .pipe(gulp.dest("build/agents"));
});

gulp.task("build-mapfile", function () {
    return gulp.src(["agents/**/*", "!agents/**/*.png", "!agents/**/*.js"])
        .pipe(gulp.dest("build/agents"));
});

gulp.task("build-agents", function () {
    return gulp.src("agents/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("build/agents"));
});

gulp.task("build-css", function () {
    return gulp.src("src/clippy.css")
        .pipe(gulp.dest("build"))
        .pipe(minify())
        .pipe(gulp.dest("build"))
        .pipe(rename("clippy.min.css"))
        .pipe(gulp.dest("build"))
});

gulp.task("build-js", function () {
    return gulp.src("src/**/*.js")
        .pipe(concat("clippy.js"))
        .pipe(gulp.dest("build"))
        .pipe(uglify())
        .pipe(rename("clippy.min.js"))
        .pipe(gulp.dest("build"));
});

gulp.task("default", ["build-js", "build-css", "build-agents", "build-mapfile","build-mapfile-image"]);
