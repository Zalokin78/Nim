"use strict";

/* let p = document.getElementById("test_p");
let afterClick = document.getElementById("afterClick");
let button = document.getElementById("afterClick");
p.innerHTML = "This has been added via Javascript";

const remove = function () {
  p.parentNode.removeChild(p);
  afterClick.innerHTML = "Paragraph removed";
}; */

/* //creation of a div element
let div = document.createElement("div");
div.id = "container";
div.innerHTML = "Div created by code";
div.className = "border pad";

p.innerHTML += "This has been appended";
for (let x = 0; x < 10; x++) {
  p.innerHTML += "This has been added via Javascript";
  document.body.appendChild(div);
} */

/* function createDiv(text) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div;
}

var divs = [createDiv("foo"), createDiv("bar"), createDiv("baz")];

var docFrag = document.createDocumentFragment();
for (var i = 0; i < divs.length; i++) {
  docFrag.appendChild(divs[i]); // Note that this does NOT go to the DOM
}

document.body.appendChild(docFrag); // Appends all divs at once */

//const totalMatches = 16;

/* const parent = document.createElement("div");
document.body.appendChild(parent);
parent.id = "container"; */

//let multiple = document.getElementById("multiple");

//populate the rows array and DOM create the divs of rows
/* for (let i = 0; i < 4; i++) {
  const row = document.createElement("div");
  rows.push(row);
  row.id = `row${i}`;
  nimSet.appendChild(row); */

//const textArray = [];

//populate all images into a matrix array
//next step is to display the images in the DOM in the same fashion using .appendChild(matchCreation)method
const generateMatches = function (startingMatches, maxRows) {
  const rows = [];
  //let matchesPerRow = 1;

  for (let rowNo = 0; rowNo < maxRows; rowNo++) {
    rows[rowNo] = [];
    //create a div per row (not working)
    const rowDiv = document.createElement("div");
    rowDiv.id = `row${rowNo}`;
    nimSet.appendChild(rowDiv);

    //populate loop
    for (let matchRef = 0; matchRef < startingMatches; matchRef++) {
      const match = document.createElement("img");
      match.src = "match.png";
      //rows[rowNo[matchRef]].push(match);
      rows[rowNo][matchRef] = match;
      rowDiv.appendChild(match);
    }

    startingMatches++;
  }
};

generateMatches(1, 4);
console.log(rows);

//example of populating a 2d array
/* var iMax = 3;
var jMax = 6;
var f = new Array();

for (i = 0; i < iMax; i++) {
  f[i] = new Array();
  for (j = 0; j < jMax; j++) {
    f[i][j] = 0;
  }
}
console.log(f); */

/* rows.forEach(function (matchCreation) {
  nimSet.appendChild(matchCreation);
}); */
/* for (let i = 0; i < totalMatches; i++) {
  const match = document.createElement("img");
  textArray.push(match);

  //match.textContent = `test${i}`;
  match.src = "match.png";
  match.id = `match${i}`;

  match.onclick = function () {
    console.log(match);
    //match.parentNode.removematch(match);
    match.src = "match_blank.png";

    //match.parentNode.removematch(match);
    //match.parentNode.style.color = "#000000";
    //match.style.color = "black";
    //match.removematch(match);
  };
  //multiple.appendmatch(match);
} */

//console.log(textArray[3]);

/* textArray.forEach(function (matchCreation) {
  inlineSet.appendChild(matchCreation);
}); */

/* function inspectElement(clicked_id) {
  console.log(clicked_id);
  console.log("click!");
} */
let numOfClicks = 1;
/* document.getElementById("container0").onclick = function () {
  console.log(`BANG! ${numOfClicks++}`);
}; */
