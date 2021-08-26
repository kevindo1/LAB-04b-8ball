// import functions
import { answers } from './answers.js';
import { getRandomInt } from './answers.js';

// reference needed DOM elements
const questionButton = document.getElementById('question-button');
const randomAnswer = document.getElementById('answers-text');

// set event listeners 

    // get user input(s)
questionButton.addEventListener('click', () => {

    // do any needed work with the value(s)
    const randomIndex = getRandomInt(0, answers.length - 1);
    console.log(randomIndex);
    const answer = answers[randomIndex];
    console.log(answer);
    // update DOM to reflect new value(s)
    randomAnswer.textContent = answer;
});
