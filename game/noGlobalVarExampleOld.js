"use strict";

/* var FOO = (function () {
  var my_var = 10; //shared variable available only inside your module

  function bar() {
    // this function not available outside your module
    alert(my_var); // this function can access my_var
  }

  return {
    a_func: function () {
      alert(my_var); // this function can access my_var
    },
    b_func: function () {
      alert(my_var); // this function can also access my_var
    },
  };
})();
FOO.b_func(); */
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

const testFuncEncaps = function (value) {
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
func();

//console.log(testFunc(5));
