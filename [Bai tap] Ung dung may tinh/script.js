function Add() {
    let num1 = Number(document.getElementById("number1").value)
    let num2 = Number(document.getElementById("number2").value)
    let result
    result = num1 + num2
    document.getElementById('mesDiv').innerHTML = "Result addition: " + result
}

function Sub() {
    let num1 = Number(document.getElementById("number1").value)
    let num2 = Number(document.getElementById("number2").value)
    let result
    result = num1 - num2
    document.getElementById('mesDiv').innerHTML = "Result subtraction: " + result
}

function Multiplication() {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let result
    result = num1 * num2
    document.getElementById('mesDiv').innerHTML = "Result multiplication: " + result
}

function Division() {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let result
    result = num1 / num2
    document.getElementById('mesDiv').innerHTML = "Result division: " + result
}