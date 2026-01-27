// Задача 1
let price = +prompt("Введите сумму");
let range = prompt("Введите day/month/year");
switch(range) {
    case "day":
        range = "день";
        break;
    case "month":
        range = "месяц";
        break;
    case "year":
        range = "год";
        break;
    default:
        alert("Неправильный ввод");
        range = "";
        break;
}
console.log(price, 'Р в', range);

// Задача 2
let temp = 25;
let weather = "clear";
let activity;
if (temp >= 25){
    if (weather == "clear"){
        activity = "golf";
    }
    else{
        activity = "hiking";
    }
}
else if ((temp >= 10 && temp <= 24) || weather == "cloudy"){
    activity = "bowling";
}
else{
    activity = "hiking";
}
console.log(activity)

// Задача 3
let a = 6;
let b = 2;
let sign = "*";
let total;
switch(sign) {
    case "+":
        total = a + b;
        break;
    case "-":
        total = a - b;
        break;
    case "*":
        total = a * b;
        break;
    case "/":
        if (b == 0){
            console.log("Делить на 0 нельзя");
        }
        else{
            total = a / b;
        }
        break;
}
console.log(total);

// Задача 4
let word = "меню";
let result;
if (Number.isInteger(Math.sqrt(word.length))){
    result = 1;
}
else{
    result = 0;
}
console.log(result)