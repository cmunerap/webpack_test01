const sum = (a, b) => a + b;

// Explicitamente la exportamos para que otros módulos la puedan usar
// Aqui usamos sistema de módulos CommonJS
// module.exports = sum;


// Ahora querémos usar sistema de módulos es2015
export default sum;