function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    
    adjustBackground(hours);
}

setInterval(updateClock, 1000);
updateClock();

function adjustBackground(hours) {
    const body = document.body;

    if (hours >= 0 && hours < 5) {
        body.style.backgroundColor = '#000000';
    } else if (hours >= 5 && hours < 18) {
        body.style.backgroundColor = '#001f3f';
    } else if (hours >= 18 && hours < 20) {
        body.style.backgroundColor = '#0074d9';
    } else if (hours >= 20 && hours < 21) {
        const minutes = new Date().getMinutes();
        const brightness = (minutes / 60) * 255;
        body.style.backgroundColor = `rgb(0, 116, ${Math.round(brightness)})`;
    } else {
        body.style.backgroundColor = '#000000';
    }
}
