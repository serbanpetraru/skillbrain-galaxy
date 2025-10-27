/*
Definește încă o clasa numita MasinaDeCurse. Această clasă va moșteni clasa Masina definita la exercițiul 1, folosind cuvantul cheie extends si va avea un constructor in care se va apela super() (adica superconstructorul).

MasinaDeCurse va avea o metoda suplimentara numita participaLaCampionat, metoda ce va primi un parametru numit pozitiaInCampionat (un numar). Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului pozitiaInCampionat. Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

Ex:

const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
m1.participaLaCampionat(30);
//Va afisa mesajul: Am castigat locul 30

m1.participaLaCampionat(-1);
//Va afisa mesajul: Nu am castigat niciun premiu
La final defineste o functie in care sa instantiezi doua masini de curse, prima va paricipa la campionat si va castiga locul 2, iar a doua nu va participa la campionat(folosind metoda definita). De asemenea afiseaza proprietatiile masinilor ca si la exercitiul */

class Car {
  constructor(brand, model, color, mileage) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
  }

get properties() {
    return `Masina de marca ${this.brand}, modelul ${this.model}, de culoare ${this.color}, si cu un kilometraj de ${this.mileage}:`;
  }
}

class RacingCar extends Car {
  constructor(brand, model, color, mileage) {
    super(brand, model, color, mileage);
  }

    participateInTheChampionship(positionInChamphionship) {
    if (positionInChamphionship > 0) {
      console.log(`A castigat locul ${positionInChamphionship}`);
    } else {
      console.log("Nu a castigat niciun premiu");
    }
  }
}

function main() {

  const race1 = new RacingCar("Ferrari", "F8", "Rosu", "10 000");
  const race2 = new RacingCar("Lamborghini", "Huracan", "Galben", "5 000");

  console.log(race1.properties);
  race1.participateInTheChampionship(2);

  console.log(race2.properties);
  race2.participateInTheChampionship(0);
}

main();