const Person = require("./basics7")
class Pet extends Person{

    get location(){
        return "blueCross"
    }

    constructor(firstName, lastName){
        super(firstName, lastName)
    }
}

let pet = new Pet("Djina", "Mal")
console.log(pet.fullName())

console.log(pet.location())