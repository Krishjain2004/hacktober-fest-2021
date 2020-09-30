const Hangman = function(word, guesses){
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessedLetters = [];
    this.status = 'playing';
}

Hangman.prototype.calcStatus = function(){
    let finished = true;

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            
        } else {
            finished = false;
        }
    });

    if (this.guesses === 0){
        this.status = 'failed';
    } else if (finished){
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = '';
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });
    return puzzle;
}

Hangman.prototype.getStatusMsg = function(){
    if(this.status === 'playing'){
        return `Guesses Left : ${this.guesses}`;
    } else if(this.status === 'failed'){
        return `Nice Try! The word was "${this.word.join('')}"`;
    } else {
        return `Great Work! You guessed the word.`
    }
}

Hangman.prototype.guessLetter = function(guess){
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if(this.status !== 'playing'){
        return;
    }

    if(isUnique){
        this.guessedLetters.push(guess);
    }
    if(isUnique && isBadGuess){
        this.guesses--;
    }
    this.calcStatus();
}

export { Hangman as default };
