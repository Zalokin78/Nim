"use strict";

let matchNum = 0;

const generateMatches = function (startingMatches, maxRows) {
  const rows = [];

  //let startAscii = 0;

  for (let rowNo = 0; rowNo < maxRows; rowNo++) {
    rows[rowNo] = [];
    //create a div per row
    const rowDiv = document.createElement("div");
    rowDiv.id = `row${[rowNo]}`;
    nimSet.appendChild(rowDiv);

    //populate array and display matches on the DOM
    for (let matchRef = 0; matchRef < startingMatches; matchRef++) {
      const match = document.createElement("img");
      //match.id = `${String.fromCharCode(startAscii)}${matchRef}`;
      //the + 65 is because the ASCII code of "A" begins at 65
      match.id = `${rowNo}${String.fromCharCode(matchRef + 65)}`;
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
    //startAscii++;
  }
  console.log(rows[1][1]);
};

generateMatches(1, 4);

/* const blank = function (click) {
  console.log(click.id);
  //match.parentNode.removematch(match);
  click.src = "match_blank.png";
}; */
let locked = false;
function hide(evt) {
  const rowID = evt.target.id[0];
  console.log(`rowID - ${rowID}`);
  /* for (i = 0; i < document.getElementById("nimSet").childElementCount; i++) {
    document.getElementById(`${i}Cookie--locked`).id;
  } */

  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
  //evt.target.style.visibility = "hidden";
  console.log(`Matrix code - ${evt.target.id}`);
  console.log(evt.target);
  console.log(evt.target.parentNode.id);
  console.log(document.getElementById("nimSet").childElementCount);
  for (
    let i = 0;
    i < document.getElementById("nimSet").childElementCount;
    i++
  ) {
    if (i != evt.target.id[0] && locked == false)
      document.getElementById(`row${[i]}`).id += "--locked";

    console.log(evt.target.parentNode.id[3]);
  }
  locked = true;

  if (!evt.target.parentNode.id.includes("locked"))
    evt.target.style.visibility = "hidden";

  console.log(evt.target.parentNode.id[3]);
  console.log(evt.target.id[0]);

  //console.log(x);
  //console.log([].indexOf.call(x.parentNode.childNodes, x));
  //console.log(Array.from(evt));
}

console.log(document.getElementById("nimSet"));

const testDomElement = document.getElementById("aCookie").textContent;

console.log(`DOM tree ID - ${testDomElement}`);

for (
  let i = 0;
  i < document.getElementById("testArea2").childElementCount;
  i++
) {
  console.log(document.getElementById(`${i + 1}Cookie`).id);
}

console.log(
  `div length = ${document.getElementById("testArea2").childElementCount}`
);

for (
  let i = 0;
  i < document.getElementById("testArea2").childElementCount;
  i++
) {
  document.getElementById(`${i + 1}Cookie`).id += "--locked";
}

for (
  let i = 0;
  i < document.getElementById("testArea2").childElementCount;
  i++
) {
  console.log(document.getElementById(`${i + 1}Cookie--locked`).id);
}
