/*Desafio 2: Escribe una función que reciba un arreglo de objetos que representan personas, y
devuelva la persona más joven.*/

const personasEstaticas = [
 { nombre: "Juan", edad: 25 },
 { nombre: "María", edad: 30 },
 { nombre: "Pedro", edad: 20 },
 { nombre: "Ana", edad: 28 }
];
const obtenerPersonaMasJoven = (personas) => {
 return personas.reduce((personaMasJoven, personaActual) => {
 return personaActual.edad < personaMasJoven.edad ? personaActual : personaMasJoven;
 });
};
const personaMasJoven = obtenerPersonaMasJoven(personasEstaticas);
console.log(personaMasJoven); // { nombre: "Pedro", edad: 20 }