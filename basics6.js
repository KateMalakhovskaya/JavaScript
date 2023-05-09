let person = {
    firstName: 'Kate',
    lastName: "Mal",
    age: 24,
    fullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
console.log("_______________-")
console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])

person.firstName = 'Vika'
console.log(person)
person.gender = 'f'
console.log(person)

delete person.gender
console.log(person)


console.log("_____________")

console.log('gender' in person)

//pront all values from the object
for(let key in person){
    console.log(person[key])
}

