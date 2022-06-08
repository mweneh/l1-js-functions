// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function addBasic(){
    printValue(30+50);
}
addBasic();

//TODO: create a function that takes in two values and adds them
function addWithParam(num1,num2,num3,){
    printValue(num1+num2+num3)
}
addWithParam(90,45,88) //calling fn

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addAndReturn(num1,num2){
    const add=num1+num1
    return add
}
addAndReturn (345,5)

// 2.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const age=function(){
    printValue(20)
}
age()
//TODO: create a function that takes in two values and adds them
const result=function(num1,num2){
    printValue( num1+num2)
}
result(25,30)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addtwo=function(x,y){
    return x+y
}
printValue(`Addtwo:${addtwo(22,56)}`)

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const month=()=>{
    printValue(10+4)
}
month()


//TODO: create a function that takes in two values and adds them
const sum=(a,b)=>{
    printValue(a+b)
}
sum(10,788)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addVal=(i,j)=>{i+j}
printValue(`addition:${addVal(99,300)}`)

addVal(245,340)

const addValue=(i,j)=>{
    const add= i+j
    return add
}
printValue (`addition:${addValue(199,30)}`)
