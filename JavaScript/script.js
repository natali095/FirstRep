var global = "global";



function display(){
alert('hi');

display1();

var x = 10;//dataType: number
x = 'Hello';//dataType: string
x = true;//dataType: boolean

//Arithmetic operator

x = 10;
y = 20;

console.log(x / y);

document.write(x);

x = x + 10;
//or
x += 10; //Assigment Operator
x -= 10;

x *= 10;

x = 10;
y = 20;

//comparision operators
// 1. == equal to

x == y; //false

// 2. not equal

x != y;//true

//3. greater than

x > y;// false
x >= y;

//4. less than

x < y; //true
x <= y;

//logical operator
//&& || !

//&& - logical and
//if both condition are true it will true else false

// || - logical or 
//if atleast one condition is true it will true else false

// ! - negate 
// convert false into true and true into false 

//How to do we compare

if(x == y || x >10){
    //this block is executed when the condition is true
    console.log("x is not equal to y");
}

else{
    //this block is execute when the condition is false
    console.log("x is equal to y");
}

//there are two more ways to create a variable introduced in ES6

//let and const

let z = 10;

} 


function display1(){
 
    alert("called from display");

    var x = 10;
    return x;
}

function variable_scope(){

    //two types of scope:
    //1. block scope
    //2. function scope

    //1. block scope means the variable is accesible only within the block
    //we define a block by curly braces

   /* var greeter = "Hey";
    var x = 10;

    if(x == 10){
        var greeter = "say hello instead";
    }
 console.log(greeter);*/

// var variable can be redeclarated in the current scope

  var x = 10;
  var x = 20;

  let greeter = "Hey";
  var x = 10;

  //let variable can't be redeclarated in the current scope
    let y = 10;
    let y = 20;


  if(x == 10){
   let greeter = "say hello instead";
  }


  console.log(greeter); 

  const z = 20;
  const pi = 3.14;
  // z = 30; - will give error as it is a constant value

}
 variable_scope();