const singers = [
  {
    name: "Nirvana",
    message:
      "We are American rock band formed in Aberdeen, Washington, in 1987.",
    hint: "American rock band formed in Aberdeen, Washington",
    song: {
      songName: "Come as you are",
      songUrl: "assets/audio/Nirvana-Come-As-You-Are.mp3",
      imageUrl: "assets/images/nirvana.jpg",
    },
  },
  {
    name: "Radiohead",
    message:
      "Radiohead are an English rock band formed in Abingdon-on-Thames in 1985.",
    hint: "English rock band formed in Abingdon-on-Thames",
    song: {
      songName: "Idioteque",
      songUrl: "",
      imageUrl: "assets/images/radiohead.jpg",
    },
  },
  {
    name: "Sheryl",
    message: "I am Sheryl Suzanne Crow.",
    hint: "An American musician, singer, songwriter, and actress",
    song: {
      songName: "Can’t Cry Anymore",
      songUrl: "",
      imageUrl: "assets/images/sheryl.jpg",
    },
  },
  {
    name: "Ricky",
    message:
      'Enrique "Ricky" Martín Morales (born December 24, 1971) is a Puerto Rican singer, actor and author.',
    hint: "A Puerto Rican singer, actor and author.",
    song: {
      songName: "Livin' la Vida Loca",
      songUrl: "",
      imageUrl: "assets/images/ricky-martin.jpg",
    },
  },
  {
    name: "Britney",
    message: "I am Britney Spears.",
    hint:
      "She appeared in stage productions and television series, before signing with Jive Records in 1997",
    song: {
      songName: "Baby One More Time",
      songUrl: "",
      imageUrl: "assets/images/britney.jpg",
    },
  },
  {
    name: "Oasis",
    message:
      "We are Oasis were an English rock band formed in Manchester in 1991.",
    hint: "An English rock band formed in Manchester",
    song: {
      songName: "Wonderwall",
      songUrl: "assets/audio/Nirvana-Come-As-You-Are.mp3",
      imageUrl: "assets/images/oasis.jpg",
    },
  },
  {
    name: "Mariah",
    message: "I am Mariah Carey.",
    hint:
      "She is noted for her five-octave vocal range, melismatic singing style, and signature use of the whistle register",
    song: {
      songName: "Fantasy",
      songUrl: "",
      imageUrl: "assets/images/mariah.png",
    },
  },
  {
    name: "Shania",
    message:
      "Shania Twain,(born Eilleen Regina Edwards; August 28, 1965) is a Canadian singer, songwriter and actress. ",
    hint: "A Canadian singer, songwriter and actress.",
    song: {
      songName: "You’re Still the One",
      songUrl: "",
      imageUrl: "assets/images/shania.jpg",
    },
  },
  {
    name: "Beck",
    message:
      "Beck, is an American singer-songwriter, musician, and record producer.",
    hint:
      "He rose to fame in the early 1990s with his experimental and lo-fi style.",
    song: {
      songName: "Pay No Mind (Snoozer)",
      songUrl: "",
      imageUrl: "assets/images/beck.jpeg",
    },
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

document.getElementById("message").innerHTML =
  "<h3>" + "Press any key to continue." + "</h4>";

document.addEventListener("keypress", event => {
  document.getElementById("message").innerHTML =
    "<h3>" + "Hint: " + singers[randomIndex].hint + "</h4>";

  let keyChar = String.fromCharCode(event.keyCode).toUpperCase();

  console.log(singerSelected.indexOf(keyChar) + " " + keyChar);

  if (singerSelected.indexOf(keyChar) >= 0) {
    rightAnswers.splice(keyChar);

    updateUnderscores(keyChar);

    document.getElementById("current-word").textContent = underscores.join(" ");

    // Success condition
    if (underscores.join("") == singerSelected) {
      document.getElementById("wins").innerHTML = ++score;
      document.getElementById("message").innerHTML =
        "<h3>" +
        "You win!!!" +
        "</h4>" +
        "<h5>" +
        singers[randomIndex].message +
        "</h5> <a href='javascript:;' onclick='document.location=\"\"'>Play Again</a>";

      document
        .getElementById("singer-image")
        .setAttribute("src", singers[randomIndex].song.imageUrl);

      var audio = new Audio(singers[randomIndex].song.songUrl);
      if(singers[randomIndex].song.songUrl != ''){
        audio.play();
      }else{
        console.log('audio file not found.')
      }
    }
  } else {
    if (wrongAnswers.indexOf(keyChar) < 0) {
      wrongAnswers.push(keyChar);
      document.getElementById(
        "remaining-guesses"
      ).textContent = --remainingGuesses;
      document.getElementById("guessed-letters").innerHTML = wrongAnswers;
    }
  }

  if (remainingGuesses == 0) {
    document.getElementById("message").innerHTML =
      "<h3>" + "Sorry not a right guess!!!" + "</h4> <a href='javascript:;' onclick='document.location=\"\"'>Play Again</a>";
  }
});

var updateUnderscores = function(keyChar) {
  for (var i = 0; i < singerSelected.length; i++) {
    if (keyChar == singerSelected.charAt(i)) {
      underscores[i] = keyChar;
    }
  }
};
