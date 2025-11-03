// Returnează un boolean dacă un număr este divizibil cu 10
// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

// Exemplu 1:
// Input: 100
// Output: true

// Exemplu 2:
// Input: 23
// Output: false

function isDivisibleBy10(num) {
    if (num % 10 === 0) {
        return true;
    }
    return false;
}

const a = 100;
console.log("a = " + a);
console.log("Este a divizibil cu 10? ", isDivisibleBy10(a));

const b = 23;
console.log("b = " + b);
console.log("Este b divizibil cu 10? ", isDivisibleBy10(b));