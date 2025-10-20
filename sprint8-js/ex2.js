/* Calculați suma numerelor dintr-un șir de numere

Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

Exemplu 1:

Input: [1, -5, 20, -34, 16, 29, 36, -4]

Output: 59

Exemplu 2:

Input: [3.45, -2.68, 356, -75.96, 64, 19.28]

Output: 364.09000000000003 */

function sumCalcul(row) {
  let sum = 0;

  for (let i = 0; i < row.length; i++) {
    sum += row[i];
  }

  return sum;
}

//Ex. 1
let row1 = [1, -5, 20, -34, 16, 29, 36, -4];
console.log("Suma pentru row1 este:", sumCalcul(row1));

//Ex. 2
let row2 = [3.45, -2.68, 356, -75.96, 64, 19.28];
console.log("Suma pentru row2 este:", sumCalcul(row2));