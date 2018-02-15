// import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

// const image = document.createElement('img');
// image.src = small;
// // image.src = 'http://lorempixel.com/400/400';
// // image.src = 'https://picsum.photos/400/400';
// // image.src = 'http://pipsum.com/400x400.jpg';

// document.body.appendChild(image);

// Esta función es para demostrar el uso de code spliting

export default () => {
	const image = document.createElement('img');
	image.src = small;
	document.body.appendChild(image);
}



//Para efectos de demostrar code spliting, comentarémos la carga de la imágen grande!!


// const bigImage = document.createElement('img');


// Así no va a coger la imágen porque el valor de big parece ser 
// el nombre del archivo, y al asignarlo directamente no tenémos en
// cuenta que está en realidad en la carpeta build. Está tratando
// de cogerla desde un directorio incorrecto.

// Para solucionar esto, vamos a hacer un cambio en la configuración
// de output de webpack agregando el atributo publicPath.

// Al agregar esto, URL loader emite la url del archivo utilizando
// output.publicPath antepuesto a la url... wtf??

// Es un poco inesperado porque lo más entendible sería que en las opciones
// de url-loader hubiera alguna propiedad que permita indicar el path
// que se debe anteponer a la URL cuando se hace el import de un archivo
// largo. En su lugar, url-loader se va al atributo output.publicPath para
// ver cual es el path que debe anteponer.

// Lo bueno de esta solución, es que si hay muchos otros loaders que necesiten
// hacer lo mismo, como el de css por ejemplo, van a ir a buscar el
// publicPath desde el mismo lugar... un solo lugar centralizado

// bigImage.src = big;

// document.body.appendChild(bigImage);