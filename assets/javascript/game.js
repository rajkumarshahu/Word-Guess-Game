const singers = [
  {
    name: "Nirvana",
    message:"We are American rock band formed in Aberdeen, Washington, in 1987.",
    song: {
      songName: "Come as you are",
      songUrl: "assets/audio/Nirvana-Come-As-You-Are.mp3",
      imageUrl: "assets/images/nirvana.jpg"
    },
  },
  {
    name: "Radiohead",
    message: "Radiohead are an English rock band formed in Abingdon-on-Thames in 1985.",
    song: { songName: "Idioteque", songUrl: "", imageUrl: "assets/images/radiohead.jpg" },
  },
  {
    name: "Sheryl",
    message: "I am Sheryl Suzanne Crow.",
    song: { songName: "Can’t Cry Anymore", songUrl: "", imageUrl: "assets/images/sheryl.jpg" },
  },
  {
    name: "Ricky",
    message:
      'Enrique "Ricky" Martín Morales (born December 24, 1971) is a Puerto Rican singer, actor and author.',
    song: { songName: "Livin' la Vida Loca", songUrl: "", imageUrl: "assets/images/ricky-martin.jpg"},
  },
  {
    name: "Britney",
    message: "I am Britney Spears.",
    song: { songName: "Baby One More Time", songUrl: "", imageUrl: "assets/images/britney.jpg" },
  },
  {
    name: "Oasis",
    message:
      "We are Oasis were an English rock band formed in Manchester in 1991.",
    song: { songName: "Wonderwall", songUrl: "assets/audio/Nirvana-Come-As-You-Are.mp3", imageUrl: "assets/images/oasis.jpg"},
  },
  { name: "Mariah", message: "I am Mariah Carey.", song: "Fantasy" },
  {
    name: "Shania",
    message:
      "Shania Twain,(born Eilleen Regina Edwards; August 28, 1965) is a Canadian singer, songwriter and actress. ",
    song: { songName: "You’re Still the One", songUrl: "", imageUrl: "assets/images/mariah.png" },
  },
  {
    name: "Beck",
    message:
      "Beck, is an American singer-songwriter, musician, and record producer.",
    song: { songName: "Pay No Mind (Snoozer)", songUrl: "", imageUrl: "assets/images/beck.jpeg" },
  },
];

let rightAnswers = [];
let wrongAnswers = [];
let underscores = [];

// select random singer name
let randomIndex = Math.floor(Math.random() * singers.length);
console.log(randomIndex);

let singerSelected = singers[randomIndex].name.toUpperCase();

let score = 0;
let remainingGuesses = 10;

console.log(singerSelected);

let startGame = () => {
  singerSelected;
  score = 0;
};

// generate underscores based on length of singer's name

let generateUnderscores = () => {
  for (let i = 0; i < singerSelected.length; i++) {
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

  let keyChar = String.fromCharCode(event.keyCode).toUpperCase();

  console.log(singerSelected.indexOf(keyChar) + " "+ keyChar);

  if (singerSelected.indexOf(keyChar) >= 0 ) {
    rightAnswers.splice(keyChar);

    underscores[(singerSelected.indexOf(keyChar))] = keyChar;

    document.getElementById("current-word").textContent = underscores.join(" ");

    console.log(underscores);

    if (underscores.join("") == singerSelected) {
      document.getElementById("wins").innerHTML = ++score;
      document.getElementById("message").innerHTML = "<h3>" +
        "You win!!!"+"</h4>" + "<h5>"+ singers[randomIndex].message + "</h5>";
        document.getElementById("singer-image").setAttribute("src", singers[randomIndex].song.imageUrl);

        document.getElementById("audio").setAttribute("src", singers[randomIndex].song.songUrl);

        // document.getElementById("audio").play();


    }
  } else {

    wrongAnswers.push(keyChar);
    document.getElementById("remaining-guesses").textContent = --remainingGuesses;
    document.getElementById("guessed-letters").innerHTML = wrongAnswers;

  }if(remainingGuesses == 0){
    document.getElementById("message").innerHTML = "<h3>" +
        "Sorry not a right guess!!!"+"</h4>"
  }
});