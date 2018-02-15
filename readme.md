# Webpack

Es un empaquetador de módulos. Cuando webpack procesa crea un grafo de dependencias que incluye cada módulo que la aplicación necesita. Luego, empaqueta todos esos módulos en uno o varios paquetes (bundles =? manojos).

## Conceptos

* Entry
* Output
* Loaders
* Plugins

### Entry

Indica el módulo que webpack debe usar para empezar a construir el grafo de dependencias interno. Después de especificar el punto de entrada, webpack resuelve los otros módulos y librerías de los que depende cada módulo, directa o indirectamente.

Cada dependencia es luego procesada y puesta en la salida en archivos llamados "bundles".

Uno puede especificar un punto de entrada o varios al configurar la propiedad "entry" en la configuración de webpack.

webpack.config.js

```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```


### Output

Para decirle a webpack donde emitir los bundles que el crea y como nombrar estos archivos

webpack.config.js

```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

Con múltiples puntos de entrada:

```
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}

// writes to disk: ./dist/app.js, ./dist/search.js
```

### Loaders

Los loaders habilitan a webpack para procesar más que solo archivos javascript (Webpack de por si solo entiende javascript). Los loaders nos dan la habilidad de liberar las capacidades de ramificar de webpack para todo tipo de archivos convirtiendolos en módulos válidos que webpack pueda procesar.

En esencia, los loaders transforman todo tipo de archivos en módulos que puedan ser incluidos en el grafo de dependencias de nuestra aplicación, y eventualmente en un bundle.

A alto nivel, los loaders tienen dos propósitos en la configuración de webpack.

	1. La propiedad 'test' que identifica que archivo o archivos deben ser transformados.
	2. La propiedad 'use' que indica que loader debe ser usado para hacer la transformación de ese tipo de archivos.


webpack.config.js
```
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```

El ejemplo anterior está diciendole a webpack lo siguiente:

"Hey, compilador webpack: Cuando te encuentres con un camino que resuelva un archivo '.txt' dentro de una sentencia  'require()'' o un 'import', use el loader 'raw-loader' para transformarlo antes de añadirlo al bundle."


### Plugins

Mientras que los loaders se usan para transformar ciertos tipos de módulos, los plugins se pueden aprovechar para realizar una mayor gama de tareas. Los plugins permiten optimizar los paquetes, minificación, definición de variables de entorno. La interfaz de los plugins es extremadamente potente y puede ser usada para abordar una gran variedad de tareas.

Para usar un plugin, uno tiene que requerirlo 'require()' y añadirlo al array de plugins. Algunos plugins son configurables a través de opciones. Y como uno puede usar un plugin varias veces en la configuración para diferentes propósitos, se debe crear una instancia de cada plugin con el operador new.

webpack.config.js

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```

Como se puede ver en el ejemplo anterior, hay algunos plugins incorporados en webpack y otros que se deben instalar por npm. En este link está la lista de plugins incorporados: https://webpack.js.org/plugins


***

# Module Systems in javascript

## CommonJS

Sistema implementado por NodeJS

keywords:

* require
* module.exports


## AMD

Asynchronous Module Definition

Más comunmente utilizado en aplicaciones front end. Múltiples módulos pueden ser cargados de forma asincrona

keywords:

* require
* define


## es215

Más que todo en navegadores modernos. Es la sintaxis y forma usadas por los desarrolladores de es2015

keywords:

* import
* export


## Que se va a usar en node?

CommonJS


## Entry

Va a ser el módulo que no exporte nada y que tenga dependencias


## Ejecutar webpack

Por medio de un script en package.json
Porqué? Porque con 'npm run webpack' se va a ejecutar la copia de webpack almacenada en node_modules. No se necesita que esté global

La desventaja de hacerlo de forma global es que solo se puede tener una versión a la vez. En cambio local, puedo tener diferentes versiones por proyecto


***

# Techniques

## Code spliting

Permite cargar solo la mínima cantidad de js necesaria para mostrar un formulario o componente específico. Está en el login? perfecto... muestre lo mínimo necesario. Ok, ahora, estas en el dashboard? Entonces carga el resto del js.

Con esto, lo que va a hacer webpack es que va a crear diferentes bundles como para cada página, para cargar solo lo que se necesita

No es un loader como tal. Simplemente si webpack se dá cuenta de que estámos usando code spliting por el uso de System.import, automáticamente él detecta que estamos haciendo esto, agrega algo de código al chunk principal, lo cual le permite luego ir a buscar el nuevo chunk cuando se necesite.
