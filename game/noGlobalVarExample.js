"use strict";

//The function below demonstrates a way of executing a function within another one in order to avoid global variables - in this case, the variable - "condition"

//Below is an example (commented out) comparing an example with a global variable and the other, avoiding the use of  global variable

//The purpose of the function is to only print the value only once even if the function is excecuted more than once (it is restricted when the "condition" becomes false).

/* let condition = false;

const testFunc = function (value) {
  for (let i = 0; i < 10; i++) {
    if (!condition) {
      console.log(value + i);
    }
  }
  condition = true;
};

testFunc(5);
testFunc(5); */

//Below is the same example with same functionality, but avoiding the use of a global variable.

//It changes the "closured" the variable trueOrFalse to true, which the outer function remembers (when the outer function was first executed) and when it executes the second time, it prevents the console.log from printing

/* const testFuncEncaps = function (value) {
  let trueOrFalse = false;

  return function () {
    for (let i = 0; i < 10; i++) {
      if (!trueOrFalse) {
        console.log(value + i);
      }
    }
    trueOrFalse = true;
  };
};

let func = testFuncEncaps(5);

func();
func(); */

//call back func noGlobalVar example

/* match.src = "match.png";
rowDiv.appendChild(match); */

const listJustOnce = function (iterations, fn) {
  let trueOrFalse = false;

  return function () {
    if (trueOrFalse == false) {
      fn(iterations);
    }
    trueOrFalse = true;
    /* console.log(`Number of iterations - ${iterations}`);
    console.log(`Callback function name - ${fn.name}`); */
  };
};

const list = function (value) {
  for (let i = 0; i < 10; i++) {
    console.log(value + i);
  }
};

const newListFunc = listJustOnce(20, list);
newListFunc();
newListFunc();


/* let condition = true;

const aClickEvent = function () {
  const match = document.getElementById("match");
  if (condition){
    console.log("You clicked the match!");
  }
  condition = false;
  

};

match.addEventListener("click", aClickEvent); */


const closureFunc = function() {
  
  let condition = true;


  return function (evt) {
    
    //const aClickEvent = function(){
      const match = document.getElementById("match");
      if (condition){
        console.log(`This is evt - ${evt}`);
        console.log(`ID - ${evt.target.id}`);
        console.log("You clicked the match!");
      //}
      condition = false;

    }
    
    
  
  };
}
const clickEventFunc = closureFunc();

match.addEventListener("click", clickEventFunc);



