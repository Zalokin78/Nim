"use strict";

let matchNum = 0;

const generateMatches = function (startingMatches, maxRows) {
  const rows = [];

  //initial ASCII character code - "A" (used for labeling match.id)
  let startAscii = 65;

  for (let rowNo = 0; rowNo < maxRows; rowNo++) {
    rows[rowNo] = [];
    //create a div per row
    const rowDiv = document.createElement("div");
    rowDiv.id = `row`;
    nimSet.appendChild(rowDiv);

    //populate array and display matches on the DOM
    for (let matchRef = 0; matchRef < startingMatches; matchRef++) {
      const match = document.createElement("img");
      match.id = `${String.fromCharCode(startAscii)}${matchRef}`;
      match.src = "match.png";
      match.addEventListener("click", hide, false);
      //match.setAttribute("onclick", "blank(this);");

      matchNum++;

      //create array element
      rows[rowNo][matchRef] = match;
      rowDiv.appendChild(match);
    }

    //increase number of matches per row by one
    startingMatches++;
    //increase ascii character index by one - used for labeling each row id in match.id
    startAscii++;
  }
  console.log(rows[1][1]);
};

generateMatches(1, 4);

/* const blank = function (click) {
  console.log(click.id);
  //match.parentNode.removematch(match);
  click.src = "match_blank.png";
}; */

function hide(evt) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
  console.log(evt);
  console.log(evt.target);
  console.log(evt.target.id);
  const x = evt.target;
  console.log([].indexOf.call(x.parentNode.childNodes, x));
  console.log(Array.from(evt));
}

console.log(document.getElementById("nimSet"));
