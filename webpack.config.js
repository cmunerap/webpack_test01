const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js', //Punto de entrada, puede ser una ruta relativa
	output: {
		path: path.resolve(__dirname, 'build'), //Esto no puede ser una ruta relativa como en 'entry'. En este caso debe ser una ruta absoluta. 'path.resolve()' resuelve la ruta actual del proyecto sin importar si es linux, mac o windows. __dirname es una variable de node que es una referencia al directorio actual
		filename: 'bundle.js' //Por convención, normalmente es este nombre. Puede ser el que sea
	},
	module: {
		rules: [
			{
				use: 'babel-loader', //babel-loader necesita el archivo .babelrc para saber como operar
				test: /\.js$/ //Busca archivos .js
			},
			// {
			// 	//css-loader: save como lidiar con css imports
			// 	//style-loader: Toma el import de css y lo añade al documento HTML
			// 	//Los loaders se ejecutan de derecha a izquerda, cuando se pasan como array
				
			// 	//Esto en definitiva, va a coger el css, va a crear un montón de funciones en nuestro código
			// 	// que le permitirán usar ese string de css y luego el javascript
			// 	// al momento de ejecutarse, lo va a inyectar en el DOM, en el HEAD
				
			// 	//...y pa' acabar de ajustar, a pesar de todo este código,
			// 	// Tobias Koppers, el creador de estos plugins dice que 
			// 	// pueden haber problemas con algunos media querys medio raros!!

			// 	//Otra forma de lidiar con esto sería simplemente leer los css
			// 	// simplemente unificarlos y añadir el css de forma independiente
			// 	// además, esta forma es más rápida porque le permite al navegador
			// 	// lidiar con el css de forma paralela. Mientras que en js
			// 	// todo se maneja con el proceso que lidia con la ejecución de js
			// 	use: ['style-loader', 'css-loader'],
			// 	test: /\.css$/
			// }
			{
				//Entonces, esta va a ser la nueva forma de cargar el css
				//usando el loader extract-text-webpack-plugin
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}), //loader es como use, pero por la forma como trabaja este plugin, mejor se usa loader en lugar de use, por ser una forma más compatible para el plugin
				test: /\.css$/
			},
			{
				//image loader.. primero, todos estos tipos de archivos
				//jpe?g: jpeg o jpg
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					//url-loader necesita una configuración especial. Los tamaños de imágenes
					//'url-loader', 
					{
						loader: 'url-loader',
						options: { limit: 40000 } //Más de 40kb, en archivo. Menos de 40k, en el bundle (serializado)
					},
					'image-webpack-loader' //primero se aplica este
				]
			}
		]
	},
	plugins: [
		//Esta línea de aqui le va a decir al plugin ExtractTextPlugin que coja cualquier archivo 
		// transformado por su loader, definido arriba, y lo va a guardar en el archivo que se especifica
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;

/*
Para las imágenes vamos a usar dos loaders:
image-webpack-loader
url-loader


*/