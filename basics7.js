module.exports = class Person{
    age = 25
    get location(){
        return "Canada"
    }

    //constructor
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName+this.lastName)
    }

}

/*let person = new Person("Kate1", "mal1")
let person1 = new Person("Piter", "Buch")
console.log(person.age)

console.log(person.location)

console.log(person.fullName())
console.log(person1.fullName())*/