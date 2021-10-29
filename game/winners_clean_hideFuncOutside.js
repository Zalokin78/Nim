"use strict";

function init(
  roundPlaying,
  activePlyr,
  currentScore,
  lockedRows,
  matchesClicked
) {
  this.roundPlaying = roundPlaying;
  this.activePlyr = activePlyr;
  this.currentScore = currentScore;
  this.lockedRows = lockedRows;
  this.matchesClicked = matchesClicked;
}

const currentGame = new init(true, 0, 0, false, 0, 0);

const calcTotalMatches = function (rows) {
  return rows * rows;
};

//let currentGame.matchesClicked = 0;

const hide = function (evt) {
  if (currentGame.roundPlaying == true) {
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
      currentGame.matchesClicked++;
      console.log(`click no ${currentGame.matchesClicked}`);
      if (currentGame.matchesClicked == calcTotalMatches(totalRows) - 1) {
        winner();
        currentGame.roundPlaying = false;
      }
    }

    //console.log(evt.target.p  arentNode.id[3]);
    //console.log(evt.target.id[0]);
    console.log(`Num of matches = ${evt.target.matchNum}`);
    console.log(`match id (this is inside hide func) ${evt.target.matchNum}`);
    //console.log(`Total matches = ${calcTotalMatches(totalRows)}`);
  }
};

const changePlayer = function () {
  if (currentGame.roundPlaying == true) {
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
  }
};

const winner = function () {
  console.log("WINNER!!");
};
const generateMatches = function (startingMatches, maxRows) {
  //let matchNum = 0;

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
      //the + 65 is because the ASCII code of "A" begins at o65
      match.matchNum = matchRef * rowNo;
      match.id = `${rowNo}${String.fromCharCode(matchRef + 65)}`;
      match.src = "match.png";
      match.addEventListener("click", hide, false);
      //console.log(`MatchNum = ${match.matchNum}`);
      //match.setAttribute("onclick", "blank(this);");

      // match.matchNum++;

      //create array element
      rows[rowNo][matchRef] = match;
      rowDiv.appendChild(match);
    }

    //increase number of matches per row by one
    startingMatches += 2;
    //increase ascii character index by one - used for labeling each row id in match.id
  }
  //console.log(calcTotalMatches(maxRows));
  return maxRows;
};

document.querySelector(".end-turn").addEventListener("click", changePlayer);

const totalRows = generateMatches(1, 4);
//console.log(`totalRows = ${totalRows}`);
