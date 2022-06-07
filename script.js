const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function settime() {
    let time = new Date();
    let seconds = time.getSeconds() / 60;
    let minutes = (seconds + time.getMinutes()) / 60;
    let hours = (minutes + time.getHours()) / 12;
    // console.log(`seconds: ${seconds} \nminutes: ${minutes}`);

    second.style.setProperty('--rotation', seconds * 360)
    minute.style.setProperty('--rotation', minutes * 360)
    hour.style.setProperty('--rotation', hours * 360)
}
settime();
setInterval(() => {
    settime()
}, 1000);