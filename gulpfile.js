"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function defaultTask(cb) {
	//console.log("gulp works");
	cb();
}
exports.default = defaultTask;

// SASS Task
gulp.task("sass", function () {
	return gulp
		.src("./sass/style.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("./"));
});

// Watch Task
gulp.task("watch", function () {
	gulp.watch("./sass/**/*.scss", gulp.series("sass"));
});
