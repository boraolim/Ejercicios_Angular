// Archivo de configuración principal de JS.
// Importar un archivo de JS.
var gulp        = require("gulp");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;
var sass        = require("gulp-sass");
var ngAnnotate  = require('ng-annotate');
var concat      = require('gulp-concat');

// Generamos las tareas.
gulp.task("serve_init", function (cb) {
    browserSync.init({
        port: 3005,
        server: {
            baseDir: "./"
        }
    });

    // Archivos HTML.
    gulp.watch("*.html").on("change", reload);
    gulp.watch("views/*.html").on("change", reload);
    gulp.watch("app/css/*.css").on("change", reload);
    
    // Scripts de JavaScript.
    gulp.watch("default-src/*.js").on("change", reload);

    // Archivos SASS.
    gulp.watch("app/scss/*.scss", generateStyles).on("change", reload);

    gulp.watch("app/dist/*.js", generateAnnotate).on("change", reload);
});

// Función asincrona para ejecutar los cambios a archivos css.
function generateStyles() {
    return gulp.src("app/scss/*.scss")
               .pipe(sass())
               .pipe(reload({ stream:true })) 
               .pipe(gulp.dest("app/css/"));
}

// Funcion que usa gulp-ng-annotate y gulp-concat.
function generateAnnotate() {
    return gulp.src("default-src/*.js")
               .pipe(concat("all.min.js", { newLine: ";" }))
               .pipe(ngAnnotate({ add: true }))
               .pipe(bytediff.start())
               .pipe(uglify({ mangle: true }))
               .pipe(bytediff.stop())
               .pipe(gulp.dest('app/dist/'));
}