// //import { series, src, dest, watch } from 'gulp'; Forma EM6
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
//const notify = require('gulp-notify');
const webp = require('gulp-webp');

const paths = {
  imagenes: 'src/img/**/*',
  scss: 'src/scss/**/*.scss',
};

function css() {
  return src(paths.scss)
    .pipe(sass({ outputStyle: 'expanded' })) //expanded expande el codigo  //compressed comprime el codigo css.
    .pipe(dest('./build/css'));
}
function minificarcss() {
  return src(paths.scss)
    .pipe(sass({ outputStyle: 'compressed' })) //expanded expande el codigo  //compressed comprime el codigo css.
    .pipe(dest('./build/css'));
}

function imagenes() {
  return src(paths.imagenes) //Busca las imagenes en la carpta img
    .pipe(imagemin()) //
    .pipe(dest('./build/img'));
  //.pipe(notify({ message: 'Imagen Minificada' }));
}

function versionWebp() {
  return src(paths.imagenes) //Busca las imagenes en la carpta img
    .pipe(webp()) //
    .pipe(dest('./build/img'));
  //.pipe(notify({ message: 'Imagen Webpeada' }));
}

function wacthArchivos() {
  watch(paths.scss, css); // *= la carpeta actual  **= todos los archivos con esa extencion
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.wacthArchivos = wacthArchivos;
exports.versionWebp = versionWebp;
exports.default = series(css, imagenes, wacthArchivos);
