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

// Arrays
const fruits = ["Apple","Mango","Banana","Grapes"];
document.getElementById("fruits").innerHTML = fruits[0];

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