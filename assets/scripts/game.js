$(document).ready(function () {
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
    $('#submit').click(function() {
        checkAnswer();
    });
    $('#next-card').click(function() {
        newGame();
    });
});

let game = {
    cardFaces: ['Ace', 'Jack', 'Queen', 'King', 2, 3, 4, 5, 6, 7, 8, 9, 10],
    currentCardFace: '',
    tries: '',
    correct: 0,
    incorrect: 0,
};

function newGame() {
    game.currentCardFace = '';
    game.tries = 3;
    $('#next-card').hide();
    $('#content').removeClass();
    $('#card-answer').removeClass();
    setTimeout(() => {
        pickCardFace();
    }, 300);
    updateTries();
};

function pickCardFace() {
    game.currentCardFace = game.cardFaces[Math.floor(Math.random() * game.cardFaces.length)];
    $('#card-answer').addClass('card-' + game.currentCardFace);
};

function checkAnswer() {
    let playerAnswer = $('#answer-box').val();
    let correctAnswer = game.currentCardFace;

    if (playerAnswer > correctAnswer) {
        alert('the card is lower than that');
        game.tries--;
        updateTries();
        if (game.tries === 0) {
            alert('ran out of guesses');
            game.incorrect++;
            updateIncorrect();
            showCard();
            nextCardRed();
        }
    } else if (playerAnswer < correctAnswer) {
        alert('the card is higher than that');
        game.tries--;
        updateTries();
        if (game.tries === 0) {
            alert('ran out of guesses');
            game.incorrect++;
            updateIncorrect();
            showCard();
            nextCardRed();
        }
    } else if (playerAnswer == correctAnswer) {
        game.correct++;
        updateCorrect();
        showCard();
        nextCardGreen();
    };
};

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
};

function nextCardGreen() {
    $('#next-card').removeClass('btn-red').addClass('btn-green').show();
};