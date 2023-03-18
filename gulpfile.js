let gulp = require("gulp");
let clean = require("gulp-clean");
let filter = require("gulp-filter");
let fontmin = require("gulp-fontmin");
let concat = require("gulp-concat");
let through = require("through2");

async function minifyFont(text) {
    gulp.src("src/font/*", { read: false }).pipe(clean());

    gulp.src("src/font-raw/*.ttf")
        .pipe(fontmin({ text }))
        .pipe(gulp.dest("src/font"))
        .pipe(filter(["*.css"]), { read: false })
        .pipe(clean());
}

gulp.task("default", async function () {
    gulp.src(["src/**/*.js", "src/**/*.vue", "src/**/*.yml", "public/**/*.html"])
        .pipe(concat("Content.tmp"))
        .pipe(
            through.obj((chunk, enc, cb) => {
                let text = chunk._contents.toString(enc);
                minifyFont(text);
                cb(null, chunk);
            })
        );
});
