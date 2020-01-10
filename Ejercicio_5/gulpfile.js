// Archivo de configuración principal de JS.
// Importar un archivo de JS.
var gulp        = require("gulp");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;
var sass        = require("gulp-sass");

// Generamos las tareas.
gulp.task("serve", function (cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.js").on("change", reload);
    gulp.watch("./app/scss/*.scss", generateStyles).on("change", reload);
});

// Función asincrona para ejecutar los cambios a archivos css.
function generateStyles() {
   return gulp.src("./app/scss/*.scss")
               .pipe(sass())
               .pipe(reload({stream:true})) 
               .pipe(gulp.dest("./app/css/"));
}

