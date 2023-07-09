/*Desafio 3: Escribe una función que reciba una cadena de texto y devuelva un objeto que contenga
el número de ocurrencias de cada letra en la cadena.*/

const textoEstatico = "Hola mundo";
const obtenerOcurrenciasLetras = (texto) => {
 const letras = texto.toLowerCase().replace(/[^a-z]/g, '').split('');
 const ocurrencias = {};
 for (const letra of letras) {
 ocurrencias[letra] = (ocurrencias[letra] || 0) + 1;
 }
 return ocurrencias;
};
const ocurrencias = obtenerOcurrenciasLetras(textoEstatico);
console.log(ocurrencias);