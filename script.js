var createCandidate = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.tallyVotes = function() {
    this.totalVotes = 0;

    for (var i =0; i < this.electionResults.length; i++) {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };

  return politician;

};

var amelia = createCandidate("Amelia Harris", [132, 17, 11]);
var connor = createCandidate("Connor Yang", [245, 141, 136]);


amelia.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
connor.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

amelia.electionResults[9]=1;
connor.electionResults[9]=28;

amelia.electionResults[4]=17;
connor.electionResults[4]=38;

amelia.electionResults[43]=11;
connor.electionResults[43]=27;

console.log(amelia.electionResults);
console.log(connor.electionResults);

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (amelia.electionResults[state] > connor.electionResults[state]) {
  theStates[state].winner = amelia;
  } else if (amelia.electionResults[state] < connor.electionResults[state]) {
  theStates[state].winner = connor;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
   theStates[state].rgbColor = [11, 32, 57];
  }

  var stateTable = document.getElementById('stateResults');
  var header = stateTable.children[0];
  var body = stateTable.children[1];
  var stateName = header.children[0].children[0];
  var stateAbbr = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var stateWinnerName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbr.innerText = "(" + theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = amelia.name;
  candidate2Name.innerText = connor.name;

  candidate1Results.innerText = amelia.electionResults[state];
  candidate2Results.innerText = connor.electionResults[state];

  if (theStates[state].winner == null) {
    stateWinnerName.innerText = "DRAW";
  } else stateWinnerName.innerText = theStates[state].winner.name;
}


amelia.tallyVotes();
connor.tallyVotes();

console.log(amelia.totalVotes);
console.log(connor.totalVotes);

var winner = "???";

if (amelia.totalVotes > connor.totalVotes) {
  winner = amelia.name;
} else if (amelia.totalVotes < connor.totalVotes) {
  winner = connor.name;
} else {
  winner = "draw"
}

console.log("The winner is " + winner + "!!!");

var countryTable = document.getElementById('countryResults');
countryTable.children[0].children[0].children[0].innerText = amelia.name;
countryTable.children[0].children[0].children[1].innerText = amelia.totalVotes;
countryTable.children[0].children[0].children[2].innerText = connor.name;
countryTable.children[0].children[0].children[3].innerText = connor.totalVotes;
countryTable.children[0].children[0].children[5].innerText = winner;
