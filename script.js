"use strict";

//gather elements that need updating
//top score
//99 spans

const score = document.getElementById("score");

const reactionScore = document.querySelector(".summary-reaction-score");
console.log(reactionScore.textContent);
console.log("done");

const memoryScore = document.querySelector(".summary-memory-score");

const verbalScore = document.querySelector(".summary-verbal-score");

const visualScore = document.querySelector(".summary-visual-score");

function populateScores(scores) {
  console.log("start");

  const reaction = scores[0].score;
  const memory = scores[1].score;
  const verbal = scores[2].score;
  const visual = scores[3].score;

  const average = (reaction + memory + verbal + visual) / 4;

  score.textContent = Math.floor(average);
  reactionScore.textContent = reaction;
  memoryScore.textContent = memory;
  verbalScore.textContent = verbal;
  visualScore.textContent = visual;
}

const updateScores = async () => {
  const requestUrl = "data.json";
  const request = new Request(requestUrl);
  const response = await fetch(request);
  const scoresData = await response.json();
  //lets check to see if this is correct

  populateScores(scoresData);
};

updateScores();
