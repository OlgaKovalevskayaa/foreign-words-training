"use strict"
const flipCard = document.querySelector(".flip-card");

const foreignWord = document.querySelector("#card-front > h1");
const russianWord = document.querySelector("#card-back > div > h1");
const exampleWord = document.querySelector("#card-back > div > p > span");

const sliderControls = document.querySelector(".slider-controls");
const buttonBack = sliderControls.querySelector("#back");
const buttonExam = sliderControls.querySelector("#exam");
const buttonNext = sliderControls.querySelector("#next");


const spanCurrentWord = document.querySelector("#current-word");
const spanTotalWord = document.querySelector("#total-word");
let i = 1;
const content = document.querySelector("#exam-cards");

const objects = [
    { ru: "горячий", eng: "hot", primer: "It's hot!" },
    { ru: "холодно", eng: "cold", primer: "Are you cold?" },
    { ru: "голодный", eng: "hungry", primer: "And are you hungry?" },
    { ru: "жаждущий", eng: "thirtsty", primer: "Are you thirtsty?" },
    { ru: "уставший", eng: "tired", primer: "I thought he sounded tired." },

];

const objects2 = {
    "hot": "горячий",
    "cold": "холодно",
    "hungry": "голодный",
    "thirtsty": "жаждущий",
    "tired": "уставший",
}

flipCard.addEventListener("click", function() {
    flipCard.classList.toggle('active');
})

function insertAWord() {
    russianWord.textContent = (objects[i - 1]["ru"]);
    foreignWord.textContent = (objects[i - 1]["eng"]);
    exampleWord.textContent = (objects[i - 1]["primer"]);
}
insertAWord();

buttonNext.addEventListener("click", function() {
    if (i < 5) {
        spanCurrentWord.textContent = ++i;
    }
    if (i > 1) {
        buttonBack.disabled = false;
    }
    if (i > 4) {
        buttonNext.disabled = true;
    }
    insertAWord();

})

buttonBack.addEventListener("click", function() {
    if (i > 1) {
        spanCurrentWord.textContent = --i;
    }
    if (i < 2) {
        buttonBack.disabled = true;
    }
    if (i < 5) {
        buttonNext.disabled = false;
    }
    insertAWord()
});

const fragment = new DocumentFragment();

function createCards() {
    sliderControls.classList.add("hidden");
    flipCard.classList.add("hidden");
    for (let key in objects2) {
        const value = objects2[key];

        const sliderRu = document.createElement('div');
        sliderRu.classList.add("card");
        sliderRu.textContent = (`${key}`);
        fragment.append(sliderRu);

        const sliderEng = document.createElement('div');
        sliderEng.classList.add("card");
        sliderEng.textContent = (`${value}`);
        fragment.append(sliderEng);
    }
    content.append(fragment);
}

buttonExam.addEventListener("click", function() {
    createCards()
})

let firstWord;
let secondWord;
let variable = true;


content.addEventListener("click", function(event) {
    const target = event.target;
    if (variable) {
        variable = false;
        firstWord = target;
        firstWord.classList.add("correct");
    } else {
        secondWord = target;
        if (objects2[firstWord.textContent] === secondWord.textContent || objects2[secondWord.textContent] === firstWord.textContent) {
            secondWord.classList.add("correct");

            function removeCorrectCards() {
                firstWord.classList.add("fade-out");
                secondWord.classList.add("fade-out");
            };
            removeCorrectCards();

        } else {
            secondWord.classList.add("wrong");
            setTimeout(() => {
                firstWord.classList.remove("correct");
                secondWord.classList.remove("wrong");
            }, 500)
        }
        variable = true;
        trackProgress();
    }
});

let counter = 0;

function trackProgress() {
    if (firstWord.classList.contains('fade-out') || secondWord.classList.contains('fade-out')) {
        counter++;
    }
    if (counter === 5) {
        alert('Поздравляем! Вы успешно завершили проверку');
    }
}