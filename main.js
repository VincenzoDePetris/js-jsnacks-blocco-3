const primoNumero = parseInt(prompt("scrivi un numero"));
const secondoNumero = parseInt(prompt("scrivi un altro numero"));

var random = Math.floor(
  Math.random() * (secondoNumero - primoNumero + 1) + primoNumero
);

console.log(random);
