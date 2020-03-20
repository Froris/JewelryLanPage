'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require("del");

const browserSync = require('browser-sync').create();
const cleanCSS = require("gulp-clean-css");

function gulpSass(){
    return gulp.src("./src/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        /* .pipe(concat("main.css")) */
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest("./public/styles/css"))
        .pipe(browserSync.stream())
}

// Запуск команд после изменений файлов 
function gulpWatch(){
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch("./src/scss/**/*.scss", gulpSass);
    gulp.watch("./src/scripts/index.js", gulpDev).on('change', browserSync.reload);
    gulp.watch("./public/**/*.html").on('change', browserSync.reload);
}

function clean(){
    return del(["./public/styles/css/main.css"]);
}

// ======================= PROJECT BUILDING ==========================

let isDev = true;

// Запуск сборщика в режиме "Production"
function gulpBuild(){
    isDev = false;
    // webConfig.mode = isDev ? "development" : "production";
    clean();
    gulpSass();
    return scripts();
}

// Запуск сборщика в режиме "Development"
function gulpDev(){
    isDev = true;
    // webConfig.mode = isDev ? "development" : "production";
    gulpSass()
    return scripts();
}

exports.clean = clean;
exports.watch = gulpWatch;
exports.build = gulpBuild;
exports.dev = gulpDev;