// const { series, parallel,src } = require('gulp');

// function hola(done) {// done puder "terminado","finalizado" es solo un nombre o identificador
//   console.log('hola mundo');

//   done(); // termina la tarea hola
// }

// exports.hola = hola; //el primer hola va a ser el comando con el cual vas a llamar a la tarea "hola"

// function css(done) {
//   console.log('compilando SASS...');
//   done();
// }
// function javascript(done) {
//   console.log('compilando JavaScript...');
//   done();
// }

// exports.css = css;
// exports.javascript = javascript;
// exports.tareas = series(css, javascript); //ejecuta las dos tareas en forma secuencial
// exports.default = parallel(css,javascript)//ejecuta las dos tareas al mismo tiempo //si usas default no necesitas pasar el comando en la terminal solo escribes "gulp"

// const { series, parallel, src, dest } = require('gulp');

// const sass = require('gulp-sass');

// //Funcion que compila SASS

// function css() {
//   return src('src/scss/app.scss') //Localiza la carpeta con la oja de stylos
//     .pipe(sass()) //ejecuta sass
//     .pipe(dest('./bulid/css')); //Le dice en que carpeta se guarda la version compilada
// }

// exports.css = css;
