// Rock, Paper, Scissors Game
function playRPS(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const botChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (userChoice === botChoice) {
        result = 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'Bot wins!';
    }

    document.getElementById('rps-result').textContent = `You chose ${userChoice}. Bot chose ${botChoice}. ${result}`;
}

// Tic-Tac-Toe Game
let ticTacToeBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function playTicTacToe(index) {
    if (ticTacToeBoard[index] === '') {
        ticTacToeBoard[index] = currentPlayer;
        document.querySelectorAll('#tic-tac-toe-board td')[index].textContent = currentPlayer;

        if (checkWinner()) {
            document.getElementById('tic-tac-toe-result').textContent = `${currentPlayer} wins!`;
        } else if (ticTacToeBoard.every(cell => cell !== '')) {
            document.getElementById('tic-tac-toe-result').textContent = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]  // diagonals
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return ticTacToeBoard[a] && ticTacToeBoard[a] === ticTacToeBoard[b] && ticTacToeBoard[a] === ticTacToeBoard[c];
    });
}

// Additional games (Number Guessing, Memory Flip, Word Unscramble) can be added similarly
let randomNumber = Math.floor(Math.random() * 100) + 1;

function playNumberGuessing() {
    const userGuess = document.getElementById('guess-input').value;
    let result = '';

    if (userGuess == randomNumber) {
        result = 'Congratulations! You guessed the right number!';
        randomNumber = Math.floor(Math.random() * 100) + 1; // Reset for the next round
    } else if (userGuess < randomNumber) {
        result = 'Too low! Try again.';
    } else {
        result = 'Too high! Try again.';
    }

    document.getElementById('guess-result').textContent = result;
}
const memoryCards = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createMemoryGame() {
    const gameBoard = document.getElementById('memory-game');
    gameBoard.innerHTML = '';
    const shuffledCards = shuffle([...memoryCards]);

    shuffledCards.forEach((letter, index) => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.letter = letter;
        card.dataset.index = index;
        card.onclick = flipCard;
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    const card = this;
    card.classList.add('flipped');
    card.textContent = card.dataset.letter;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.letter === card2.dataset.letter) {
        matchedPairs++;
        if (matchedPairs === memoryCards.length / 2) {
            document.getElementById('memory-result').textContent = 'You matched all pairs! Well done!';
        }
    } else {
        card1.classList.remove('flipped');
        card1.textContent = '';
        card2.classList.remove('flipped');
        card2.textContent = '';
    }

    flippedCards = [];
}

createMemoryGame();
const words = ['calm', 'relax', 'peace', 'focus', 'mind'];
let currentWord = '';
let scrambledWord = '';

function scrambleWord(word) {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}

function newScramble() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById('scrambled-word').textContent = scrambledWord;
}

function submitUnscramble() {
    const userGuess = document.getElementById('unscramble-input').value;
    if (userGuess === currentWord) {
        document.getElementById('unscramble-result').textContent = 'Correct! Great job!';
        newScramble(); // Start a new word
    } else {
        document.getElementById('unscramble-result').textContent = 'Try again!';
    }
}

newScramble();
