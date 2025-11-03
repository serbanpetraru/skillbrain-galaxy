/* Temă pentru acasă:
JS - OOP
Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:

marca (ex: Volvo, Mazda, Dacia)
model (ex: XC-60, CX-5, BIGGSTER)
culoare (ex Negru, Verde, Albastru)
kilometraj (ex 234 000, 111 000, 20 000)
Pentru aceasta clasa definește un constructor care sa inițializeze proprietățile clasei folosind this.

Pe lângă constructor, definește o metodă de tip getter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) numita proprietati care va returna proprietățile mașinii sub forma

Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

La final, definește separat o funcție numită main, in care se vor crea 3 instanțe ale clasei mașina folosind operatorul new. Fiecare instanță va fi memorata Într-o variabilă separată și va avea proprietăți diferite. Afișează proprietățile mașinilor instanțiate folosind getter-ul proprietati.

Pentru mașinile date in exemplu programul va afișa

Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

Masina[marca=Mazda, model=CX-5, culoare=Verde, kilometraj=111 000]

Masina[marca=Dacia, model=BIGGSTER, culoare=Albastru, kilometraj=20 000] */

class Car {
  constructor(brand, model, color, mileage) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
  }

  get properties() {
    return `Masina de marca ${this.brand}, modelul ${this.model}, de culoare ${this.color}, si cu un kilometraj de ${this.mileage}.`;
  }
}

function main() {
  const car1 = new Car("BMW", "320d xDrive", "Mediterranean Blue", 78500);
  const car2 = new Car("Mercedes-Benz", "C200 AMG Line", "Selenite Grey", "65 200");
  const car3 = new Car("Audi", "A4 2.0 TFSI quattro", "Glacier White", "54 800");

  console.log(car1.properties);
  console.log(car2.properties);
  console.log(car3.properties);
}

main();