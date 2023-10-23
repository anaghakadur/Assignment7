function halfNumber(number) {
    return "Half of "+number+" is "+(number/2)+".";
}
// var number = window.prompt("Enter a number:");
// document.write(halfNumber(number));
// console.log(halfNumber(number))

function squareNumber(number) {
    return "The result of squaring the number "+number+ " is "+(number*number)+".";
}
// var number = window.prompt("Enter a number:");
// document.write(squareNumber(number));
// console.log(squareNumber(number))

function percentOf(num1, num2) {
    return num1+" is "+((num1/num2)*100)+"% of "+num2+".";
}
// var number1 = window.prompt("Enter the first number:");
// var number2 = window.prompt("Enter the second number:");
// document.write(percentOf(number1, number2));
// console.log(percentOf(number1, number2))

function findModulus(num1, num2) {
    return (num1 % num2)+" is the modulus of "+num1+" and "+num2+".";
}
// var number1 = window.prompt("Enter the first number:");
// var number2 = window.prompt("Enter the second number:");
// document.write(findModulus(number1, number2));
// console.log(findModulus(number1, number2))

function findSum() {
    var i;
    var sum = 0;
    var numbers = window.prompt("Enter numbers delimited by commas");
    numbers = numbers.split(",");
    for(i = 0; i < numbers.length; i++){
        sum += parseInt(numbers[i]);
    }
    return "Sum = "+sum;
}
// document.write(findSum());
// console.log(findSum())