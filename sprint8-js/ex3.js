/* Creați o funcție care inversează un șir de numere

Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite. Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna un șir nou de numere cu elementele primului în ordine inversă.

Exemplu 1:

Input: [1, -5, 20, -34, 16, 29, 36, -4]

Output: [-4, 36, 29, 16, -34, 20, -5, 1] */

function reverseRow(row) {
    return row.slice().reverse();
}

const numbers = [1, -5, 20, -34, 16, 29, 36, -4];
console.log(reverseRow(numbers));


//SAU

function reversedRow2(row2) {
    let result = [];

    for (let i = row2.length - 1; i >= 0; i--) {
        result.push(row2[i]);
    }
    return result;
}

console.log(reversedRow2([10, 20, 30]));