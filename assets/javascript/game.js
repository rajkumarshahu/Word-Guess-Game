const game = {
  singers: [
    "Nirvana",
    "Boredoms",
    "Sheryl Crow",
    "Ice Cube",
    "Snoop Dogg",
    "Oasis",
    "Mariah Carey",
    "Backstreet Boys",
    "raj",
  ],
  rightAnswers: [],
  wrongAnswers: [],
  underscores: []
};
// select random singer name
let randomIndex = Math.floor(Math.random() * game.singers.length);
console.log(randomIndex);

let singerSelected = game.singers[randomIndex];

let score = 0;

console.log(singerSelected);

// generate underscores based on length of singer's name if space generate hyphen

let generateUnderscores = () => {
  for (let i = 0; i <= singerSelected.length - 1; i++) {
    if (singerSelected.charAt(i) != " ") {
      game.underscores.push("_");
    } else {
      game.underscores.push("-");
    }
  }
  return game.underscores;
};

document.getElementById("current-word").innerHTML = generateUnderscores().join(
  " "
);

document.addEventListener("keypress", event => {
  let keyChar = String.fromCharCode(event.keyCode);
  if (singerSelected.indexOf(keyChar) > -1) {
    game.rightAnswers.push(keyChar);
    document.getElementById("current-word").innerHTML = game.underscores.join(
      " "
    );
    game.underscores[singerSelected.indexOf(keyChar)] = keyChar;
    if (game.underscores.join("") == singerSelected) {
      document.getElementById("message").innerHTML = "You win!!!";
      document.getElementById("wins").innerHTML = score++;

    }
  } else {
    game.wrongAnswers.push(keyChar);
    document.getElementById("guessed-letters").innerHTML = game.wrongAnswers;
  }
});
