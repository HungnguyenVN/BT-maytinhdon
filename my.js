function Addition(){
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    result = number1 + number2;
    document.getElementById('result').innerHTML = "Result: " + result; 
}
function Subtraction(){
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    result = number1 - number2;
    document.getElementById('result').innerHTML = "Result: " + result; 
}
function Multiplication(){
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    result = number1 * number2;
    document.getElementById('result').innerHTML = "Result: " + result; 
}
function Division(){
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    result = number1 / number2;
    document.getElementById('result').innerHTML = "Result: " + result; 
}