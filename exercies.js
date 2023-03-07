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

//todo: Ejercicio del dia 28: 6/3/2023

//?7-Extend Constructors to Receive Arguments

/*
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Tobi", "Black");
//Lo que se hace que en esta funcion hacemos unos parametros para hacer un contructor
//Donde ponemos los valores que se vayan a insertar en el contructor y luego en un nuevo valor
//Se pondran los valores que el usuario quiere, en este caso Tobi y Black. Ademas de la cantidad de patas del perro

console.log(terrier);
*/

//?8-Verify an Object's Constructor with instanceof

/*
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(5);

myHouse instanceof House;
//Lo que esta se encarga de aparte de llamar los valores del contructor
//En el ultimo codigo instanceof permite si se esta llamando la funcion o no con un true o false

console.log(myHouse);

// Only change code below this line
*/

//?9-Understand Own Properties

/*
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
//Lo que se hace despues de crear un contructor y los valores que quieres agregar
//Ahora creamos un for donde se llamara todos los valores del contructor en un arreglo

console.log(ownProps);
// Only change code below this line
*/

//?10-Use Prototype Properties to Reduce Duplicate Code

/*
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

console.log(beagle.name, beagle.numLegs);

//Lo que se hace que al valor de perro se le agrega una propiedad al contructor con prototype
//Aparte se les llama en consola por el nuevo nombre del valor y .Propiedad que quieras mostrar
*/

//todo: Ejercicio del dia 29: 7/3/2023

//?11-Iterate Over All Properties

/*
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for(let property in beagle){
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//Lo que hace este codigo que aparte de crear un contructor y los valores externo de ese mismo 
//Se crea unos valores uno donde se guarde los valores internos de la funcion y otro de manera externa
//Donde se crear un for donde si el perro tiene el las propiedades dentro del contructor es ownProps
//En el caso de que es fuera es prototypeProps

console.log(ownProps); //name
console.log(prototypeProps); //numLegs
*/

//?12-Understand the Constructor Property

/*
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
 if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

//Este codigo lo que hare que en una funcion buscara al candidato de el constructor, en este caso el estrictamente igual
//Para que retorne verdadero o falso

console.log(joinDogFraternity("chiguagua"));
*/

//?13-Change the Prototype to a New Object

/*
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Lo que hace esto es describir el objeto en si, como aparte de poner una propiedad, 
//Tambien se le puede poner como valor atra funcion y que en este caso haga la descripción

console.log(Dog.prototype);
*/

//?14-Remember to Set the Constructor Property when Changing the Prototype
/*
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Esto lo que hara el contructor es para verificar si la propiedad se cumple o no 

let myDog = new Dog("Fido");
console.log(myDog.constructor);
*/

//?15-Understand Where an Object’s Prototype Comes From


