const singers = [
  {
    name: "Nirvana",
    message: "We are American rock band formed in Aberdeen, Washington, in 1987.",
    song: {
      songName:"Come as you are",
      url: ""
    }
  },
  {
    name: "Boredoms",
    message: "A rock band from Osaka, Japan.",
    song: { songName: "96 Teenage Bondage", url: "" }
  },
  {
    name: "Sheryl",
    message: "I am Sheryl Suzanne Crow.",
    song: {songName:"Can’t Cry Anymore", url:""}
  },
  {
    name: "Ricky",
    message:'Enrique "Ricky" Martín Morales (born December 24, 1971) is a Puerto Rican singer, actor and author.',
    song: {songName:"Livin' la Vida Loca", url:""}
  },
  {
    name: "Britney",
    message: "I am Britney Spears.",
    song: {songName:"Baby One More Time", url:""}
  },
  {
    name: "Oasis",
    message:"We are Oasis were an English rock band formed in Manchester in 1991.",
    song: {songName:"Wonderwall", url:""}
  },
  { name: "Mariah", message: "I am Mariah Carey.", song: "Fantasy" },
  {
    name: "Shania",
    message: "Shania Twain,(born Eilleen Regina Edwards; August 28, 1965) is a Canadian singer, songwriter and actress. ",
    song: {songName: "You’re Still the One", url:""}
  },
  {
    name: "Beck",
    message: "Beck, is an American singer-songwriter, musician, and record producer.",
    song: {songName:"Pay No Mind (Snoozer)", url:""}
  },
];

let rightAnswers = [];
let wrongAnswers = [];
let underscores = [];

// select random singer name
let randomIndex = Math.floor(Math.random() * singers.length);
console.log(randomIndex);

let singerSelected = singers[randomIndex].name;

let score = 0;

console.log(singerSelected);

let startGame = () => {
  singerSelected;
  score = 0;
};

// generate underscores based on length of singer's name if space generate hyphen

let generateUnderscores = () => {
  for (let i = 0; i <= singerSelected.length - 1; i++) {
    if (singerSelected.charAt(i)) {
      underscores.push("_");
    }
  }
  return underscores;
};

document.getElementById("current-word").innerHTML = generateUnderscores().join(
  " "
);

document.addEventListener("keypress", event => {
  let keyChar = String.fromCharCode(event.keyCode);
  if (singerSelected.indexOf(keyChar) > -1) {
    rightAnswers.push(keyChar);
    document.getElementById("current-word").innerHTML = underscores.join(" ");
    underscores[singerSelected.indexOf(keyChar)] = keyChar;
    if (underscores.join("") == singerSelected) {
      document.getElementById("message").innerHTML =
        "You win!!!" + "<br>" + singers[randomIndex].message;
      document.getElementById("wins").innerHTML = score++;
    }
  } else {
    wrongAnswers.push(keyChar);
    document.getElementById("guessed-letters").innerHTML = wrongAnswers;
  }
});
