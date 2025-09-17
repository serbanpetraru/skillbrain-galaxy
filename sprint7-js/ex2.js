/* Scrieți o funcție numită tellFortune care:

primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

Exemplu 1:

Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”

Output: “Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii.” */

function tellFortune(n, z, y, x) {
    return "Vei fi un " + x + " in " + y + ", casatorit cu " + z + " si vei avea " + n + " copii";
}

console.log(tellFortune(3, "Emanuel", "Italia", "Programator"));

const text2 = tellFortune(2, "Andreea", "Spania", "programator");
console.log(text2);

const text3 = tellFortune(5, "Ioana", "Elvetia", "programator");
console.log(text3);