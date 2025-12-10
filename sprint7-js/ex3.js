/* Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

Exemplu 1:

Input: 1

Output: “Luni”

Exemplu 2:

Input: 5

Output: “Vineri” */

function getDayOfWeek (num) {
    let ziua;

switch (num) {
    case 1:
        ziua = "Luni";
        break;
    case 2: 
        ziua = "Marti";
        break;
    case 3:
        ziua = "Miercuri";
        break;
    case 4: 
        ziua = "Joi";
        break;
    case 5:
        ziua = "Vineri";
        break;
    case 6:
        ziua = "Sambata";
        break;
    case 7:
        ziua = "Duminica";
        break;
    default: 
        ziua = "Numar invalid! alege intre 1-7";
    }

return ziua;

}

console.log(getDayOfWeek(1)); 
console.log(getDayOfWeek(5)); 
console.log(getDayOfWeek(7)); 
console.log(getDayOfWeek(9));