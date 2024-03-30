const plusBtn = document.querySelectorAll('.btn');
const questions = document.getElementsByTagName('h2');
const answers = document.querySelectorAll('#answer');
const updateUI = () => {
    plusBtn.forEach(button => {
        let isClick = false;
        button.addEventListener('click', (event) => {
            event.preventDefault();
            isClick = !isClick;
            if (isClick) {
                displayAnswerBtn(button.value, true);
            }
            else {
                displayAnswerBtn(button.value, false);
            }
        });
    }
    );
    Array.from(questions).forEach(question => {
        let isClick = false;
        question.addEventListener('click', (event) => {
            event.preventDefault();
            isClick = !isClick;
            if (isClick) {
                displayAnswerBtn(question.id, true);
            }
            else {
                displayAnswerBtn(question.id, false);
            }
        })
    })
};
const displayAnswerBtn = (index, isClick) => {
    if (isClick) {
        answers[index].classList.remove('hidden');
        plusBtn[index].style.backgroundImage = "url('img/icon-minus.svg')";
    }
    else {
        answers[index].classList.add('hidden');
        plusBtn[index].style.backgroundImage = "url('img/icon-plus.svg')"
    }
};
updateUI();