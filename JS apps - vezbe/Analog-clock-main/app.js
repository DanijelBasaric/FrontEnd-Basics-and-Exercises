const secondsHand = document.querySelector('.secondsHand');
const minutesHand = document.querySelector('.minutesHand');
const hoursHand = document.querySelector('.hoursHand');

window.onload = () => {
    setClock();
}
const setClock = () => {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondsHand, secondsRatio);
    setRotation(minutesHand, minutesRatio);
    setRotation(hoursHand, hoursRatio);
}

const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(setClock, 1000);