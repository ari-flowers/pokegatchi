//Tamagotchi class
class Tamagotchi {
  constructor(name, level, hunger, sleepiness, boredom, isAlive ) {
    this.name = name;
    this.level = level;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.isAlive = true;
  }
}
//Instantiate the Tamagotchi class
const newTamagotchi = new Tamagotchi(null, 1, 0, 0, 0, true)

// look into object destructuring in JS *****

let name = newTamagotchi.name
let level = newTamagotchi.level
let hunger = newTamagotchi.hunger
let sleepiness = newTamagotchi.sleepiness
let boredom = newTamagotchi.boredom

//Global selection variables
//Button selections
const hatchButton = document.getElementById('hatch')
const feedButton = document.getElementById('feed')
const lightsButton = document.getElementById('lights')
const playButton = document.getElementById('play')
//User displays and current sprite selector
const h2Name = document.getElementById('player-name')
let gameNameParent = h2Name.parentNode
const userDiv = document.getElementById('player-credentials')
const infoDiv = document.getElementById('tamagotchi-info')
const selectSprite = document.getElementById('pokemon')
const selectSpriteContainer = document.querySelector('.sprite-container')
const selectControlWrapper = document.getElementById('control-wrapper')
const selectStatDiv = document.getElementById('stat-counters')
const selectGameButtons = document.getElementById('game-buttons')
const selectP = document.querySelector('p')
//Select stat displays
let selectLevel = document.getElementById('tamagotchi-level')
let selectHunger = document.getElementById('hunger')
let selectSleepiness = document.getElementById('sleepiness')
let selectBoredom = document.getElementById('boredom')

//Function to store player Name
const hatchFunction = () => {
  const toggleHidden = document.getElementById('game-buttons')
  let nameInput = document.getElementById('tamagotchi-name')
  let storedName = nameInput.value
  h2Name.innerText = storedName
  newTamagotchi.name = storedName
  userDiv.remove()
  toggleHidden.classList.toggle('hide-buttons')
  selectStatDiv.classList.toggle('hidden')
  selectLevel.classList.toggle('hidden')
  selectControlWrapper.style.border = '7px solid black'
  selectControlWrapper.classList.toggle('hidden')
  selectSprite.src = "https://i.imgur.com/qnrid42.gif"
  selectSprite.style.width = '60%'
  // selectSprite.style.padding = '15px'
  let chosenName = document.getElementById('player-name').innerText
  selectLevel.innerText = "Level: " + level
  toggleAnimationOn()
  startLevelTimer()
  startHungerTimer()
  startSleepinessTimer()
  startBoredomTimer()
}

// Game Button Functionality
//**************************

  const feedFunction = () => {
    hunger = Math.max(0, hunger-1)
    selectHunger.innerText = hunger + "/10"
  }
//********** Light Button Cut Away **********************************
  const lightsFunction = () => {
    sleepiness = Math.max(0, sleepiness-3)
    selectSleepiness.innerText = sleepiness + "/10"
    infoDiv.style.background = "black"
    infoDiv.style.border = "7px solid gray"
    selectSprite.style.opacity = ".3"
    selectSprite.src = "https://i.imgur.com/jebaPhl.png"
    selectSprite.style.width = '100%'
    selectSprite.classList.remove('toggle-animation')
    selectGameButtons.classList.add('hide-buttons')
    selectP.style.display = "block"
    setTimeout(() => {
      infoDiv.style.background = "rgba(140, 140, 140, 0.7)"
      infoDiv.style.border = "7px solid black"
      selectSprite.style.opacity = "10"
      selectSprite.src = "https://i.imgur.com/qnrid42.gif"
      selectSprite.style.width = '60%'
      selectSprite.classList.add('toggle-animation')
      selectGameButtons.classList.remove('hide-buttons')
      selectP.innerText = ""
      selectP.style.display = "none"
    }, 3000)
    sleepMessage (newTamagotchi.name || "Your pokemon")
    }

    const sleepMessage = (name) => {

      const sleepPhrases = [name + " is fast asleep!", name + " is dreaming of battling the Elite Four...", "You hear loud snoring...", name + " is curled up by your feet.", "Zzzz...", name + " is drooling quite a lot! Gross!"]

      let randomIndex = Math.floor(Math.random() * sleepPhrases.length);
      selectP.innerText = sleepPhrases[randomIndex];
    }
// ***** Play Button **********************************
  const playFunction = () => {
    boredom = Math.max(0, boredom-1)
    selectBoredom.innerText = boredom + "/10"
  }

//Button event listeners
hatchButton.addEventListener('click', hatchFunction)
feedButton.addEventListener('click', feedFunction)
lightsButton.addEventListener('click', lightsFunction)
playButton.addEventListener('click', playFunction)

//Internal Timer functions on hatch button
let levelTimer = null
startLevelTimer = () => {
  levelTimer = setInterval(gainLevels, 4500)
}
//Function to increment levels, stops at Lvl 100
const gainLevels = () => {
  if (level === 100){
    clearInterval(levelTimer)
  }else if( newTamagotchi.isAlive === false) {
    clearInterval(levelTimer)
  }else{
    level = level+1
  }
  newTamagotchi.level = level
  displayNewLevel()
}
const displayNewLevel = () => {
  selectLevel.innerText = "Level: " + level
}
//every 15,000 ms, gain a level, stop at 100, option to start new pokemon, or maybe paragon?
//every 30,000 ms, gain a stat point
// Hunger --------------------------------------
let hungerTimer = null
const startHungerTimer = () => {
  hungerTimer = setInterval(gainHunger, 3000)
}
const gainHunger = () => {
  if (newTamagotchi.isAlive === false){
    clearInterval(hungerTimer)
  }else if(hunger === 10) {
    clearInterval(boredomTimer)
    gameOverHunger()
  }else{
    hunger = hunger+1
  }
  newTamagotchi.hunger = hunger
  displayNewHunger()
}
const displayNewHunger = () => {
  selectHunger.innerText = hunger + "/10"
}

//Sleepiness -------------------------------------
let sleepinessTimer = null
const startSleepinessTimer = () => {
  sleepinessTimer = setInterval(gainSleepiness, 3000)
}
const gainSleepiness = () => {
  if (newTamagotchi.isAlive === false ){
    clearInterval(sleepinessTimer)
  }else if( sleepiness === 10) {
    clearInterval(sleepinessTimer)
    gameOverSleepiness()
  }else{
    sleepiness = sleepiness+1
  }
  newTamagotchi.sleepiness = sleepiness
  displayNewSleepiness()
}
const displayNewSleepiness = () => {
  selectSleepiness.innerText = sleepiness + "/10"
}
//Boredom ---------------------------------------
let boredomTimer = null
const startBoredomTimer = () => {
  boredomTimer = setInterval(gainBoredom, 3000)
}
const gainBoredom = () => {
  if (newTamagotchi.isAlive === false){
    clearInterval(boredomTimer)
  }else if( boredom === 10) {
    clearInterval(boredomTimer)
    gameOverBoredom()
  }else{
    boredom = boredom+1
  }
  newTamagotchi.boredom = boredom
  displayNewBoredom()
}
const displayNewBoredom = () => {
  selectBoredom.innerText = boredom + "/10"
}
// ********************* GAME OVER functionality ********************************

const gameOverHunger = () => {
  newTamagotchi.isAlive = false
  selectSprite.src = "https://i.imgur.com/LORsYRY.png"
  selectGameButtons.classList.add('hide-buttons')
  selectStatDiv.classList.add('hidden')
  gameOverText()
  toggleAnimationOff()
  let createHungerLoss = document.createElement('h3')
  createHungerLoss.className = "changeColor"
  gameNameParent.insertBefore(createHungerLoss, h2Name)
  createHungerLoss.innerText = "Your Pokémon died of starvation!"
  createHungerLoss.style.color = "red;"
}
const gameOverSleepiness = () => {
  newTamagotchi.isAlive = false
  selectSprite.src = "https://i.imgur.com/LORsYRY.png"
  selectGameButtons.classList.add('hide-buttons')
  selectStatDiv.classList.add('hidden')
  gameOverText()
  toggleAnimationOff()
  let createSleepLoss = document.createElement('h3')
  createSleepLoss.className = "changeColor"
  gameNameParent.insertBefore(createSleepLoss, h2Name)
  createSleepLoss.innerText = "Your Pokémon keeled over from exhaustion!"
  createSleepLoss.style.color = "red;"
}
const gameOverBoredom = () => {
  newTamagotchi.isAlive = false
  selectSprite.src = "https://i.imgur.com/yc7KIYu.png?1"
  selectSprite.style.width = '70%'
  selectGameButtons.classList.add('hide-buttons')
  selectStatDiv.classList.add('hidden')


   gameOverText()
   toggleAnimationOff()
   let createBoredomLoss = document.createElement('h3')
   createBoredomLoss.className = "changeColor"
   gameNameParent.insertBefore(createBoredomLoss, h2Name)
   createBoredomLoss.innerText = "Your Pokémon got bored and ran away!"
}
const gameOverText = () => {
  let createGameOverText = document.createElement('h2')
  createGameOverText.className = "changeColor"
  gameNameParent.insertBefore(createGameOverText, h2Name)
  createGameOverText.innerText = "GAME OVER"
  selectControlWrapper.style.border = "7px solid transparent"
  // element.settAttribue('id', 'someName')
}

const toggleAnimationOn = () => {
  selectSprite.classList.add('toggle-animation')
}
const toggleAnimationOff = () => {
  selectSprite.classList.remove('toggle-animation')
}
//****************************************
/*
NEXT PHASE
Button functionality:
Feed
1. click feed
2. pull up another screen with 3 poffins
3. click the correct poffin?
4. if correct  > +1 > return screen
5. if incorrect > Aww too bad > return screen


playButton
1. click player
2. pull up another screen with rock paper scissors
3. if player wins, reduce a points
4. if computer wins, return to main
*/

//****EXTRA if level 16 or 36, evolve
// Random sprite on hatch
