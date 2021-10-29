"use strict";

function init(roundPlaying, activePlyr, currentScore, lockedRows) {
  this.roundPlaying = roundPlaying;
  this.activePlyr = activePlyr;
  this.currentScore = currentScore;
  this.lockedRows = lockedRows;
}

const currentGame = new init(true, 0, 0, false, 0, 0);

const changePlayer = function () {
  currentGame.activePlyr == 0
    ? (currentGame.activePlyr = 1)
    : (currentGame.activePlyr = 0);
  document.querySelector(".player-0").classList.toggle("player--active");
  document.querySelector(".player-1").classList.toggle("player--active");

  const nodes = document.getElementById("nimSet").childNodes;

  //console.log(nodes);

  for (const element of nodes) {
    element.id = element.id.replace(" --locked", "");
    //console.log(element.id);
  }
  currentGame.lockedRows = false;
};

const winner = function () {
  console.log("WINNER!!");
};
const generateMatches = function (startingMatches, maxRows) {
  const hide = function (evt) {
    //console.log(`This is evt - ${evt}`);
    console.log(`Matrix code - ${evt.target.id}`);

    for (
      let i = 0;
      i < document.getElementById("nimSet").childElementCount;
      i++
    ) {
      if (i != evt.target.id[0] && currentGame.lockedRows == false)
        document.getElementById(`row${[i]}`).id += " --locked";

      //console.log(evt.target.parentNode.id[3]);
    }
    currentGame.lockedRows = true;

    if (!evt.target.parentNode.id.includes("locked")) {
      evt.target.style.visibility = "hidden";
      clickNo++;
      console.log(`click no ${clickNo}`);
      if (clickNo == matchNum - 1) {
        winner();
        currentGame.roundPlaying = false;
      }
    }

    //console.log(evt.target.parentNode.id[3]);
    //console.log(evt.target.id[0]);
  };
  let clickNo = 0;
  let matchNum = 0;

  const rows = [];

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

      match.matchNum++;

      //create array element
      rows[rowNo][matchRef] = match;
      rowDiv.appendChild(match);
    }

    //increase number of matches per row by one
    startingMatches += 2;
    //increase ascii character index by one - used for labeling each row id in match.id
  }

  console.log(`Number of matches = ${matchNum}`);
};

document.querySelector(".end-turn").addEventListener("click", changePlayer);

generateMatches(1, 4);
