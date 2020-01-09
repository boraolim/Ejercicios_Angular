// Archivo de configuración principal de JS.
// Importar un archivo de JS.
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;

// Generamos las tareas.
gulp.task("serve", function (cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.js").on("change", reload);
    gulp.watch("*.css").on("change", reload);
});

