$(document).ready(function () {
    // click events to hide relevant divs in the application
    $('#next-card').hide();
    $('#rules').hide();
    $('#game').hide();
    $('#rules-button').click(function () {
        $('#first-paint').hide();
        $('#rules').show();
    });
    $('#start-button').click(function () {
        $('#rules').hide();
        $('#game').show();
        newGame();
    });
    // click events on game buttons
    $('#submit').click(function () {
        checkAnswer();
    });
    $('#next-card').click(function () {
        newGame();
    });
});
// potential cards as array of objects key van be taken to set classes to card face and values taken for game
let cards = [{
    Ace: 1},
    {Two: 2},
    {Three: 3},
    {Four: 4},
    {Five: 5},
    {Six: 6},
    {Seven: 7},
    {Eight: 8},
    {Nine: 9},
    {Ten: 10},
    {Jack: 11},
    {Queen: 12},
    {King: 13
}];

let game = {
    currentCard: '',
    tries: '',
    correct: 0,
    incorrect: 0,
};

function newGame() {
    game.currentCard = '';
    game.tries = 3;
    $('#next-card').hide();
    $('#submit').show();
    $('#content').removeClass();
    $('#card-answer').removeClass();
    $('#hint-text').text('');
    setTimeout(() => {
        pickCard();
    }, 300);
    updateTries();
};

function pickCard() {
    game.currentCard = cards[Math.floor(Math.random() * cards.length)];
    $('#card-answer').addClass('card-' + Object.keys(game.currentCard));
};

function checkAnswer() {
    // evaluates piucture cards ie A,J,Q,K as numbers
    let playerAnswer = '';
        if ($('#answer-box').val() === 'Jack') {
            playerAnswer = 11;
        } else if ($('#answer-box').val() === 'Queen') {
            playerAnswer = 12;
        } else if ($('#answer-box').val() === 'King') {
            playerAnswer = 13;
        } else if ($('#answer-box').val() === 'Ace') {
            playerAnswer = 1;
        } else {
            playerAnswer = parseInt($('#answer-box').val(), 10);
        };
    let correctAnswer = Object.values(game.currentCard);

    if (playerAnswer > correctAnswer) {
        $('#hint-text').text('The card is lower than that');
        game.tries--;
        updateTries();
        if (game.tries === 0) {
            $('#hint-text').text('Ran out of guesses');
            game.incorrect++;
            updateIncorrect();
            showCard();
            nextCardRed();
        }
    } else if (playerAnswer < correctAnswer) {
        $('#hint-text').text('The card is higher than that');
        game.tries--;
        updateTries();
        if (game.tries === 0) {
            $('#hint-text').text('Ran out of guesses');
            game.incorrect++;
            updateIncorrect();
            showCard();
            nextCardRed();
        }
    } else if (playerAnswer == correctAnswer) {
        $('#hint-text').text('Congratulations!')
        game.correct++;
        updateCorrect();
        showCard();
        nextCardGreen();
    };
};
// dom update functions
function updateTries() {
    $('#tries').text(game.tries);
};

function updateCorrect() {
    $('#correct').text(game.correct);
};

function updateIncorrect() {
    $('#incorrect').text(game.incorrect);
};

function showCard() {
    $('#content').addClass('flip');
};

function nextCardRed() {
    $('#next-card').removeClass('btn-green').addClass('btn-red').show();
    $('#submit').hide();
};

function nextCardGreen() {
    $('#next-card').removeClass('btn-red').addClass('btn-green').show();
    $('#submit').hide();
};