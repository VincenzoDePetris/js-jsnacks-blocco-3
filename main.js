// TRACCIA UNO

// const primoNumero = parseInt(prompt("scrivi un numero"));
// const secondoNumero = parseInt(prompt("scrivi un altro numero"));

// if (secondoNumero > primoNumero) {
//   var random = Math.floor(
//     Math.random() * (secondoNumero - primoNumero + 1) + primoNumero
//   );
// }
// var random = Math.floor(
//   Math.random() * (primoNumero - secondoNumero + 1) + secondoNumero
// );

// console.log(random);

// TRACCIA DUE

// const primaParola = prompt("inserisci una parola");
// const secondaParola = prompt("inserisci un'altra parola");

// if (primaParola.length > secondaParola.length) {
//   console.log(primaParola);
// } else if (secondaParola.length > primaParola.length) {
//   console.log(secondaParola);
// } else {
//   console.log(primaParola + " " + secondaParola);
// }

// TRACCIA TRE

const arr = [];
let sum = 0;

while (sum < 50) {
  const numero = parseInt(prompt("scrivi un numero"));
  sum += numero;
  if (sum < 50) {
    arr.push(numero);
  }
  sum / numero;
  console.log(sum / numero);
}
