var marks = Array(6)
var marks  = new Array(1,2,3,4,5,6)

var marks1 =[1,2,3,4,5,6]

console.log(marks[0])
marks[2]=10
console.log(marks)
console.log(marks.length)

marks.push(12)
console.log(marks)

marks.pop()

marks.unshift(0)
console.log(marks)

console.log(marks.indexOf(0))

console.log(marks.includes(11))

subMarks = marks.slice(2,4)
console.log(subMarks)

console.log("______________________")
var sum =0
for(let i=0;i<marks.length;i++)
{
    sum = sum +marks[i]
    //console.log(marks[i])
}
console.log(sum)

let total = marks.reduce((sum,markk) => sum+markk, 0)
console.log(total)


//Loop1
var scores = [12,13,14,16]

var evenScores = []

for(let i=0;i<scores.length;i++){
    if(scores[i]%2 == 0){
        evenScores.push(scores[i])
    }
}

console.log(evenScores)


//the same as loop1 above
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)


// MAP
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)



let fruits = ["Banana", "Mango", "Orange", "Apple"]
fruits.sort()
console.log(fruits)

//Bubble SORT
var scores1 = [12,19,13,14]
/*scores1.sort(function(a,b)){
    return a-b
}*/
console.log(scores1.sort((a,b)=> a-b))