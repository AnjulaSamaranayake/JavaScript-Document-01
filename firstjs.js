document.write("Hello World!")

// BigInt 
var z= BigInt(9999999999999999);
document.getElementById("numType").innerHTML = z;

// variable types
var a = BigInt(99999);
typeof(a);
console.log(typeof(a)); 

var b = false;
typeof(b);
console.log(typeof(b));

// Arithmatic Operators
var x = 20;
var y = 6;
document.getElementById("arithOp").innerHTML = x+y;
document.getElementById("arithOp").innerHTML = x-y;
document.getElementById("arithOp").innerHTML = x*y;
document.getElementById("arithOp").innerHTML = x/y;
document.getElementById("arithOp").innerHTML = x%y;
// pre increament
document.getElementById("arithOp").innerHTML = ++x;
// post incremeant
document.getElementById("arithOp").innerHTML = x++;
console.log(x)

// Comparison Operators
var m = 22;
var n = 20;
document.getElementById("comOp").innerHTML = m == n;
document.getElementById("comOp").innerHTML = m != n;
document.getElementById("comOp").innerHTML = m === n;
document.getElementById("comOp").innerHTML = m !== n;
document.getElementById("comOp").innerHTML = m < n;
document.getElementById("comOp").innerHTML = m > n;
document.getElementById("comOp").innerHTML = m <= n;
document.getElementById("comOp").innerHTML = m >= n;
// Ternary Operator
document.getElementById("comOp").innerHTML = n < m ? "less than" : "greater than";

// Assignment Operators
var g = 60;
var h = 50;
document.getElementById("assiOp").innerHTML = g+=h; //g=g+h
console.log(g)
console.log(h)
document.getElementById("assiOp").innerHTML = g-=h; //g=g-h
console.log(g)
console.log(h)

g *= 3;
console.log("g = g*3 =",g); //Multipication

h**=2;
console.log("h = h**2 =",h); //Explonation 

// Arrays
const numArray = [2, 5, 7, 3, 54, 10]
const fruits = ["Apple","Mango","Banana","Grapes"];
document.getElementById("fruits").innerHTML = fruits[0];

fruits[2] = "Orange"
document.getElementById("fruits").innerHTML = fruits;

//Push Method (Add a element to last)
fruits.push("Banana");
document.getElementById("fruits").innerHTML = fruits;

document.getElementById("numArr").innerHTML = numArray;

//Pop Method (to Remove last Element)
numArray.pop();
document.getElementById("numArr").innerHTML = numArray;

// JSON Objects
var student1 = {
    "name": "Chamath",
    "age": 22,
    "city":"Borella", 
    "isStudent": true 
}

const student2 = {
    "name": "Kavindu",
    "age": 23,
    "city":"Mahara", 
    "isStudent": false 
}

var student1 = {
    "name": "Ransika",
    "age": 21,
    "city":"Gampaha", 
    "isStudent": true 
}

console.log(student1.city);
console.log(student2.isStudent);


// JSON Arrays
var friends = [
    {
    "name": "Sukitha",
    "age": 21,
    "city":"Gampaha", 
    "isStudent": true 
    },
    {
    "name": "Sadaru",
    "age": 22,
    "city":"Kelaniya", 
    "isStudent": false 
    },
    {
    "name": "Sandu",
    "age": 22,
    "city":"Veyangoda", 
    "isStudent": true 
    }
]

console.log(friends[0].city);
console.log(friends[1].isStudent);
console.log(friends[2].name);

//String Methods
let str = "Anjula Samaranayake"

console.log("Length : ", str.length);

console.log("Char at 7 : ", str.charAt(7));

console.log("Sub String : ", str.substring(6,13));

console.log("Slice : ", str.slice(5));

console.log("Negative Slice : ", str.slice(-8));

console.log("Upper Case : ", str.toUpperCase());
console.log("Lower Case : ", str.toLowerCase());

console.log("Replace : " ,str.replace("Anjula", "Imasha"));

var first = str.split("a");
console.log(first);

console.log(first[0]);

//Number Methods
let num = 263.97514

console.log("To Fixed : ", num.toFixed(3));

console.log("To Precision : ", num.toPrecision(4))

console.log("To String : ", num.toString());

console.log("Parse Int : ", parseInt("265.34"));

console.log("Parse Float : ", parseFloat("253.04"));

console.log("Is Nan : ", isNaN("Sandu"));
console.log("Is Nan : ", isNaN(20030218));

console.log("Is Finite : ", isFinite("Anju"));
console.log("Is Finite : ", isFinite(20020505));

//Array Methods
let friut = ["mango", "Banana", "Apple", "Pineapple"];
let Cars = ["GTR", "BMW", "Ferarri", "Benz"];

console.log("Shift : ", Cars.shift());
console.log(Cars);

console.log("Unshift : ", Cars.unshift("Bughatti"));
console.log(Cars);

// console.log("Splice : ", Cars.splice(2,3));
// console.log(Cars);

console.log("Slice : ", Cars.slice(1,2));
console.log("Slice : ", Cars.slice(1));
console.log(Cars);

console.log("Concat : ", Cars.concat(friut));
console.log(Cars);
console.log(friut);
