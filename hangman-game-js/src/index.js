import Hangman from './hangman';
import getPuzzleAsync from './requests';

let h1;

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

window.addEventListener('keypress', (e) => {
    const guess = e.key.toLowerCase();
    h1.guessLetter(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = h1.getStatusMsg();

    h1.getPuzzle().split('').forEach((letter) => {
        const letterEl =  document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });
}

const startGame = async () => {
    const puzzle = await getPuzzleAsync(2);
    h1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
