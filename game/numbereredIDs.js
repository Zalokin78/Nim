"use strict";

let matchNum = 0;

const generateMatches = function (startingMatches, maxRows) {
  const rows = [];

  for (let rowNo = 0; rowNo < maxRows; rowNo++) {
    rows[rowNo] = [];
    //create a div per row
    const rowDiv = document.createElement("div");
    rowDiv.id = `row${rowNo}`;
    nimSet.appendChild(rowDiv);

    //populate array and display matches on the DOM
    for (let matchRef = 0; matchRef < startingMatches; matchRef++) {
      const match = document.createElement("img");
      match.id = `match${matchNum}`;
      match.src = "match.png";
      match.setAttribute("onclick", "blank(this);");
      matchNum++;

      //create array element
      rows[rowNo][matchRef] = match;
      rowDiv.appendChild(match);
    }

    startingMatches++;
  }
  console.log(rows[1][1]);
};

generateMatches(1, 4);

const blank = function (click) {
  console.log(click.id);
  //match.parentNode.removematch(match);
  click.src = "match_blank.png";
};

console.log(document.getElementById("nimSet"));
