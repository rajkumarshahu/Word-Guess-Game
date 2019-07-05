
  const singers= [
    {name:"Nirvana", message: "We are American rock band formed in Aberdeen, Washington, in 1987.", song: "Come as you are"},
    {name:"Boredoms", message:"A rock band from Osaka, Japan.", song:"96 Teenage Bondage"},
    {name:"Sheryl", message:"I am Sheryl Suzanne Crow.", song:"Can’t Cry Anymore"},
    {name:"Ricky", message:"Enrique \"Ricky\" Martín Morales (born December 24, 1971) is a Puerto Rican singer, actor and author.", song:"Livin' la Vida Loca"},
    {name:"Britney", message:"I am Britney Spears.", song:"Baby One More Time"},
    {name:"Oasis", message:"We are Oasis were an English rock band formed in Manchester in 1991.", song:"Wonderwall"},
    {name:"Mariah", message:"I am Mariah Carey.", song:"Fantasy"},
    {name:"Shania", message:"Shania Twain,(born Eilleen Regina Edwards; August 28, 1965) is a Canadian singer, songwriter and actress. ", song:"You’re Still the One"},
    {name: "Beck", message:"Beck, is an American singer-songwriter, musician, and record producer.", song:"Pay No Mind (Snoozer)"}
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
    document.getElementById("current-word").innerHTML = underscores.join(
      " "
    );
    underscores[singerSelected.indexOf(keyChar)] = keyChar;
    if (underscores.join("") == singerSelected) {
      document.getElementById("message").innerHTML = "You win!!!"+"<br>" + singers[randomIndex].message;
      document.getElementById("wins").innerHTML = score++;

    }
  } else {
    wrongAnswers.push(keyChar);
    document.getElementById("guessed-letters").innerHTML = wrongAnswers;
  }
});
