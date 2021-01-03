class Hangman {
  constructor(word, remainingGuess, status){
    this.word = word.toLowerCase().split('');
    this.remainingGuess = remainingGuess;
    this.guessLetters = [];
    this.status = 'playing'
  }

  calculateStatus(){
    const finished = this.word.every((letter) => this.guessLetters.includes(letter) || letter === ' ');

    if (this.remainingGuess === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }
  get puzzle(){
    let puzzle = '';
    this.word.forEach(element => {
      this.guessLetters.includes(element) || element === ' ' ? puzzle += element : puzzle += '*'
    });

    return puzzle;
  }

  get  statusMessage(){
    if (this.status === 'playing') {
      return `Guess left : ${this.remainingGuess}`;
    } else if (this.status === 'failed') {
      return `Word was "${this.word.join('')}"`;
    } else {
      return `Great work! `;
    }
  }
  makeGuess(guess){
    guess = guess.toLowerCase();
    const isUnique = !this.guessLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);
    if (this.status != 'playing') {
      return;
    }

    if (isUnique) {
      this.guessLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuess--;
    }
    this.calculateStatus();
  }

}
