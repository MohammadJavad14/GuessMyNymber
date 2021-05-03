'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guess = Number(document.querySelector('.guess').value);
let message = document.querySelector('.message').textContent;
let score = 20;
let highScore = 0;
const textContent = function(classes, message) {
    document.querySelector(classes).textContent = message;
};
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    //When no input
    if (!guess) {
        textContent('.message', '⛔ No input found!');
    }
    //When correct guess
    else if (guess === secretNumber) {
        textContent('.message', '🎉 Yesss you did it !!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        textContent('.number', secretNumber);
        document.querySelector('.number').style.width = '30rem';

        if (highScore < score) {
            highScore = score;
        }
        textContent('.highscore', highScore);
        //When wrong guess
    } else if (guess !== secretNumber) {
        if (score > 1) {
            textContent(
                '.message',
                guess > secretNumber ? '📈 Too high' : '📉 Too low'
            );
            score--;
            textContent('.score', score);
        } else {
            textContent('.message', 'You lost the game !!!!');
            score--;
            textContent('.score', score);
        }
    }
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game !!!!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game !!!!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', function() {
    textContent('.message', 'Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    textContent('.number', '?');
    document.querySelector('.number').style.width = '15rem';
    textContent('.score', 20);
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});