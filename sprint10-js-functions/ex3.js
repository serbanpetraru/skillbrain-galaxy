/* Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

Exemplu 1:

Input: sir = “Îmi place programarea” litera = “a”

Output: 4

Exemplu 2:

Input: sir = “Vreau să lucrez în IT”, litera = “r”

Output: 2

Notă: Nu se ține cont de scrierea cu majuscule sau minuscule. Litera A și litera a trebuie numărate la calcularea numărului de apariții pentru A sau pentru a. */

function letterCount(arr, letter) {
    arr = arr.toLowerCase();
    letter = letter.toLowerCase();
    let count = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === letter) {
            count++;
        }
    }
    
    return count;
}

console.log('Litera a in propozitia "Imi place programarea" apare de: ' + letterCount("Imi place programarea", "a") + ' ori.');
console.log('Litera r in propozitia "Vreau sa lucrez in IT" apare de: ' + letterCount("Vreau sa lucrez in IT", "r") + ' ori.');