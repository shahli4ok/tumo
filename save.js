 // шпаргалка для теста (28.07)

 /* программа которая убирает первую и последнюю буквы из слова*/

function nam1() {
  let str = "DelftStacks";
  let str2 = str.slice(1, -1);
  console.log(str)
  console.log(str2)
}
nam1()

 /* Инициалы*/
 
function getFio(fullFIO) {
  let t = fullFIO.split (' ');
  let shortFIO = t [0] + ' ' + t [1][0] + '. ' + t [1][0] + '.';
  return shortFIO
}

console.log(getFio("Иванов Павел Иванович")

 /* возвращает массив от заданного числа*/

function smth(n) {
  let ran = []
  for (let i = n; i > 0; i--) {
    ran.push(i)
  }
  return ran
}
console.log(smth(5))

 /* палиндромм*/

function palindrome(str) {
  let check = '';
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
}
console.log(palindrome("дед"))

 /*квадрат и прямоугольник*/

function smth() {
  let a = prompt("Длина")
  let b = prompt("Ширина")
  if (a==b) {
    return a*4
  }
  else {
    return (a+b)*2
  }
   
}
console.log(smth())

 /*двоичное в десятичное*/


function int() {
  let binary = "101";
  let digit = parseInt(binary, 2);
  return digit
}
console.log(int())

 /*работа с массивами*/

let array = [4, 3, 9, 7, 2, 1]
function calc(a) {
  let b
  for (let i = 0; i < a.length - 1; i++) {
     b = Math.sqrt(a[i])
    if (a % 1 == 0) {
      a[i] = b
    }
    else {
      a[i] = a[i] * a[i]
    }
  }
}
  
calc(array)

// столбы

function calc(kol, rast, shir) {
  let a = rast*100
  return (kol-2)*shir+(kol-1)*a
}

console.log(calc(3, 10, 50), "сантиметров")

// уникальный масив

function uArray(array) {
    let out = [];
    for (let i=0, len=array.length; i<len; i++)
        if (out.indexOf(array[i]) === -1)
            out.push(array[i]);
    return out;
}
let myArray = [4, 5, 4, 2, 5];
let uniqueArray = uArray(myArray);
console.log(myArray);
console.log(uniqueArray);

// уникальный масив true or false

let array = [3, 4, 5, 6]
function trueOrFalse (){
  for (let i = 0; i < array.length; i++) {
    if (i != array.lastIndexOf(array[i])) {
      return false
    }
    else {
      return true
    }
  }
}

console.log(trueOrFalse())

// еще что-то 

// 1

function pow() {
  let a = prompt("Первое число: ")
  let b = prompt("Второе число: ")
  let c = prompt("Третье число: ")
  let y = -4*Math.pow(a, 2)-8/b+5*c
  return y
}
console.log(pow())

// 2

function first(){
  let array = []
  for (let i = -50; i <= 150; i++) {
    if (i%5==0){
      array.push(i)
    }
  }
  return array
}

console.log(first())

// 3

function reverse(number) {
  let array = (""+number).split("").map(Number).reverse()
  return array
}
console.log(reverse(12345789))


// 1

let a = 100;
let b = 200;
let p = calcPer(a,b);
let s = calcSq(a,b);
console.log(p,s);

function calcPer(c,d) {
let z = (c+d)*2
return z
}

function calcSq(e,f) {
let y = e*f
return y
}

// 2

let c = [45,60,12,98,78,154,65];
let m = [15,98,45,33,78,98,100,56,98];
let s1 = sumArray(c);
let s2 = sumArray(m);
console.log(s1, s2);

function sumArray(a) {
 s = 0;
   for (var i = 0; i < a.length; i++){
      s += a[i]
   }
   return s;
}


// 3

var c = [45,60,12,98,78,154,65];
var b = reverseArray(c);
console.log(b); 

var t = ["php","javascript","html","css","mysql"];
var m = reverseArray(t);
console.log(m); 

function reverseArray(a) {

let ret = [];
    for(let i = a.length-1; i >= 0; i--) {
        ret.push(a[i]);
    }
    return ret;

}


// ---------------------кофемашина---------------------------------------------------------------------

  
class CoffeeMachine {
    #waterAmount = 0
    #kakaoAmount = 0
    #milkAmount = 0
    mode = "false"

    constructor(waterAmount, kakaoAmount, milkAmount){
        this.waterAmount = waterAmount
        this.kakaoAmount = kakaoAmount
        this.milkAmount = milkAmount
    }

    changeMode(mode) {
        if (this.mode == "false") {
            this.mode = "true"
        }
        else if (this.mode == "true") {
            this.mode = "false"
        }
    }

    set waterAmount(waterAmount) {
        if (waterAmount < 0 || waterAmount > 1000) {
            throw new Error("Некоректна кількість води!");
        } else this.#waterAmount += waterAmount
    }

    get waterAmount() {
        return this.#waterAmount
    }

    set kakaoAmount(kakaoAmount) {
        if (kakaoAmount < 0 || kakaoAmount > 300) {
            throw new Error("Некоректна кількість бобів")
        }
        else this.#kakaoAmount += kakaoAmount
    }

    get kakaoAmount(){
        return this.#kakaoAmount
    }

    set milkAmount(milkAmount) {
        if (milkAmount < 0 || milkAmount > 500) {
            throw new Error("Некоректна кількість молока")
        }
        else this.#milkAmount += milkAmount
    }

    get milkAmount() {
        return this.#milkAmount
    }

    makecoffee(){
        if ((this.mode == "true") && (this.#kakaoAmount >= 30) && (this.#milkAmount >= 60) && (this.#waterAmount >= 100)) {
            console.log("Кофе сделано!")
            this.#kakaoAmount -= 30
            this.#waterAmount -= 100
            this.#milkAmount -= 60 
        }
        if (this.mode == "false") {
            console.log("Кофемашина выключена")
        }
        if (this.#milkAmount < 0) {
            console.log("Мало молока")
        }
        if (this.#kakaoAmount < 0) {
            console.log("Мало кофе")
        }
        if (this.#waterAmount < 0) {
            console.log("Мало воды")
        }
        
    }
}

let cupOfCoffee = new CoffeeMachine(500, 100, 100)
cupOfCoffee.changeMode()
cupOfCoffee.makecoffee()



