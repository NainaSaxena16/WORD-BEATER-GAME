window.addEventListener('load',init);
const levels={
    easy:5,
    medium:3,
    hard:1,
};
const currentLevel=levels.easy;

let wordInput=document.querySelector("#word-input");
//console.log(wordInput);
let currentWord=document.getElementById("current-word");
//console.log(currentWord);
let scoreDisplay=document.querySelector("#score")
//console.log(scoreDisplay)
let timeDisplay=document.querySelector("#time")
//console.log(timeDisplay)
let message=document.querySelector("#message")
//console.log(message)
const seconds=document.querySelector("#seconds")
//console.log(seconds)
let score = 0;
let time = 5;

const words=[
    'hat',
    'cat',
    'home',
    'joke',
    'river',
    'house',
    'hope',
    'pace',
    'peace',
    'investigation',
    'symptom',
    'cocktail',
    'statement',
    'nutrition',
    'state',
    'stubborn',
    'generation',
    'unemployment',
    'employment',
    'enjoyment',
    'enjoy',
    'runway',
    'alter',
    'mountain',
    'velocity',
    'pascaline',
    'algorithm',
    'datastructure',
    'intersection',
    'multimedia',
    'graphics',
    'number',
];

function init(){
    //console.log("hi")
    showWord(words);
    wordInput.addEventListener("input",startMatch);
    setInterval(countdown,1000);
    }

function countdown(){
    if(time==0){
        message.innerHTML="Game Over!!";
        scoreDisplay.innerHTML="0";
    }
    if(time>0){
        time--;
    }
    timeDisplay.innerHTML=time;
}

function showWord(words){
    //console.log(words[2]);
    const randomIndex=Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}

function startMatch(){
    //console.log("hi")
    if(matchWords()){
        showWord(words);
        score++;
        wordInput.value="";
        //console.log(score);
        scoreDisplay.innerHTML=score;
        time=5;
    }
}

function matchWords(){
    if(wordInput.value==currentWord.innerHTML){
        message.innerHTML="Correct Word!!";
        return true;
    }else{
        message.innerHTML="Correct!!";
        return false;
    }
}