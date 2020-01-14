// Archivo de configuración principal de JS.
// Importar un archivo de JS.
// Fuente: https://es.stackoverflow.com/questions/218419/problemas-al-actualizar-de-gulp-3-a-4-task-function-must-be-specified
var gulp        = require("gulp");
var notify      = require("gulp-notify");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;
var sass        = require("gulp-sass");
// var concat      = require('gulp-concat');
// var uglify      = require('gulp-uglify-es').default;
// var ngAnnotate  = require('gulp-ng-annotate');

// Variables de carpetas.
var rootHtml = ["*.html", "views/*.html"];
var cssFolder = "app/scss/*.scss";
var jsFolder = "src/**/*.js";

// Variables para los archivos de estilos CSS3 tipo SCSS.
var srcScss = "app/scss/*.scss";
var finalCssMinified = "app/css/";

// Variables para los archivos de JavaScript.
var srcJs = ["src/index.module.js",
             "src/products-details.directive.js",
             "src/index.boolean.filter.js",
             "src/index.Identifier.filter.js",
             "src/index.login_Service.js",
             "src/index.blog_Service.js",             
             "src/bootstrap/index.bs_alert_controller.js",
             "src/bootstrap/index.bs_modal_controller.js",
             "src/bootstrap/index.bs_tabs_controller.js",
             "src/index.index_controller.js",
             "src/index.navBar_controller.js",
             "src/index.login_controller.js",
             "src/index.blogActivo_controller.js",
             "src/index.blogEliminado_controller.js"];
var destJs = "app/dist/";
var finalJsMinified = "all.min.js";

// Inicialización de browser-sync.
gulp.task("server_init", (cb) => {
    browserSync.init({
        port: 3005,
        server: {
            baseDir: "./"
        }
    });

    // Archivos HTML.
    gulp.watch(rootHtml).on("change", reload);

    // Archivos SASS.
    gulp.watch(cssFolder, gulp.series("styles"), cb).on("change", reload);

    // Archivos de JavaScript.
    gulp.watch(jsFolder).on("change", reload);
});

// Tarea secundaria para generar los scripts de Javascript minificados.
/*
gulp.task("scripts", () => {
    return gulp.src(srcJs)
               .pipe(ngAnnotate())
               .pipe(uglify())
               .pipe(concat(finalJsMinified))
               .pipe(gulp.dest(destJs))
               .pipe(notify("Proceso de reducción de scripts realizado correctamente."));
});
*/

// Generación de estilos CSS3 desde SCSS.
gulp.task("styles", () => {
    return gulp.src(srcScss)
               .pipe(sass())
               .pipe(reload({ stream:true })) 
               .pipe(gulp.dest(finalCssMinified))
               .pipe(notify("Proceso de reducción de archivos SASS realizado correctamente."));
});

// Tarea principal. => Finalmente se ejecuta la tarea final.
gulp.task("default", gulp.parallel("server_init", "styles"));

// Fin de la configuración de gulp.