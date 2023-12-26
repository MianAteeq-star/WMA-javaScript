// alert("Mian")

const year = new Date().getFullYear()

document.getElementById("year").innerHTML= year







// Alert Name

function alertName (){
    alert("Mian Ateeq")
    document.getElementById("statementBox").innerHTML="Alert('Mian Ateeq')" 
}


// Clear Statement Box

function clearStatement() {
    document.getElementById("statementBox").innerHTML=" "
    
}


// Clear Output Box

function clearOutput() {
    document.getElementById("outputBox").innerHTML=" "
    
}


// Alert Number

function alertNumber() {
     let random = +prompt("Enter Number of your choice")
     if (!random) {
        alert("please enter no.")
     }
   document.getElementById("statementBox").innerHTML= ` The Number is 
   ${random}`
}

// Camal Case
const camal =()=>{
    document.getElementById("outputBox").innerHTML=
   " <h1 >Example:</h1>" +"<ul><li>user</li>  <li>userResponse</li>    <li>userResponseTime</li> <li>userResponseTImeLimit</li>   </ul>"
}


// Variabel Name



const variableName = ()=>{
    let varName=
     `<ul><li>A variable name can't contain any space.</li>
    <li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li>
    <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example,userAlert and myVar are legal</li>
    <li>Capital letters are fine, but be careful Variable names are case sensitive. A rose is not a Rose. If you assign the string to the variable rose and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li>
    </ul>`
    document.getElementById("outputBox").innerHTML=varName;
}

// Add
const sum =()=>{
let num1 = +prompt("Enter First Number")
let num2 = +prompt("Enter Second Number")
const num3 = num1+num2
console.log(num3);


document.getElementById("statementBox").innerHTML=`${num1} + ${num2}`
document.getElementById("outputBox").innerHTML=num3
}

// Subtract

const subtract =()=>{
let num1 = +prompt("Enter First Number")
let num2 = +prompt("Enter Second Number")
const num3 = num1-num2
console.log(num3);

document.getElementById("statementBox").innerHTML=`${num1} - ${num2}`
document.getElementById("outputBox").innerHTML=num3
}

// Multiply

const multiply =()=>{
let num1 = +prompt("Enter First Number")
let num2 = +prompt("Enter Second Number")
const num3 = num1*num2
console.log(num3);

document.getElementById("statementBox").innerHTML=` ${num1} * ${num2}`
document.getElementById("outputBox").innerHTML=num3
}

// Divide
const divide =()=>{
let num1 = +prompt("Enter First Number")
let num2 = +prompt("Enter Second Number")
const num3 = num1/num2
console.log(num3);

document.getElementById("statementBox").innerHTML=`${num1} / ${num2}`
document.getElementById("outputBox").innerHTML=num3
}
// Average
const average =()=>{
let num1 = +prompt("Enter First Number")
let num2 = +prompt("Enter Second Number")
const num3 = num1%num2
console.log(num3);

document.getElementById("statementBox").innerHTML=`${num1} % ${num2}`
document.getElementById("outputBox").innerHTML=num3
}


