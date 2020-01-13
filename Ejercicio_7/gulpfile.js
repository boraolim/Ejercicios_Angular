// Archivo de configuración principal de JS.
// Importar un archivo de JS.
var gulp        = require("gulp");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;
var sass        = require("gulp-sass");
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify-es').default;
var ngAnnotate  = require('gulp-ng-annotate');

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
    
    // Archivos SASS.
    gulp.watch("app/scss/*.scss", generateStyles).on("change", reload);

    // Archivos de JavaScript.
    gulp.watch("src/*.js", generateScripts).on("change", reload);
    // runSequence('generateStyles', cb);
});

// Fuente: https://github.com/Kagami/gulp-ng-annotate
function generateScripts() {
    return gulp.src(["src/index.module.js",
                     "src/index.boolean.filter.js",
                     "src/index.Identifier.filter.js",
                     "src/index.login_Service.js",
                     "src/index.blog_Service.js",
                     "src/index.login_Controller.js",
                     "src/index.blogActivo_controller.js",
                     "src/index.blogEliminado_controller.js"
                    ])
               .pipe(ngAnnotate({ remove: true, add: true }))
               .pipe(uglify())
               .pipe(concat('all.min.js'))
               .pipe(gulp.dest("app/dist/"));
}

// Función asincrona para ejecutar los cambios a archivos css.
function generateStyles() {
    return gulp.src("app/scss/*.scss")
               .pipe(sass())
               .pipe(reload({ stream:true })) 
               .pipe(gulp.dest("app/css/"));
}