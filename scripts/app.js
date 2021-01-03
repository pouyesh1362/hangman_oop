
const puzzle = document.querySelector('#puzzle');
const remined = document.querySelector('#re_guess');
const staus = document.querySelector('#status');
let game1;


window.addEventListener('keypress', function (e) {
  const guess = e.key.toLocaleLowerCase();
  game1.makeGuess(guess);
  game1.calculateStatus();
  render();
})

const startGame = async ()=>{
  const puzzle = await myRequestWord('1');
  game1 = new Hangman (puzzle, 5);
  render();
}
const render = () =>{
  staus.value = game1.status;
  puzzle.value = game1.puzzle;
  remined.value =  game1.statusMessage;
}

document.querySelector('#reset').addEventListener('click',()=>{
  startGame();
})

startGame();

































