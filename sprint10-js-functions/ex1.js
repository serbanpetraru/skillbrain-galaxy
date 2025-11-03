/* Scrieți o funcție care returnează pătratul unui număr

Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).

Exemplu 1:

Input: num = 6

Exemplu 2:

Input: num = 0

Output: 0

Exemplu 3:

Input: num = -12

Output: 144 */

function findSquare(num) {
    return num ** 2;
}

let number = 6;
console.log("Patratul numarului " + number + " este: " + findSquare(number));

let number2 = 0;
console.log("Patratul numarului " + number2 + " este: " + findSquare(number2))

let number3 = -12;
console.log("Patratul numarului " + number3 + " este: " + findSquare(number3))