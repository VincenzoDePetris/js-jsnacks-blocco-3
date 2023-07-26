const primoNumero = parseInt(prompt("scrivi un numero"));
const secondoNumero = parseInt(prompt("scrivi un altro numero"));

if (secondoNumero > primoNumero) {
  var random = Math.floor(
    Math.random() * (secondoNumero - primoNumero + 1) + primoNumero
  );
}
var random = Math.floor(
  Math.random() * (primoNumero - secondoNumero + 1) + secondoNumero
);

console.log(random);
