'use strict'

let hour = document.querySelector('.hours');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.seconds')

const displayTime = () => {

    let currTime = new Date();
    let hours = currTime.getHours();
    let minutes = currTime.getMinutes();
    let seconds = currTime.getSeconds();

    (hours < 10) ? hours = '0' + hours : hours;
    (minutes < 10) ? minutes = '0' + minutes : minutes;
    (seconds < 10) ? seconds = '0' + seconds : seconds;

    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}

displayTime();
setInterval(displayTime, 1000);