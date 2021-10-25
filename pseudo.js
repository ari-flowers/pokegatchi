//Pseudo code and JS tresselboard
// Hatch random sprite functionality work in progress 
 // roll for a number between 1 and 4, value for each

 //roll for a number between 1 and 25, if x, then roll 1-4 for shiny chance
const chooseSprite = () => {

  const randomChanceRoll = Math.floor(Math.random() * 25) + 1
    if (randomChanceRoll === 18) {
      const shinySpriteRoll = Math.floor(Math.random() * 4) + 1
        if (shinySpriteRoll === 1) {
          console.log("Shiny charmander")
        }else if ( shinySpriteRoll === 2) {
          console.log("Shiny Squirtle");
        }else if ( shinySpriteRoll === 3) {
          console.log( "Shiny Bulbasaur")
        }else{
          console.log("Shiny Pikachu")
        }
    }
 }else{
   const spriteRoll = Math.floor(Math.random() * 4) + 1
   if (spriteRoll === 1) {
     console.log("Charmander")
   }else if ( spriteRoll === 2) {
     console.log("Squirtle");
   }else if ( spriteRoll === 3) {
     console.log( "Bulbasaur")
   }else{
     console.log("Pikachu")
   }
 }



animatedSprite = {
  Charmander: 'https://i.imgur.com/qnrid42.gif',
  Squirtle: 'https://i.imgur.com/gcwybUA.gif',
  Bulbasaur: 'https://i.imgur.com/hrxKuhK.gif',
  Pikachu: 'https://i.imgur.com/dZEMrdz.gif',
}

animatedShinySprite = {
  Charmander: 'https://i.imgur.com/xA1LJO3.gif',
  Squirtle: 'https://i.imgur.com/mbMTVyP.gif',
  Bulbasaur: 'https://i.imgur.com/486CHuW.gif',
  Pikachu: 'https://i.imgur.com/GAvGCw1.gif',
}

stillSprite = {
  Charmander: 'https://i.imgur.com/jebaPhl.png',
  Squirtle: 'https://i.imgur.com/Ljwb1Bv.png',
  Bulbasaur: 'https://i.imgur.com/fcprU7h.png',
  Pikachu: 'https://i.imgur.com/SEJRaHa.png',
}

stillShinySprite = {
  Charmander: 'https://i.imgur.com/Xd6PF0u.png',
  Squirtle: 'https://i.imgur.com/CElKtnh.png',
  Bulbasaur: 'https://i.imgur.com/3AqrYf0.png',
  Pikachu: 'https://i.imgur.com/jDsBICV.png',
}

//display hunger, sleepiness, boredom, (a counter? gets red as it nears 10? 0/10 --> 10/10)

//another idea for metrics, a bar with individual ticks towards 10, meter

// ***************************************************************************************
// ***EXTRAS***
//intro scene with the daycare person. ""
// change background images with arrow buttons
// choice of starter pokemon
// evolve at certain ages (levels)
// lay an egg?
// exercise() function to increase level mechanic (if poke is at least x years old and lvl x, evolve!)

//play >>> nest rock paper scissors??? instead of RPS, do fire, water, grass???
//play tic tac toe maybe

//feed >>> pick from a list of pokeblocks, have the computer roll for what pokemon is in the mood for, if chooses corret, subtract a hunger point

// lights >>> Zzz wait for x amount of time, some mechanic to pick how long to wait at the cost of adding more points elsewhere


/* sprite library ideas

random roll on click to choose a pokemon, 1/100 chance of being shiny?
either hardcode index # and roll for a shi ny sprite
or
roll and if 1/20, pick random sprite from shiny list
*/

const player = {
  currentChoice: null
}
const pokegotchi = {
  currentChoice: null
}
const choices = ["Fire", "Water", "Grass"]


const pokegotchiChooses = () => {
  const randomIndex = Math.floor(Math.random() * choices.length)
  pokegotchi.currentChoice = choices[randomIndex]
}
const compareChoices = () => {
  pokegotchiChooses()
  if(pokegotchi.currentChoice === player.currentChoice){
      displayResult("It's a tie! The pokegotchi and the player both chose " + pokegotchi.currentChoice + ".")
    }else if(pokegotchi.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
      displayResult("The player wins! The player chose " + player.currentChoice + " and the pokegotchi chose " + pokegotchi.currentChoice + ".")
    }else{
      displayResult("The pokegotchi wins! The player chose " + player.currentChoice + " and the pokegotchi chose " + pokegotchi.currentChoice + ".")
    }
  }else if(pokegotchi.currentChoice === choices[1]){
     if(player.currentChoice === choices[2]){
     displayResult("The player wins! The player chose " + player.currentChoice + " and the pokegotchi chose " + pokegotchi.currentChoice + ".")
    }else{
      displayResult("The pokegotchi wins! The player chose " + player.currentChoice + " and the pokegotchi chose " + pokegotchi.currentChoice + ".")
    }
  }else if(pokegotchi.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
    displayResult("The player wins! The player chose " + player.currentChoice + " and the pokegotchi chose " + pokegotchi.currentChoice + ".")
    }else{
    displayResult("The pokegotchi wins! The player chose " + player.currentChoice + " and the pokegotchi chose " + pokegotchi.currentChoice + ".")
    }
  }
}

 const updateChoice0 = () => {
   clearChoices()
   const fire = choices[0]
   player.currentChoice = fire
   compareChoices()
}
 const updateChoice1 = () => {
   clearChoices()
   const water = choices[1]
   player.currentChoice = water
   compareChoices();
}
 const updateChoice2 = () => {
   clearChoices()
   const grass = choices[2]
   player.currentChoice = grass
   compareChoices()
}
document.getElementById("fire button").onclick = updateChoice0
document.getElementById("water button").onclick = updateChoice1
document.getElementById("grass button").onclick = updateChoice2
  //create a variable for the choice
  // update the player.currentChoice to choices[0]

const clearChoices = () => {
  const clear = document.querySelector("#display")
  clear.innerText = " "
  document.body.appendChild(clear)
}
//display result const

const displayResult = (result) => {
  const resultText = document.querySelector("#display")
  resultText.innerText = result
  document.body.appendChild(resultText)
}
