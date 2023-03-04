//todo: Ejercicio del dia 26 parte 2: 3/3/2023

//?1-Create a Basic JavaScript Object

/*
let dog = {
    name: "pedro",
    numLegs: 4
  };
//Simplemente se mostrara en este objeto las propiedades que tiene adento
//Tanto el nombre y la cantidad de patas que tiene el perro

console.log(dog);
*/

//?2-Use Dot Notation to Access the Properties of an Object

/*
let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name, dog.numLegs);
//Aqui estoy llamando del objeto en consola el objeto y la propieda de la misma en .
  // Only change code below this line
  */

//todo: Ejercicio del dia 27

//?3-Create a Method on an Object

/*
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};
//Lo que hace que en este objeto es llamar una funcion donde retorna una oracion concatenada y de la cual
//En una parte ponga el valor de ese objeto y a lo que quieres llamar
//Finalmente retornara el valor de ese objeto.


console.log(dog.sayLegs());
*/

//?4-Make Code More Reusable with the this Keyword

/*
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

//Aqui a diferencia del ejercicio anterior, se usa el this para llamar el objeto directamente
//Ya despues el proceso sigue siendo igual


console.log(dog.sayLegs());
*/

//?5-Define a Constructor Function

/*
function Dog() {
  this.name = "cochi";
  this.color = "yellow";
  this.numLegs = 4;
}

//Lo que se hizo es un constructor, es decir, una forma de hacer un objeto mas comodo.
//En este caso se crea una funcion  del objeto y luego dentro de la la misma se pone las propiedades de ese contructor.
*/


//?6-Use a Constructor to Create Objects

/*
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog()
console.log(hound);
//Lo que hace que en la siguiente parte ahora se crea una variable para llamar ese constructor
//Luego en un console.log lo llamamos ese nuevo valor
// Only change code below this line
*/

//?7-
