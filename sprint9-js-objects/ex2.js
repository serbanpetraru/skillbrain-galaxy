/* Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

Exemplu 1:

Input: obiect = { a: 1, b: 2 }, proprietate = “b”

Output: { a: 1 }

Hint 1: https://www.w3schools.com/howto/howto_js_remove_property_object.asp

Hint 2: Exista doua moduri de accesare a elementelor prin chei: obiect.cheie sau obiect[”cheie”] */

function removeProperty (obj, prop) {
    const newObj = { ...obj};
    delete newObj[prop];
    return newObj;
}

const object = {
    a: 1,
    b: 2,
}
const result = removeProperty(object, "a");
console.log(result)
