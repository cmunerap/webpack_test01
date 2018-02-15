// Sistema de módulos CommonJS
// const sum = require('./sum');

//Ahora vamos a usar sistema de módulos es2015
// import sum from './sum';
// import './image_viewer'; //image_viewer no exporta nada... solo garantizamos que se ejecute y ya

// const total = sum(10, 5);

// console.log(total);


////////////////////////////////////////////////////

//Vamos a hacer un cambio para demostrar el code spliting

const button = document.createElement('button');

button.innerText = 'Click me';
button.onclick = () => {
	//System es una variable global de javascript
	//System.import es una función especial de la especificación de módulos de es2015
	/*
	Client {button clicked}
	Client {System.import} call
	Client {Fetch image_viewer module} del server
	Server {Reply with image_viewer} hacia el cliente
	Client {Execute image_viewer}
	*/
	//Si image_viewer tiene imports, todo eso se va a traer... image_viewer junto con sus dependencias
	
	//Y ojo que esta es una operación async... luego podemos acceder a el módulo a través de una promesa
	System.import('./image_viewer').then(module => {
		console.log(module);
		module.default(); //Esto llama a la función que se exporta
	});
};

document.body.appendChild(button);