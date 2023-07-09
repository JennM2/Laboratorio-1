/*Desafío 1: Escribe una función que reciba un arreglo de números y devuelva otro arreglo*/

const numerosEstaticos = [2, 4, 5, 6, 9, 10, 13];
const obtenerNumerosParesAlCuadradoMayoresQueDiez = (numeros) => {
 return numeros
 .filter(numero => numero % 2 === 0)
 .map(numero => numero ** 2)
 .filter(numero => numero > 10);
};
const numerosFiltrados = obtenerNumerosParesAlCuadradoMayoresQueDiez(numerosEstaticos);
console.log(numerosFiltrados); // [16, 36, 100]