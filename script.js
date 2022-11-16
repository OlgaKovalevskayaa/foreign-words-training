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

const obj = [
    { ru: "горячий", eng: "hot", primer: "It's hot!" },
    { ru: "холодно", eng: "cold", primer: "Are you cold?" },
    { ru: "голодный", eng: "hungry", primer: "And are you hungry?" },
    { ru: "жаждущий", eng: "thirtsty", primer: "Are you thirtsty?" },
    { ru: "уставший", eng: "tired", primer: "I thought he sounded tired." },
];



flipCard.addEventListener("click", function() {
    flipCard.classList.toggle('active');
})

let i = 1;

function insertAWord() {
    russianWord.textContent = (obj[i - 1][`ru`]);
    foreignWord.textContent = (obj[i - 1][`eng`]);
    exampleWord.textContent = (obj[i - 1][`primer`]);
}
insertAWord()

buttonNext.addEventListener("click", function() {
    if (i < 5) {
        spanCurrentWord.textContent = ++i;
    }
    insertAWord()
})

buttonBack.addEventListener("click", function() {
    if (i > 1) {
        spanCurrentWord.textContent = --i;
    }
    insertAWord()
});


function createCards() {
    sliderControls.classList.add("hidden");
    flipCard.classList.add("hidden");
    obj.forEach((item) => {
        const sliderRU = document.createElement('div');
        sliderRU.classList.add("card");
        sliderRU.textContent = (`${item.ru}`);
        content.append(sliderRU);

        const sliderENG = document.createElement('div');
        sliderENG.classList.add("card");
        sliderENG.textContent = (`${item.eng}`);
        content.append(sliderENG);
    })
}

const content = document.querySelector("#exam-cards");
buttonExam.addEventListener("click", function() {
    createCards()
})



let variable = true;
content.addEventListener("click", function(event) {
    const target = event.target; // где был клик
    //console.log(target);
    if (variable) {
        //Первое нажатие console.log('1')
        variable = false;
        target.classList.add("correct");

    } else if (variable = true) {
        //Второе нажатие console.log('2')
        variable = true;
        target.classList.add("correct");

    }

    console.log(Object.values(obj[0]))
    for (let value of Object.values(obj[0])) {
        console.log(value);
    }

})


// Если пара подобрана неверно, вторая карточка на секунду подсвечивается красным (класс `.wrong`), и тестирование  Где-то через 500ms подсветка с неправильно подобранной пары должна пропасть  
//setTimeout(() => {
//alert(`jt`);
//clickOne.classList.remove("correct");
//clickTwo.classList.remove("correct");
//}, 500)