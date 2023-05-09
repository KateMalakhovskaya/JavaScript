
const Person =  require('./basics7')
let day = 'Tuesday '
console.log(day.length)

console.log(day.slice(0,5))

console.log(day[1])

// tue day
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let date = '20'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()


let newQuite = day+ "Is funday!"
console.log(newQuite)

let val =newQuite.indexOf("day",5)
console.log(val)

let person = new Person("Fiodar", "Bych")
console.log(person.fullName())
