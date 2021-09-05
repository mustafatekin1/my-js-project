console.log('Hello world')
// A difference between Java and Java Script
// We can create completely the same variable again:
var x = 12;
// var or let includes almost all variables : string, int, long, short, boolean, 
var x = 20

console.log("we see the last assigned var which is X " + x)

// To run JS on IDE we need node JS
/*Then to run the codes :
1. Open the terminal eg in VS code : click terminal then new terminal
2. Type: "node " + class name
    eg: node day01_Hello world.js
3. easy way to type the class name is: 
    - right click on the class name 
    - copy the relative path
  4. Important: There must not be any space in the class name!  
  5. Imortant: we must have .js at the end of our class name.
*/ 
let z = "Ahmet"
console.log(z)

var x = 'Cambridge'
console.log('Our target school is ' + x)

var x = 'Oxford'
console.log('Although we use the same variable with same name no error occurs')
let a;
console.log(a); // by devault all variables are undefined

let az = 'Mustafa'
let ay = "Mustafa"
// let z = "veli"; for "let" JS does not allow the same variable unlike var 

console.log("We can use either ' ' or double quote for strings " + z + " -  " + ay );

ay = true
console.log("y becomes true you can see on the console==> y =  " + ay)

var firstName = "Mustafa", lastName = 'Tekin';
console.log (firstName + " " + lastName)