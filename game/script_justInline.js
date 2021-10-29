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

const totalMatches = 16;

/* const parent = document.createElement("div");
document.body.appendChild(parent);
parent.id = "container"; */

//let multiple = document.getElementById("multiple");

const rows = [];

//populate the rows array and DOM create the divs of rows
for (let i = 0; i < 4; i++) {
  const row = document.createElement("div");
  rows.push(row);
  row.id = `row${i}`;
  nimSet.appendChild(row);
}

console.log(rows);

const textArray = [];

/* let matchesPerRow = 1;
for (let rowNo = 0; rowNo < 4; rowNo++) {
  for (let matchRef = 0; i < matchesPerRow; matchRef++) {
    rows[i].push(match);
  }

  matchesPerRow++;
} */

for (let i = 0; i < totalMatches; i++) {
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
  /* multiple.appendmatch(match); */
}

console.log(textArray[3]);

textArray.forEach(function (matchCreation) {
  inlineSet.appendChild(matchCreation);
});

/* function inspectElement(clicked_id) {
  console.log(clicked_id);
  console.log("click!");
} */
let numOfClicks = 1;
/* document.getElementById("container0").onclick = function () {
  console.log(`BANG! ${numOfClicks++}`);
}; */
