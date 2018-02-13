const path = require('path');

const config = {
	entry: './src/index.js', //Punto de entrada, puede ser una ruta relativa
	output: {
		path: path.resolve(__dirname, 'build'), //Esto no puede ser una ruta relativa como en 'entry'. En este caso debe ser una ruta absoluta. 'path.resolve()' resuelve la ruta actual del proyecto sin importar si es linux, mac o windows. __dirname es una variable de node que es una referencia al directorio actual
		filename: 'bundle.js' //Por convención, normalmente es este nombre. Puede ser el que sea
	},
};

module.exports = config;