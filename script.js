const secondHand = document.querySelector('.second-hand'); 
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const tick = document.querySelector('audio'); 
const muteBtn = document.querySelector('.mute');

muteBtn.addEventListener('click', stopTicking)

setInterval(setDate, 1000);
let tickInterval = setInterval(playTick, 1000);

function stopTicking(e) {
    if(e.target.textContent == 'Mute') {
        clearInterval(tickInterval)
        e.target.textContent = 'Play'
    } else {
        playTick();
        e.target.textContent = 'Mute';
    }
}
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minuteDegrees = (minutes / 60) * 360 + 90;
    const hourDegrees = (hours / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if(secondsDegrees === 360) {
        secondHand.style.transition = 'none'
    } else {
        secondHand.style.transition = 'all 0.05s'
    }

}


    
function playTick() {
    tick.currentTime = 0;
    tick.play();
}