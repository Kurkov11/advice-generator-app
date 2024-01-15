const advice = document.querySelector('#advice');
const adviceId = document.querySelector('#advice-id');

function updateQuote(){
    fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
    }).then(adviceData => {
    adviceObj = adviceData.slip;
    advice.innerHTML = adviceObj.advice;
    adviceId.innerHTML = adviceObj.id;
    })
}

updateQuote();

document.querySelector('#button').addEventListener('click', () => {
    updateQuote();
});

