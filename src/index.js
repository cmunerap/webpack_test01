// Sistema de módulos CommonJS
// const sum = require('./sum');

//Ahora vamos a usar sistema de módulos es2015
import sum from './sum';
import './image_viewer'; //image_viewer no exporta nada... solo garantizamos que se ejecute y ya

const total = sum(10, 5);

console.log(total);