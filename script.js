const countdown = document.querySelector('.timer');
const sec6 = document.querySelector('.sec6');
let days = 2; 
let hrs = 0;
let min = 0;
let sec = 0;

sec6.onclick = (e) => {
    showAnswer(e);
}

function createCountDown() {
    let f = Date.parse('Dec 30, 2092 01:30:00')
    let n = new Date()
    let diff = f-n

    sec = Math.floor(diff/1000);
    min = Math.floor(diff/(1000*60));
    hrs = Math.floor(diff/(1000*60*60));
    days = Math.floor(diff/(1000*60*60*24));

    let h = hrs - days * 24;
    let m = min - hrs * 60;
    let s = sec - min * 60;

    countdown.innerHTML = `<h3><span>2<small>days</small></span><span>${h}<small>hrs</small></span><span>${m}<small>min</small></span><span>${s}<small>sec</small></span></h3>`;
}

setInterval(() => {
    createCountDown()
}, 1000);

function showAnswer(e) {
    if (e.target.matches('.showmore')) {
        e.target.nextElementSibling.nextElementSibling.classList.toggle('showup');
    }
}


