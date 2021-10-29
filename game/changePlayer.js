"use strict";

/* let locked = false;
const hide = function (evt) {



  console.log(`This is evt - ${evt}`);
  console.log(`Matrix code - ${evt.target.id}`);

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
} */

function init(gamePlaying, activePlyr, currentScore) {
  this.gamePlaying = gamePlaying;
  this.activePlyr = activePlyr;
  this.currentScore = currentScore;
}

const currentGame = new init(true, 0, 0);

console.log(`Game Status = ${currentGame.gamePlaying}`);

const changePlayer = function () {
  currentGame.activePlyr == 0
    ? (currentGame.activePlyr = 1)
    : (currentGame.activePlyr = 0);
  document.querySelector(".player-0").classList.toggle("player--active");
  document.querySelector(".player-1").classList.toggle("player--active");

  const nodes = document.getElementById("nimSet").childNodes;

  console.log(nodes);

  for (const element of nodes) {
    /* element.classList.remove("--locked"); */

    //element.setAttribute("--locked", "");

    //element.removeAttribute("--locked");

    //document.getElementById(`row${[i]}`).id += " --locked";
    //element.id.slice(0, -8);
    element.id = element.id.replace(" --locked", "");
    console.log(element.id);
  }
  /* let testString = "Nicholas78";
  console.log(testString);
  let newTestString = testString.replace("78", "");
  console.log(newTestString); */
  /* const testNode = document.getElementById("test-id wow");
  console.log(testNode); */
  //testNode.removeAttribute("wow");
  //document.getElementById("test-idwow").setAttribute("test-idwow", "test-id");
  //document.getElementById("test-idwow").id -= "wow";

  /* console.log(maxRows); */
  /* const nodeList = document.querySelectorAll("id^="); */

  /* for (let rowNo = 0; rowNo < maxRows; rowNo++) {
  
  document.getElementById(`row${[i]}`).id += "--locked"; */
};

document.querySelector(".end-turn").addEventListener("click", changePlayer);

const hideClosure = function () {
  let locked = false;

  return function (evt) {
    console.log(`This is evt - ${evt}`);
    console.log(`Matrix code - ${evt.target.id}`);

    for (
      let i = 0;
      i < document.getElementById("nimSet").childElementCount;
      i++
    ) {
      if (i != evt.target.id[0] && locked == false)
        document.getElementById(`row${[i]}`).id += " --locked";

      console.log(evt.target.parentNode.id[3]);
    }
    locked = true;

    if (!evt.target.parentNode.id.includes("locked"))
      evt.target.style.visibility = "hidden";

    console.log(evt.target.parentNode.id[3]);
    console.log(evt.target.id[0]);
  };
};

const hide = hideClosure();
//let startAscii = 0;

const generateMatches = function (startingMatches, maxRows) {
  changePlayer(maxRows);
  let matchNum = 0;
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
    startingMatches += 2;
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

/* console.log(document.getElementById("nimSet"));

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
 */
