let course1 = {
    code:"ACIT 1515", 
    course:"Scripting for IT",
} 
let course2 = {
    code:"ACIT 1620", 
    course:"Fundamental Web Technologies",
}
let course3 = {
    code:"ACIT 1630", 
    course:"Database Systems",
}

const courseList = [course1, course2, course3

]

let input = "";
do{
    input = prompt("Enter a 4 digit number");
    //prompt always returns a string
    } while (
        input.length != 4 || isNaN(Number(input))
    )

let newcode = false
for (let course of courseList) {
    if (course.code.includes(input))
    console.log(`Yes I am taking ${course.code} - ${course.course}`)
    let newcode = true
} 
if (newcode === false){
    courseList.push({code:input, name:null})
} 
