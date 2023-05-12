const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
let previousQuestion = false;

questions.forEach((que, ans) => {
    que.addEventListener('click', () => {
        if(que.classList.contains('active')) {
            que.classList.remove('active');
            answers[ans].classList.remove('active');
        } else {
            if(previousQuestion !== false) {
                questions[previousQuestion].classList.remove('active');
                answers[previousQuestion].classList.remove('active');
            }
            que.classList.add('active');
            answers[ans].classList.add('active');
            previousQuestion = ans;
        }
    });
});
